import React from 'react';
import Menu from '../menu';
import MenusContext from "../contexts/menus-context"

const HeaderBottom = (  ) => {

    const [menus] = React.useState(React.useContext(MenusContext).header_bottom);

    return (
        <div id="header-bottom" className="header-bottom">
            {menus && menus.map((menu, key) => {
                return (<Menu key={key} prop_key={key} menu={menu}/>);
            })}
        </div>
    );
}

HeaderBottom.propTypes = {
}

HeaderBottom.defaultProps = {
}
  
export default HeaderBottom;