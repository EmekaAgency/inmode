import React from 'react';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import Menu from '../menu';

const MenuContentButton = ({menu, prop_key}) => {

    const content = (_menu) => {
        return (
            <>
                {format_string(_menu.title)}
                {_menu.menus.length > 0 && _menu.menus.map((sub, key_sub) => {
                        return (<Menu key={key_sub} prop_key={key_sub} menu={sub}/>);
                    })
                }
            </>
        )
    }

    return (
        <>
            {menu.url ?
                // TODO faire une fonction qui renvoie Link pour les internal sinon a avec les props
                // <Link {...props}>{children}</Link>
                // <a {...props}>{children}</a>
                menu.internal_link ?
                    <Link key={prop_key} className="menu-content menu-button" to={menu.url || "#"}>
                        {content(menu)}
                    </Link>
                    :
                    <a key={prop_key} className="menu-content menu-button" href={menu.url || "#"}>
                        {content(menu)}
                    </a>
                :
                <div key={prop_key} className="menu-content menu-button">
                    {content(menu)}
                </div>
            }
        </>
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
