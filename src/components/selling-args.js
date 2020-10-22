import React from "react"
import { get_img_path } from "../functions/get_images";
import Img from "gatsby-image"

const SellingArgs = ({ datas }) => {
    
    if(!datas || datas.length == 0) {
        return false;
    }

    return (
        <div id="selling" className="selling-args">
            <div className="title">{datas.SectionTitle}</div>
            {datas.Arg.map((arg, key) => {
                return (
                    <div key={key} className="key">
                        {/* TODO single type */}
                        <img
                            src={get_img_path('icons/key_benefit.png')}
                            alt="key_benefit"
                        />
                        <div className="text">{arg.texte}</div>
                    </div>
                );
            })}
        </div>
    );
}

SellingArgs.propTypes = {

};

SellingArgs.defaultProps = {

}

export default SellingArgs;