import React from 'react';
import MenusContext from "./contexts/menus-context"
import { graphql, Link, useStaticQuery } from 'gatsby';

const Footer = (  ) => {

    const [footer] = React.useState(React.useContext(MenusContext).footer);

    const [icons] = React.useState(useStaticQuery(graphql`
        {
            logo: file(relativePath: { eq: "footer-logo.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
            address: file(relativePath: { eq: "icons/icomoon/svg/073-location2.svg"}) {
                publicURL
            }
            phone: file(relativePath: { eq: "icons/icomoon/svg/067-phone.svg"}) {
                publicURL
            }
            mail: file(relativePath: { eq: "icons/icomoon/svg/391-mail5.svg"}) {
                publicURL
            }
            bg_pattern: file(relativePath: { eq: "footer-bg-pattern.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
        }
    `));

    const menus = ['address', 'phone', 'mail'];;

    return (
        <footer
            style={{
                backgroundImage: "url(" + icons.bg_pattern.childImageSharp.fluid.srcWebp +")"
            }}
        >
            <div className="footer-content container">
                <div className="footer-logo-infos-part">
                    <div className="footer-infos logo">
                        <img
                            className="footer-logo background-image"
                            src={footer.logo.childImageSharp.fluid.srcWebp}
                            srcSet={footer.logo.childImageSharp.fluid.srcSetWebp}
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
                                    <a href={`mailto:${footer[menu]}`} className="footer-infos-text">
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
                                <Link className="zone-link" to={menu.url || '#'}></Link>
                            </div>
                        );
                    })}
                </div>
                <div className="footer-bottom-navigation">
                    <div className="footer-trademark">© 2020 INMODE</div>
                    <div className="footer-navigation">
                        {footer.navigation && footer.navigation.map((menu, key) => {
                            return (
                                <span key={key}>
                                    <span className="footer-navigation-separator"></span>
                                    <Link to={menu.url || '#'} className="footer-navigation-part">
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

Footer.propTypes = {
};

Footer.defaultProps = {
};
  
export default Footer;