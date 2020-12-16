import React from 'react';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import Menu from '../menu';
import { enableMainScroll } from '../../functions/disable-scroll';

const MenuContentText = ({menu, prop_key}) => {

    const content = (_menu) => {
        if(!_menu.menus) {
            return _menu.title;
        }
        return (
            <>
                {format_string(_menu.title)}
                {_menu.menus && _menu.menus.length > 0 && _menu.menus.map((sub, key_sub) => {
                        return (<Menu key={key_sub} prop_key={key_sub} menu={sub}/>);
                    })
                }
            </>
        );
    }

    return (
        <>
            {menu.url ?
                menu.internal_link ?
                    <Link onClick={(e) => {enableMainScroll();}} key={prop_key} className="menu-content menu-text" to={menu.url || "#"}>
                        {content(menu)}
                    </Link>
                    :
                    <a onClick={(e) => {enableMainScroll();}} key={prop_key} className="menu-content menu-text" href={menu.url || "#"} target="_blank" rel="noreferrer">
                        {content(menu)}
                    </a>
                :
                <div key={prop_key} className="menu-content menu-text">
                    {content(menu)}
                </div>
            }
        </>
    );
}

MenuContentText.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired
}

MenuContentText.defaultProps = {
    menu: {},
    prop_key: null
}
  
export default MenuContentText;
