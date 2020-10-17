import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { get_img_path } from "../../functions/get_images";

const FollowInstagram = () => {

    const datas = useStaticQuery(graphql`
        {
            allInstaNode(limit: 4) {
                edges {
                    node {
                        comments
                        localFile {
                            childImageSharp {
                                fluid {
                                    srcWebp
                                    srcSetWebp
                                }
                            }
                        }
                        likes
                        username
                        timestamp
                    }
                }
            }
        }
    `).allInstaNode.edges;

    return (
        <div className="follow-instagram">
            <div className="container">
                <h2>
                    <a href="#">
                        Suivez nous sur Instagram
                    </a>
                </h2>
                <div className="wrapper">
                    {datas.map((post, key) => {
                        return(
                            <div key={key} className="elem">
                                <img
                                    className="background-image"
                                    src={post.node.localFile.childImageSharp.fluid.srcWebp}
                                    srcSet={post.node.localFile.childImageSharp.fluid.srcSetWebp}
                                    alt={`insta-${key + 1}`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

FollowInstagram.propTypes = {

};

FollowInstagram.defaultProps = {

};

export default FollowInstagram;