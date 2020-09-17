import React from "react"
import { format_string } from "../../functions/format_string";
import { resolve_image, get_img_path } from "../../functions/get_images"

const ProductBanner = ({ product }) => {
    // TODO récupérer images et vidéos pour chaque produit
    return (
        <div className="product-banner transition">
            <div className="top-transition"></div>
            <div className="product-banner-media">
                <video
                    playsInline="" 
                    autoPlay="autoplay"
                    loop={true}
                    muted={true}
                    poster={resolve_image(`products/${format_string(product.name)}-p`)}
                    height={380}
                >
                    <source
                        src="https://inmodemd.com/wp-content/uploads/2019/07/Workstation-BodyTite-website-v4.mp4"
                        type="video/mp4"
                    />
                    <track src="" kind="subtitles" srcLang="en" label="English"></track>
                </video>
            </div>
            <div className="product-banner-details">
                <img className="product-banner-logo" src={get_img_path('/icons/products/bodytite-img-txt.png')} alt="bodytite-logo-text"/>
                <div className="product-banner-short-descr">{product.short_descr}</div>
            </div>
            <div className="product-banner-mini">
                <img src={resolve_image(`products/bodytite-product-banner-mini`)} alt="bodytite-banner-mini"/>
            </div>
            <div className="product-banner-mask"></div>
        </div>
    );
}

ProductBanner.defaultProps = {

}

ProductBanner.propTypes = {

}

export default ProductBanner;