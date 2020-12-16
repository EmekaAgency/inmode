import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react"
import CartContext from "../contexts/cart-context";

import './mini.css';

const CartPurchaseMini = (  ) => {

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

    const cart = useContext(CartContext);

    const [formOpened, setFormOpened] = React.useState(false);
    const [otherAddress, setOtherAddress] = React.useState(false);
    const [otherAddressOpened, setOtherAddressOpened] = React.useState(false);

    const manageChange = (e) => {
        otherAddress && setOtherAddressOpened(false);
        setOtherAddress(e.currentTarget.checked);
    }

    const sendForm = (e) => {
        e.preventDefault();
    }

    return (
        <div
            id="purchase-mini"
            className={!cart.cart_opened ? "all-close" : !formOpened ? 'step-1' : 'step-2-3'}
        >
            <div className="stepper">
                <div id="step-1" className="step">
                    <div className="num">1</div>
                    <span className="label">Panier</span>
                </div>
                <div id="step-2" className={`step${otherAddress ? ' other-address' : ''}`}>
                    <div className="num">2</div>
                    <span className="label">Facture</span>
                </div>
                <div id="step-3" className={`step${otherAddress ? ' other-address' : ''}`}>
                    <div className="num">3</div>
                    <span className="label">Livraison</span>
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
                     {cart.total() * 1.2 < 500 && <div className="free-message">Livraison gratuite à partir de 500€</div>}
                </div>
                <div className={`cart-final${formOpened ? ' purchase' : ''}`}>
                    <div className="cart-discount">
                        <div className="text">Livraison{cart.total() * 1.2 < 500 ? '' : ' gratuite'}</div>
                        {cart.total() * 1.2 < 500 ? <div className="price">
                            {cart.total() === 0 ? (0).toFixed(2) : (10).toFixed(2)}
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
                </div>
            </div>
            {/* SECOND PART */}
            <form id="step-2-part" className={`cart-purchase-form custom-scrollbar${formOpened ? ' opened' : ''}${otherAddressOpened ? ' other-opened' : ''}`}>
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
                    <span className={`${otherAddress ? 'click' : ''}`}>adresse de facturation</span>
                    <hr/>
                </div>
                <div
                    id="purchase-form"
                    className={`neumorphic ${otherAddress && (' other-address' || '')}`}
                >
                    <div id="step-1-part" className="unmorphic custom-scrollbar">
                        <input className="required form-field step-1" name="name" type="text" required placeholder="Nom"/>
                        <input className="form-field step-1" name="society" type="text" placeholder="Société"/>
                        <textarea className="required form-field step-1" name="adresse1" type="text" required placeholder="Adresse" rows="3"></textarea>
                        <input className="required form-field step-1" name="zip" type="text" required placeholder="Code postal"/>
                        <input className="required form-field step-1" name="city" type="text" required placeholder="Ville"/>
                        <input className="required form-field step-1" name="phone" type="tel" required placeholder="Téléphone"/>
                        <input className="required form-field step-1" name="mail" type="email" required placeholder="Mail"/>
                    </div>
                </div>
            </form>
            {/* THIRD PART */}
            <form id="step-3-part" className={`other-address neumorphic${otherAddressOpened ? " other-opened" : ''}`}>
                <div className={`title unmorphic${otherAddressOpened ? ' opened' : ''}`}>
                    <div
                        className="form-close unmorphic"
                        onClick={(e) => {
                            e.preventDefault();
                            setOtherAddressOpened(false);
                        }}
                    >
                        <img
                            src={icons.close.publicURL}
                            srcSet={icons.close.publicURL}
                            className="unmorphic"
                        />
                    </div>
                    <span className={`unmorphic${otherAddressOpened ? ' click' : ''}`}>informations de livraison</span>
                    <hr className="unmorphic"/>
                </div>
                <div className="form custom-scrollbar">
                    <input className="required form-field step-2" name="other-name" type="text" required placeholder="Nom"/>
                    <input className="form-field step-2" name="other-society" type="text" placeholder="Société"/>
                    <textarea className="required form-field step-2" name="other-adresse1" type="text" required placeholder="Adresse" rows="3"></textarea>
                    <input className="required form-field step-2" name="other-zip" type="text" required placeholder="Code postal"/>
                    <input className="required form-field step-2" name="other-city" type="text" required placeholder="Ville"/>
                    <input className="required form-field step-2" name="other-phone" type="tel" required placeholder="Téléphone"/>
                    <input className="required form-field step-2" name="other-mail" type="email" required placeholder="Mail"/>
                </div>
            </form>
            {/* CHECKBOXES */}
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
                type="submit"
                form={formOpened ? otherAddressOpened ? "step-3-part" : "step-2-part" : ''}
                className={`cart-validate${formOpened && otherAddress && otherAddressOpened ? ' other-address-transition' : formOpened ? ' form-transition' : ''}`}
                onClick={(e) => {
                    e.preventDefault();
                    if(!formOpened){
                        setFormOpened(true);
                    }
                    else if(formOpened && otherAddress && !otherAddressOpened){
                        setOtherAddressOpened(true);
                    }
                    else if(formOpened && !otherAddress) {
                        sendForm(e);
                    }
                    else if(formOpened && otherAddress && otherAddressOpened) {
                        sendForm(e);
                    }
                    else {
                        return;
                    }
                }}
            >
                {!formOpened ? "Acheter" : !otherAddress || otherAddressOpened ? "Commander" : "Continuer"}
            </button>
        </div>
    );
};

CartPurchaseMini.propTypes = {

};

CartPurchaseMini.defaultProps = {

};

export default CartPurchaseMini;