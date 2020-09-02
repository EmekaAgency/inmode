import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "gatsby";

const MenuSingleButton = ({menu, prop_key}) => {

    return (
        <div key={prop_key} className="menu-single menu-button">
            {menu.name}
        </div>
    );
}

MenuSingleButton.propTypes = {
}

MenuSingleButton.defaultProps = {
}
  
export default MenuSingleButton;
