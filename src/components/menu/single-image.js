import React from 'react';
import { Link } from "gatsby";
import { get_img_path } from '../../functions/get_images';
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';

const MenuSingleImage = ({menu, prop_key}) => {

    const [path, setPath] = React.useState(get_img_path(`/icons/icons/icomoon/svg/social-${menu.name}.svg`));
    const [inside, setInside] = React.useState(true);

    const resolve_hover = (e, enter) => {
        if(enter && !inside) {
            // setPath(get_img_path(`/icons/icons/icomoon/svg/social-${menu.name}.svg`));
            setPath(get_img_path(`/icons/icons/social-networks/${menu.name}.webp`));
            setInside(true);
        }
        else if(!enter && inside) {
            // setPath(get_img_path(`/icons/icons/social-networks/${menu.name}.webp`));
            setPath(get_img_path(`/icons/icons/icomoon/svg/social-${menu.name}.svg`));
            setInside(false);
        }
    }

    return (
        <>
            <Link key={prop_key} className="menu-single menu-image social-btn" to={menu.url || "#"}>
                <img
                    className="init"
                    src={get_img_path(`/icons/icons/icomoon/svg/social-${menu.name}-init.svg`)}
                    alt={format_string(menu.name)}
                />
                <img
                    className="blue"
                    src={get_img_path(`/icons/icons/icomoon/svg/social-${menu.name}.svg`)}
                    alt={format_string(menu.name)}
                />
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
