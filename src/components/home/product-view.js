import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import ProductsContext from "../contexts/products-context";

const ProductView = ({children, datas}) => {

    const [icons] = React.useState(useStaticQuery(graphql`
        {
            more: file(relativePath: {eq: "icons/add.svg"}) {
                publicURL
            }
            arrow_right: file(relativePath: { eq: "icons/arrow-right.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
        }
    `));

    const [currency, setCurrency] = React.useState('euro');

    const [products] = React.useState(React.useContext(ProductsContext).products);

    if(products.length === 0 || datas.current === -1) {
        return (<></>);
    }

    console.log(products[datas.current]);
    

    return (
        <div className="product-view-container">
            {children}
            <div className="product-view-img">
                <img
                    src={products[datas.current].ShopPicture.childImageSharp.fluid.srcWebp}
                    srcSet={products[datas.current].ShopPicture.childImageSharp.fluid.srcSetWebp}
                    alt='product'
                />
            </div>
            <div className="product-view-details">
                <div className="product-view-title">{products[datas.current].Name}</div>
                <div className="product-view-descr">
                    {products[datas.current].WhatIs.TitleText[0].text}
                </div>
                <div className="addons-view-cards transition custom-scrollbar">
                    {products[datas.current].Addons && products[datas.current].Addons.map((addon, key) => {
                        return (
                            <div key={key} className="addon transition">
                                <div className="addon-general transition">
                                    <div className="title">
                                        <img
                                            className="addon-title"
                                            src={addon.Banner.right_img.childImageSharp.fluid.srcWebp}
                                            srcSet={addon.Banner.right_img.childImageSharp.fluid.srcSetWebp}
                                            alt={addon.Name}
                                        />
                                    </div>
                                    <a className="addon-description custom-scrollbar">{addon.Banner.right_text}</a>
                                    <img
                                        className="addon-picture"
                                        src={addon.Banner.left_img.childImageSharp.fluid.srcWebp}
                                        srcSet={addon.Banner.left_img.childImageSharp.fluid.srcSetWebp}
                                        alt={addon.Name}/>
                                </div>
                                <div className="addon-details transition">
                                    <div className="title">
                                        <img
                                            className="addon-title"
                                            src={addon.Banner.right_img.childImageSharp.fluid.srcWebp}
                                            srcSet={addon.Banner.right_img.childImageSharp.fluid.srcSetWebp}
                                            alt={addon.Name}
                                        />
                                    </div>
                                    <p className="description custom-scrollbar">
                                        {addon.WhatIs.TitleText[0].text}
                                    </p>
                                    <div className="purchase-infos">
                                        {/* <div className={`price ${currency}`}>{addon.price}</div> */}
                                        <Link className="details" href={addon.MenuParams.url}>
                                            Détails
                                            <img
                                                className="detail-view-addon-arrow transition"
                                                src={icons.arrow_right.childImageSharp.fluid.srcWebp}
                                                srcSet={icons.arrow_right.childImageSharp.fluid.srcSetWebp}
                                                alt="arrow-left"
                                            />
                                        </Link>
                                        {/* <div className="add-to-cart"><button>Ajouter</button></div> */}
                                    </div>
                                </div>
                                <img src={icons.more.publicURL} className="show-more" alt="add"/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {

};

ProductView.defaultProps = {

};

export default ProductView;