import React from "react"
import EventsLayout from "../../components/events/events-layout";
import Layout from "../../components/layout"

const ConferencesPage = ({ data }) =>  {
    return (
        <Layout>
        <EventsLayout
            current_page="congrès"
            events={
                {
                    'conferences': data.allStrapiConference.nodes
                }
            }
        />
        </Layout>
    );
};

export default ConferencesPage;

export const query = graphql`
    {
        allStrapiConference(sort: {order: DESC, fields: begin}) {
            nodes {
                address
                begin(formatString: "DD MMM. YY, HH:MM")
                finish(formatString: "DD MMM. YY, HH:MM")
                maps_link
                picture {
                    childImageSharp {
                        fluid {
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
                place
                place_url
                short_descr
                title
            }
        }
    }  
`;