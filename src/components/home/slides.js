import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { process_slide_datas } from "../../functions/process_slide_datas";
import { get_img_path } from '../../functions/get_images';
import Flickity from "react-flickity-component";
import ProductView from "./product-view";
import { format_string } from "../../functions/format_string";

const Slides = ({from}) => {

    const datas = useStaticQuery(graphql`
        {
            allMysqlSlidesProducts {
                edges {
                    node {
                        type
                        short_descr
                        price
                        parents
                        name
                        mysqlId
                        img_path
                        descr
                    }
                }
            }
        }
    `);

    const [current, setCurrent] = React.useState(-1);
    const [open, setOpen] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    const [flickity, setFlickity] = React.useState(null);

    const auto_play_speed = 1000;

    const [flickityOptions, setFlickityOptions] = React.useState({
        initialIndex: current == -1 ? 0 : current,
        cellAlign: 'left',
        pageDots: false,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        autoPlay: false
    });

    const slides = process_slide_datas(datas.allMysqlSlidesProducts.edges, from);

    const set_current = (e) => {
        setFlickity(e);
    }

    const view_detail = (e) => {
        e.preventDefault();
        window.alert("Pas encore de fonctionnalité");
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
            autoPlay: false
        });
        setCurrent(pos);
        setOpen(true);
    }

    const process_drag = (e) => {
        e.preventDefault();
        // console.log(clicked);
        // e.movementX < 0 && console.log('gauche');
        // e.movementX > 0 && console.log('droite');
    }

    
    const close_view = (e) => {
        e.preventDefault();
        // console.log(e.target);
        if(
            e.target.classList.contains('product-view') ||
            e.target.classList.contains('close') ||
            e.target.classList.contains('close-product-view')
        ) {
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
                flickityRef={(e) => {set_current(e);}}
            >
                {slides && slides.map((slide, key) => {
                    return (
                        <div
                            key={key}
                            className={"slide transition gallery-cell" + (current == key && open ? ' show' : '')}
                            onMouseUp={(e) => {setClicked(false);}}
                            onMouseDown={(e) => {setClicked(true);}}
                            onMouseMove={(e) => {process_drag(e);}}
                        >
                            <div className="slide-title">
                                {`.${(key + 1) < 10 ? '0' + (key + 1) : (key + 1)}`}
                                <br/>
                                {format_string(slide.name)}
                            </div>
                            <div className="slide-content">
                                <div className="slide-background-ico">
                                    <img className="slide-bg-img" src={get_img_path(slide.img_path)} alt={format_string(slide.name)}/>
                                </div>
                                <div className="slide-background-product">
                                    {/* <img className="slide-bg-img" src={get_img_path('/icons/products/votiva-right.png')} alt='product'/> */}
                                    {/* <img className="slide-bg-img" src ={get_img_path('/icons/products/votiva-courshadow.png')} alt='product'/> */}
                                    <img className="slide-bg-img" src ={get_img_path(`/icons/products/${format_string(slide.name)}-p.${'png' || 'jpg'}`)} alt='product'/>
                                </div>
                                <div className="slide-short-descr">
                                    {slide.short_descr}
                                </div>
                                <div className="slide-view-detail" onClick={(e) => {view_detail(e, key);}}>
                                    Voir le détail
                                    <img className="slide-view-detail-arrow transition" src={get_img_path('/icons/icons/arrow-right.png')} />
                                </div>
                                {slide.under ? <div className="slide-view-product" onClick={(e) => {view_product(e, key);}}>
                                    Voir les produits
                                    <img className="slide-view-product-arrow transition" src={get_img_path('/icons/icons/arrow-right.png')} />
                                </div> : null}
                            </div>
                        </div>
                    );
                })}
            </Flickity>
            <div
                className={"product-view" + (current > -1 && open ? " show" : '')}
                onClick={(e) => {close_view(e);}}
            >
                <ProductView datas={current > -1 && open ? slides[current] : null}>
                    <div className="close">
                        <img className="close-product-view" src={get_img_path('/icons/icons/close-white.webp')} alt="close-product-view"/>
                    </div>
                </ProductView>
            </div>
        </div>
    );
}
// rgba(11, 18, 27, 0.7)
Slides.propTypes = {

};

Slides.defaultProps = {

};

export default Slides;