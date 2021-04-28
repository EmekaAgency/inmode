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

import './mini.css';
import { oneById } from "../../functions/selectors";

const CartPurchaseMini = ({  }:CartPurchaseMini) => {

    const images = useImages();

    const cart = useCart();

    const [formOpened, setFormOpened] = React.useState(false);
    const [otherAddress, setOtherAddress] = React.useState(false);
    const [otherAddressOpened, setOtherAddressOpened] = React.useState(false);
    const [isSubmit, setIsSubmit]:[Boolean | null, React.Dispatch<any>] = React.useState(null);
    const [isCreated, setIsCreated]:[Boolean, React.Dispatch<Boolean>] = React.useState(new Boolean(false));

    const manageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        otherAddress && setOtherAddressOpened(false);
        setOtherAddress(e.currentTarget.checked);
        cart.hasDifferentShipping(e.currentTarget.checked);
    }

    // Tester mails
    // Ajouter logs de partout

    const manageCheckboxPayment = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(document != undefined) {
            let current:HTMLInputElement = e.currentTarget;
            //* console.log(`current : ${current.id}`);
            let other:any = oneById(current.id == 'sepa' ? 'soge' : 'sepa');
            //* console.log(`other : ${other.id}`);
            other.checked = !current.checked;
            return true;
        }
        return false;
    }

    const sendForm = async(e:React.FormEvent<HTMLFormElement>, same_address:boolean = true) => {
        e.preventDefault();
        if(!isSubmit) {
            let _mini1:any = oneById('mini-submit-1');if(_mini1) _mini1.disabled = true;
            let _mini2:any = oneById('mini-submit-2');if(_mini2) _mini2.disabled = true;
            let _mini3:any = oneById('mini-submit-3');if(_mini3) _mini3.disabled = true;
            let _sepa:any = oneById('sepa');
            let fields:HTMLElement[] | any[] = []; 
            // fields.push([...Array.from(document.forms['purchase']).filter(field => field.id.includes('vads_'))]);
            // fields.push(...Array.from(document.forms['purchase']).filter(field => field.id.includes('vads_') && e.value));
            if(same_address) {
                //* console.log(Array.from(document.forms['step-2-part'].elements).filter((e:HTMLElement | Element | any) => e.id.includes('vads_')));
                // console.log(Array.from(document.forms['step-2-part'].elements).filter(e => e.id.includes('vads_') && e.value));
                fields = [...Array.from(document.forms['step-2-part'].elements).filter((e:HTMLElement | Element | any) => e.id.includes('vads_'))];
                // fields.push(...Array.from(document.forms['step-2-part'].elements).filter(e => e.id.includes('vads_') && e.value));
            }
            else {
                //* console.log([...fields, ...Array.from([...document.forms['step-2-part'].elements, ...document.forms['step-3-part'].elements]).filter(e => e.id.includes('vads_'))]);
                // console.log(Array.from([...document.forms['step-2-part'].elements, ...document.forms['step-3-part'].elements]).filter(e => e.id.includes('vads_') && e.value));
                fields = [...fields, ...Array.from([...document.forms['step-2-part'].elements, ...document.forms['step-3-part'].elements]).filter(e => e.id.includes('vads_'))];
                // fields.push(...Array.from([...document.forms['step-2-part'].elements, ...document.forms['step-3-part'].elements]).filter(e => e.id.includes('vads_') && e.value));
            }
            setIsSubmit(true);
            setIsCreated(await cart.redirectPay(fields, _sepa == null ? false : _sepa.checked) === true ? true : false);
            if(_mini1) _mini1.disabled = false;
            if(_mini2) _mini2.disabled = false;
            if(_mini3) _mini3.disabled = false;
        }
    }

    const buttonText = ():string => {
        if(isSubmit === true && isCreated === true) {
            return "Order created";
        }
        if(isSubmit === null && isCreated === false) {
            return "Order error";
        }
        if(isSubmit === true) {
            return "Processing ...";
        }
        if(!formOpened) {
            return "Buy";
        }
        if(!otherAddress || otherAddressOpened) {
            return "Order";
        }
        return "Continue";
    }

    React.useEffect(() => {
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
                if(typeof document !== "undefined") {
                    document.forms["step-2-part"] && document.forms["step-2-part"].reset();
                    document.forms["step-3-part"] && document.forms["step-3-part"].reset();
                    let _sepa:any = oneById('sepa')
                    if(_sepa) {
                        _sepa.checked = _sepa.checked ? true : false;
                    } // removeAttribute('checked');
                    let _soge:any = oneById('soge')
                    if(_soge) {
                        _soge.checked = _soge.checked ? true : false;
                    } // setAttribute('checked', 'true');
                    let _facture:any = oneById('facture');
                    if(_facture) {
                        _facture.checked = false;
                    }
                    let _terms:any = oneById('terms');
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

    // console.log(`isSubmit : ${isSubmit}, typeof isSubmit : ${typeof isSubmit}`);
    // console.log(`isCreated : ${isCreated}, typeof isCreated : ${typeof isCreated}`);
    // console.log(`formOpened : ${formOpened}, typeof formOpened : ${typeof formOpened}`);

    return (
        <div
            id="purchase-mini"
            className={!cart.cart_opened ? "all-close" : !formOpened ? 'step-1' : 'step-2-3'}
        >
            <div className="stepper">
                <div id="step-1" className="step">
                    <div className="num">1</div>
                    <span className="label">Cart</span>
                </div>
                <div id="step-2" className={`step${otherAddress ? ' other-address' : ''}`}>
                    <div className="num">2</div>
                    <span className="label">Invoice</span>
                </div>
                <div id="step-3" className={`step${otherAddress ? ' other-address' : ''}`}>
                    <div className="num">3</div>
                    <span className="label">Delivery</span>
                </div>
                <div className={`progress-bar${otherAddress ? ' other-address' : ''}${otherAddress && otherAddressOpened ? ' other-opened' : ''}`}></div>
            </div>
            {/* FIRST PART */}
            <div className={`cart-purchase transition${cart.cart_opened ? ' opened' : ''}`}>
                <div className="cart-close"
                    onClick={(e) => {
                        e.preventDefault();
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
                     {cart.pay_delivery() && <div className="free-message">Free charges from 500 £</div>}
                </div>
                <div className={`cart-final${formOpened ? ' purchase' : ''}`}>
                    <div className="cart-discount">
                        {/*PAS DE FRAIS DE LIVRAISON*/}
                        <div className="text">{cart.pay_delivery() && false ? 'Charges' : 'Free charges'}</div>
                        {/*FRAIS DE LIVRAISON*/}
                        {/* <div className="text">{cart.pay_delivery() ? 'Charges' : 'Free charges'}</div> */}
                        {cart.pay_delivery() ? <div className="price">
                            {/*PAS DE FRAIS DE LIVRAISON*/}
                            {(cart.delivery_tax() && false) || 0}
                            {/*FRAIS DE LIVRAISON*/}
                            {/* {cart.delivery_tax()} */}
                        </div>: null }
                    </div>
                    <div className="cart-sub-total">
                        <div className="text">subtotal (out of VAT)</div>
                        <div className="price">
                            {cart.total_base()}
                        </div>
                    </div>
                    <div className="cart-tva">
                        <div className="text">vat</div>
                        <div className="price">
                            {cart.total_tva()}
                        </div>
                    </div>
                    <div className="cart-total">
                        <div className="text">All included</div>
                        <div className="price">
                            {cart.total_all_included()}
                        </div>
                    </div>
                </div>
            </div>
            {/* SECOND PART */}
            <form
                id="step-2-part"
                className={`cart-purchase-form custom-scrollbar${formOpened ? ' opened' : ''}${otherAddressOpened ? ' other-opened' : ''}`}
                onSubmit={(e) => {
                    e.preventDefault();
                    if(formOpened && otherAddress && !otherAddressOpened){
                        setOtherAddressOpened(true);
                    }
                    else if(formOpened && !otherAddress) {
                        sendForm(e);
                    }
                    else {
                        return false;
                    }
                }}
            >
                <div className={`title transition${formOpened ? ' opened' : ''}`}>
                    <div
                        className="form-close"
                        onClick={(e) => {
                            e.preventDefault();
                            setFormOpened(false);
                        }}
                    >
                        <img
                            src={images.getOne('closeWhiteIcon').publicURL}
                            srcSet={images.getOne('closeWhiteIcon').publicURL}
                            alt="Close"
                        />
                    </div>
                    <span className={`${otherAddress ? 'click' : ''}`}>Invoice address</span>
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
                        <SocietyField classes="form-field step-1" />
                        {/* <input className="form-field step-1" name="society" type="text" placeholder="Société"/> */}
                        <AddressLine1Field classes="required form-field step-1" required={true}/>
                        {/* <AddressLine2Field classes="required form-field step-1"/> */}
                        <CountryField classes="required form-field step-1"/>
                        {
                            cart.differentAddress == false && cart.getTVAIntra() && otherAddress == false && <IntraTVAField classes="required form-field step-1" required={true}/>
                        }
                        {/* <textarea className="required form-field step-1" name="adresse1" type="text" required placeholder="Adresse" rows="3"></textarea> */}
                        <ZipField classes="required form-field step-1" required={true}/>
                        {/* <input className="required form-field step-1" name="zip" type="text" required placeholder="Code postal"/> */}
                        <CityField classes="required form-field step-1" required={true}/>
                        {/* <input className="required form-field step-1" name="city" type="text" required placeholder="Ville"/> */}
                        <MobilePhoneField classes="required form-field step-1" required={true}/>
                        {/* <input className="required form-field step-1" name="phone" type="tel" required placeholder="Phone"/> */}
                        <MailField classes="required form-field step-1" required={true}/>
                        {/* <input className="required form-field step-1" name="mail" type="email" required placeholder="Mail"/> */}
                    </div>
                </div>
                {(formOpened && (!otherAddress || (otherAddress && !otherAddressOpened))) && <button
                    type="submit"
                    id="mini-submit-1"
                    className={`cart-validate unmorphic${formOpened && otherAddress && otherAddressOpened ? ' other-address-transition' : formOpened ? ' form-transition' : ''}`}
                >
                    {!formOpened ? "Acheter" : !otherAddress || otherAddressOpened ? "Commander" : "Continuer"}
                </button>}
            </form>
            {/* THIRD PART */}
            <form
                id="step-3-part"
                className={`other-address neumorphic${otherAddressOpened ? " other-opened" : ''}`}
                onSubmit={(e) => sendForm(e, false)}
            >
                <div className={`title unmorphic${otherAddressOpened ? ' opened' : ''}`}>
                    <div
                        className="form-close unmorphic"
                        onClick={(e) => {
                            e.preventDefault();
                            setOtherAddressOpened(false);
                        }}
                    >
                        <img
                            src={images.getOne('closeWhiteIcon').publicURL}
                            srcSet={images.getOne('closeWhiteIcon').publicURL}
                            className="unmorphic"
                            alt="Close"
                        />
                    </div>
                    <span className={`unmorphic${otherAddressOpened ? ' click' : ''}`}>Delivery datas</span>
                    <hr className="unmorphic"/>
                </div>
                <div className="form custom-scrollbar">
                    <DeliveryFirstNameField classes="required form-field step-2" style={{width: '43%', margin: '10px 0 20px 20px', display: 'inline-block'}} required={true}/>
                    <DeliveryLastNameField classes="required form-field step-2" style={{width: '43%', margin: '10px 0 24px 4%', display: 'inline-block'}} required={true}/>
                    {/* <input className="required form-field step-2" name="other-name" type="text" required placeholder="Nom"/> */}
                    <DeliverySocietyField classes="form-field step-2" />
                    {/* <input className="form-field step-2" name="other-society" type="text" placeholder="Société"/> */}
                    <DeliveryAddressLine1Field classes="required form-field step-2" required={true}/>
                    {/* <DeliveryAddressLine2Field classes="required form-field step-2"/> */}
                    <DeliveryCountryField classes="required form-field step-2"/>
                    {
                        cart.differentAddress == true && cart.getTVAIntra() && otherAddress == true && <IntraTVAField classes="required form-field step-1" required={true}/>
                    }
                    {/* <textarea className="required form-field step-2" name="other-adresse1" type="text" required placeholder="Adresse" rows="3"></textarea> */}
                    <DeliveryZipField classes="required form-field step-2" required={true}/>
                    {/* <input className="required form-field step-2" name="other-zip" type="text" required placeholder="Code postal"/> */}
                    <DeliveryCityField classes="required form-field step-2" required={true}/>
                    {/* <input className="required form-field step-2" name="other-city" type="text" required placeholder="Ville"/> */}
                    <DeliveryPhoneField classes="required form-field step-2" required={true}/>
                    {/* <input className="required form-field step-2" name="other-phone" type="tel" required placeholder="Phone"/> */}
                    {/* <input className="required form-field step-2" name="other-mail" type="email" required placeholder="Mail"/> */}
                    <DeliveryMailField classes="form-field step-2" required={false}/>
                    {/* <input className="form-field step-2" name="mail" type="email" placeholder="Mail"/> */}
                </div>
                {(formOpened && otherAddress && otherAddressOpened) && <button
                    type="submit"
                    id="mini-submit-2"
                    form={formOpened ? otherAddressOpened ? "step-3-part" : "step-2-part" : ''}
                    className={`cart-validate unmorphic${formOpened && otherAddress && otherAddressOpened ? ' other-address-transition' : formOpened ? ' form-transition' : ''}`}
                >
                    {!formOpened ? "Acheter" : !otherAddress || otherAddressOpened ? "Commander" : "Continuer"}
                </button>}
            </form>
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
                <div className="choice-label sepa"><label htmlFor="sepa">Transfer</label></div>
                <div className="choice"><input
                    id="soge"
                    name="soge"
                    value="soge"
                    defaultChecked={true}
                    type="checkbox"
                    className="form-field"
                    onChange={(e) => {manageCheckboxPayment(e)}}
                /></div>
                <div className="choice-label soge"><label htmlFor="soge">Card payment</label></div>
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
                    Different delivery address
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
                    form={formOpened ? otherAddress ? "step-3-part" : "step-2-part" : ''}
                />
                <label htmlFor="terms">
                I do accept GTCS and TCU
                </label>
            </div>
            {/* VALIDATE */}
            {!formOpened && <button
                disabled={isSubmit == true ? true : false}
                type="submit"
                id="mini-submit-3"
                form={formOpened ? otherAddressOpened ? "step-3-part" : "step-2-part" : ''}
                className={`cart-validate${formOpened && otherAddress && otherAddressOpened ? ' other-address-transition' : formOpened ? ' form-transition' : ''}`}
                onClick={(e) => {setFormOpened(true)}}
            >
                {buttonText()}
                {isSubmit == true ? <LoadingGIF customClass="payment"/> : null}
            </button>}
        </div>
    );
};

interface CartPurchaseMini {

};

export default CartPurchaseMini;