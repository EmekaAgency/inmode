import React from 'react';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';

const MenuContentImage = ({menu, prop_key}) => {

    return (
        <Link key={prop_key} className="menu-content menu-image" to={menu.url || "#"}>
            {format_string(menu.name)}
        </Link>
    );
}

MenuContentImage.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired
}

MenuContentImage.defaultProps = {
    menu: {},
    prop_key: null
}
  
export default MenuContentImage;
