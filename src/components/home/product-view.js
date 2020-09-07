import React from "react";
import { get_img_path } from "../../functions/get_images";

const ProductView = ({children, datas}) => {

    if(datas == null) {
        return (<></>);
    }

    return (
        <div className="product-view-container">
            {children}
            <div className="product-view-img">
                <img src={get_img_path('/icons/products/votiva-courshadow.png')} alt='product'/>
            </div>
            <div className="product-view-details">
                <div className="product-view-title">{datas.name}</div>
                {/* <div className="product-view-descr">{datas.descr}</div> */}
                <div className="product-view-descr">
                    BodyTite est un dispositif mini-invasif pour le remodelage corporel, offrant des résultats auparavant uniquement obtenus par des procédures d'excision. BodyTite est alimenté par RF directionnel, ce qui entraîne un remodelage tissulaire en trois dimensions grâce à la coagulation des graisses et au chauffage volumétrique. La coagulation des graisses à l'aide de la chaleur induite par RF entraîne une lipolyse assistée par radiofréquence (RFAL).
                </div>
                <div className="product-view-cards">À venir</div>
            </div>
        </div>
    )
}

ProductView.propTypes = {

};

ProductView.defaultProps = {

};

export default ProductView;