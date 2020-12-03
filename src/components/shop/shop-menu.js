import { Link } from "gatsby";
import React from "react";
import { useWindowSize } from "../../functions/window-size";

const ShopMenu = ({ products, filter, tags }) => {

    const size = useWindowSize();

    const accordion_width = 768;

    const [maxHeight, setMaxHeight] = React.useState(0);
    const [openedAccordion, setOpenedAccordion] = React.useState(false);

    const resolveAccordion = ( e ) => {
        e.currentTarget.classList.toggle('opened');
        var panel = e.currentTarget.nextElementSibling;
        panel.classList.toggle('opened');
        if (maxHeight) {
            setMaxHeight(null);
        }
        else {
            panel.classList.contains("opened") && setMaxHeight(`${panel.children.length * 60}px`);
        }
        setOpenedAccordion(true);
    }

    return (
        <div className="tab-navigation transition">
            {size.width < accordion_width && <span
                    id="title-accordion"
                    className="title-accordion title transition"
                    onClick={(e) => {resolveAccordion(e);}}
                >
                    Produits
                </span>
            }
            <div
                id="accordion"
                className="accordion transition"
                style={{
                    maxHeight: size.width < accordion_width ? openedAccordion ? maxHeight : 0 : 'unset',
                    width: '100%'
                }}
            >
                {products.map((product, key) => {
                    // if(size.width >= accordion_width) {
                        return (
                            <ul
                                data-value={product.fieldValue}
                                key={key} 
                                className={`tab-link menu-title menu-text transition${tags.length > 0 && tags.indexOf(product.fieldValue) >= 0 ? ' selected' : ''}`}
                                onClick={(e) => {filter(e);}}
                                key={key}
                            >
                                <span
                                    className="menu-title menu-text"
                                >
                                    {product.fieldValue}
                                </span>
                            </ul>
                        );
                    // }
                })}
            </div>
        </div>
        // <>
        //     {products.map((group, key) => {
        //         return (
        //             <ul data-value={group.fieldValue} key={key} className="menu-title menu-text transition" onClick={(e) => {filter(e);}}>
        //                 <span
        //                     className="menu-title menu-text"
        //                 >
        //                     {group.fieldValue}
        //                 </span>
        //             </ul>
        //         );
        //     })}
        // </>
    );
};


ShopMenu.propTypes = {

};

ShopMenu.defaultProps = {

};

export default ShopMenu;