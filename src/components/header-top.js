import React from 'react';
import { Link } from "gatsby";
import { get_img_path } from "../functions/get_images";
import { useStaticQuery, graphql } from "gatsby";
import { process_menu_datas } from '../functions/process_menu_datas';
import Menu from './menu';

const HeaderTop = () => {

    const datas = useStaticQuery(graphql`
        {
            allMysqlHeaderTop {
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
    `).allMysqlHeaderTop.edges;

    const menus = process_menu_datas(datas);

    return (
        <div id="header-top" className="header-top">
            {menus.map((menu, key) => {
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
