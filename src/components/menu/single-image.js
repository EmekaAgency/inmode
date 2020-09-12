import React from 'react';
import { Link } from "gatsby";
import { get_img_path } from '../../functions/get_images';
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';

const MenuSingleImage = ({menu, prop_key}) => {

    return (
        <>
            <Link key={prop_key} className="menu-single menu-image social-btn" to={menu.url || "#"}>
                <img src={get_img_path(`/icons${menu.name}`)} alt={format_string(menu.name)}/>
            </Link>
        </>
    );
}

MenuSingleImage.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired
}

MenuSingleImage.defaultProps = {
    menu: {},
    prop_key: null
}
  
export default MenuSingleImage;
