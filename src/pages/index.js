import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClinicalStudies from "../components/home/clinical-studies"
import FollowInstagram from "../components/home/follow-instagram"
import GetStarted from "../components/home/get-started"
import Slides from "../components/home/slides"
import Alveoles from "../components/home/alveoles"
import MenusProvider from "../components/contexts/menus-provider"

// import axios from 'axios';

const IndexPage = () => {

  // axios.get(
  //     'http://localhost:1337/treatments',
  //     {
  //     identifier: 'inmode@emeka.com',
  //     password: 'Bonsoir34**',
  //     }
  // ).then((res) => {
  //   console.log(res.data);
  // });

  return (
    <MenusProvider>
      <Layout>
        <SEO title="Home"/>
        {/* <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.css"></link> */}
        {/* <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.js"></script> */}
        <Slides from='home'/>
        <Alveoles />
        <ClinicalStudies/>
        <FollowInstagram/>
        <GetStarted/>
      </Layout>
    </MenusProvider>
  );
}

export default IndexPage
