import { graphql } from "gatsby";
import React from "react"
import EventsLayout from "../../components/events/events-layout";
import Layout from "../../components/layout"

const CongressPage = ({ data }) =>  {
    return (
        <Layout>
        <EventsLayout
            current_page="congrès"
            upcoming_events={data.incoming.nodes}
            past_events={data.past.nodes}
        />
        </Layout>
    );
};

export default CongressPage;

export const query = graphql`
    query CongressPage($today_string: Date!) {
        incoming: allStrapiEvent(filter: {begin: {gte: $today_string}, type: {eq: "congres"}}, sort: {fields: begin, order: ASC}) {
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
        past: allStrapiEvent(filter: {begin: {lt: $today_string}, type: {eq: "congres"}}, sort: {fields: begin, order: DESC}) {
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