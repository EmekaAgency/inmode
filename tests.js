import React from "react"

export const query = graphql`
    query AddonTemplates($id: String!) {
        strapiAddonTemplates(id: {eq: $id}) {
            TitrePage
            what_treats {
                description
                title
                image {
                    publicURL
                }
            }
        }
    }
`;



// {
//     {
//         type: Slider_zefj,
//         identifiant: 65464651351,
//         under: [
//             {
//                 type: Button3
//                 id: 654654,
//                 under: [
//                      Buttton3
//                      654654
//                 ]
//             },
//             {

//             },
//             {

//             },
//         ]
//     },
//     {
//         type: Slider2,
//         identifiant: 65464651351,
//         under: [],
//     }

// }

// <Slider_zejv identifiant>
//     <Button3 id></Button3>
// </Slider_zejv>
// <Slider2></Slider2>

const Component = ({ data }) => {

    const query = React.useState(data.strapiAddonTemplates);

    
    const [headerTop] = React.useState(useStaticQuery(graphql`
        {
            allMysqlHeaderTop {
                nodes {
                    variant
                    url
                    under
                    type
                    position
                    name
                    mysqlId
                    container
                }
            }
        }
    `).allMysqlHeaderTop.nodes);

    return (
        <>
            <StaticQuery
                query={graphql`
                {
                    allStrapiAddonTemplates {
                        edges {
                            node {
                                BeforeAfterTitle
                                TitrePage
                                TreatTitle
                                VideoTitle
                            }
                        }
                    }
                }
                `}
                render={
                    data => {
                        (
                            <pre>
                                {/* TON HTML */}
                                {JSON.stringify(data, null, 4)}
                            </pre>
                        )
                    }
                }
            ></StaticQuery>
        </>
    );
};

Component.propTypes = {
    data: PropTypes.array.isRequired,
}

Component.defaultProps = {
    data: [],
}

export default Component;