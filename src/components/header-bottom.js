import React from 'react';
import Menu from './menu';
import MenusContext from "./contexts/menus-context"
// import { useCart } from './contexts/cart-provider';
// import { graphql, useStaticQuery } from "gatsby";

const HeaderBottom = (  ) => {

    // const [icon] = React.useState(useStaticQuery(graphql`
    //     {
    //         cart_basket: file(relativePath: {eq: "icons/cart_basket.svg"}) {
    //             publicURL
    //         }
    //     }
    // `));

    const [menus] = React.useState(React.useContext(MenusContext).header_bottom);

    // const cart = useCart();

    return (
        <div id="header-bottom" className="header-bottom">
            {menus && menus.map((menu, key) => {
                return (<Menu key={key} prop_key={key} menu={menu}/>);
            })}
            {/* {
                cart.cart.length > 0 || cart.appeared ?
                    <img
                        className="cart"
                        src={icon.cart_basket.publicURL}
                        onClick={(e) => {cart.toggle_open_cart()}}
                    />
                    :
                    null
            } */}
        </div>
    );
}

HeaderBottom.propTypes = {
}

HeaderBottom.defaultProps = {
}
  
export default HeaderBottom;