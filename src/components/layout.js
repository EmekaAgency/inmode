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
// import CartPurchase from "./Cart";

const Layout = ({ children }) => {

  // TODO régler isMobile pour ouverture cookies
  // const [isMobile, setIsMobile] = React.useState()

  // React.useEffect(() => {
  //   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //     // true for mobile device
  //     document.write("mobile device");
  //   }else{
  //     // false for not mobile device
  //     document.write("not mobile device");
  //   }
  // });

  return (
    <MenusProvider>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Muli" />
        <Header/>
        <ProductsProvider>
          <main id="main">
            {children}
          </main>
        </ProductsProvider>
        <FixedMenu/>
        {/* {size.height < 800 && <div style={{position: "fixed", height: 450, width: 450, top:0, left:0, background: "red"}}></div>} */}
        {/* <CartPurchase/> */}
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