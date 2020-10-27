import React from "react"
import EventsLayout from "../../components/events/events-layout";
import Layout from "../../components/layout"

const ConferencesPage = ({ data }) =>  {
    return (
        <Layout>
        <EventsLayout
            current_page="workshops"
            events={data.allStrapiEvent.nodes}
        />
        </Layout>
    );
};

export default ConferencesPage;

export const query = graphql`
    {
        allStrapiEvent(sort: {order: DESC, fields: begin}, filter: {type: {eq: "workshop"}}) {
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
                type
                video_url
                addons {
                    Name
                }
            }
        }
    }
`;