import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { get_img_path } from "../functions/get_images"
import ClinicalStudies from "../components/home/clinical-studies"
import FollowInstagram from "../components/home/follow-instagram"
import GetStarted from "../components/home/get-started"
import Slides from "../components/home/slides"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Slides from='home'/>
    <ClinicalStudies/>
    <FollowInstagram/>
    <GetStarted/>
  </Layout>
)

export default IndexPage
