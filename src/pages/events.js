import { graphql } from "gatsby";
import React from "react"
import EventsLayout from "../components/events/events-layout";
import Layout from "../components/layout"

const EventsPage = ({ data }) =>  {
    return (
        <Layout>
            <EventsLayout
                current_page="upcoming events"
                events={
                    {
                        'conferences': data.allStrapiConference.nodes,
                        'eseminars': data.allStrapiEseminar.nodes,
                        'seminars': data.allStrapiSeminar.nodes,
                    }
                }
            />
        </Layout>
    );
};

export default EventsPage;

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