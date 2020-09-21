import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ProductsContext from "../contexts/products-context";

const ProductNavigation = ({  }) => {
  
    const product = React.useContext(ProductsContext).products[0];

    const menus = React.useContext(ProductsContext).product_navigation;

    return (
        <div className="product-navigation">
            {menus.map((menu, key) => {
                return (
                    <div key={key} className="product-nav">
                        <a href={menu.url} className="product-nav">
                            {menu.name}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

ProductNavigation.defaultProps = {

}

ProductNavigation.propTypes = {

}

export default ProductNavigation;