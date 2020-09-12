import React from 'react';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';

const MenuContentButton = ({menu, prop_key}) => {

    return (
        <Link key={prop_key} className="menu-content menu-button" to={menu.url || "#"}>
            {format_string(menu.name)}
        </Link>
    );
}

MenuContentButton.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired
}

MenuContentButton.defaultProps = {
    menu: {},
    prop_key: null
}
  
export default MenuContentButton;
