import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";

const MenuSingleText = ({menu, prop_key}) => {

    return (
        <Link key={prop_key} className="menu-single menu-text" to={menu.url || "#"}>
            {menu.name}
        </Link>
    );
}

MenuSingleText.propTypes = {
}

MenuSingleText.defaultProps = {
}
  
export default MenuSingleText;
