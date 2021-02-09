import React from "react";
import ProductView from "./product-view";
import ProductsContext from "../contexts/products-context";
import { Link } from "gatsby";
import Carousel from "../Carousel";
import { useImages } from '../contexts/images-provider';

const Slides = ({from}) => {

    const images = useImages();

    const [current, setCurrent] = React.useState(-1);
    const [open, setOpen] = React.useState(false);

    const [flickityOptions, setFlickityOptions] = React.useState({
        initialIndex: current === -1 ? 0 : current,
        cellAlign: 'left',
        pageDots: false,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        // autoPlay: false
    });

    const [slides] = React.useState(React.useContext(ProductsContext).products);

    const view_detail = (e) => {
        
    }

    const view_product = (e, pos) => {
        e.preventDefault();
        setFlickityOptions({
            initialIndex: pos,
            cellAlign: 'left',
            pageDots: false,
            accessibility: true,
            selectedAttraction: 0.01,
            friction: 0.15,
            percentPosition: false,
            // autoPlay: false
        });
        setCurrent(pos);
        document.getElementById('main').style.zIndex = 4;
        setOpen(true);
    }

    
    const close_view = (e) => {
        e.preventDefault();
        if(
            e.target.classList.contains('product-view') ||
            e.target.classList.contains('close') ||
            e.target.classList.contains('close-product-view')
        ) {
            document.getElementById('main').style.zIndex = 0;
            setOpen(false);
        }
    }

    return (
        <div className={`slides-${from} ${current > -1 && open ? 'show' : ''}`}>
            <Carousel
                id={`carousel-${from}`}
                options={flickityOptions}
                classList={'slides-main transition'}
            >
                {slides && slides.map((slide, key) => {
                    return (
                        <div
                            key={key}
                            className={"slide transition gallery-cell" + (current === key && open ? ' show' : '')}
                        >
                            <div className="slide-title">
                                {slide.short_descr}
                            </div>
                            <div className="slide-content">
                                <div className="slide-background-ico">
                                    <img
                                        className="slide-bg-img"
                                        src={slide.Icon.childImageSharp.fluid.srcWebp}
                                        srcSet={slide.Icon.childImageSharp.fluid.srcSetWebp}
                                        alt={slide.Name}
                                    />
                                </div>
                                <div className="slide-background-product">
                                    <img
                                        className="slide-bg-img"
                                        src={slide.ShopPicture.childImageSharp.fluid.srcWebp}
                                        srcSet={slide.ShopPicture.childImageSharp.fluid.srcSetWebp}
                                        alt='product'
                                    />
                                </div>
                                <div className="slide-short-descr">
                                    {slide.Name}
                                </div>
                                <div className="slide-view-detail" onClick={(e) => {view_detail(e, key);}}>
                                    Informations produit
                                    <img
                                        className="slide-view-detail-arrow transition"
                                        src={images.getOne('arrowRightIcon').childImageSharp.fluid.srcWebp}
                                        srcSet={images.getOne('arrowRightIcon').childImageSharp.fluid.srcSetWebp}
                                        alt="arrow-right"
                                    />
                                    <Link className="zone-link" to={slide.MenuParams.url} title={slide.Name}></Link>
                                </div>
                                {slide.Addons ? <div className="slide-view-product" onClick={(e) => {view_product(e, key);}}>
                                    Pièces à main
                                    <img
                                        className="slide-view-product-arrow transition"
                                        src={images.getOne('arrowRightIcon').childImageSharp.fluid.srcWebp}
                                        srcSet={images.getOne('arrowRightIcon').childImageSharp.fluid.srcSetWebp}
                                        alt="arrow-left"
                                    />
                                </div> : null}
                            </div>
                        </div>
                    );
                })}
            </Carousel>
            {current > -1 && slides && slides.map((slide, key) => {
                return (
                    <div
                        className={"product-view" + (current > -1 && current === key && open ? " show" : '')}
                        onClick={(e) => {close_view(e);}}
                        key={key}
                    >
                        <ProductView datas={{'current': current}}>
                            <div className="close">
                                <img
                                    className="close-product-view"
                                    src={images.getOne('closeWhiteIcon').publicURL}
                                    alt="close-product-view"
                                />
                            </div>
                        </ProductView>
                    </div>
                );
            })}
        </div>
    );
}

Slides.propTypes = {

};

Slides.defaultProps = {

};

export default Slides;