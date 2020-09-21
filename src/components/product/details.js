import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import { format_string } from "../../functions/format_string";
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const ProductDetails = ({  }) => {
  
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

    return (
        <div className="product-details">
            <div id="what-is" className="what-is transition">
                <div className="product-details-img transition">
                    <img
                        src={get_img_path(`products/${product.name}-p.png`)}
                        alt={product.name}
                    />
                </div>
                <div className="title">
                    {`What is ${format_string(product.name)} ?`}
                </div>
                <p className="text">
                    {product.short_descr}
                </p>
            </div>
            <div id="key-benefits" className="key-benefits transition">
                <div className="title">
                    {'key benefits:'}
                </div>
                {/* TODO table key_benefits product_id + position */}
                {[
                    'Morpheus8 delivers the deepest fractional treatments available, penetrating subdermal tissue up to 8mm (7mm + 1mm thermal profile).',
                    'Dual Handpieces allow for increased treatment functionality: Morpheus8 for smaller treatment areas and Morpheus8 Body for larger and deeper tissue treatments.',
                    'Four fractional tips with different microneedle configurations (Prime 12 pin, Resurfacing 24 pin, Morpheus8 24 pin, and Body 40 pin) deliver clinically proven RF energy to multiple treatment depths (0.5mm – 7mm)',
                    'Intelligent programmable technology and large, easy to navigate LCD treatment screen'
                ].map((benefit, key) => {
                    return (
                        <div key={key} className="key">
                            <img
                                src={get_img_path('icons/key_benefit.png')}
                                alt="key_benefit"
                            />
                            <div className="text">{benefit}</div>
                        </div>
                    );
                })}
            </div>
            <a className="request-informations" href="#">
                request informations
            </a>
        </div>
    );
}

ProductDetails.defaultProps = {

}

ProductDetails.propTypes = {

}

export default ProductDetails;