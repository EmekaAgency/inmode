import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClinicalStudies from "../components/home/clinical-studies"
import FollowInstagram from "../components/home/follow-instagram"
import GetStarted from "../components/home/get-started"
import Slides from "../components/home/slides"
import FixedMenu from "../components/fixed-menu"
import { footer_process } from "../functions/footer_process"
import { header_process } from "../functions/header_process"
import Alveoles from "../components/home/alveoles"

const IndexPage = () => {
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
    <Layout
      process_header={{'header-top': true, 'header-bottom': true}}
      header_process_functions={{'header-top': header_process, 'header-bottom': header_process}}
      process_footer={{'footer': true}}
      footer_process_functions={{'footer': footer_process}}
    >
      <FixedMenu
        datas={datas}
        process={true}
        process_function={header_process}
      />
      <SEO title="Home"/>
      {/* <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.css"></link> */}
      {/* <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.js"></script> */}
      <Slides from='home'/>
      <Alveoles />
      <ClinicalStudies/>
      <FollowInstagram/>
      <GetStarted/>
    </Layout>
  );
}

export default IndexPage
