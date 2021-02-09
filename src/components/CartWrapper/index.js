import React from 'react';

import CartProvider from '../contexts/cart-provider';

const CartWrapper = ({ children }) => (
  <CartProvider>
    {children}
  </CartProvider>
);

export default CartWrapper;