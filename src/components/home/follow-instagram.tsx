import React from "react";

const FollowInstagram = ({}:FollowInstagram) => {

    // const [datas] = React.useState(useStaticQuery(graphql`
    //     {
    //         allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 4, filter: {username: {eq: "1317505554"}}) {
    //             edges {
    //                 node {
    //                     comments
    //                     likes
    //                     caption
    //                     localFile {
    //                         childImageSharp {
    //                             fluid {
    //                                 srcWebp
    //                                 srcSetWebp
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)).allInstaNode.edges;

    return (
        <div className="follow-instagram">
            {/* <div className="container"> */}
                <h2>
                    <a href="https://www.instagram.com/inmode.france" target="_blank" rel="noreferrer" title="Suivez-nous sur Instagram">
                        Suivez nous sur Instagram
                    </a>
                </h2>
                <div className="wrapper">
                    {/* {datas.map((post, key) => {
                        return(
                            <div key={key} className="elem">
                                <img
                                    className="background-image"
                                    src={post.node.localFile.childImageSharp.fluid.srcWebp}
                                    srcSet={post.node.localFile.childImageSharp.fluid.srcSetWebp}
                                    alt={`insta-${key + 1}`}
                                />
                                <a href="https://www.instagram.com/inmodeaesthetics/" className="zone-link" target="_blank" rel="noreferrer" title="Suivez Inmode sur Instagram"></a>
                            </div>
                        );
                    })} */}
                </div>
            {/* </div> */}
        </div>
    );
};

interface FollowInstagram {

};

export default FollowInstagram;