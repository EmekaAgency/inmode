import React from 'react';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';

const MenuSingleText = ({menu, prop_key}) => {

    return (
        menu.url ?
            menu.internal_link ?
            <Link key={prop_key} className="menu-single menu-text" to={menu.url || "#"}>
                {format_string(menu.title)}
            </Link>
            :
            <a key={prop_key} className="menu-single menu-text" href={menu.url || "#"}>
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
