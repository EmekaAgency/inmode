import React from 'react';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import Menu from '../menu';

const MenuContentImage = ({menu, prop_key}) => {

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
                menu.internal_link ?
                    <Link key={prop_key} className="menu-content menu-image" to={menu.url || "#"}>
                        {content(menu)}
                    </Link>
                    :
                    <a key={prop_key} className="menu-content menu-image" href={menu.url || "#"}>
                        {content(menu)}
                    </a>
                :
                <div key={prop_key} className="menu-content menu-image">
                    {content(menu)}
                </div>
            }
        </>
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
