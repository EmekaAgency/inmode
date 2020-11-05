import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react"
import CartContext from "./contexts/cart-context";

const CartPurchase = ({  }) => {

    const [icons] = React.useState(useStaticQuery(graphql`
        {
            cart_basket: file(relativePath: {eq: "icons/cart_basket.svg"}) {
                publicURL
            }
            close: file(relativePath: {eq: "icons/close-white.webp"}) {
                publicURL
            }
            rmv_init: file(relativePath: {eq: "icons/rmv-article-init.svg"}) {
                publicURL
            }
            rmv_blue: file(relativePath: {eq: "icons/rmv-article-blue.svg"}) {
                publicURL
            }
        }
    `));


    const form = [
        [
            {'type': 'input', 'name': "name", 'type': "text", 'required': true, 'placeholder': "Nom"},
            {'type': 'input', 'name': "society", 'type': "text", 'required': false, 'placeholder': "Société"},
            {'type': 'textarea', 'name': "adresse1", 'type': "text", 'required': true, 'placeholder': "Adresse", 'rows': "3"},
            {'type': 'input', 'name': "zip", 'type': "text", 'required': true, 'placeholder': "Code postal"},
            {'type': 'input', 'name': "city", 'type': "text", 'required': true, 'placeholder': "Ville"},
            {'type': 'input', 'name': "phone", 'type': "tel", 'required': true, 'placeholder': "Téléphone"},
            {'type': 'input', 'name': "mail", 'type': "email", 'required': true, 'placeholder': "Mail"}
        ],
        [
            {'type': 'input', 'name': "other-name", 'type': "text", 'required': true, 'placeholder': "Facture - Nom"},
            {'type': 'input', 'name': "other-society", 'type': "text", 'required': false, 'placeholder': "Facture - Société"},
            {'type': 'textarea', 'name': "other-adresse1", 'type': "text", 'required': true, 'placeholder': "Facture - Adresse", 'rows': "3"},
            {'type': 'input', 'name': "other-zip", 'type': "text", 'required': true, 'placeholder': "Facture - Code postal"},
            {'type': 'input', 'name': "other-city", 'type': "text", 'required': true, 'placeholder': "Facture - Ville"},
            {'type': 'input', 'name': "other-phone", 'type': "tel", 'required': true, 'placeholder': "Facture - Téléphone"},
            {'type': 'input', 'name': "other-mail", 'type': "email", 'required': true, 'placeholder': "Facture - Mail"}
        ]
    ]

    const cart = useContext(CartContext);

    const [formOpened, setFormOpened] = React.useState(false);
    const [otherAddress, setOtherAddress] = React.useState(false);
    const [backStep, setBackStep] = React.useState(false);

    const [formValues, setFormValues] = React.useState({'step-1': {}, 'step-2': {}});

    const manageChange = (e) => {
        setOtherAddress(e.currentTarget.checked);
        setBackStep(false);
    }

    const manageStep = (e, step) => {
        e.preventDefault();
        if(step === 1 && e.currentTarget.id == "step-1" && (otherAddress && !backStep)) {
            // setBackStep(true);
            // document.getElementById("step-1-part").scrollIntoView();
            document.querySelector('form#purchase-form').scroll(0, 0);
        }
        if(step === 2 && (e.currentTarget.id == "step-2" || e.currentTarget.id == "continue")) {
            // setBackStep(false);
            // document.getElementById("step-2-part").scrollIntoView();
            document.querySelector('form#purchase-form').scroll(0, document.querySelector('#step-2-part').offsetTop - 10);
        }
    }

    const checkform = () => {
        const form = document.getElementById('purchase-form');
        // get all the form-field elems within the submitted form
        // var notifies = document.querySelectorAll('p.notify');
        // for(var i = 0; i < notifies.length; i++) {
        //     notifies[i].remove();
        // }
        var elems = form.getElementsByClassName('step-1');
        for (var i = 0; i < elems.length; i++) {
            // only validate the form-field elems that have the required attribute
            if(elems[i].hasAttribute("required")){
                if(elems[i].value == ""){
                    // found an empty field that is required
                    alert("Please fill all required fields");
                    // notify(elems[i]);
                    console.log("checkForm => ", false);
                    return false;
                }
            }
        }
        console.log("checkForm => ", true);
        return true;
    }

    // print the message
    const notify = (element) => {
        console.log(element);
        if(element.nextElementSibling.classList.contains('notify')) {
            return;
        }
        element.parentNode.insertBefore(
            Object.assign(document.createElement('p'),
            {
                className: 'notify',
                innerHTML: 'Please fill out this field for all empty and required fields'
            }
        ), element.nextSibling)
    }

    const sendForm = (e) => {
        e.preventDefault();
        // {console.log(e.target);}
        // {!Array.isArray(e.target) && typeof e.target === "object" && Object.keys(e.target).map((elem) => {
        //     // console.log(elem);
        //     // console.log(e.target[elem]);
        //     console.log(e.target[elem].name, " => ", e.target[elem].value);
        // });}
        // {Array.isArray(e.target) && e.target.map((elem) => {
        //     console.log(elem);
        // });}
        // {console.log(e.target.value);}
        // if(!form.terms.checked) {
            // alert("Please indicate that you accept the Terms and Conditions");
            // form.terms.focus();
            // return false;
        // }
        // return true;
    }

    return (
        <>
            {/* <div
                style={{
                    position: 'fixed',
                    width: '100vw',
                    left: '0',
                    height: '1px',
                    background: 'red',
                    top: '190px',
                    zIndex: '10'
                }}
            ></div> */}
            <div className={`cart-purchase transition${cart.cart_opened ? ' opened' : ''}`}>
                <div
                    className="cart-close"
                    onClick={(e) => {
                        e.preventDefault();
                        setFormOpened(false);
                        cart.toggle_open_cart();
                    }}
                >
                    <img
                        src={icons.close.publicURL}
                        srcSet={icons.close.publicURL}
                    />
                </div>
                <div className="cart-head">
                    <img
                        src={icons.cart_basket.publicURL}
                        srcSet={icons.cart_basket.publicURL}
                    />
                    <span>{`Panier, ${cart.cart.length} objet${cart.cart.length > 1 ? 's' : ''}`}</span>
                </div>
                <div className="cart-content custom-scrollbar">
                    {cart.cart.map((article, key) => {
                        return (
                            <div key={key} className="cart-article transition">
                                <div
                                    className="rmv"
                                    onClick={(e) => {
                                        cart.remove(article.reference, article.quantity);
                                    }}
                                >
                                    <img className="init" src={icons.rmv_init.publicURL}/>
                                    <img className="blue" src={icons.rmv_blue.publicURL}/>
                                </div>
                                <div className="addon">
                                    {cart.articles[article.reference].picture && (<img
                                        src={cart.articles[article.reference].picture.childImageSharp.fluid.srcWebp}
                                        srcSet={cart.articles[article.reference].picture.childImageSharp.fluid.srcSetWebp}
                                    />)}
                                </div>
                                <div className="details">
                                    <div className="reference">{article.reference}</div>
                                    <div className="name">{article.Name}</div>
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
                </div>
                <div className="cart-final">
                    <div className="cart-discount">
                        <div className="text">Livraison{cart.total() * 1.2 < 500 ? '' : ' gratuite'}</div>
                        {cart.total() * 1.2 < 500 ? <div className="price">
                            {cart.total() == 0 ? (0).toFixed(2) : (10).toFixed(2)}
                        </div>: null }
                    </div>
                    <div className="cart-sub-total">
                        <div className="text">sous total (HT)</div>
                        <div className="price">
                            {cart.total().toFixed(2)}
                        </div>
                    </div>
                    <div className="cart-tva">
                        <div className="text">tva</div>
                        <div className="price">
                            {(cart.total() * 0.2).toFixed(2)}
                        </div>
                    </div>
                    <div className="cart-total">
                        <div className="text">total ttc</div>
                        <div className="price">
                            {((cart.total() * 1.2) + (cart.total() * 1.2 < 500 ? 10 : 0)).toFixed(2)}
                        </div>
                    </div>
                    <div
                        className="cart-validate"
                        onClick={(e) => {
                            e.preventDefault();
                            setFormOpened(!formOpened);
                        }}
                    >
                        Acheter
                    </div>
                </div>
            </div>
            
            <div className={`cart-purchase-form custom-scrollbar${formOpened ? ' opened' : ''}`}>
                <div className={`title transition${formOpened ? ' opened' : ''}`}>
                    <div
                        className="form-close"
                        onClick={(e) => {
                            e.preventDefault();
                            setFormOpened(false);
                        }}
                    >
                        <img
                            src={icons.close.publicURL}
                            srcSet={icons.close.publicURL}
                        />
                    </div>
                    <span id="step-1" className={`${otherAddress && !backStep ? 'click' : ''}`} onClick={(e) => {manageStep(e, 1);}}>informations de facturation</span>
                    <hr/>
                    {/* {otherAddress && <><span id="step-2" className={`${otherAddress && backStep ? 'click' : ''}`} onClick={(e) => {manageStep(e, 2);}}>Addresse de facturation</span> */}
                    {otherAddress && <><span id="step-2" className="click" onClick={(e) => {manageStep(e, 2);}}>Addresse de facturation</span>
                    <hr/></>}
                </div>
                <form
                    id="purchase-form"
                    className={`neumorphic custom-scrollbar${otherAddress && ' other-address' || ''}`}
                    // onSubmit={(e) => {sendForm(e, this);}}
                    onSubmit={sendForm}
                >
                    {/* <div className={`${otherAddress && !backStep ? 'hidden' : 'visible'}`}> */}
                    <div id="step-1-part" className="unmorphic">
                        {/* {form[0].map()} */}
                        <input className="form-field step-1" name="name" placeholder="" type="text" required placeholder="Nom"/>
                        <input className="form-field step-1" name="society" placeholder="" type="text" placeholder="Société"/>
                        <textarea className="form-field step-1" name="adresse1" placeholder="" type="text" required placeholder="Adresse" rows="3"></textarea>
                        <input className="form-field step-1" name="zip" placeholder="" type="text" required placeholder="Code postal"/>
                        <input className="form-field step-1" name="city" placeholder="" type="text" required placeholder="Ville"/>
                        <input className="form-field step-1" name="phone" placeholder="" type="tel" required placeholder="Téléphone"/>
                        <input className="form-field step-1" name="mail" placeholder="" type="email" required placeholder="Mail"/>
                    </div>
                    {otherAddress && !backStep && <hr/>}
                    {otherAddress && !backStep && <div id="step-2-part" className="other-address unmorphic">
                        <input className="form-field step-2" name="other-name" placeholder="" type="text" required placeholder="Facture - Nom"/>
                        <input className="form-field step-2" name="other-society" placeholder="" type="text" placeholder="Facture - Société"/>
                        <textarea className="form-field step-2" name="other-adresse1" placeholder="" type="text" required placeholder="Facture - Adresse" rows="3"></textarea>
                        <input className="form-field step-2" name="other-zip" placeholder="" type="text" required placeholder="Facture - Code postal"/>
                        <input className="form-field step-2" name="other-city" placeholder="" type="text" required placeholder="Facture - Ville"/>
                        <input className="form-field step-2" name="other-phone" placeholder="" type="tel" required placeholder="Facture - Téléphone"/>
                        <input className="form-field step-2" name="other-mail" placeholder="" type="email" required placeholder="Facture - Mail"/>
                    </div>}
                    <div>
                        <input
                            id="facture"
                            name="facture"
                            value="facture"
                            type="checkbox"
                            className="form-field"
                            onChange={(e) => {
                                // e.preventDefault();
                                // var continuer = (!otherAddress || backStep) && checkform();
                                // console.log("continuer => ", continuer);
                                // continuer && saveForm();
                                // continuer && e.currentTarget.setAttribute('checked', 'true');
                                // continuer && manageChange(e);
                                manageChange(e);
                                // otherAddress && document.querySelector('form#purchase-form').scroll(0, document.querySelector('#step-2-part').offsetTop - 10);
                            }}
                        />
                        <label htmlFor="facture">
                            Adresse de livraison différente
                        </label>
                    </div>
                    <div>
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
                    <button type="submit">Passer la commande</button>
                    {/* {((otherAddress && !backStep) || !otherAddress) ?
                        <button type="submit">Passer la commande</button>
                        :
                        <button id="continue" onClick={(e) => {manageStep(e, 2);}}>Continuer</button>
                    } */}
                </form>
            </div>
        </>
    );
};

CartPurchase.propTypes = {

};

CartPurchase.defaultProps = {

};

export default CartPurchase;