import React from "react";
import { format_string } from "../../functions/format_string";
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const ProductView = ({children, datas}) => {

    const [currency, setCurrency] = React.useState('euro');

    const [product] = React.useState(React.useContext(ProductsContext).products);
    const [addon] = React.useState(React.useContext(ProductsContext).addons[0]);

    if(addon == null || datas.current == -1) {
        return (<></>);
    }

    console.log(product[datas.current]);

    return (
        <div className="product-view-container">
            {children}
            <div className="product-view-img">
                <img src={get_img_path(`products/${format_string(product[datas.current].name, true, false)}/${format_string(product[datas.current].name, true, false)}-p.${'png' || 'jpg'}`)} alt='product'/>
            </div>
            <div className="product-view-details">
                <div className="product-view-title">{format_string(product[datas.current].name, true, false)}</div>
                <div className="product-view-descr">
                    {product[datas.current].short_descr}
                </div>
                <div className="addons-view-cards transition custom-scrollbar">
                    {Array.isArray(product[datas.current].under) && product[datas.current].under.map((card, key) => {
                        console.log(card);
                        return (
                            <div key={key} className="addon transition">
                                <div className="addon-general transition">
                                    <div className="title">
                                        <img className="addon-title" src={get_img_path(`products/${format_string(product[datas.current].name, true, false)}/${key + 1}-title.png`)} alt={`${format_string(product[datas.current].name, true, false)}/${key + 1}-title`}/>
                                    </div>
                                    <a className="addon-description">{addon.short_descr}</a>
                                    <img className="addon-picture" src={get_img_path(`products/${format_string(product[datas.current].name, true, false)}/${key + 1}-pic.png`)} alt ={`${format_string(product[datas.current].name, true, false)}/${key + 1}-pic`}/>
                                </div>
                                <div className="addon-details transition">
                                    <p className="description custom-scrollbar">
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