import React from "react";
import ContactForm from "../components/contact/contact-form";
import GetInTouch from "../components/contact/get-in-touch";
import HowCanWeHelp from "../components/contact/how-can-we-help";
import ProfessionalContact from "../components/contact/professional-contact";

import MenusProvider from "../components/contexts/menus-provider";
import GetStarted from "../components/home/get-started";
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
    return (
    <MenusProvider>
      <Layout>
        <SEO title="Contact"/>
        {/* <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.css"></link> */}
        {/* <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.js"></script> */}
        <GetInTouch from="contact-page"/>
        <ContactForm from="contact-page"/>
        <ProfessionalContact from="contact-page"/>
        <HowCanWeHelp from="contact-page"/>
        <GetStarted from="contact-page"/>
      </Layout>
    </MenusProvider>
    );
};

export default ContactPage;