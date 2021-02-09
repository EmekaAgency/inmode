import React from 'react';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import { enableMainScroll } from '../../functions/disable-scroll';

const MenuSingleImage = ({menu, prop_key}) => {

    return (
        <>
            {
                menu.url ?
                    menu.internal_link ?
                    <Link key={prop_key} className="menu-single menu-image social-btn" to={menu.url || "#"} onClick={(e) => {enableMainScroll();}} title={format_string(menu.title)}>
                        <img
                            className="init"
                            src={menu.icon.url || menu.icon.publicURL}
                            alt={format_string(menu.title)}
                        />
                        <img
                            className="blue"
                            src={menu.icon_hover.url || menu.icon_hover.publicURL}
                            alt={format_string(menu.title)}
                            target="_blank"
                            rel="noreferrer"
                        />
                    </Link>
                    :
                    <a key={prop_key} className="menu-single menu-image social-btn" href={menu.url || "#"} target="_blank" rel="noreferrer" onClick={(e) => {enableMainScroll();}} title={format_string(menu.title)}>
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
