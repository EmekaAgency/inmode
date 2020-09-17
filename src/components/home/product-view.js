import React from "react";
import { format_string } from "../../functions/format_string";
import { get_img_path } from "../../functions/get_images";

const ProductView = ({children, datas}) => {

    const [currency] = React.useState('euro');

    if(datas == null) {
        return (<></>);
    }

    return (
        <div className="product-view-container">
            {children}
            <div className="product-view-img">
                {/* <img src={get_img_path('/icons/products/votiva-courshadow.png')} alt='product'/> */}
                <img src={get_img_path(`/icons/products/${format_string(datas.name)}-p.${'png' || 'jpg'}`)} alt='product'/>
            </div>
            <div className="product-view-details">
                <div className="product-view-title">{format_string(datas.name)}</div>
                {/* <div className="product-view-descr">{datas.descr}</div> */}
                <div className="product-view-descr">
                    BodyTite est un dispositif mini-invasif pour le remodelage corporel, offrant des résultats auparavant uniquement obtenus par des procédures d'excision. BodyTite est alimenté par RF directionnel, ce qui entraîne un remodelage tissulaire en trois dimensions grâce à la coagulation des graisses et au chauffage volumétrique. La coagulation des graisses à l'aide de la chaleur induite par RF entraîne une lipolyse assistée par radiofréquence (RFAL).
                </div>
                <div className="addons-view-cards transition">
                    {datas.under && datas.under.map((card, key) => {
                        return (
                            <div key={key} className="addon transition">
                                <div className="addon-general transition">
                                    <img className="addon-title" src={get_img_path(`/icons/products/addons/title-0${key + 1}.png`)} alt={`title-0${key + 1}.png`}/>
                                    <a className="addon-description">{(Math.random() * 2) === 0 ? 'Minimally invasive Body & Face contouring for small areas' : 'Minimally invasice Body contouring '}</a>
                                    <img className="addon-picture" src={get_img_path(`/icons/products/addons/product-0${key + 1}.png`)} alt ={`product-0${key + 1}.png`}/>
                                </div>
                                <div className="addon-details transition">
                                    <p className="description">
                                        {card.descr}
                                        {'Quis enim eiusmod in tempor Lorem proident sunt reprehenderit culpa laboris pariatur id exercitation duis. Ad non culpa nulla voluptate velit qui nisi elit adipisicing officia sit. Eiusmod proident fugiat elit excepteur eu ex excepteur amet anim labore ad veniam nisi minim.'}
                                        {'Dolor minim elit dolor enim labore ad sit eu laborum culpa voluptate. Nulla laboris ea aliquip esse. Veniam elit culpa quis veniam adipisicing aute non Lorem tempor. Quis eiusmod sint do dolor amet sit excepteur irure fugiat Lorem officia. Sit amet labore velit elit laboris id sint do reprehenderit deserunt.'}
                                        {'Proident ut velit magna irure nisi quis elit amet reprehenderit nulla. Pariatur est pariatur tempor amet et ad Lorem irure. Non nostrud quis adipisicing ipsum proident sunt cillum velit nostrud ex nostrud ut eiusmod. Exercitation reprehenderit irure aliquip ex elit aute nulla culpa eu. Adipisicing deserunt culpa dolor occaecat velit. Magna ut anim anim magna ea aliquip deserunt occaecat. Cupidatat enim cillum aliquip occaecat sunt velit aliqua consectetur ullamco et.'}
                                    </p>
                                    <div className="purchase-infos">
                                        <div className={`price ${currency}`}>{card.price}</div>
                                        <div className="add-to-cart"><button>Ajouter</button></div>
                                    </div>
                                </div>
                                <img src={get_img_path('/icons/icons/add.svg')} className="show-more" alt="add"/>
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