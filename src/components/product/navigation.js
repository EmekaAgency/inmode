import React from "react"

const ProductNavigation = ({ product }) => {

    const menus = [
        {'name': 'what is it', 'url': '#what-is'},
        {'name': 'key benefits', 'url': '#key-benefits'},
        {'name': 'technologies on the workstation', 'url': '#technologies'},
        {'name': 'clinical studies', 'url': '#studies'}
    ];

    return (
        <div className="product-navigation">
            {menus.map((menu, key) => {
                return (
                    <div className="product-nav">
                        <a key={key} href={menu.url} className="product-nav">
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