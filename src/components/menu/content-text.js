import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";

const ContentText = ({content}) => {

    return (
        <Link className="menu-content menu-text" to={content.url || "#"}>
            {content.name}
        </Link>
    );
}

ContentText.propTypes = {
}

ContentText.defaultProps = {
}
  
export default ContentText;
