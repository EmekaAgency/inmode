import React from "react"
import ProductsContext from "../contexts/products-context";

const AddonNavigation = ({  }) => {

    const [menus] = React.useState([
        {'name': 'what is it', 'url': '#what-is'},
        {'name': 'before and after\'s', 'url': '#before-after'},
        {'name': 'what can you treat', 'url': '#what-treat'},
        {'name': 'clinical studies', 'url': '#studies'}
    ]);

    return (
        <div className="addon-navigation">
            {menus.map((menu, key) => {
                return (
                    <div key={key} className="addon-nav">
                        <a href={menu.url} className="addon-nav">
                            {menu.name}
                        </a>
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