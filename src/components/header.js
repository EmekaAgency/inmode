import { graphql, Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";
import HeaderMini from "./header-mini";
// import { useCart } from './contexts/cart-provider';
import { useWindowSize } from "../functions/window-size";
import { disableMainScroll } from "../functions/disable-scroll";

const Header = (  ) => {

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
    e.preventDefault();
    document.getElementById('header-mini').classList.add('opened');
    size.width < 1000 && disableMainScroll();
  }

  // const cart = useCart();

  const size = useWindowSize();

  return (
    <header>
      <div className="header-content container">
        <div className="header-logo background-image" style={{backgroundImage: 'url('+ icon.logo.childImageSharp.fluid.srcWebp +')'}}>
          <Link to="/" className="zone-link">
          </Link>
        </div>
        <div className="header-parts">
          {size.width > 999 && <HeaderTop/>}
          {size.width > 999 && <HeaderBottom/>}
          {size.width < 1000 && <HeaderMini/>}
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
