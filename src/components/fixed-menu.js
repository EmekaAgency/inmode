import React from "react"
import Menu from "./menu";
import { Link } from "gatsby";
import MenusContext from "./contexts/menus-context"
import { useCart } from './contexts/cart-provider';
import { useImages } from './contexts/images-provider';

const FixedMenu = ({ customClass }) => {

    const [menus] = React.useState(React.useContext(MenusContext).header_bottom);

    const [ isVisible, setIsVisible ] = React.useState();

    React.useEffect(_ => {
        const handleScroll = _ => { 
            if (window.pageYOffset > 150 && window.innerWidth > 999) {
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

    const cart = useCart();

    const images = useImages();

    return (
        <div id="fixed-menu" className={`transition${' ' + customClass || ''}`} style={{top: isVisible ? 0 : -55, boxShadow: isVisible ? null : 'unset'}}>
            <div className="fixed-menu-container">
                <div className="fixed-menu-logo">
                    <img
                        src={images.getOne('fixedMenuLogo').childImageSharp.fluid.srcWebp}
                        srcSet={images.getOne('fixedMenuLogo').childImageSharp.fluid.srcSetWebp}
                        alt="header-logo"
                    />
                    <Link to="/" className="zone-link" title="Inmode"></Link>
                </div>
                <div className="fixed-menus">
                    {menus && menus.map((menu, key) => {
                        return (
                            <Menu key={key} prop_key={key} menu={menu} />
                        );
                    })}
                    {
                        cart.cart.length > 0 || cart.appeared ?
                            <img
                                className="cart"
                                src={images.getOne('cartBasketIcon').publicURL}
                                onClick={(e) => {cart.toggle_open_cart()}}
                            />
                            :
                            null
                    }
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