import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import { format_string } from "../../functions/format_string";
import { resolve_image } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const ProductDetails = ({  }) => {
  
    const product = React.useContext(ProductsContext).product(5);

    return (
        <div className="product-details">
            <div id="what-is" className="what-is transition">
                <div className="product-details-img transition">
                    <img src={resolve_image(`products/${format_string(product.name)}-p`)} alt={product.name}/>
                </div>
                <div className="title">
                    {`What is ${format_string(product.name)} ?`}
                </div>
                <p className="text">
                    {product.descr + '. Incididunt Lorem consequat minim incididunt ullamco tempor et ad. Voluptate dolor ipsum enim id consequat do nulla. Id non magna culpa duis est voluptate deserunt nostrud est. Aute ut ex nisi veniam reprehenderit ipsum sint anim elit culpa ad commodo ut.'}
                </p>
            </div>
            <div id="key-benefits" className="key-benefits transition">
                <div className="title">
                    {'key benefits:'}
                </div>
                {/* TODO table key_benefits product_id + position */}
                {[
                    'Eiusmod aliqua eiusmod consequat magna nostrud ad reprehenderit eu sit laborum. Do nisi sunt qui qui a.',
                    'Sunt sit consequat fugiat aliqua in dolore ea. Consectetur reprehenderit culpa ea veniam aute laboris.',
                    'Anim et esse veniam dolore reprehenderit anim velit elit ex incididunt. Aute ex voluptate veniam deser.'
                ].map((benefit, key) => {
                    return (
                        <div key={key} className="key">
                            <img src={resolve_image('icons/key_benefit')} alt="key_benefit"/>
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