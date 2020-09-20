import React from "react"
import { format_string } from "../../functions/format_string";
import { resolve_image, get_img_path } from "../../functions/get_images"
import ProductsContext from "../contexts/products-context";

const ProductBanner = ({  }) => {
  
    const product = React.useContext(ProductsContext).products[0];console.log(product);

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
                        src="https://inmodemd.com/wp-content/uploads/2020/08/Morpheus8-Workstation-Video.mp4"
                        type="video/mp4"
                    />
                    <track src="" kind="subtitles" srcLang="en" label="English"></track>
                </video>
            </div>
            <div className="product-banner-details">
                <img className="product-banner-logo" src={resolve_image(`products/${product.name}-img-txt`)} alt="bodytite-logo-text"/>
                {/* <div className="product-banner-short-descr">{product.short_descr}</div> */}
                <div className="product-banner-short-descr">
                    FULL BODY FRACTIONAL REMODELING
                </div>
            </div>
            <div className="product-banner-mini">
                <img src={resolve_image(`products/${product.name}/banner-mini`)} alt={`${format_string(product.name)}-banner-mini`}/>
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