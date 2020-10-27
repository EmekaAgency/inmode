import { graphql } from "gatsby";
import React from "react"
import EventsLayout from "../components/events/events-layout";
import Layout from "../components/layout"

const EventsPage = ({ data }) =>  {

    return (
        <Layout>
            <EventsLayout
                current_page="upcoming events"
                upcoming_events={data.incoming.nodes}
            />
        </Layout>
    );
};

export default EventsPage;

export const query = graphql`
    query EventsPage($today_string: Date!) {
        incoming: allStrapiEvent(filter: {begin: {gte: $today_string}}, sort: {fields: begin, order: ASC}) {
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

// TODO list
// faire un seul component event qui prenne key en param_tre pour afficher le premier élément différement (class right or left avec flex order 1 2)
// faire la requête pour les incoming et les pasts
//      - from now to last
//      - <hr/>
//      - from now to first