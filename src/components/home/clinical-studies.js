import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const ClinicalStudies = () => {

    const [images] = React.useState(useStaticQuery(graphql`
        {
            back: file(relativePath: {eq: "home/media-bg.jpg"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
            study: file(relativePath: {eq: "home/studies-img.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
        }
    `));

    return (
        <div
            className="clinical-studies-home background-image"
            style={{
                'backgroundImage': 'url(' + images.back.childImageSharp.fluid.srcWebp + ')'
            }}
        >
            <div className="container">
                <div className="studies">
                    <h2 className="title">Études cliniques</h2>
                    <div className="content">
                        <img
                            src={images.study.childImageSharp.fluid.srcWebp}
                            srcSet={images.study.childImageSharp.fluid.srcSetWebp}
                            alt="studies-img"
                        />
                        <a href="https://inmodemd.com/clinical-papers/">
                            Voir les études
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

ClinicalStudies.propTypes = {

};

ClinicalStudies.defaultProps = {

};

export default ClinicalStudies;