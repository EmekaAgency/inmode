import { Link } from "gatsby";
import React from "react";

const ShopProduct = ({ product }) => {
    return (
        <div className="workstation-product">
            {product.Name}
        </div>
    );
}

ShopProduct.propTypes = {

};

ShopProduct.defaultProps = {

}

export default ShopProduct;