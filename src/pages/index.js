import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { get_img_path } from "../functions/get_images"
import ClinicalStudies from "../components/home/clinical-studies"
import FollowInstagram from "../components/home/follow-instagram"
import GetStarted from "../components/home/get-started"
import Slides from "../components/home/slides"
import FixedMenu from "../components/fixed-menu"
import { footer_process } from "../functions/footer_process"
import { header_process } from "../functions/header_process"

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
        // process_fixed_menu={true}
        // fixed_menu_process_function={header_process}
      />
      <SEO title="Home"/>
      {/* <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.css"></link> */}
      {/* <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.js"></script> */}
      <Slides from='home'/>
      <ClinicalStudies/>
      <FollowInstagram/>
      <GetStarted/>
    </Layout>
  );
}

export default IndexPage
