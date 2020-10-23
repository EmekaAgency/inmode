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
import ErrorBoundary from "../components/error-boundary";

const Layout = ({ children }) => {

  return (
    <ErrorBoundary>
      <MenusProvider>
        {/* <CartProvider> */}
          <Header/>
          <ProductsProvider>
            <main id="main">
              {children}
            </main>
          </ProductsProvider>
          <FixedMenu/>
          <CartPurchase/>
          <PrivacyPolicy />
          <ContactUs/>
          <Footer/>
          {/* <link href="http://mozilla.github.io/foundation-icons/assets/foundation-icons.css" type="text/css" rel="stylesheet"></link> */}
        {/* </CartProvider> */}
      </MenusProvider>
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout