import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";
import MenuContent from '../menu-content';
import { get_img_path } from '../../functions/get_images';
import { format_string } from '../../functions/format_string';

const ContentImage = ({content}) => {

    return (
        <Link className="menu-content menu-image" to={content.url || "#"}>
            {format_string(content.name)}
        </Link>
    );
}

ContentImage.propTypes = {
}

ContentImage.defaultProps = {
}
  
export default ContentImage;
