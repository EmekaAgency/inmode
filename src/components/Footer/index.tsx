import React from 'react';
import MenusContext from "../contexts/menus-context"
import { Link } from 'gatsby';
import { useImages } from '../contexts/images-provider';

import './index.css';

const Footer = ({}:Footer) => {

    const images = useImages();

    const [footer] = React.useState(React.useContext(MenusContext).footer);

    const icons = {
        address: images.getOne('addressIcon'),
        phone: images.getOne('phoneIcon'),
        mail: images.getOne('mailIcon'),
    };

    const menus = ['address', 'phone', 'mail'];;

    return (
        <footer
            style={{
                backgroundImage: "url(" + images.getOne('bgPattern').childImageSharp.fluid.srcWebp +")"
            }}
        >
            <div className="footer-content container">
                <div className="footer-logo-infos-part">
                    <div className="footer-infos logo">
                        <img
                            className="footer-logo background-image"
                            src={images.getOne('footerLogo').childImageSharp.fluid.srcWebp}
                            srcSet={images.getOne('footerLogo').childImageSharp.fluid.srcSetWebp}
                            alt="footer-logo"
                        />
                    </div>
                    {menus.map((menu, key) => {
                        return (
                            <div key={key} className={`footer-infos ${menu}`}>
                                <img
                                    className={`footer-${menu}-ico background-image`}
                                    src={icons[menu].publicURL}
                                    srcSet={icons[menu].publicURL}
                                    alt={menu}
                                />
                                {menu === "mail" ? 
                                    <a href={`mailto:${footer[menu]}`} className="footer-infos-text" title="Nous contacter par mail">
                                        {footer[menu]}
                                    </a>
                                    :
                                    <div className="footer-infos-text">
                                        {footer[menu]}
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
                <div className="footer-social-part">
                    {footer.social && footer.social.map((menu, key) => {
                        return (
                            <div
                                key={key}
                                className="footer-social-ico background-image"
                                style={{backgroundImage: 'url('+ menu.icon.publicURL +')'}}
                            >
                                <a className="zone-link" href={menu.url || '#'} title={menu.name} target="_blank"></a>
                            </div>
                        );
                    })}
                </div>
                <div className="footer-bottom-navigation">
                    <div className="footer-trademark">© 2021 INMODEUK</div>
                    <div className="footer-navigation">
                        {footer.navigation && footer.navigation.map((menu, key) => {
                            return (
                                <span key={key}>
                                    <span className="footer-navigation-separator"></span>
                                    <Link to={menu.url || '#'} className="footer-navigation-part" title={menu.name}>
                                        {menu.name}
                                    </Link>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

interface Footer {

};
  
export default Footer;