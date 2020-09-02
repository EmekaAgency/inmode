import React from 'react';
import { Link } from "gatsby";
import { get_img_path } from "../functions/get_images";
import { useStaticQuery, graphql } from "gatsby";
import { process_menu_datas } from '../functions/process_menu_datas';
import Menu from './menu';

const Footer = () => {

    const datas = useStaticQuery(graphql`
        {
            allMysqlFooter {
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
    `).allMysqlFooter.edges;

    const menus = process_menu_datas(datas);

    return (
        <footer>
        ©2020, Made by
        {` `}
        <a href="https://www.gatsbyjs.org">Emeka</a> with <span style={{'color': 'red'}}>♥</span>
      </footer>
    );
}

Footer.propTypes = {
}

Footer.defaultProps = {
}
  
export default Footer;