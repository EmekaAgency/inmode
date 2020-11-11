import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import ClinicalStudies from "../components/home/clinical-studies"
import FollowInstagram from "../components/home/follow-instagram"
import GetStarted from "../components/get-started"
import Slides from "../components/home/slides"
import Alveoles from "../components/home/alveoles"

// import axios from 'axios';

const IndexPage = () => {

  return (
      <Layout>
        <SEO title="Accueil"/>
        <Hero/>
        <Slides from='home'/>
        <Alveoles />
        <ClinicalStudies/>
        <FollowInstagram/>
        <GetStarted/>
      </Layout>
  );
}

export default IndexPage
