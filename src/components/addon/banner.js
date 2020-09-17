import React from "react"
import { get_img_path, resolve_image } from "../../functions/get_images";

const AddonBanner = ({ addon }) => {

    return (
        <div className="addon-banner">
            <div className="top-transition"></div>
            <div className="addon-banner-media">
                <img src={resolve_image(`products/addons/accutite`)} alt="accutite"/>
            </div>
            <div className="addon-banner-details">
                <img className="addon-banner-logo" src={get_img_path('/icons/products/addons/addon-img-txt.png')} alt="addon-logo-text"/>
                <div className="addon-banner-short-descr">{addon.short_descr}</div>
            </div>
            <div className="addon-banner-mini">
                <img src={resolve_image(`products/addons/addon-product-banner-mini`)} alt="addon-banner-mini"/>
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