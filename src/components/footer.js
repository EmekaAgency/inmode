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
            <div className="footer-content">
                <div className="footer-logo-infos-part">
                    <div className="footer-infos logo">
                        <img className="footer-logo background-image" src={get_img_path('/icons/footer-logo.png')}/>
                    </div>
                    <div className="footer-infos location">
                        <div className="footer-location-ico background-image"></div>
                        <div className="footer-infos-text">Localisation</div>
                    </div>
                    <div className="footer-infos phone">
                        <div className="footer-phone-ico background-image"></div>
                        <div className="footer-infos-text">Téléphone</div>
                    </div>
                    <div className="footer-infos mail">
                        <div className="footer-mail-ico background-image"></div>
                        <div className="footer-infos-text">Mail</div>
                    </div>
                </div>
                <div className="footer-social-part">
                    {[1, 2, 3, 4].map((bla, key) => {
                        return (
                            <div key={key} className="footer-social-ico" style={{backgroundImage: 'url('+get_img_path('/icons/footer-logo.png')+')'}}>
                                <a className="absolute-link" href="#"></a>
                            </div>
                        );
                    })}
                </div>
                <div className="footer-bottom-navigation">
                    <div className="footer-trademark">© 2020 INMODE</div>
                    <div className="footer-navigation">
                        {['Sitemap', 'Contact', 'Police de confidentialité', 'Inmodemd'].map((name, key) => {
                            return (<div key={key} className="footer-navigation-part">name</div>);
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
}

Footer.defaultProps = {
}
  
export default Footer;