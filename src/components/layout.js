/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import ContactUs from "./contact-us"
import PrivacyPolicy from "./privacy-policy"
import FixedMenu from "./fixed-menu"
import MenusProvider from "../components/contexts/menus-provider";
import ProductsProvider from "../components/contexts/products-provider";
import CartPurchase from "./cart-purchase"
import CartProvider from "./contexts/cart-provider"
import CartContext from "./contexts/cart-context"
import MenusContext from "./contexts/menus-context"
import ProductsContext from "./contexts/products-context"

const Layout = ({ children }) => {

  return (
    <MenusProvider>
        <Header/>
        <ProductsProvider>
          <main id="main">
            {children}
          </main>
        </ProductsProvider>
        <FixedMenu/>
        {/* {window == undefined ? null : window.innerHeight < 800 && <div style={{position: "fixed", height: 450, width: 450, top:0, left:0, background: "red"}}></div>} */}
        {window == undefined ? null : window.innerHeight >= 800 && <CartPurchase/>}
        <PrivacyPolicy />
        <ContactUs/>
        <Footer/>
    </MenusProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout