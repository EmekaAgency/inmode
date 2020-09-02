import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";
import MenuSingleText from './menu/single-text';
import MenuSingleImage from './menu/single-image';
import MenuSingleButton from './menu/single-button';
import MenuTitleText from './menu/title-text';
import MenuTitleImage from './menu/title-image';
import MenuTitleButton from './menu/title-button';

// VARIANT
const SINGLE = 1;
const TITLE = 2;
const CONTENT = 3;

// TYPE
const TEXT = 1;
const IMAGE = 2;
const BUTTON = 3;

const Menu = ({menu, prop_key, openOnClick, parent}) => {

    console.log(menu);

    if(menu.variant == SINGLE && menu.type == TEXT) {
        return (<MenuSingleText key={prop_key} prop_key={prop_key} menu={menu}/>);
    }
    else if(menu.variant == SINGLE && menu.type == IMAGE) {
        return (<MenuSingleImage key={prop_key} prop_key={prop_key} menu={menu}/>);
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
}

Menu.propTypes = {
}

Menu.defaultProps = {
}
  
export default Menu;
