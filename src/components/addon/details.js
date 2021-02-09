import React from "react";
import RequestInformation from "../RequestInformation";
import { useImages } from '../contexts/images-provider';

const AddonDetails = ({ name = "", datas }) => {

    const images = useImages();
    
    if(!datas || datas.length === 0) {
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
                </div>key_benefit
                {datas.s.map((benefit, key) => {
                    return (
                        <div key={key} className="key">
                            <img
                                src={(images.getOne'keyBenefitIcon').childImageSharp.fluid.srcWebp}
                                alt="key_benefit"
                            />
                            <div className="text">{benefit.texte}</div>
                        </div>
                    );
                })}
            </div>
            <RequestInformation/>
        </div>
    );
}

AddonDetails.defaultProps = {

}

AddonDetails.propTypes = {

}

export default AddonDetails;