import React from "react"
import ProductsContext from "../contexts/products-context";

const AddonNavigation = ({  }) => {
  
  const addon = React.useContext(ProductsContext).addons[0];

    const menus = React.useContext(ProductsContext).addon_navigation;

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