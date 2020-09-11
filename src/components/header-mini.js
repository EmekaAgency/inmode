import React from 'react';
import { Link } from "gatsby";
import { get_img_path } from "../functions/get_images";
import { useStaticQuery, graphql } from "gatsby";
import { process_menu_datas } from '../functions/process_menu_datas';
import Menu from './menu';

const HeaderMini = () => {

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
    `);

    const closeMenu = (e) => {
        console.log("closeMenu()");
        e.preventDefault();
        document.getElementById('header-mini').classList.remove('opened');
    }

    const menus_top = process_menu_datas(datas.allMysqlHeaderTop.edges, 'mini-header-top');
    const menus_bottom = process_menu_datas(datas.allMysqlHeaderBottom.edges, 'mini-header-bottom');

    return (
        <div id="header-mini" className="header-mini">
            <div className="menu-close transition" onClick={(e) => {closeMenu(e);}}>
                <span>FERMER</span>
                <img className="close-mini-menu-icon" src={get_img_path('/icons/icons/close-white.webp')}/>
            </div>
            <div id="header-mini-bottom" className="header-bottom">
                {menus_bottom && menus_bottom.map((menu, key) => {
                    return (<Menu key={key} prop_key={key} menu={menu} openOnClick={true}/>);
                })}
            </div>
            <div className="header-mini-divider"></div>
            <div id="header-mini-top" className="header-top">
                {menus_top && menus_top.map((menu, key) => {
                    return (<Menu key={key} prop_key={key} menu={menu} openOnClick={true}/>);
                })}
            </div>
        </div>
    );
}

HeaderMini.propTypes = {
}

HeaderMini.defaultProps = {
}
  
export default HeaderMini;
