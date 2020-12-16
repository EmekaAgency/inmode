import React from 'react';
import { Link } from "gatsby";
import { resolve_mini_menu_opened } from '../../functions/resolve_mini_menu_opened';
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import Menu from '../menu';
import { enableMainScroll } from '../../functions/disable-scroll';

const MenuTitleText = ({menu, prop_key, openOnClick}) => {

    const resolveOnClick = (e, is_link) => {
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
                    >
                        {format_string(menu.title)}
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
                    >
                        {format_string(menu.title)}
                    </a>
                :
                <div
                    className="menu-title menu-text"
                    onClick={(e) => {resolveOnClick(e, false);}}
                >
                    {format_string(menu.title)}
                </div>
            }
            <ul className="dropdown-menu">
                {menu.menus.length > 0 && menu.menus.map((sub, key_sub) => {
                    return (
                        <Menu key={key_sub} prop_key={key_sub} menu={sub}/>
                    );
                })}
            </ul>
        </ul>
    );
}

MenuTitleText.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired,
    openOnClick: PropTypes.bool.isRequired
}

MenuTitleText.defaultProps = {
    menu: {},
    prop_key: null,
    openOnClick: false
}
  
export default MenuTitleText;
