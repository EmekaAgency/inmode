import React from "react";
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const ProductView = ({children, datas}) => {

    const [currency, setCurrency] = React.useState('euro');

    const [product] = React.useState(React.useContext(ProductsContext).products[0]);
    const [addon] = React.useState(React.useContext(ProductsContext).addons[0]);

    console.log(product);

    if(addon == null) {
        return (<></>);
    }

    return (
        <div className="product-view-container">
            {children}
            <div className="product-view-img">
                <img src={get_img_path(`products/${product.name}/${product.name}-p.${'png' || 'jpg'}`)} alt='product'/>
            </div>
            <div className="product-view-details">
                <div className="product-view-title">{product.name}</div>
                <div className="product-view-descr">
                    {product.short_descr}
                </div>
                <div className="addons-view-cards transition">
                    {Array.isArray(product.under) && product.under.map((card, key) => {
                        return (
                            <div key={key} className="addon transition">
                                <div className="addon-general transition">
                                    <div className="title">
                                        <img className="addon-title" src={get_img_path(`products/${product.name}/${key + 1}-title.png`)} alt={`${product.name}/${key + 1}-title`}/>
                                    </div>
                                    <a className="addon-description">{addon.short_descr}</a>
                                    <img className="addon-picture" src={get_img_path(`products/${product.name}/${key + 1}-pic.png`)} alt ={`${product.name}/${key + 1}-pic`}/>
                                </div>
                                <div className="addon-details transition">
                                    <p className="description">
                                        {addon.descr}
                                    </p>
                                    <div className="purchase-infos">
                                        <div className={`price ${currency}`}>{addon.price}</div>
                                        {/* <a className="details" href="/addon">Détails</a> */}
                                        <div className="add-to-cart"><button>Ajouter</button></div>
                                    </div>
                                </div>
                                <img src={get_img_path('icons/add.svg')} className="show-more" alt="add"/>
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