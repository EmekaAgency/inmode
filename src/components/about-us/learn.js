import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Learn = ({ from = "" }) => {

    const [datas] = React.useState(useStaticQuery(graphql`
        {
            strapiAboutUs {
                menus {
                    title
                    url
                }
                learn_bg {
                    childImageSharp {
                        fluid {
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
                learn_icon {
                    childImageSharp {
                        fluid {
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
                learn_txts {
                    title
                    text
                }
                learn_values {
                    texte
                }
            }
            key_benefit: file(relativePath: {eq: "icons/key_benefit.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                    }
                }
            }
        }
    `));
    
    return (
        <div className={`learn${from ? ` ${from}` : ''}`}>
            <div className="container">
                <div className="know-more">
                    <span>En savoir plus sur:</span>
                </div>
                <div className="goals">
                    <img
                        src={datas.strapiAboutUs.learn_icon.childImageSharp.fluid.srcWebp}
                        srcSet={datas.strapiAboutUs.learn_icon.childImageSharp.fluid.srcSetWebp}
                    />
                    <div className="texts">
                        {datas.strapiAboutUs.learn_txts && datas.strapiAboutUs.learn_txts.map((txt, key) => {
                            return (
                                <>
                                    <div key={key} className="title">
                                        {txt.title}
                                    </div>
                                    <div key={key} className="text">
                                        {txt.text}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className="values">
                    <div className="title">FUNDAMENTAL VALUES:</div>
                    {datas.strapiAboutUs.learn_values && datas.strapiAboutUs.learn_values.map((value, key) => {
                    return (
                        <div key={key} className="list-elem">
                            <img
                                src={datas.key_benefit.childImageSharp.fluid.srcWebp}
                                alt={`elem-${key}`}
                                className="before-text"
                            />
                            <div className="text">{value.texte}</div>
                        </div>
                    );
                    })}
                </div>
            </div>
        </div>
    );
};

Learn.propTypes = {

};

Learn.defaultProps = {

};

export default Learn;