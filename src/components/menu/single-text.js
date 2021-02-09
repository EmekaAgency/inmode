import React from 'react';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import { enableMainScroll } from '../../functions/disable-scroll';

const MenuSingleText = ({menu, prop_key}) => {

    if(menu.title.toLowerCase() === 'shop') {
        return null;
    }
    return (
        menu.url ?
            menu.internal_link ?
            <Link onClick={(e) => {enableMainScroll();}} key={prop_key} className="menu-single menu-text" to={menu.url || "#"} title={format_string(menu.title)}>
                {format_string(menu.title)}
            </Link>
            :
            <a onClick={(e) => {enableMainScroll();}} key={prop_key} className="menu-single menu-text" href={menu.url || "#"} target="_blank" rel="noreferrer"> title={format_string(menu.title)}
                {format_string(menu.title)}
            </a>
        :
        <div key={prop_key} className="menu-single menu-text">
            {format_string(menu.title)}
        </div>
    );
}

MenuSingleText.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired
}

MenuSingleText.defaultProps = {
    menu: {},
    prop_key: null
}
  
export default MenuSingleText;
