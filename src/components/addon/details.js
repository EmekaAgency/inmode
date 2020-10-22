import React from "react"
import { format_string } from "../../functions/format_string";
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const AddonDetails = ({ name = "", datas }) => {
    
    if(!datas || datas.length == 0) {
        return false;
    }

    return (
        <div className="addon-details">
            <div id="what-is" className="what-is transition">
                <div className="addon-details-img transition">
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
            <div className="key-benefits transition">
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

AddonDetails.defaultProps = {

}

AddonDetails.propTypes = {

}

export default AddonDetails;