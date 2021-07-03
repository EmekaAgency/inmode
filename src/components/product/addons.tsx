import { Link } from "gatsby";
import React from "react";
import Carousel from "../Carousel";
import { InmodePanel_Addon_Interface, InmodePanel_Base_Image_Interface } from "../interfaces";
import NoPicture from "../NoPic/no-picture";
import Sensible from "../NoPic/sensible";

const Addons = ({ datas, sensible = false }:Addons) => {

    const [flickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: true,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
    });

    const select_mines = (object:InmodePanel_Base_Image_Interface[] | undefined, id:number):InmodePanel_Base_Image_Interface[] => {
        let temp:InmodePanel_Base_Image_Interface[] = [];
        object && object.map((_let) => {
            if(_let.product && _let.product.id === id) {
                temp.push(_let);
            }
        })
        return temp;
    }

    return (
        <div id="technologies" className="product-addons">
            <div className="section-title">technologies on the workstation</div>
            {datas.addons.map((addon) => {
                return addon.ProductPresentation && addon.ProductPresentation.map((product, key) => {
                    if(product.appears_everywhere || (product.products && product.products[0].id === datas.id)) {
                        let images = select_mines(product.Images, datas.id);
                        // TODO ton on evolve => evolve-tone
                        let product_title = product.title_text ? product.title_text.toLowerCase().replace(' on ', '-').replace(/ /g, '-').replace(/\*/g, '').replace(/#/g, '') : "";
                        return (
                            <div key={key} className="product-addon">
                                <div className="addon-details">
                                    <div className="addon-description">
                                        <div className="addon-img">
                                            <img
                                                src={product.left_image && product.left_image.childImageSharp.fluid.srcWebp}
                                                srcSet={product.left_image && product.left_image.childImageSharp.fluid.srcSetWebp}
                                                alt={product.title_text}
                                            />
                                        </div>
                                        <div className="addon-title">
                                            {product.title_image && (
                                                <img
                                                    src={product.title_image.childImageSharp.fluid.srcWebp}
                                                    srcSet={product.title_image.childImageSharp.fluid.srcSetWebp}
                                                    alt={product.title_text}
                                                />
                                            )}
                                            {!product.title_image && product.title_text}
                                            {product.appears_everywhere && <Link className="zone-link" to={addon.MenuParams.url} title={product.title_text}></Link>}
                                        </div>
                                        {product.AddonProductsDescr && product.AddonProductsDescr.map((descr, key) => {
                                            if(descr.product && descr.product.id === datas.id) {
                                                return (
                                                    <div key={key} className="addon-description">{descr.descr}</div>
                                                );
                                            }
                                            return <></>;
                                        })}
                                        <div className="addon-what-can-i-treat">
                                            <div className="title">
                                                Que puis-je traiter ?
                                            </div>
                                            <ul>
                                            {product.ProductPresentationTreats && product.ProductPresentationTreats.map((descr, key) => {
                                                if(descr.product && descr.product.id === datas.id) {
                                                    return (
                                                        <li key={key}>{descr.treat_short}</li>
                                                    );
                                                }
                                            })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {images.length == 0 ?
                                    sensible ?
                                        <Sensible from="product-addons"/>
                                        :
                                        <NoPicture from ="product-addons"/>
                                    :
                                    images.length === 1 ?
                                        <img
                                            className="addon-single"
                                            src={images[0].image ? images[0].image.childImageSharp.fluid.srcWebp : ''}
                                            srcSet={images[0].image ? images[0].image.childImageSharp.fluid.srcSetWebp : ''}
                                            alt={`morpheus8-${key + 1}-single`}
                                        />
                                        :
                                        <div className="addon-carousel">
                                            <Carousel
                                                id={`carousel-addons-${product_title}`}
                                                options={flickityOptions}
                                                classList={'slide-addons transition'}
                                            >
                                                {images.map((image, key) => {
                                                    return (
                                                        <div className="addon" key={key}>
                                                            <img
                                                                key={key}
                                                                className="addon-img"
                                                                src={image.image ? image.image.childImageSharp.fluid.srcWebp : ''}
                                                                srcSet={image.image ? image.image.childImageSharp.fluid.srcSetWebp : ''}
                                                                alt={`${product_title}-slide-${key}`}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </Carousel>
                                        </div>
                                }
                            </div>
                        );
                    }
                    return <></>;
                });
            })}
        </div>
    );
};

interface Addons {
    datas: {
        addons: InmodePanel_Addon_Interface[];
        id: number;
    };
    sensible: boolean;
}

export default Addons;