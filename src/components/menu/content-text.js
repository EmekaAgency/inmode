import React from 'react';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import Menu from '../menu';

const MenuContentText = ({menu, prop_key}) => {

    const content = (_menu) => {
        return (
            <>
                {format_string(_menu.title)}
                {_menu.menus.length > 0 && _menu.menus.map((sub, key_sub) => {
                        return (<Menu key={key_sub} prop_key={key_sub} menu={sub}/>);
                    })
                }
            </>
        );
    }

    return (
        <>
            {menu.url ?
                <Link key={prop_key} className="menu-content menu-text" to={menu.url || "#"}>
                    {content(menu)}
                </Link>
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
