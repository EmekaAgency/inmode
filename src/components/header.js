import { graphql, Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";
import HeaderMini from "./header-mini";
import { useCart } from './contexts/cart-provider';

import Img from "gatsby-image";
import { useWindowSize } from "../functions/window-size";

const Header = ({  }) => {

  const [icon] = React.useState(useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "header-logo.png"}) {
        childImageSharp {
          fluid {
            srcWebp
            srcSetWebp
            base64
            tracedSVG
          }
        }
      }
      cart_basket: file(relativePath: {eq: "icons/cart_basket.svg"}) {
          publicURL
      }
    }
  `));

  const openMenu = (e) => {
    // console.log("openMenu()");
    e.preventDefault();
    document.getElementById('header-mini').classList.add('opened');
  }

  const link_style = {
    color: "#fff",
    fontSize: 16,
    display: "inline-block",
    verticalAlign: "middle"
  };

  const cart = useCart();

  const window = useWindowSize();

  return (
    <header>
      <div className="header-content container">
        <div className="header-logo background-image" style={{backgroundImage: 'url('+ icon.logo.childImageSharp.fluid.srcWebp +')'}}>
          <Link to="/" className="zone-link">
          </Link>
        </div>
        <div className="header-parts">
          {window.width > 999 && <HeaderTop/>}
          {window.width > 999 && <HeaderBottom/>}
          {window.width < 1000 && <HeaderMini/>}
          {
              cart.cart.length > 0 || cart.appeared ?
                  <img
                      className="cart"
                      src={icon.cart_basket.publicURL}
                      onClick={(e) => {cart.toggle_open_cart()}}
                  />
                  :
                  null
          }
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
