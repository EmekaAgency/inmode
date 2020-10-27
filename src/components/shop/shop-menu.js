import React from "react"

const ShopMenu = ({ products, filter }) => {
    return (
        <>
            {products.map((group, key) => {
                return (
                    <ul data-value={group.fieldValue} key={key} className="menu-title menu-text transition" onClick={(e) => {filter(e);}}>
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