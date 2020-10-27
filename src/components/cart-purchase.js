import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react"
import CartContext from "./contexts/cart-context";
import { useCart } from "./contexts/cart-provider";

const CartPurchase = ({  }) => {

    const icons = useStaticQuery(graphql`
        {
            cart_basket: file(relativePath: {eq: "icons/cart_basket.svg"}) {
                publicURL
            }
            close: file(relativePath: {eq: "icons/close-white.webp"}) {
                publicURL
                childImageSharp {
                    fluid {
                        srcSet
                        srcSetWebp
                    }
                }
            }
            rmv_init: file(relativePath: {eq: "icons/rmv-article-init.svg"}) {
                publicURL
            }
            rmv_blue: file(relativePath: {eq: "icons/rmv-article-blue.svg"}) {
                publicURL
            }
        }
    `)

    const cart = useContext(CartContext);

    const [formOpened, setFormOpened] = React.useState(false);

    return (
        <>
            <div className={`cart-purchase transition${cart.cart_opened ? ' opened' : ''}`}>
                <div
                    className="cart-close"
                    onClick={(e) => {
                        e.preventDefault();
                        cart.toggle_open_cart();
                    }}
                >
                    <img
                        src={icons.close.publicURL || icons.close.childImageSharp.fluid.srcWebp}
                        srcSet={icons.close.publicURL || icons.close.childImageSharp.fluid.srcSetWebp}
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
                    <div className="cart-sub-total">
                        <div className="text">sous total</div>
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
                            {(cart.total() * 1.2).toFixed(2)}
                        </div>
                    </div>
                    <div
                        className="cart-validate"
                        onClick={(e) => {
                            e.preventDefault();
                            setFormOpened(!formOpened);
                        }}
                    >
                        Valider
                    </div>
                </div>
            </div>
            
            <div className={`cart-purchase-form custom-scrollbar${formOpened ? ' opened' : ''}`}>
                <div className={`title transition${formOpened ? ' opened' : ''}`}>
                    <div
                        className="form-close"
                        onClick={(e) => {
                            e.preventDefault();
                            setFormOpened(!formOpened);
                        }}
                    >
                        <img
                            src={icons.close.publicURL || icons.close.childImageSharp.fluid.srcWebp}
                            srcSet={icons.close.publicURL || icons.close.childImageSharp.fluid.srcSetWebp}
                        />
                    </div>
                    informations de facturation
                    <hr/>
                </div>
                <form className="neumorphic" onSubmit={(e) => {e.preventDefault();}}>
                    <input name="nom" placeholder="" type="text" required placeholder="Nom"/>
                    <input name="prénom" placeholder="" type="text" required placeholder="Prénom"/>
                    <textarea name="adresse1" placeholder="" type="text" required placeholder="Adresse" rows="3"></textarea>
                    <input name="zip" placeholder="" type="text" required placeholder="Code postal"/>
                    <input name="city" placeholder="" type="text" required placeholder="Ville"/>
                    <input name="phone" placeholder="" type="tel" required placeholder="Téléphone"/>
                    <input name="mail" placeholder="" type="email" required placeholder="Mail"/>
                    <input name="valider" placeholder="" type="submit"/>
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