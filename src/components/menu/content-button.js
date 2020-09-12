import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';

const ContentButton = ({content}) => {

    return (
        <Link className="menu-content menu-button" to={content.url || "#"}>
            {format_string(content.name)}
        </Link>
    );
}

ContentButton.propTypes = {
}

ContentButton.defaultProps = {
}
  
export default ContentButton;
