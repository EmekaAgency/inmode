import React from 'react';
import { Link } from "gatsby";
import { get_img_path } from "../functions/get_images";
import { useStaticQuery, graphql } from "gatsby";
import { process_menu_datas } from '../functions/process_menu_datas';
import Menu from './menu';
import Image from './image';
import { format_string } from '../functions/format_string';

const Footer = ({process = false, process_functions = {}}) => {

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

    const menus = process.footer && process_functions ? process_functions.footer(process_menu_datas(datas)) : process_menu_datas(datas);

    const icos = {
        'location': '073-location2',
        'phone': '067-phone',
        'mail': '391-mail5'
    }

    const [isSvg, setIsSvg] = React.useState(true);

    return (
        <footer>
            <div className="footer-content container">
                <div className="footer-logo-infos-part">
                    <div className="footer-infos logo">
                        <img className="footer-logo background-image" src={get_img_path('/icons/footer-logo.png')} alt="footer-logo"/>
                    </div>
                    {menus.infos && menus.infos.map((menu, key) => {
                        return (
                            <div key={key} className={`footer-infos ${menu.type.replace('footer-', '')}`}>
                                <img
                                    className={`${menu.type}-ico background-image`}
                                    src={get_img_path(`/icons/icons/icomoon/${isSvg? 'svg' : 'png'}/${icos[menu.type.replace('footer-', '')]}.${isSvg ? 'svg' : 'png'}`)}
                                    alt={menu.type.replace('footer-', '')}
                                />
                                <div className="footer-infos-text">{format_string(menu.name)}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="footer-social-part">
                    {menus['footer-social'] && menus['footer-social'].map((menu, key) => {
                        return (
                            <div key={key} className="footer-social-ico background-image" style={{backgroundImage: 'url('+get_img_path(`/icons/icons/icomoon/${isSvg ? 'svg' : 'png'}/social-${menu.name}.${isSvg ? 'svg' : 'png'}`)+')'}}>
                                <a className="zone-link" href={menu.url || '#'}></a>
                            </div>
                        );
                    })}
                </div>
                <div className="footer-bottom-navigation">
                    <div className="footer-trademark">© 2020 INMODE</div>
                    <div className="footer-navigation">
                        {menus['footer-navigation'] && menus['footer-navigation'].map((menu, key) => {
                            return (
                                <span key={key}>
                                    <span className="footer-navigation-separator"></span>
                                    <a href={menu.url || '#'} className="footer-navigation-part">
                                        {format_string(menu.name)}
                                    </a>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
};

Footer.defaultProps = {
};
  
export default Footer;