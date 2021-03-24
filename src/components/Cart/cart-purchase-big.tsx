import React from "react";
import { useCart } from "../contexts/cart-provider";
import { useImages } from '../contexts/images-provider';
import {
    AddressLine1Field,
    AddressLine2Field,
    CityField,
    DeliveryAddressLine1Field,
    DeliveryAddressLine2Field,
    DeliveryCityField,
    DeliveryFirstNameField,
    DeliveryLastNameField,
    DeliveryMailField,
    DeliveryPhoneField,
    DeliverySocietyField,
    DeliveryZipField,
    FirstNameField,
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
        otherAddress && setOtherAddressOpened(false);
        !otherAddress && setOtherAddressOpened(true);
        setOtherAddress(e.currentTarget.checked);
    }

    const manageCheckboxPayment = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(document != undefined) {
            if(e.currentTarget.id == 'sepa') {
                let _other:HTMLInputElement = document.getElementById('soge');
                if(_other && _other.checked == true && e.currentTarget.checked == true) {
                    _other.checked= false;
                }
                else if(_other && _other.checked == false && e.currentTarget.checked == false) {
                    _other.checked= true;
                }
            }
            if(e.currentTarget.id == 'soge') {
                let _other = document.getElementById('sepa');
                if(_other && _other.checked == true && e.currentTarget.checked == true) {
                    _other.checked= false;
                }
                else if(_other && _other.checked == false && e.currentTarget.checked == false) {
                    _other.checked= true;
                }
            }
            return true;
        }
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

    React.useEffect(() => {
        if(isSubmit === true) {
            if(isCreated === true) {
                setIsSubmit(false);
                setIsCreated(false);
                setFormOpened(false);
                if(typeof document != "undefined") {
                    document.forms['purchase'] && document.forms['purchase'].reset();
                }
            }
            else {
            setIsSubmit(null)
            }
        }
    }, [isCreated]);

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
                        <div className="text">Livraison{cart.pay_delivery() ? '' : ' gratuite'}</div>
                        {cart.pay_delivery() ? <div className="price">
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
                        <FirstNameField classes="required form-field step-1" required={true}/>
                        <LastNameField classes="required form-field step-1" required={true}/>
                        {/* <input className="required form-field step-1" name="name" type="text" required placeholder="Nom"/> */}
                        <SocietyField classes="form-field step-1"/>
                        {/* <input className="form-field step-1" name="society" type="text" placeholder="Société"/> */}
                        <AddressLine1Field classes="required form-field step-1" required={true}/>
                        <AddressLine2Field classes="required form-field step-1"/>
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
                        <DeliveryFirstNameField classes="required form-field step-2" required={true}/>
                        <DeliveryLastNameField classes="required form-field step-2" required={true}/>
                        {/* <input className="required form-field step-2" name="other-name" type="text" required placeholder="Nom"/> */}
                        <DeliverySocietyField classes="form-field step-2"/>
                        {/* <input className="form-field step-2" name="other-society" type="text" placeholder="Société"/> */}
                        <DeliveryAddressLine1Field classes="required form-field step-2" required={true}/>
                        <DeliveryAddressLine2Field classes="required form-field step-2"/>
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
                    type="checkbox"
                    className="form-field"
                    id="soge"
                    name="soge"
                    value="soge"
                    defaultChecked={true}
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