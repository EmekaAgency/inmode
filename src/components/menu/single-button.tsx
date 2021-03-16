import React from 'react';
import { format_string } from '../../functions/format_string';
import PropTypes from 'prop-types';
import { Strapi_Menu_Interface } from '../interfaces';

const MenuSingleButton = ({menu, prop_key = null}:MenuSingleButton) => {

    return (
        <div key={prop_key} className="menu-single menu-button">
            {format_string(menu.title)}
        </div>
    );
};

interface MenuSingleButton {
    menu: Strapi_Menu_Interface;
    prop_key: number | undefined;
}

export default MenuSingleButton;
