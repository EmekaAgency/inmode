import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";
import MenuContent from '../menu-content';
import { resolve_mini_menu_opened } from '../../functions/resolve_mini_menu_opened';
import { get_img_path } from '../../functions/get_images';

// VARIANT
const SINGLE = 1;
const TITLE = 2;
const CONTENT = 3;

// TYPE
const TEXT = 1;
const IMAGE = 2;
const BUTTON = 3;

const MenuDKTitleText = ({menu, prop_key, openOnClick}) => {

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
        <ul key={prop_key} className="menu-dk-title menu-text">
            <Link
                className="menu-dk-title menu-text"
                to={menu.url || "#"}
                onClick={(e) => {resolveOnClick(e);}}
            >
                {menu.name}
            </Link>
            <ul className="dk-dropdown-menu">
                <div className="dk-sub-container">
                    {menu.under && menu.under.map((content, key) => {
                        return (
                            <a key={key} className="dk-item" href={content.url || '#'}>
                                <img className="dk-picture transition" src={get_img_path(`/icons/products/${content.name}.png`)} alt={content.name}/>
                                <div className="dk-title">{content.name}</div>
                            </a>
                        );
                    })}
                </div>
            </ul>
        </ul>
    );
}

MenuDKTitleText.propTypes = {
}

MenuDKTitleText.defaultProps = {
}
  
export default MenuDKTitleText;
