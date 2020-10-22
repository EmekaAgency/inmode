import React from "react"
import { get_img_path } from "../functions/get_images";
import Menu from "./menu";
import { Link } from "gatsby";
import MenusContext from "./contexts/menus-context"

const FixedMenu = ({ customClass }) => {

    const [menus] = React.useState(React.useContext(MenusContext).header_bottom);

    const [ isVisible, setIsVisible ] = React.useState();

    React.useEffect(_ => {
        const handleScroll = _ => { 
            if (window.pageYOffset > 150) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        };
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <div id="fixed-menu" className={`transition${' ' + customClass || ''}`} style={{top: isVisible ? 0 : -55, boxShadow: isVisible ? null : 'unset'}}>
            <div className="fixed-menu-container">
                <div className="fixed-menu-logo">
                    <img src={get_img_path('header-logo.png')} alt="header-logo"/>
                    <Link to="/" className="zone-link"></Link>
                </div>
                <div className="fixed-menus">
                    {menus && menus.map((menu, key) => {
                        return (
                            <Menu key={key} prop_key={key} menu={menu} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

FixedMenu.propTypes = {
    
};

FixedMenu.defaultProps = {

}

export default FixedMenu;