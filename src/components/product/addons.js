import React from "react"
import Flickity from "react-flickity-component";
import { format_title } from "../../functions/format_title";
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";
import Slider from "../slider";
import Img from "gatsby-image"

const Addons = ({ datas }) => {

    const [flickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: true,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        autoPlay: 3000,
        wrapAround: true,
    });

    const select_mines = (object, id) => {
        let temp = [];
        object.map((_let) => {
            if(_let.product && _let.product.id == id) {
                temp.push(_let);
            }
        })
        return temp;
    }

    return (
        <div id="technologies" className="product-addons">
            <div className="section-title">technologies on the workstation</div>
            {datas.addons.map((addon, key) => {
                return addon.ProductPresentation.map((product, key) => {
                    if(product.appears_everywhere || (product.products && product.products[0].id == datas.id)) {
                        let images = select_mines(product.Images, datas.id);
                        // TODO ton on evolve => evolve-tone
                        let product_title = product.title_text.toLowerCase().replace(' on ', '-').replace(/ /g, '-').replace(/\*/g, '').replace(/\#/g, '');
                        return (
                            <div key={key} className="product-addon">
                                <div className="addon-details">
                                    <div className="addon-description">
                                        <div className="addon-img">
                                            {/* <Img
                                                fluid={product.left_image.childImageSharp.fluid}
                                                fadeIn={true}
                                                style={{position: 'unset'}}
                                                imgStyle={{objectFit: 'contain'}}
                                                durationFadeIn={100}
                                            /> */}
                                            <img
                                                src={product.left_image.childImageSharp.fluid.srcWebp}
                                                srcSet={product.left_image.childImageSharp.fluid.srcSetWebp}
                                                alt={product.title_text}
                                            />
                                        </div>
                                        <div className="addon-title">
                                            {product.title_image && (
                                                // <Img
                                                //     fluid={product.title_image.childImageSharp.fluid}
                                                //     fadeIn={true}
                                                //     style={{position: 'unset'}}
                                                //     imgStyle={{objectFit: 'contain'}}
                                                //     durationFadeIn={100}
                                                // />
                                                <img
                                                    src={product.title_image.childImageSharp.fluid.srcWebp}
                                                    srcSet={product.title_image.childImageSharp.fluid.setSetWebp}
                                                    alt={product.title_text}
                                                />
                                            )}
                                            {!product.title_image && format_title(product.title_text)}
                                            {product.appears_everywhere && <a className="zone-link" href={`/technology/${product_title}`}></a>}
                                        </div>
                                        {product.AddonProductsDescr.map((descr, key) => {
                                            if(descr.product.id == datas.id) {
                                                return (
                                                    <div key={key} className="addon-description">{descr.descr}</div>
                                                );
                                            }
                                        })}
                                        <div className="addon-what-can-i-treat">
                                            <div className="title">
                                                Que puis-je traiter ?
                                            </div>
                                            <ul>
                                            {product.ProductPresentationTreats.map((descr, key) => {
                                                // console.log(product);
                                                // console.log(descr);
                                                if(descr.product.id == datas.id) {
                                                    return (
                                                        <li key={key}>{descr.treat_short}</li>
                                                    );
                                                }
                                                return false;
                                            })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {images.length == 1 ?
                                    // <Img
                                    //     fluid={images[0].image.childImageSharp.fluid}
                                    //     fadeIn={true}
                                    //     style={{position: 'unset'}}
                                    //     imgStyle={{objectFit: 'contain'}}
                                    //     durationFadeIn={100}
                                    // />
                                    <img
                                        className="addon-single"
                                        src={images[0].image.childImageSharp.fluid.srcWebp}
                                        srcSet={images[0].image.childImageSharp.fluid.srcSetWebp}
                                        alt={`morpheus8-${key + 1}-single`}
                                    />
                                    :
                                    <div className="addon-carousel">
                                        <Flickity
                                            id={`carousel-addons-${product_title}`}
                                            elementType={'div'} // default 'div'
                                            options={flickityOptions} // takes flickity options {}
                                            disableImagesLoaded={false} // default false
                                            reloadOnUpdate={true} // default false
                                            static // default false
                                            className="slide-addons transition"
                                        >
                                            {images.map((image, key) => {
                                                return (
                                                    // <Img
                                                    //     fluid={image.image.childImageSharp.fluid}
                                                    //     fadeIn={true}
                                                    //     style={{position: 'unset'}}
                                                    //     imgStyle={{objectFit: 'contain'}}
                                                    //     durationFadeIn={100}
                                                    // />
                                                    <img
                                                        key={key}
                                                        className="addon"
                                                        src={image.image.childImageSharp.fluid.srcWebp}
                                                        srcSet={image.image.childImageSharp.fluid.srcSetWebp}
                                                        alt={`${product_title}-slide-${key}`}
                                                    />
                                                );
                                            })}
                                        </Flickity>
                                    </div>
                                }
                            </div>
                        );
                    }
                });
            })}
        </div>
    );
}

Addons.defaultProps = {

}

Addons.propTypes = {

}

export default Addons;