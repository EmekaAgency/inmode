import React from "react";

const AddonBanner = ({ datas }) => {
    
    if(!datas || datas.length === 0) {
        return false;
    }

    return (
        <div className="addon-banner">
            <div className="top-transition"></div>
            <div className="addon-banner-media">
                <img
                    src={datas.left_img.childImageSharp.fluid.srcWebp}
                    srcSet={datas.left_img.childImageSharp.fluid.srcSetWebp || null}
                    alt="addon-banner"
                />
            </div>
            <div className="addon-banner-details">
                <img
                    className="addon-banner-logo"
                    src={datas.right_img.childImageSharp.fluid.srcWebp}
                    alt="addon-logo-text"
                />
                <div className="addon-banner-short-descr">{datas.right_text}</div>
            </div>
            <div className="addon-banner-mini">
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