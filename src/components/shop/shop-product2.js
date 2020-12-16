import { Link } from "gatsby";
import React from "react";

const ShopProduct = ({ product, special }) => {

    return (
        <div className={`workstation-product transition${special ? " special" : ""}`}>
            <div className={`workstation-front transition${special ? " special" : ""}`}>
                <div className={`workstation-picture${special ? " special" : ""}`}>
                    <img src={product.ShopPicture.childImageSharp.fluid.srcWebp} alt={`${product.Name}-pic`} className="transition"/>
                </div>
                <div className={`workstation-name transition${special ? " special" : ""}`}>
                    {product.Name}
                </div>
            </div>
            <div className={`workstation-more-infos transition${special ? " special" : ""}`}>
                <div className={`workstation-description custom-scrollbar${special ? " special" : ""}`}>{product.ShopDescription}</div>
                <div className={`workstation-more-details transition${special ? " special" : ""}`}>
                    En savoir plus
                    <Link className={`zone-link${special ? " special" : ""}`} to={`/workstation/${product.MenuParams.url}`}></Link>
                </div>
            </div>
        </div>
    );
}

ShopProduct.propTypes = {

};

ShopProduct.defaultProps = {

}

export default ShopProduct;