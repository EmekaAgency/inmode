import React from 'react';
import { Link } from "gatsby";
import { resolve_mini_menu_opened } from '../../functions/resolve_mini_menu_opened';
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import Menu from '../menu';

const MenuSideMenuText = ({menu, prop_key, openOnClick}) => {

    const resolveOnClick = (e) => {
        if(openOnClick === true) {
            e.preventDefault();
            if(e.target.parentNode.classList.contains('opened')) {
                e.target.parentNode.classList.remove('opened');
            }
            else {
                resolve_mini_menu_opened();
                e.target.parentNode.classList.add('opened')
            }
        }
    }

    return (
        <ul key={prop_key} className="menu-side-menu menu-text transition">
            <Link
                className="menu-side-menu menu-text"
                to={menu.url || "#"}
                onClick={(e) => {resolveOnClick(e);}}
            >
                {format_string(menu.name)}
            </Link>
            <ul className="dropside-menu">
                {menu.under && menu.under.map((content, key) => {
                    return (
                        <Menu key={key} prop_key={key} menu={content}/>
                    );
                })}
            </ul>
        </ul>
    );
}

MenuSideMenuText.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired,
    openOnClick: PropTypes.bool.isRequired
}

MenuSideMenuText.defaultProps = {
    menu: {},
    prop_key: null,
    openOnClick: false
}
  
export default MenuSideMenuText;