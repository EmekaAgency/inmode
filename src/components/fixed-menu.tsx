import React from "react"
import Menu from "./menu";
import { Link } from "gatsby";
import MenusContext from "./contexts/menus-context"
import CartBasket from "./CartBasket"
import { useCart } from './contexts/cart-provider';
import { useImages } from './contexts/images-provider';

const FixedMenu = ({ customClass }:{ customClass:string }) => {

    const [menus] = React.useState(React.useContext(MenusContext).header_bottom);

    const [ isVisible, setIsVisible ] = React.useState();

    React.useEffect(() => {
        const handleScroll = _ => { 
            if (window.pageYOffset > 150 && window.innerWidth > 999) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    const cart = useCart();

    const images = useImages();

    return (
        <div id="fixed-menu" className={`transition${' ' + customClass || ''}`} style={{top: isVisible ? 0 : -55, boxShadow: isVisible ? 'none' : 'unset'}}>
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
                    {menus && menus.map((menu:any, key:number) => {
                        return (
                            <Menu key={key} prop_key={key} menu={menu} />
                        );
                    })}
                    { cart.cart.length > 0 || cart.appeared ? <CartBasket/> : null }
                </div>
            </div>
        </div>
    );
}

export default FixedMenu;