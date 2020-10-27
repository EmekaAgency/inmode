import React from "react"
import ProductsContext from "../contexts/products-context";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { format_title } from "../../functions/format_title";

const AddonNavigation = ({ name, exist = {} }) => {

    let temp = [
        {'name': 'what is it', 'url': '#what-is'},
        {'name': 'before and after\'s', 'url': '#before-after'},
        {'name': 'what can you treat', 'url': '#what-treat'},
    ];

    if(exist['studies']) {
        temp.push({'name': 'clinical studies', 'url': '#studies'});
    }

    const [menus] = React.useState(temp);

    return (
        <div className="addon-navigation">
            {menus.map((menu, key) => {
                return (
                    <div key={key} className="addon-nav">
                        <AnchorLink to={menu.url} className="addon-nav">
                            {menu.name}
                        </AnchorLink>
                    </div>
                );
            })}
        </div>
    );
}

AddonNavigation.defaultProps = {

}

AddonNavigation.propTypes = {

}

export default AddonNavigation;