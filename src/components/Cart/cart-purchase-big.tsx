import React from "react";
import { useCart } from "../contexts/cart-provider";
import { useImages } from '../contexts/images-provider';
import {
    AddressLine1Field,
    // AddressLine2Field,
    CityField,
    CountryField,
    DeliveryAddressLine1Field,
    // DeliveryAddressLine2Field,
    DeliveryCityField,
    DeliveryCountryField,
    DeliveryFirstNameField,
    DeliveryLastNameField,
    DeliveryMailField,
    DeliveryPhoneField,
    DeliverySocietyField,
    DeliveryZipField,
    FirstNameField,
    IntraTVAField,
    LastNameField,
    MailField,
    MobilePhoneField,
    SocietyField,
    ZipField
} from "../PaymentFields";
import LoadingGIF from '../LoadingGIF';

import './big.css';

const CartPurchaseBig = ({  }:CartPurchaseBig) => {

    const images = useImages();

    const cart = useCart();

    const [formOpened, setFormOpened] = React.useState(false);
    const [otherAddress, setOtherAddress] = React.useState(false);
    const [otherAddressOpened, setOtherAddressOpened] = React.useState(false);
    const [isSubmit, setIsSubmit]:[Boolean | null, React.Dispatch<any>] = React.useState(null);
    const [isCreated, setIsCreated]:[Boolean, React.Dispatch<Boolean>] = React.useState(new Boolean(false));

    const manageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('manageChange');
        console.log(`otherAddress : ${otherAddress}`);
        console.log(`e.currentTarget.checked : ${e.currentTarget.checked}`);
        otherAddress && setOtherAddressOpened(false);
        !otherAddress && setOtherAddressOpened(true);
        setOtherAddress(e.currentTarget.checked);
        cart.hasDifferentShipping(e.currentTarget.checked);
    }

    const manageCheckboxPayment = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('manageCheckboxPayment');
        if(document != undefined) {
            let current:HTMLInputElement = e.currentTarget;
            console.log(`current : ${current.id}`);
            let other:HTMLInputElement = document.getElementById(current.id == 'sepa' ? 'soge' : 'sepa');
            console.log(`other : ${other.id}`);
            other.checked = !current.checked;
            return true;
        }
        console.log('document undefined');
        return false;
    }

    const sendForm = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        document.getElementById('big-submit').disabled = true;
        let _sepa:HTMLInputElement | any = document.getElementById('sepa');
        let fields = [...Array.from(document.forms["purchase"]).filter((field:any) => {return field.id.includes('vads_')})];
        // fields.push(...Array.from(document.forms['purchase']).filter(field => field.id.includes('vads_') && field.value));
        setIsSubmit(true);
        setIsCreated(await cart.redirectPay(fields, _sepa == null ? false : _sepa.checked) === true ? true : false);
        document.getElementById('big-submit').disabled = false;
        // console.log('sendForm()');
        // console.log(`isSubmit : ${isSubmit}`);
        // console.log(`isCreated : ${isCreated}`);
        // console.log(`formOpened : ${formOpened}`);
        // console.log(`otherAddress : ${otherAddress}`);
        // console.log(`otherAddressOpened : ${otherAddressOpened}`);
    }

    const submitClasses = ():string => {
        if(formOpened && !otherAddress) {
            return "cart-validate form-transition";
        }
        if((formOpened && otherAddress && otherAddressOpened) || (formOpened && otherAddress)) {
            return "cart-validate form-transition other-address-transition";
        }
        return `cart-validate${formOpened && otherAddress && otherAddressOpened ? ' other-address-transition' : formOpened ? ' form-transition' : ''}`;
    }

    const buttonText = ():string => {
        if(isSubmit === true && isCreated === true) {
            return "Commande effectuée";
        }
        if(isSubmit === null && isCreated === false) {
            return "Erreur commande";
        }
        if(isSubmit === true) {
            return "En cours ...";
        }
        if(!formOpened) {
            return "Acheter";
        }
        if(!otherAddress || otherAddressOpened) {
            return "Commander";
        }
        return "Continuer";
    }
    
    // isSubmit : null
    // isCreated : false
    // formOpened : false
    // otherAddress : false
    // otherAddressOpened : false
    
    // isSubmit : false
    // isCreated : false
    // formOpened : false
    // otherAddress : false
    // otherAddressOpened : true

    React.useEffect(() => {
        // console.log('React.useEffect(function)');
        // console.log(`isSubmit : ${isSubmit}`);
        // console.log(`isCreated : ${isCreated}`);
        // console.log(`formOpened : ${formOpened}`);
        // console.log(`otherAddress : ${otherAddress}`);
        // console.log(`otherAddressOpened : ${otherAddressOpened}`);
        if(isSubmit === true) {
            if(isCreated === true) {
                // setIsSubmit(false);
                // setIsCreated(false);
                // setFormOpened(false);
                // setOtherAddress(false);
                // cart.hasDifferentShipping(false);
                setIsSubmit(false);
                setIsCreated(false);
                setFormOpened(false);
                setOtherAddress(false);
                cart.hasDifferentShipping(false);
                setOtherAddressOpened(false);
                if(typeof document != "undefined") {
                    document.forms['purchase'] && document.forms['purchase'].reset();
                    let _sepa = document.getElementById('sepa')
                    if(_sepa) {
                        _sepa.checked = _sepa.checked ? true : false;
                    } // removeAttribute('checked');
                    let _soge = document.getElementById('soge')
                    if(_soge) {
                        _soge.checked = _soge.checked ? true : false;
                    } // setAttribute('checked', 'true');
                    let _facture = document.getElementById('facture');
                    if(_facture) {
                        _facture.checked = false;
                    }
                    let _terms = document.getElementById('terms');
                    if(_terms) {
                        _terms.checked = false;
                    }
                }
            }
            else {
                setIsSubmit(null)
            }
        }
    }, [isCreated]);

    React.useEffect(() => {

    }, [cart]);

    return (
        <form
            id="purchase"
            className={!cart.cart_opened ? "all-close" : !formOpened ? 'step-1' : 'step-2-3'}
            onSubmit={sendForm}
        >
            {/* FIRST PART */}
            <div className={`cart-purchase transition${cart.cart_opened ? ' opened' : ''}`}>
                <div className="cart-close"
                    onClick={(e) => {
                        e.preventDefault();
                        setOtherAddressOpened(false);
                        setFormOpened(false);
                        cart.toggle_open_cart();
                    }}
                >
                    <img
                        src={images.getOne('closeWhiteIcon').publicURL}
                        srcSet={images.getOne('closeWhiteIcon').publicURL}
                        alt="Close"
                    />
                </div>
                <div className="cart-head">
                    <img
                        src={images.getOne('cartBasketIcon').publicURL}
                        srcSet={images.getOne('cartBasketIcon').publicURL}
                        alt="Panier"
                    />
                    <span>{`Panier, ${cart.cart.length} objet${cart.cart.length > 1 ? 's' : ''}`}</span>
                </div>
                <div className={`cart-content custom-scrollbar${formOpened ? ' purchase' : ''}`}>
                    {cart.cart.map((article, key) => {
                        return (
                            <div key={key} className="cart-article transition">
                                <div
                                    className="rmv"
                                    onClick={(e) => {
                                        cart.remove(article.reference, article.quantity);
                                    }}
                                >
                                    <img className="init" src={images.getOne('rmvInit').publicURL} alt="X"/>
                                    <img className="blue" src={images.getOne('rmvHover').publicURL} alt="X"/>
                                </div>
                                <div className="addon">
                                    {cart.articles[article.reference].picture && (<img
                                        src={cart.articles[article.reference].picture.childImageSharp.fluid.srcWebp}
                                        srcSet={cart.articles[article.reference].picture.childImageSharp.fluid.srcSetWebp}
                                        alt=""
                                    />)}
                                </div>
                                <div className="details">
                                    <div className="reference">{article.reference}</div>
                                    <div className="name">{article.name}</div>
                                    <div className="qnts">
                                        <div className="pack">{cart.articles[article.reference].pack_name()}</div>
                                        <div className="manage">
                                            <div
                                                className="minus"
                                                onClick={(e) => {
                                                    cart.remove(article.reference, 1);
                                                }}
                                            >
                                                -
                                            </div>
                                            <div className="qnt">{article.quantity}</div>
                                            <div
                                                className="add"
                                                onClick={(e) => {
                                                    cart.add(article.reference, 1);
                                                }}
                                            >
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                     {cart.pay_delivery() && <div className="free-message">Livraison gratuite à partir de 500€</div>}
                </div>
                <div className={`cart-final${formOpened ? ' purchase' : ''}`}>
                    <div className="cart-discount">
                        {/*PAS DE LIVRAISON*/}
                        {/* <div className="text">Livraison{cart.pay_delivery() && false ? '' : ' gratuite'}</div> */}
                        {/*LIVRAISON*/}
                        <div className="text">Livraison{cart.pay_delivery() ? '' : ' gratuite'}</div>
                        {cart.pay_delivery() ? <div className="price">
                            {/*PAS DE LIVRAISON*/}
                            {/* {(cart.delivery_tax() && false) || 0} */}
                            {/*LIVRAISON*/}
                            {cart.delivery_tax()}
                        </div>: null }
                    </div>
                    <div className="cart-sub-total">
                        <div className="text">sous total (HT)</div>
                        <div className="price">
                            {cart.total_base()}
                        </div>
                    </div>
                    <div className="cart-tva">
                        <div className="text">tva</div>
                        <div className="price">
                            {cart.total_tva()}
                        </div>
                    </div>
                    <div className="cart-total">
                        <div className="text">total ttc</div>
                        <div className="price">
                            {cart.total_all_included()}
                        </div>
                    </div>
                    {/* <div
                        className={`cart-validate${formOpened && otherAddress && otherAddressOpened ? ' other-address-transition' : formOpened ? ' form-transition' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            if(!formOpened){
                                setFormOpened(true);
                            }
                            else if(formOpened && otherAddress && !otherAddressOpened){
                                setOtherAddressOpened(true);
                            }
                            else {
                                return;
                            }
                        }}
                    >
                        {!formOpened ? "Acheter" : !otherAddress || otherAddressOpened ? "Commander" : "Continuer"}
                    </div> */}
                </div>
            </div>
            {/* SECOND PART */}
            <div className={`cart-purchase-form custom-scrollbar${cart.cart_opened && formOpened ? ' opened' : ''}${otherAddressOpened ? ' other-opened' : ''}`}>
                <div className={`title transition${formOpened ? ' opened' : ''}`}>
                    <div
                        className="form-close"
                        onClick={(e) => {
                            e.preventDefault();
                            setOtherAddressOpened(false);
                            setFormOpened(false);
                        }}
                    >
                        <img
                            src={images.getOne('closeWhiteIcon').publicURL}
                            srcSet={images.getOne('closeWhiteIcon').publicURL}
                            alt="Close"
                        />
                    </div>
                    <span className={`${otherAddress ? 'click' : ''}`}>adresse de facturation</span>
                    <hr/>
                </div>
                <div
                    id="purchase-form"
                    className={`neumorphic ${otherAddress && (' other-address' || '')}`}
                >
                    <div id="step-1-part" className="unmorphic custom-scrollbar">
                        <FirstNameField classes="required form-field step-1" style={{width: '43%', margin: '10px 0 20px 20px', display: 'inline-block'}} required={true}/>
                        <LastNameField classes="required form-field step-1" style={{width: '43%', margin: '10px 0 24px 4%', display: 'inline-block'}} required={true}/>
                        {/* <input className="required form-field step-1" name="name" type="text" required placeholder="Nom"/> */}
                        <SocietyField classes="form-field step-1"/>
                        {/* <input className="form-field step-1" name="society" type="text" placeholder="Société"/> */}
                        <AddressLine1Field classes="required form-field step-1" required={true}/>
                        {/* <AddressLine2Field classes="required form-field step-1"/> */}
                        <CountryField classes="required form-field step-1" required={true}/>
                        {
                            cart.differentAddress == false && cart.getTVAIntra() == true && otherAddress == false && <IntraTVAField classes="required form-field step-1" required={true}/>
                        }
                        {/* <textarea className="required form-field step-1" name="adresse1" type="text" required placeholder="Adresse" rows="3"></textarea> */}
                        <ZipField classes="required form-field step-1" required={true}/>
                        {/* <input className="required form-field step-1" name="zip" type="text" required placeholder="Code postal"/> */}
                        <CityField classes="required form-field step-1" required={true}/>
                        {/* <input className="required form-field step-1" name="city" type="text" required placeholder="Ville"/> */}
                        <MobilePhoneField classes="required form-field step-1" required={true}/>
                        {/* <input className="required form-field step-1" name="phone" type="tel" required placeholder="Téléphone"/> */}
                        <MailField classes="required form-field step-1" required={true}/>
                        {/* <input className="required form-field step-1" name="mail" type="email" required placeholder="Mail"/> */}
                    </div>
                </div>
            </div>
            {/* THIRD PART */}
            <div id="step-3-part" className={`other-address neumorphic${(formOpened && otherAddress && otherAddressOpened) || (formOpened && otherAddress) ? " other-opened" : ''}`}>
                <div className={`title unmorphic${formOpened && otherAddressOpened ? ' opened' : ''}`}>
                    <div
                        className="form-close unmorphic"
                        onClick={(e) => {
                            e.preventDefault();
                            setOtherAddressOpened(false);
                            setOtherAddress(false);
                            cart.hasDifferentShipping(false);
                            document.getElementById('facture').checked = false;
                        }}
                    >
                        <img
                            src={images.getOne('closeWhiteIcon').publicURL}
                            srcSet={images.getOne('closeWhiteIcon').publicURL}
                            className="unmorphic"
                            alt="Close"
                        />
                    </div>
                    <span className={`unmorphic${otherAddressOpened ? ' click' : ''}`}>informations de livraison</span>
                    <hr className="unmorphic"/>
                </div>
                {otherAddress &&
                    <div className="form custom-scrollbar">
                        <DeliveryFirstNameField classes="required form-field step-2" style={{width: '43%', margin: '10px 0 20px 20px', display: 'inline-block'}} required={true}/>
                        <DeliveryLastNameField classes="required form-field step-2" style={{width: '43%', margin: '10px 0 24px 4%', display: 'inline-block'}} required={true}/>
                        {/* <input className="required form-field step-2" name="other-name" type="text" required placeholder="Nom"/> */}
                        <DeliverySocietyField classes="form-field step-2"/>
                        {/* <input className="form-field step-2" name="other-society" type="text" placeholder="Société"/> */}
                        <DeliveryAddressLine1Field classes="required form-field step-2" required={true}/>
                        {/* <DeliveryAddressLine2Field classes="required form-field step-2"/> */}
                        <DeliveryCountryField classes="required form-field step-2" required={true}/>
                        {
                            cart.differentAddress == true && cart.getTVAIntra() == true && otherAddress == true && <IntraTVAField classes="required form-field step-1" required={true}/>
                        }
                        {/* <textarea className="required form-field step-2" name="other-adresse1" type="text" required placeholder="Adresse" rows="3"></textarea> */}
                        <DeliveryZipField classes="required form-field step-2" required={true}/>
                        {/* <input className="required form-field step-2" name="other-zip" type="text" required placeholder="Code postal"/> */}
                        <DeliveryCityField classes="required form-field step-2" required={true}/>
                        {/* <input className="required form-field step-2" name="other-city" type="text" required placeholder="Ville"/> */}
                        <DeliveryPhoneField classes="required form-field step-2" required={true}/>
                        {/* <input className="required form-field step-2" name="other-phone" type="tel" required placeholder="Téléphone"/> */}
                        {/* <input className="required form-field step-2" name="other-mail" type="email" required placeholder="Mail"/> */}
                        <DeliveryMailField classes="form-field step-2" required={false}/>
                        {/* <input className="form-field step-2" name="mail" type="email" placeholder="Mail"/> */}
                    </div>
                }
            </div>
            {/* CHECKBOXES */}
            <div className="step-1 sepa soge neumorphic">
                <div className="choice"><input
                    id="sepa"
                    name="sepa"
                    value="sepa"
                    defaultChecked={false}
                    type="checkbox"
                    className="form-field"
                    onChange={(e) => {manageCheckboxPayment(e)}}
                /></div>
                <div className="choice-label"><label htmlFor="sepa">Virement</label></div>
                <div className="choice"><input
                    id="soge"
                    name="soge"
                    value="soge"
                    defaultChecked={true}
                    type="checkbox"
                    className="form-field"
                    onChange={(e) => {manageCheckboxPayment(e)}}
                /></div>
                <div className="choice-label"><label htmlFor="soge">Paiement par carte</label></div>
            </div>
            <div className="step-1 facture neumorphic">
                <input
                    id="facture"
                    name="facture"
                    value="facture"
                    type="checkbox"
                    className="form-field"
                    onChange={(e) => {
                        manageChange(e);
                    }}
                />
                <label htmlFor="facture">
                    Adresse de livraison différente
                </label>
            </div>
            <div className="step-1 cgu neumorphic">
                <input
                    id="terms"
                    name="terms"
                    value="terms"
                    type="checkbox"
                    className="form-field"
                    required
                />
                <label htmlFor="terms">
                    J'accepte les CGV et les CGU
                </label>
            </div>
            {/* VALIDATE */}
            <button
                disabled={isSubmit == true ? true : false}
                type={!formOpened ? "button" : "submit"}
                id="big-submit"
                className={submitClasses()}
                onClick={(e) => {
                    if(!formOpened){
                        e.preventDefault();
                        setFormOpened(true);
                    }
                    else if(formOpened && otherAddress && !otherAddressOpened){
                        setOtherAddressOpened(true);
                    }
                    else {
                        return;
                    }
                }}
            >
                {buttonText()}
                {isSubmit == true ? <LoadingGIF customClass="payment"/> : null}
            </button>
        </form>
    );
};

interface CartPurchaseBig {

};

export default CartPurchaseBig;