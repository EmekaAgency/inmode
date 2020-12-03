import React from "react";
import Flickity from "react-flickity-component";
import ProductView from "./product-view";
import ProductsContext from "../contexts/products-context";
import { graphql, Link, useStaticQuery } from "gatsby";

const Slides = ({from}) => {

    const [icons] = React.useState(useStaticQuery(graphql`
        {
            arrow_right: file(relativePath: { eq: "icons/arrow-right.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
            close_white: file(relativePath: { eq: "icons/close-white.webp"}) {
                publicURL
            }
        }
    `));

    const img_extensions = ['jpg', 'png', 'svg', 'jpeg', 'webp', 'bmp'];
    const [index, setIndex] = React.useState(0);

    const [current, setCurrent] = React.useState(-1);
    const [open, setOpen] = React.useState(false);
    // const [clicked, setClicked] = React.useState(false);
    // const [flickity, setFlickity] = React.useState(null);

    // const auto_play_speed = 1000;

    const [flickityOptions, setFlickityOptions] = React.useState({
        initialIndex: current === -1 ? 0 : current,
        cellAlign: 'left',
        pageDots: false,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        autoPlay: false
    });

    const [slides] = React.useState(React.useContext(ProductsContext).products);

    // const set_current = (e) => {
        // setFlickity(e);
    // }

    const view_detail = (e) => {
        // e.preventDefault();
        // window.alert("Pas encore de fonctionnalité");
    }

    const view_product = (e, pos) => {
        console.log(pos);
        e.preventDefault();
        setFlickityOptions({
            initialIndex: pos,
            cellAlign: 'left',
            pageDots: false,
            accessibility: true,
            selectedAttraction: 0.01,
            friction: 0.15,
            percentPosition: false,
            autoPlay: false
        });
        setCurrent(pos);
        document.getElementById('main').style.zIndex = 4;
        setOpen(true);
    }

    // const process_drag = (e) => {
        // e.preventDefault();
        // console.log(clicked);
        // e.movementX < 0 && console.log('gauche');
        // e.movementX > 0 && console.log('droite');
    // }

    
    const close_view = (e) => {
        e.preventDefault();
        // console.log(e.target);
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
            <Flickity
                id={`carousel-${from}`}
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate={true} // default false
                static // default false
                className="slides-main transition"
                // flickityRef={(e) => {set_current(e);}}
            >
                {slides && slides.map((slide, key) => {
                    // console.log(slide);
                    return (
                        <div
                            key={key}
                            className={"slide transition gallery-cell" + (current === key && open ? ' show' : '')}
                            // onMouseUp={(e) => {setClicked(false);}}
                            // onMouseDown={(e) => {setClicked(true);}}
                            // onMouseMove={(e) => {process_drag(e);}}
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
                                        src={icons.arrow_right.childImageSharp.fluid.srcWebp}
                                        srcSet={icons.arrow_right.childImageSharp.fluid.srcSetWebp}
                                        alt="arrow-right"
                                    />
                                    <Link className="zone-link" to={slide.MenuParams.url}></Link>
                                </div>
                                {slide.Addons ? <div className="slide-view-product" onClick={(e) => {view_product(e, key);}}>
                                    Pièces à main
                                    <img
                                        className="slide-view-product-arrow transition"
                                        src={icons.arrow_right.childImageSharp.fluid.srcWebp}
                                        srcSet={icons.arrow_right.childImageSharp.fluid.srcSetWebp}
                                        alt="arrow-left"
                                    />
                                </div> : null}
                            </div>
                        </div>
                    );
                })}
            </Flickity>
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
                                    src={icons.close_white.publicURL}
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
// rgba(11, 18, 27, 0.7)
Slides.propTypes = {

};

Slides.defaultProps = {

};

export default Slides;