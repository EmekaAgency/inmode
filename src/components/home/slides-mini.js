import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, useStaticQuery } from "gatsby";
import ProductsContext from "../contexts/products-context";

const SlidesMini = ({ from }) => {

    const [icons] = React.useState(useStaticQuery(graphql`
        {
            arrow_right: file(relativePath: { eq: "icons/arrow-right.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
        }
    `));

    const [products] = React.useState(React.useContext(ProductsContext).products);

    return (
        <div className={`slides-mini-${from}`}>
            {products && products.map((product, key) => 
                <div className="slide" key={key}>
                    <div className="product-image">
                        <img
                            src={product.ShopPicture.childImageSharp.fluid.srcWebp}
                            srcSet={product.ShopPicture.childImageSharp.fluid.srcSetWebp}
                            alt='product'
                        />
                    </div>
                    <div className="right">
                        <div className="product-icon">
                            <img
                                src={product.Icon.childImageSharp.fluid.srcWebp}
                                srcSet={product.Icon.childImageSharp.fluid.srcSetWebp}
                                alt={product.Name}
                            />
                        </div>
                        <div className="product-name">
                            {product.Name}
                        </div>
                        <div className="slide-view-detail">
                            Informations produit
                            <Link className="zone-link" to={product.MenuParams.url}></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

SlidesMini.propTypes = {

};

SlidesMini.defaultProps = {

};

export default SlidesMini;