import React from "react"
import { get_img_path } from "../../functions/get_images";

const ProductDetails = ({ datas }) => {

    return (
        <div className="product-details">
            <div id="what-is" className="what-is transition">
                <div className="product-details-img transition">
                    <img
                        src={datas.what_is.image.publicURL}
                    />
                </div>
                <div className="title">
                    {datas.what_is.title}
                </div>
                <p className="text">
                    {datas.what_is.description}
                </p>
            </div>
            <div id="key-benefits" className="key-benefits transition">
                <div className="title">
                    {'key benefits:'}
                </div>
                {datas.key_benefits.map((benefit, key) => {
                    return (
                        <div key={key} className="key">
                            <img
                                src={get_img_path('icons/key_benefit.png')}
                                alt="key_benefit"
                            />
                            <div className="text">{benefit.text}</div>
                        </div>
                    );
                })}
            </div>
            <a className="request-informations" href="#">
                request informations
            </a>
        </div>
    );
}

ProductDetails.defaultProps = {

}

ProductDetails.propTypes = {

}

export default ProductDetails;