import React from "react"

const ShopMenu = ({ products }) => {
    return (
        <>
            {products.map((group, key) => {
                return (
                    <ul className="menu-title menu-text transition">
                        <span
                            className="menu-title menu-text"
                        >
                            {group.fieldValue}
                        </span>
                    </ul>
                );
            })}
        </>
    );
};

ShopMenu.propTypes = {

};

ShopMenu.defaultProps = {

};

export default ShopMenu;