import React from 'react';
import { Link } from "gatsby";
import { resolve_mini_menu_opened } from '../../functions/resolve_mini_menu_opened';
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import Menu from '../menu';

const MenuSideMenuText = ({menu, prop_key, openOnClick}) => {

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

    const content = (_menu) => {
        return (
            <>
                {format_string(_menu.title)}
                {_menu.menus.length > 0 && _menu.menus.map((sub, key_sub) => {
                    return (
                        <Menu key={key_sub} prop_key={key_sub} menu={sub}/>
                    )
                })}
            </>
        )
    }

    // console.log(menu);

    return (
        <ul key={prop_key} className="menu-side-menu menu-text transition">
            {menu.url ?
                <Link
                    className="menu-side-menu menu-text"
                    to={menu.url || "#"}
                    onClick={(e) => {resolveOnClick(e, true);}}
                >
                    {format_string(menu.title)}
                </Link>
                :
                <div
                    className="menu-side-menu menu-text"
                    onClick={(e) => {resolveOnClick(e, false);}}
                >
                    {format_string(menu.title)}
                </div>
            }
            <ul className="dropside-menu">
                {menu.menus.length > 0 && menu.menus.map((sub, key_sub) => {
                    return (
                        <Menu key={key_sub} prop_key={key_sub} menu={sub}/>
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
