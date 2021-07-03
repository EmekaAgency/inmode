import React from 'react';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';
import { enableMainScroll } from '../../functions/disable-scroll';
import { InmodePanel_Menu_Interface } from '../interfaces';

const MenuSingleImage = ({menu, prop_key = 0}:MenuSingleImage) => {

    return (
        <>
            {
                menu.url ?
                    menu.internal_link ?
                    <Link key={prop_key} className="menu-single menu-image social-btn" to={menu.url || "#"} onClick={(e) => {enableMainScroll();}} title={format_string(menu.title || '')} target="_blank" rel="noreferrer">
                        <img
                            className="init"
                            src={menu.icon ? menu.icon.url || menu.icon.publicURL : ""}
                            alt={format_string(menu.title || '')}
                        />
                        <img
                            className="blue"
                            src={menu.icon_hover ? menu.icon_hover.url || menu.icon_hover.publicURL : ""}
                            alt={format_string(menu.title || '')}
                        />
                    </Link>
                    :
                    <a key={prop_key} className="menu-single menu-image social-btn" href={menu.url || "#"} target="_blank" rel="noreferrer" onClick={(e) => {enableMainScroll();}} title={format_string(menu.title || '')}>
                        <img
                            className="init"
                            src={menu.icon != undefined ? menu.icon.url || menu.icon.publicURL : ""}
                            alt={format_string(menu.title || '')}
                        />
                        <img
                            className="blue"
                            src={menu.icon_hover != undefined ? menu.icon_hover.url || menu.icon_hover.publicURL : ""}
                            alt={format_string(menu.title || '')}
                        />
                    </a>
                :
                <div key={prop_key} className="menu-single menu-image social-btn">
                    <img
                        className="init"
                        src={menu.icon != undefined ? menu.icon.url || menu.icon.publicURL : ""}
                        alt={format_string(menu.title || '')}
                    />
                    <img
                        className="blue"
                        src={menu.icon_hover != undefined ? menu.icon_hover.url || menu.icon_hover.publicURL : ""}
                        alt={format_string(menu.title || '')}
                    />
                </div>
            }
        </>
    );
};

interface MenuSingleImage {
    menu: InmodePanel_Menu_Interface;
    prop_key: number;
};

export default MenuSingleImage;
