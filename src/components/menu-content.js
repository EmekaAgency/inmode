import React from 'react';
import { Link } from "gatsby";
import { get_img_path } from "../functions/get_images";
import { useStaticQuery, graphql } from "gatsby";
import { process_menu_datas } from '../functions/process_menu_datas';
import ContentText from './menu/content-text';
import ContentImage from './menu/content-image';
import ContentButton from './menu/content-button';

// TYPE
const TEXT = 1;
const IMAGE = 2;
const BUTTON = 3;

const MenuContent = ({content}) => {

    if(content.type == TEXT) {
        return (<ContentText content={content}/>);
    }
    else if(content.type == IMAGE) {
        return (<ContentImage content={content}/>);
    }
    else if(content.type == BUTTON) {
        return (<ContentButton content={content}/>);
    }
}

MenuContent.propTypes = {
}

MenuContent.defaultProps = {
}
  
export default MenuContent;
