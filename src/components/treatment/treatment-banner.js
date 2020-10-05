import { graphql, StaticQuery, useStaticQuery } from "gatsby";
import React from "react"

const TreatmentBanner = ({ datas }) => {

    // TODO récupérer images et vidéos pour chaque produit
    return (
        <div className="treatment-banner">
            <div className="top-transition"></div>
            <div className="treatment-banner-media">
                <img
                    src={datas.picture.childImageSharp.fluid.srcWebp || null}
                    srcSet={datas.picture.childImageSharp.fluid.srcSetWebp || null}
                    alt="banner"
                />
            </div>
            <div className="treatment-banner-short-descr">{datas.text}</div>
        </div>
    );
}

TreatmentBanner.defaultProps = {

}

TreatmentBanner.propTypes = {

}

export default TreatmentBanner;