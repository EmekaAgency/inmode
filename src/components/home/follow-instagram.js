import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const FollowInstagram = () => {

    const [datas] = React.useState(useStaticQuery(graphql`
        {
            allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 4, filter: {username: {eq: "1317505554"}}) {
                edges {
                    node {
                        comments
                        likes
                        caption
                        localFile {
                            childImageSharp {
                                fluid {
                                    srcWebp
                                    srcSetWebp
                                }
                            }
                        }
                    }
                }
            }
            comments: file(relativePath: {eq: "icons/insta-comments.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                    }
                }
            }
            likes: file(relativePath: {eq: "icons/insta-likes.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                    }
                }
            }
        }
    `));

    return (
        <div className="follow-instagram">
            <div className="container">
                <h2>
                    <a href="https://www.instagram.com/inmode.france">
                        Suivez nous sur Instagram
                    </a>
                </h2>
                <div className="wrapper">
                    {datas.allInstaNode.edges.map((post, key) => {
                        return(
                            <div key={key} className="elem">
                                <img
                                    className="background-image"
                                    src={post.node.localFile.childImageSharp.fluid.srcWebp}
                                    srcSet={post.node.localFile.childImageSharp.fluid.srcSetWebp}
                                    alt={`insta-${key + 1}`}
                                />
                                <div className="stats">
                                    <div className="stats-comments">
                                        <img
                                            src={datas.comments.childImageSharp.fluid.srcWebp}
                                        />
                                        <div>{post.node.comments}</div>
                                    </div>
                                    <div className="stats-likes">
                                        <img
                                            src={datas.likes.childImageSharp.fluid.srcWebp}
                                        />
                                        <div>{post.node.likes}</div>
                                    </div>
                                </div>
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