import React from "react"
import EventsLayout from "../../components/events/events-layout";
import Layout from "../../components/layout"

const SeminarsPage = ({ data }) =>  {
    return (
        <Layout>
        <EventsLayout
            current_page="workshops"
            events={
                {
                    'seminars': data.allStrapiSeminar.nodes
                }
            }
        />
        </Layout>
    );
};

export default SeminarsPage;

export const query = graphql`
    {
        allStrapiSeminar(sort: {order: DESC, fields: begin}) {
            nodes {
                address
                begin(formatString: "DD MMM. YY, HH:MM")
                finish(formatString: "DD MMM. YY, HH:MM")
                map_link
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