import React from 'react';
import { get_img_path } from "../functions/get_images";
import Menu from './menu';
import MenusContext from "./contexts/menus-context"

const HeaderMini = ({  }) => {

  const [menus_top] = React.useState(React.useContext(MenusContext).header_top);
  const [menus_bottom] = React.useState(React.useContext(MenusContext).header_bottom);

    const closeMenu = (e) => {
        // console.log("closeMenu()");
        e.preventDefault();
        document.getElementById('header-mini').classList.remove('opened');
    }

    return (
        <div id="header-mini" className="header-mini custom-scrollbar">
            <div className="menu-close transition" onClick={(e) => {closeMenu(e);}}>
                <span>FERMER</span>
                <img className="close-mini-menu-icon" src={get_img_path('icons/close-white.webp')} alt="close-white"/>
            </div>
            <div id="header-mini-bottom" className="header-bottom">
                {menus_bottom && menus_bottom.map((menu, key) => {
                    return (<Menu key={key} prop_key={key} menu={menu} openOnClick={true}/>);
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
