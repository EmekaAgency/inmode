import React from "react"
import EventsLayout from "../../components/events/events-layout";
import Layout from "../../components/layout"

const InternationalPage = () =>  {
    return (
        <Layout>
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