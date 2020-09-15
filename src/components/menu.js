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
import { format_string } from '../functions/format_string';
import MenuContentText from './menu/content-text';
import MenuContentImage from './menu/content-image';
import MenuContentButton from './menu/content-button';
import MenuSideMenuText from './menu/side_menu-text';
import PropTypes from 'prop-types';

// VARIANT
const SINGLE = 1;
const TITLE = 2;
const CONTENT = 3;
const DK_TITLE = 4;
const SIDE_MENU = 5;

// TYPE
const TEXT = 1;
const IMAGE = 2;
const BUTTON = 3;
const CARD = 4;

const Menu = ({menu, prop_key, openOnClick, parent}) => {

    if(menu.variant == SINGLE && menu.type == TEXT) {
       // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type single-text`);
        return (<MenuSingleText key={prop_key} prop_key={prop_key} menu={menu}/>);
    }
    else if(menu.variant == SINGLE && menu.type == IMAGE) {
       // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type single-image`);
       // return (
           // <div key={prop_key} className={format_string(menu.name)}>
           //     {menu.content && menu.content.map((menu, key) => {
                   return (<MenuSingleImage key={prop_key} prop_key={prop_key} menu={menu}/>);
           //     })}
           // </div>
       // )
    }
    else if(menu.variant == SINGLE && menu.type == BUTTON) {
       // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type single-button`);
        return (<MenuSingleButton key={prop_key} prop_key={prop_key} menu={menu}/>);
    }
    // else if(menu.variant == SINGLE && menu.type == CARD) {
        // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type single-card`);
    //     return (<MenuSingleCard key={prop_key} prop_key={prop_key} menu={menu}/>);
    // }
    else if(menu.variant == TITLE && menu.type == TEXT) {
       // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type title-text`);
        return (<MenuTitleText key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    }
    else if(menu.variant == TITLE && menu.type == IMAGE) {
       // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type title-image`);
        return (<MenuTitleImage key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    }
    else if(menu.variant == TITLE && menu.type == BUTTON) {
       // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type title-button`);
        return (<MenuTitleButton key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    }
    // else if(menu.variant == TITLE && menu.type == CARD) {
    //     console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type title-card`);
    //     return (<MenuTitleCard key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    // }
    else if(menu.variant == CONTENT && menu.type == TEXT) {
       // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type content-text`);
        return (
            <li key={prop_key}>
                <MenuContentText key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>
            </li>
        );
    }
    else if(menu.variant == CONTENT && menu.type == IMAGE) {
       // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type content-image`);
        return (
            <li key={prop_key}>
                <MenuContentImage key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>
            </li>
        );
    }
    else if(menu.variant == CONTENT && menu.type == BUTTON) {
       // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type content-button`);
        return (
            <li key={prop_key}>
                <MenuContentButton key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>
            </li>
        );
    }
    // else if(menu.variant == CONTENT && menu.type == CARD) {
    //    console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type content-card`);
    //     return (
    //         <li key={prop_key}>
    //             <MenuContentCard key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>
    //         </li>
    //    );
    // }
    else if(menu.variant == DK_TITLE && menu.type == TEXT) {
       // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type dk-title-text`);
        return (<MenuDKTitleText key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    }
    // else if(menu.variant == DK_TITLE && menu.type == IMAGE) {
    //     console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type dk-title-image`);
    //     return (<MenuDKTitleImage key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    // }
    // else if(menu.variant == DK_TITLE && menu.type == BUTTON) {
    //     console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type dk-title-button`);
    //     return (<MenuDKTitleButton key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    // }
    // else if(menu.variant == DK_TITLE && menu.type == CARD) {
    //     console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type dk-title-card`);
    //     return (<MenuDKTitleCard key={prop_key} prop_key={prop_key} menu={menu} openOnClick={openOnClick}/>);
    // }
    else if(menu.variant == SIDE_MENU && menu.type == TEXT) {
        // console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type side-menu`);
        return (<MenuSideMenuText key={prop_key} prop_key={prop_key} menu={menu}/>);
    }
    // else if(menu.variant == SIDE_MENU && menu.type == IMAGE) {
    //     console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type dk-title-card`);
    //     return (<MenuSideMenuImage key={prop_key} prop_key={prop_key} menu={menu}/>);
    // }
    // else if(menu.variant == SIDE_MENU && menu.type == BUTTON) {
    //     console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type dk-title-card`);
    //     return (<MenuSideMenuButton key={prop_key} prop_key={prop_key} menu={menu}/>);
    // }
    // else if(menu.variant == SIDE_MENU && menu.type == CARD) {
    //     console.log(`Le menu id : ${menu.mysqlId} nommé ${menu.name} est de type dk-title-card`);
    //     return (<MenuSideMenuCard key={prop_key} prop_key={prop_key} menu={menu}/>);
    // }
    else {
        return null;
    }
}

Menu.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired,
    openOnClick: PropTypes.bool,
    parent: PropTypes.node
}

Menu.defaultProps = {
    menu: {},
    prop_key: null,
    openOnClick: false,
    parent: null
}
  
export default Menu;
