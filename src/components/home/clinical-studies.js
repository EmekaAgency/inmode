import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const ClinicalStudies = () => {

    const [images] = React.useState(useStaticQuery(graphql`
        {
            back: file(relativePath: {eq: "home/media-bg.webp"}) {
                publicURL
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
            // style={{
            //     'backgroundImage': 'url(' + images.back.childImageSharp.fluid.srcWebp + ')'
            // }}
            style={{
                'backgroundImage': 'url(' + images.back.publicURL + ')'
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
                        <a href="https://inmodemd.com/clinical-papers/" target="_blank" rel="noreferrer">
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