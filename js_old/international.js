import React from "react"
import EventsLayout from "../src/components/events/events-layout";
import Layout from "../src/components/layout"
import SEO from "../src/components/seo";

const InternationalPage = () =>  {
    return (
        <Layout>
            <SEO title="International"/>
            <EventsLayout
                current_page="international"
                events={
                    {
                        'conferences': [],
                        'eseminars': [],
                        'seminars': [],
                    }
                }
            />
        </Layout>
    );
};

export default InternationalPage;