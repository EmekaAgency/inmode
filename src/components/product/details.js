import React from "react"
import { get_img_path } from "../../functions/get_images";

const ProductDetails = ({ datas }) => {

    return (
        <div id="what-is" className="product-details">
            <div className="what-is transition">
                <div className="product-details-img transition">
                    <img
                        src={datas.what_is.picture.childImageSharp.fluid.srcWebp}
                    />
                </div>
                {datas.what_is.TitleText.map((section, key) => {
                    return (
                        <div key={key}>
                            <div className="title">
                                {section.title}
                            </div>
                            <p className="text">
                                {section.text}
                            </p>
                        </div>
                    )
                })}
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
                            <div className="text">{benefit.texte}</div>
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