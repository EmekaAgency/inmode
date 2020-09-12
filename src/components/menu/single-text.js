import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';

const MenuSingleText = ({menu, prop_key}) => {

    return (
        <Link key={prop_key} className="menu-single menu-text" to={menu.url || "#"}>
            {format_string(menu.name)}
        </Link>
    );
}

MenuSingleText.propTypes = {
}

MenuSingleText.defaultProps = {
}
  
export default MenuSingleText;
