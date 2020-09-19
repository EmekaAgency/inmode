import { graphql, useStaticQuery } from "gatsby";
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slides from "../components/home/slides";
import Unknown404 from "../components/404/unknown-404";
import MenusProvider from "../components/contexts/menus-provider";

const NotFoundPage = () => {
  const datas = useStaticQuery(graphql`
    {
      allMysqlHeaderBottom {
        edges {
          node {
            container
            name
            position
            type
            under
            url
            variant
            mysqlId
          }
        }
      }
    }
  `).allMysqlHeaderBottom.edges;

  return (
    <MenusProvider>
      <Layout>
        <SEO title="404"/>
        <Unknown404/>
        {/* <Slides from="404"/> */}
      </Layout>
    </MenusProvider>
  );
}

export default NotFoundPage