import { Link } from "gatsby";
import React, { useContext } from "react";
import CartContext from "../contexts/cart-context";
import { useCart } from "../contexts/cart-provider";

import './shop-product.css';

const ShopProduct2 = ({ reference, special }) => {

    const [quantity, setQuantity] = React.useState(0);

    const cart = useCart();
    const article = cart.articles[reference];

    return (
        <div className={`shop-product2 transition${special ? ' special' : ''}`}>
            <div className="mini part-1">
                <div className={`reference${special ? ' special' : ''}`}>{reference}</div>
                <div className={`name${special ? ' special' : ''}`}>{article.Name}</div>
            </div>
            <div className="mini part-2">
                <div className={`pack${special ? ' special' : ''}`}>{article.pack_name()}</div>
                <div className={`manage${special ? ' special' : ''}`}>
                    <div
                        className={`minus${special ? ' special' : ''}`}
                        onClick={(e) => {
                            cart.remove(reference, 1);
                        }}
                    >
                        -
                    </div>
                    <div className={`quantity${special ? ' special' : ''}`}>
                        {cart.find(reference) ? cart.find(reference).quantity : 0}
                    </div>
                    <div
                        className={`add${special ? ' special' : ''}`}
                        onClick={(e) => {
                            cart.add(reference, 1);
                        }}
                    >
                        +
                    </div>
                </div>
            </div>
            <div className="mini part-3">
                <div className={`price${special ? ' special' : ''}`}>
                    {cart.find(reference) ? cart.find(reference).total() : article.price}
                </div>
                <div
                    className={`purchase${special ? ' special' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        cart.toggle_open_cart();
                    }}
                >
                    Ajouter au panier
                </div>
            </div>
        </div>
    );
}

ShopProduct2.propTypes = {

};

ShopProduct2.defaultProps = {

}

export default ShopProduct2;