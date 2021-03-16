import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";
import HeaderMini from "./header-mini";
import { useCart } from '../contexts/cart-provider';
import { useWindowSize } from "../../functions/window-size";
import { disableMainScroll } from "../../functions/disable-scroll";
import { useImages } from '../contexts/images-provider';
import CartBasket from "../CartBasket";

const Header = ({}:Header) => {

  const images = useImages();

  const openMenu = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    document.getElementById('header-mini').classList.add('opened');
    size.width < 1000 && disableMainScroll();
  }

  const cart = useCart();

  const size = useWindowSize();

  return (
    <header>
      <div className="header-content container">
        <div className="header-logo background-image" style={{backgroundImage: 'url('+ images.getOne('headerLogo').childImageSharp.fluid.srcWebp +')'}}>
          <Link to="/" className="zone-link" title="Inmode">
          </Link>
        </div>
        <div className="header-parts">
          {size.width > 1199 && <HeaderTop/>}
          {size.width > 1199 && <HeaderBottom/>}
          {size.width < 1200 && <HeaderMini/>}
          { cart.cart.length > 0 || cart.appeared ? <CartBasket/>: null }
          <button
            className="header-mini-menu"
            onClick={(e)=>{openMenu(e)}}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

interface Header {
  siteTitle?: string;
}

export default Header
