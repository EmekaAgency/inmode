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
import MenusContext from "./contexts/menus-context"
import FixedMenu from "./fixed-menu"
import ProductsProvider from "./contexts/products-provider";

const Layout = ({ children }) => {

  const [menus_header_top] = React.useState(React.useContext(MenusContext).header_top);
  const [menus_header_bottom] = React.useState(React.useContext(MenusContext).header_bottom);
  const [menus_footer] = React.useState(React.useContext(MenusContext).footer);
  const [strapi_header_top] = React.useState(React.useContext(MenusContext).strapi_header_top);
  const [strapi_header_bottom] = React.useState(React.useContext(MenusContext).strapi_header_bottom);

  return (
    <>
      <Header
        menus_top={menus_header_top}
        menus_bottom={menus_header_bottom}
        strapi_top={strapi_header_top}
        strapi_bottom={strapi_header_bottom}
      />
      <ProductsProvider>
        <main id="main">
          {children}
        </main>
      </ProductsProvider>
      <FixedMenu
        menus={menus_header_bottom}
      />
      <PrivacyPolicy />
      <ContactUs/>
      <Footer
        menus={menus_footer}
      />
      {/* <link href="http://mozilla.github.io/foundation-icons/assets/foundation-icons.css" type="text/css" rel="stylesheet"></link> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout