import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { format_title } from "../../functions/format_title";

const ProductNavigation = ({ name, exist }) => {

    let temp = [
        {'name': 'what is it', 'url': '#what-is'},
        {'name': 'key benefits', 'url': '#key-benefits'},
        {'name': 'technologies on the workstation', 'url': '#technologies'},
    ];

    if(exist['studies']) {
        temp.push({'name': 'clinical studies', 'url': '#studies'});
    }

    if(exist['before-after']) {
        temp.splice(3, 0, {'name': 'before and after\'s', 'url': '#before-after'}).join();
    }
    
    const [menus] = React.useState(temp);

    return (
        <div className="product-navigation">
            {menus.map((menu, key) => {
                return (
                    <div key={key} className="product-nav">
                        <AnchorLink to={format_title(name, true) + menu.url} className="product-nav">
                            {menu.name}
                        </AnchorLink>
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