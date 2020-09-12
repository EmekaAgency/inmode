import React from 'react';
import { Link } from "gatsby";
import { resolve_mini_menu_opened } from '../../functions/resolve_mini_menu_opened';
import { get_img_path } from '../../functions/get_images';
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import Menu from '../menu';

// VARIANT
const SINGLE = 1;
const TITLE = 2;
const CONTENT = 3;
const DK_TITLE = 4;

// TYPE
const TEXT = 1;
const IMAGE = 2;
const BUTTON = 3;
const CARD = 4;

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
                {format_string(menu.name)}
            </Link>
            <ul className="dk-dropdown-menu">
                <div className="dk-sub-container">
                    {menu.under && menu.under.map((content, key) => {
                        return (
                            <div key={key} className="dk-item">
                                <a href={content.url || '#'}>
                                    <img className="dk-picture transition" src={get_img_path(`/icons/products/${content.name}.png`)} alt={format_string(content.name)}/>
                                    <div className="dk-title">{format_string(content.name)}</div>
                                </a>
                                {Array.isArray(content.under) ?
                                    <div className={`dk-item-sub ${content.variant == TITLE ? 'dropdown-menu' : 'dk-dropdown-menu'}`}>
                                        {
                                            content.under.map((sub, key) => {
                                                return (
                                                    <Menu key={key} prop_key={key} menu={sub} />
                                                );
                                            })
                                        }
                                    </div>: null
                                }
                            </div>
                        );
                    })}
                </div>
            </ul>
        </ul>
    );
}

MenuDKTitleText.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired,
    openOnClick: PropTypes.bool.isRequired
}

MenuDKTitleText.defaultProps = {
    menu: {},
    prop_key: null,
    openOnClick: false
}
  
export default MenuDKTitleText;
