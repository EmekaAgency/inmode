import { Link } from "gatsby";
import React from "react";
import { format_string } from "../../functions/format_string";
import Menu from "../menu";

// VARIANT
const SINGLE = 'single';
const TITLE = 'title';
const CONTENT = 'content';
const DK_TITLE = 'dk_title';
const SIDE_MENU = 'side_menu';

// TYPE
const TEXT = 'text';
const IMAGE = 'image';
const BUTTON = 'button';
const CARD = 'card';

const MenuContentCard = ({ menu, prop_key }) => {
    
    const content = (_menu) => {
        return (
            <>
                <img
                    src={menu.icon.publicURL || menu.icon.childImageSharp.fluid.srcWebp}
                />
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
                    <Link key={prop_key} className="menu-content menu-card" to={menu.url || "#"}>
                        {content(menu)}
                    </Link>
                    :
                    <a key={prop_key} className="menu-content menu-card" href={menu.url || "#"}>
                        {content(menu)}
                    </a>
                :
                <div key={prop_key} className="menu-content menu-card">
                    {content(menu)}
                </div>
            }
        </>
    );
};

MenuContentCard.propTypes = {

};

MenuContentCard.defaultProps = {

};

export default MenuContentCard;