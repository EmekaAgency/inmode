import React from "react"
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";
import Img from "gatsby-image"

const AddonBanner = ({ datas }) => {
    
    if(!datas || datas.length == 0) {
        return false;
    }

    return (
        <div className="addon-banner">
            <div className="top-transition"></div>
            <div className="addon-banner-media">
                {/* <Img
                    fluid={datas.left_img.childImageSharp.fluid}
                    fadeIn={true}
                    style={{position: 'unset'}}
                    imgStyle={{objectFit: 'contain'}}
                    durationFadeIn={100}
                /> */}
                <img
                    src={datas.left_img.childImageSharp.fluid.srcWebp}
                    srcSet={datas.left_img.childImageSharp.fluid.srcSetWebp || null}
                />
            </div>
            <div className="addon-banner-details">
                {/* <Img
                    fluid={datas.right_img.childImageSharp.fluid}
                    fadeIn={true}
                    style={{position: 'unset'}}
                    imgStyle={{objectFit: 'contain'}}
                    durationFadeIn={100}
                /> */}
                <img
                    className="addon-banner-logo"
                    src={datas.right_img.childImageSharp.fluid.srcWebp}
                    alt="addon-logo-text"
                />
                <div className="addon-banner-short-descr">{datas.right_text}</div>
            </div>
            <div className="addon-banner-mini">
                {/* <Img
                    fluid={datas.mini.childImageSharp.fluid}
                    fadeIn={true}
                    style={{position: 'unset'}}
                    imgStyle={{objectFit: 'contain'}}
                    durationFadeIn={100}
                /> */}
                <img
                    src={datas.mini.childImageSharp.fluid.srcWebp}
                    alt="addon-banner-mini"
                />
            </div>
            <div className="addon-banner-mask"></div>
        </div>
    );
}

AddonBanner.defaultProps = {

}

AddonBanner.propTypes = {

}

export default AddonBanner;