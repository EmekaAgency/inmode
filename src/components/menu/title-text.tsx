import React from 'react';
import { Link } from "gatsby";
import { resolve_mini_menu_opened } from '../../functions/resolve_mini_menu_opened';
import { format_string } from '../../functions/format_string';
import Menu from '../menu';
import { enableMainScroll } from '../../functions/disable-scroll';
import { InmodePanel_Menu_Interface } from '../interfaces';

const MenuTitleText = ({menu, prop_key, openOnClick}:MenuTitleText) => {

    const resolveOnClick = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent> | any, is_link:boolean) => {
        if(openOnClick === true) {
            !is_link && e.preventDefault();
            if(e.target.parentNode.classList.contains('opened')) {
                e.target.parentNode.classList.remove('opened');
            }
            else {
                e.preventDefault();
                resolve_mini_menu_opened();
                e.target.parentNode.classList.add('opened')
            }
        }
    }

    return (
        <ul key={prop_key} className="menu-title menu-text">
            {menu.url ?
                menu.internal_link ?
                    <Link
                        className="menu-title menu-text"
                        to={menu.url || "#"}
                        onClick={(e) => {
                            resolveOnClick(e, true);
                            enableMainScroll();
                        }}
                        title={format_string(menu.title || '')}
                    >
                        {format_string(menu.title || '')}
                    </Link>
                    :
                    <a
                        className="menu-title menu-text"
                        href={menu.url || "#"}
                        onClick={(e) => {
                            resolveOnClick(e, true);
                            enableMainScroll();
                        }}
                        target="_blank"
                        rel="noreferrer"
                        title={format_string(menu.title || '')}
                    >
                        {format_string(menu.title || '')}
                    </a>
                :
                <div
                    className="menu-title menu-text"
                    onClick={(e) => {resolveOnClick(e, false);}}
                >
                    {format_string(menu.title || '')}
                </div>
            }
            <ul className="dropdown-menu">
                {menu.menus && menu.menus.length > 0 && menu.menus.map((sub, key_sub) => {
                    return (
                        <Menu key={key_sub} prop_key={key_sub} menu={sub}/>
                    );
                })}
            </ul>
        </ul>
    );
};

interface MenuTitleText {
    menu: InmodePanel_Menu_Interface;
    prop_key: number | undefined;
    openOnClick?: boolean;
}

export default MenuTitleText;
