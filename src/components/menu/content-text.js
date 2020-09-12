import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';

const ContentText = ({content}) => {

    return (
        <Link className="menu-content menu-text" to={content.url || "#"}>
            {format_string(content.name)}
        </Link>
    );
}

ContentText.propTypes = {
}

ContentText.defaultProps = {
}
  
export default ContentText;
