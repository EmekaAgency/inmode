import React from "react";
import ContactForm from "../components/contact/contact-form";
import GetInTouch from "../components/contact/get-in-touch";
import ProfessionalContact from "../components/contact/professional-contact";

import GetStarted from "../components/get-started";
import Layout from "../components/Layout"
import SEO from "../components/seo"

const ContactPage = () => {
    return (
      <Layout>
        <SEO title="Contact"/>
        <GetInTouch from="contact-page"/>
        <ContactForm from="contact-page"/>
        <ProfessionalContact from="contact-page"/>
        <GetStarted from="contact-page"/>
      </Layout>
    );
};

export default ContactPage;