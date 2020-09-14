/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import ContactUs from "./contact-us"
import PrivacyPolicy from "./privacy-policy"

const Layout = ({
  children,
  process_header = false,
  header_process_functions = {},
  process_footer = false,
  footer_process_functions = {}
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        process={process_header}
        process_functions={header_process_functions}
        siteTitle={data.site.siteMetadata.title}
      />
      <main>
        {children}
        <PrivacyPolicy />
        <ContactUs/>
      </main>
      <Footer
        process={process_footer}
        process_functions={footer_process_functions}
      />
      {/* <link href="http://mozilla.github.io/foundation-icons/assets/foundation-icons.css" type="text/css" rel="stylesheet"></link> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
