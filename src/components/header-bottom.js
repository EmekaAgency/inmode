import React from 'react';
import { Link } from "gatsby";
import { get_img_path } from "../functions/get_images";
import { useStaticQuery, graphql } from "gatsby";
import { process_menu_datas } from '../functions/process_menu_datas';
import Menu from './menu';

const HeaderBottom = ({ process = false, process_function = {} }) => {

    const datas = useStaticQuery(graphql`
        {
            allMysqlHeaderBottom {
                edges {
                    node {
                        container
                        name
                        position
                        type
                        under
                        url
                        variant
                        mysqlId
                    }
                }
            }
        }
    `).allMysqlHeaderBottom.edges;
    
    const [menus, setMenus] = React.useState(process && process_function ? process_function(process_menu_datas(datas)) : process_menu_datas(datas));

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