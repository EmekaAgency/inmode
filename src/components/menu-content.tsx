import React from 'react';
import ContentText from './menu/content-text';
import ContentImage from './menu/content-image';
import ContentButton from './menu/content-button';

// TYPE
const TEXT = 1;
const IMAGE = 2;
const BUTTON = 3;

const MenuContent = ({content}) => {

    if(content.type === TEXT) {
        return (<ContentText content={content}/>);
    }
    else if(content.type === IMAGE) {
        return (<ContentImage content={content}/>);
    }
    else if(content.type === BUTTON) {
        return (<ContentButton content={content}/>);
    }
}

MenuContent.propTypes = {
}

MenuContent.defaultProps = {
}
  
export default MenuContent;
