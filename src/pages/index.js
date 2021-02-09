import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Hero from "../components/home/hero";
import ClinicalStudies from "../components/home/clinical-studies";
import FollowInstagram from "../components/home/follow-instagram";
import GetStarted from "../components/get-started";
import Slides from "../components/home/slides";
import Alveoles from "../components/home/alveoles";
import { useWindowSize } from "../functions/window-size";
import SlidesMini from "../components/home/slides-mini";

const IndexPage = () => {

  const size = useWindowSize();

  return (
      <Layout>
        <SEO title="Inmode"/>
        <Hero/>
        {size.width > 999 ? <Slides from='home'/> : <SlidesMini from="home"/>}
        <Alveoles />
        <ClinicalStudies/>
        <FollowInstagram/>
        <GetStarted/>
      </Layout>
  );
}

export default IndexPage
