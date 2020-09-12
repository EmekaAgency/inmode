import React from 'react';
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';

const MenuSingleButton = ({menu, prop_key}) => {

    return (
        <div key={prop_key} className="menu-single menu-button">
            {format_string(menu.name)}
        </div>
    );
}

MenuSingleButton.propTypes = {
    menu: PropTypes.object.isRequired,
    prop_key: PropTypes.number.isRequired
}

MenuSingleButton.defaultProps = {
    menu: {},
    prop_key: null
}
  
export default MenuSingleButton;
