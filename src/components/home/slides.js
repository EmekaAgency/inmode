import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { process_slide_datas } from "../../functions/process_slide_datas";
import { get_img_path } from '../../functions/get_images';
import Flickity from "react-flickity-component";

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

    const [current, setCurrent] = React.useState(0);

    const slides = process_slide_datas(datas.allMysqlSlidesProducts.edges, from);

    const flickityOptions = {
        initialIndex: 0,
        cellAlign: 'left',
        autoPlay: 5000,
        pageDots: false
    }

    // const navFlickityOptions = {
    //     asNavFor: `#carousel-${from}`,
    //     contain: true,
    //     pageDots: false
    // };

    return (
        <div className={`slides-${from}`}>
            <Flickity
                id={`carousel-${from}`}
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
                className="carousel slides-main gallery js-flickity transition"
            >
                {slides.map((slide, key) => {
                    return (
                        <div
                            key={key}
                            className="slide transition gallery-cell"
                        >
                            <div className="slide-title">
                                {`.${(key + 1) < 10 ? '0' + (key + 1) : (key + 1)}`}
                                <br/>
                                {slide.name}
                            </div>
                            <div className="slide-content">
                                <div className="slide-background-ico">
                                    <img className="slide-bg-img" src={get_img_path(slide.img_path)} alt={slide.name}/>
                                </div>
                                <div className="slide-background-product">
                                    {/* <img className="slide-bg-img" src={get_img_path('/icons/products/votiva-right.png')} alt='product'/> */}
                                    <img className="slide-bg-img" src={get_img_path('/icons/products/votiva-courshadow.png')} alt='product'/>
                                </div>
                                <div className="slide-short-descr">
                                    {slide.short_descr}
                                </div>
                                <div className="slide-view-product">
                                    Voir les produits
                                    <img className="slide-view-product-arrow" src={get_img_path('/icons/icons/arrow-right.png')} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Flickity>
            {/* <Flickity
                elementType={'div'} // default 'div'
                options={navFlickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
                className="slides-navigation carousel js-flickity transition"
            >
                {slides.map((slide, key) => {
                    return (
                        <img key={key} className="nav-slide-img" src={get_img_path(slide.img_path)} alt={slide.name}/>
                    );
                })}
            </Flickity> */}
        </div>
    );
}
// rgba(11, 18, 27, 0.7)
Slides.propTypes = {

};

Slides.defaultProps = {

};

export default Slides;