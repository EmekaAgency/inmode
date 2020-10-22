import React from 'react';
import { Link } from "gatsby";
import { get_img_path } from '../../functions/get_images';
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';

const MenuSingleImage = ({menu, prop_key}) => {

    // const [path, setPath] = React.useState(get_img_path(`icons/icomoon/svg/social-${menu.title}.svg`));
    // const [inside, setInside] = React.useState(true);

    // const resolve_hover = (e, enter) => {
    //     if(enter && !inside) {
    //         // setPath(get_img_path(`icons/icomoon/svg/social-${menu.title}.svg`));
    //         setPath(get_img_path(`icons/social-networks/${menu.title}.webp`));
    //         setInside(true);
    //     }
    //     else if(!enter && inside) {
    //         // setPath(get_img_path(`icons/social-networks/${menu.title}.webp`));
    //         setPath(get_img_path(`icons/icomoon/svg/social-${menu.title}.svg`));
    //         setInside(false);
    //     }
    // }

    // TODO changer les svg par des png pour que gatsby puisse les process

    return (
        <>
            {
                menu.url ?
                    menu.internal_link ?
                    <Link key={prop_key} className="menu-single menu-image social-btn" to={menu.url || "#"}>
                        <img
                            className="init"
                            src={menu.icon.url || menu.icon.publicURL}
                            alt={format_string(menu.title)}
                        />
                        <img
                            className="blue"
                            src={menu.icon_hover.url || menu.icon_hover.publicURL}
                            alt={format_string(menu.title)}
                        />
                    </Link>
                    :
                    <a key={prop_key} className="menu-single menu-image social-btn" href={menu.url || "#"}>
                        <img
                            className="init"
                            src={menu.icon.url || menu.icon.publicURL}
                            alt={format_string(menu.title)}
                        />
                        <img
                            className="blue"
                            src={menu.icon_hover.url || menu.icon_hover.publicURL}
                            alt={format_string(menu.title)}
                        />
                    </a>
                :
                <div key={prop_key} className="menu-single menu-image social-btn">
                    <img
                        className="init"
                        src={menu.icon.url || menu.icon.publicURL}
                        alt={format_string(menu.title)}
                    />
                    <img
                        className="blue"
                        src={menu.icon_hover.url || menu.icon_hover.publicURL}
                        alt={format_string(menu.title)}
                    />
                </div>
            }
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
