import React from "react"
import { format_string } from "../../functions/format_string";
import { get_img_path } from "../../functions/get_images"
import ProductsContext from "../contexts/products-context";

const ProductBanner = ({  }) => {
  
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
  
    const product = React.useContext(ProductsContext).products[0];

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
                    poster={get_img_path(`products/${product.name}-p.png`)}
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
                <img
                    className="product-banner-logo"
                    src={get_img_path(`products/${product.name}-img-txt.png`)}
                    alt="bodytite-logo-text"
                />
                {/* <div className="product-banner-short-descr">{product.short_descr}</div> */}
                <div className="product-banner-short-descr">
                    FULL BODY FRACTIONAL REMODELING
                </div>
            </div>
            <div className="product-banner-mini">
                <img
                    src={get_img_path(`products/${product.name}/banner-mini.jpg`)}
                    alt={`${format_string(product.name)}-banner-mini`}
                />
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