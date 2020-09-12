import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";
import { format_string } from '../../functions/format_string';

const MenuSingleButton = ({menu, prop_key}) => {

    return (
        <div key={prop_key} className="menu-single menu-button">
            {format_string(menu.name)}
        </div>
    );
}

MenuSingleButton.propTypes = {
}

MenuSingleButton.defaultProps = {
}
  
export default MenuSingleButton;
