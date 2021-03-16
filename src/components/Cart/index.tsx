import React from 'react';
import { useCart } from "../contexts/cart-provider";
import { useWindowSize } from "../../functions/window-size";

import CartPurchaseBig from './cart-purchase-big';
import CartPurchaseMini from './cart-purchase-mini';
import './main.css';

const CartPurchase = ({  }:CartPurchase) => {

  const size = useWindowSize();

  const cart = useCart();

    if(cart.cart.length <= 0 && !cart.appeared) {
        return null;
    }
    if(size.width  > 1199) {
        return (
            <>
                <CartPurchaseBig/>
            </>
        );
    }
    else {
        return (
            <>
                <CartPurchaseMini/>
            </>
        );
    }
};

interface CartPurchase {

};

export default CartPurchase;