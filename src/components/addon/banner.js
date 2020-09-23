import React from "react"
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const AddonBanner = ({ datas }) => {
  
    const addon = React.useContext(ProductsContext).addons[0];

    const img_extensions = ['jpg', 'png', 'svg', 'jpeg', 'webp', 'bmp'];
    const [index, setIndex] = React.useState(0);

    const resolve_image = (name ) => {
        let img = new Image();
        img.src = get_img_path(`${name}.${img_extensions[index]}`);
        img.onerror = function() {
            setIndex(index + 1);
            return resolve_image(name);
        };
    
        return get_img_path(`${name}.${img_extensions[index]}`);
    };

    return (
        <div className="addon-banner">
            <div className="top-transition"></div>
            <div className="addon-banner-media">
                <img
                    src={datas.banner_left.publicURL}
                    alt="accutite"
                />
            </div>
            <div className="addon-banner-details">
                <img
                    className="addon-banner-logo"
                    src={datas.banner_right_title.publicURL}
                    alt="addon-logo-text"
                />
                <div className="addon-banner-short-descr">{datas.short_descr}</div>
            </div>
            <div className="addon-banner-mini">
                <img
                    src={datas.banner_mini.publicURL}
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