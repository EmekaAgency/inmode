import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenusProvider from "../components/contexts/menus-provider"

const SecondPage = () => (
  <MenusProvider>
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </MenusProvider>
)

export default SecondPage
