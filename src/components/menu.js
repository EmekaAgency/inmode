import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";
import MenuSingleText from './menu/single-text';
import MenuSingleImage from './menu/single-image';
import MenuSingleButton from './menu/single-button';
import MenuTitleText from './menu/title-text';
import MenuDKTitleText from './menu/dk-title-text';
import MenuTitleImage from './menu/title-image';
import MenuTitleButton from './menu/title-button';

// VARIANT
const SINGLE = 1;
const TITLE = 2;
const CONTENT = 3;
const DK_TITLE = 4;

// TYPE
const TEXT = 1;
const IMAGE = 2;
const BUTTON = 3;
const CARD = 4;

const Menu = ({menu, prop_key, openOnClick, parent}) => {

    if(menu.variant == SINGLE && menu.type == TEXT) {
        return (<MenuSingleText key={prop_key} prop_key={prop_key} menu={menu}/>);
    }
    else if(menu.variant == SINGLE && menu.type == IMAGE) {
        return (
            <div key={prop_key} className={menu.name}>
                {menu.content.map((menu, key) => {
                    return (<MenuSingleImage key={key} prop_key={key} menu={menu}/>);
                })}
            </div>
        )
    }
    else if(menu.variant == SINGLE && menu.type == BUTTON) {
        return (<MenuSingleButton key={prop_key} prop_key={prop_key} menu={menu}/>);
    }
    else if(menu.variant == TITLE && menu.type == TEXT) {
        return (<MenuTitleText key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    }
    else if(menu.variant == TITLE && menu.type == IMAGE) {
        return (<MenuTitleImage key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    }
    else if(menu.variant == TITLE && menu.type == BUTTON) {
        return (<MenuTitleButton key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    }
    else if(menu.variant == DK_TITLE && menu.type == TEXT) {
        return (<MenuDKTitleText key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    }
    else {
        return null;
    }
    return null;
}

Menu.propTypes = {
}

Menu.defaultProps = {
}
  
export default Menu;
