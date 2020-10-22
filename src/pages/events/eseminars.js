import React from "react"
import EventsLayout from "../../components/events/events-layout";
import Layout from "../../components/layout"

const EseminarsPage = ({ data }) =>  {
    return (
        <Layout>
        <EventsLayout
            current_page="webinars"
            events={
                {
                    'eseminars': data.allStrapiEseminar.nodes
                }
            }
        />
        </Layout>
    );
};

export default EseminarsPage;

export const query = graphql`
    {
        allStrapiEseminar(sort: {order: DESC, fields: created_at}) {
            nodes {
                created_at(formatString: "DD MMM. YY, HH:MM")
                addons {
                    Name
                }
                content
                preview {
                    childImageSharp {
                        fluid {
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
                title
            }
        }
    }
`;