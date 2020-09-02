import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";

const ContentButton = ({content}) => {

    return (
        <Link className="menu-content menu-button" to={content.url || "#"}>
            {content.name}
        </Link>
    );
}

ContentButton.propTypes = {
}

ContentButton.defaultProps = {
}
  
export default ContentButton;
