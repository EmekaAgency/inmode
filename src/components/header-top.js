import React from 'react';
import Menu from './menu';

const HeaderTop = ({ menus }) => {

    return (
        <div id="header-top" className="header-top">
            {menus && menus.map((menu, key) => {
                return (<Menu key={key} prop_key={key} menu={menu}/>);
            })}
        </div>
    );
}

HeaderTop.propTypes = {
}

HeaderTop.defaultProps = {
}
  
export default HeaderTop;
