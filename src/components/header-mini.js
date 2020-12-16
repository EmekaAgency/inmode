import React from 'react';
import Menu from './menu';
import { graphql, useStaticQuery } from 'gatsby';
import MenusContext from "./contexts/menus-context";
import { enableMainScroll } from '../functions/disable-scroll';

const HeaderMini = (  ) => {

    const [icons] = React.useState(useStaticQuery(graphql`
        {
            close_white: file(relativePath: {eq: "icons/close-white.webp"}) {
                publicURL
            }
        }
    `));

  const [menus_top] = React.useState(React.useContext(MenusContext).header_top);
  const [menus_bottom] = React.useState(React.useContext(MenusContext).header_bottom);

    const closeMenu = (e) => {
        e.preventDefault();
        document.getElementById('header-mini').classList.remove('opened');
        enableMainScroll();
    }

    return (
        <div id="header-mini" className="header-mini custom-scrollbar">
            <div className="menu-close transition" onClick={(e) => {closeMenu(e);}}>
                <span>FERMER</span>
                <img className="close-mini-menu-icon" src={icons.close_white.publicURL} alt="close-white"/>
            </div>
            <div id="header-mini-bottom" className="header-bottom">
                {menus_bottom && menus_bottom.map((menu, key) => {
                    let temp = new Object();
                    let keys = Object.keys(menu);
                    for(let i = 0; i < keys.length; i++) {
                        temp[keys[i]] = menu[keys[i]];
                    }
                    // TODO ajouter autres subs
                    if(menu.mini_treatments && menu.mini_treatments.length > 0) {
                        temp.menus = temp.mini_treatments.map((elem) => {
                            let retour = {id: elem.id, ...elem.MenuParams};
                            retour.title = retour.url.replaceAll('/treatment/', '').replaceAll('-', ' ').toUpperCase();
                            return retour;
                        });
                    }
                    return (<Menu key={key} prop_key={key} menu={temp} openOnClick={true}/>);
                })}
            </div>
            <div className="header-mini-divider"></div>
            <div id="header-mini-top" className="header-top">
                {menus_top && menus_top.map((menu, key) => {
                    return (<Menu key={key} prop_key={key} menu={menu} openOnClick={true}/>);
                })}
            </div>
        </div>
    );
}

HeaderMini.propTypes = {
}

HeaderMini.defaultProps = {
}
  
export default HeaderMini;
