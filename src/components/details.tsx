import React from "react";
import RequestInformation from "./RequestInformation";
import { useImages } from './contexts/images-provider';

const GenericDetails = ({ datas }) => {

    const images = useImages();

    return (
        <div id="what-is" className="details">
            <div className="what-is transition">
                <div className="details-img transition">
                    <img
                        src={datas.what_is.picture.childImageSharp.fluid.srcWebp}
                        srcSet={datas.what_is.picture.childImageSharp.fluid.srcSetWebp}
                        alt="detail-main-pic"
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
            <div id={datas.anchor_key || "list"}></div>
            <div className="text-list transition">
                <div className="title">
                    {datas.list_title}
                </div>
                {datas.list && datas.list.map((elem, key) => {
                    return (
                        <div key={key} className="list-elem">
                            {datas.list_icon && <img
                                src={images.getOne('keyBenefitIcon').childImageSharp.fluid.srcWebp || images.getOne('keyBenefitIcon').childImageSharp.fluid.srcWebp}
                                alt={`elem-${key}`}
                                className="before-text"
                            />}
                            {!datas.list_icon && <span className="before-text">&bull;</span>}
                            <div className="text">{elem.texte}</div>
                        </div>
                    );
                })}
            </div>
            <RequestInformation/>
        </div>
    );
}

GenericDetails.propTypes = {

};

GenericDetails.defaultProps = {

};

export default GenericDetails;