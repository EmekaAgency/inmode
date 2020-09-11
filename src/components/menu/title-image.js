import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";
import MenuContent from '../menu-content';
import { get_img_path } from '../../functions/get_images';
import { resolve_mini_menu_opened } from '../../functions/resolve_mini_menu_opened';

// VARIANT
const SINGLE = 1;
const TITLE = 2;
const CONTENT = 3;

// TYPE
const TEXT = 1;
const IMAGE = 2;
const BUTTON = 3;

const MenuTitleImage = ({menu, prop_key, openOnClick}) => {

    const resolveOnClick = (e) => {
        if(openOnClick == true) {
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
        <ul key={prop_key} className="menu-title menu-image">
            <Link
                className="menu-title menu-image"
                to={menu.url || "#"}
                onClick={(e) => {resolveOnClick(e);}}
            >
                {menu.name}
            </Link>
            <ul className="dropdown-menu">
                {menu.under && menu.under.map((content, key) => {
                    return (
                        <li key={key}>
                            <MenuContent content={content}/>
                        </li>
                    );
                })}
            </ul>
        </ul>
    );
}

MenuTitleImage.propTypes = {
}

MenuTitleImage.defaultProps = {
}
  
export default MenuTitleImage;
