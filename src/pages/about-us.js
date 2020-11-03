import React from "react";

import Divider from '../components/divider';
import HowCanWeHelp from "../components/contact/how-can-we-help";
import GetStarted from "../components/get-started";
import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/about-us/banner";
import AboutUs from "../components/about-us/about-us";
import Learn from "../components/about-us/learn";
import Staff from "../components/about-us/staff";

const AboutUsPage = () => {
    return (
      <Layout>
        <SEO title="Notre histoire"/>
        <Banner from="about-us"/>
        <AboutUs from="about-us"/>
        <Divider position="top"/>
        <Learn from="about-us"/>
        <Divider position="bottom"/>
        <Staff from="about-us"/>
        <HowCanWeHelp from="about-us"/>
        <GetStarted/>
      </Layout>
    );
};

export default AboutUsPage;