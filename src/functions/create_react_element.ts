import React from 'react';

export const create_react_element = (elem) => {
    return React.createElement(
        elem.type,
        elem.props,
        typeof elem.children === "string" ?
            elem.children :
            typeof elem.children === "null" ?
                null : elem.children ? elem.children.map((sub_elem, key)=>{
                    sub_elem.props.key = key;
                    return create_react_element(sub_elem);
                }) : null
    );
};
