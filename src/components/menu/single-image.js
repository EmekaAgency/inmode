import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";
import { get_img_path } from '../../functions/get_images';
import Image from '../image';

const MenuSingleImage = ({menu, prop_key}) => {

    return (
        <>
            <Link key={prop_key} className="menu-single menu-image social-btn" to={menu.url || "#"}>
                <img src={get_img_path(menu.name)}/>
            </Link>
        </>
    );
}

MenuSingleImage.propTypes = {
}

MenuSingleImage.defaultProps = {
}
  
export default MenuSingleImage;
