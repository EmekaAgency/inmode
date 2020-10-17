import React from 'react';
import { Link } from "gatsby";
import { resolve_mini_menu_opened } from '../../functions/resolve_mini_menu_opened';
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import Menu from '../menu';

const MenuTitleImage = ({menu, prop_key, openOnClick}) => {

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
        <ul key={prop_key} className="menu-title menu-image">
            {menu.url ?
                <Link
                    className="menu-title menu-image"
                    to={menu.url || "#"}
                    onClick={(e) => {resolveOnClick(e, true);}}
                >
                    {format_string(menu.title)}
                </Link>
                :
                <div
                    className="menu-title menu-image"
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

MenuTitleImage.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired,
    openOnClick: PropTypes.bool.isRequired
}

MenuTitleImage.defaultProps = {
    menu: {},
    prop_key: null,
    openOnClick: false
}
  
export default MenuTitleImage;
