import React from "react";
import { get_img_path } from "../../functions/get_images";

const ClinicalStudies = () => {
    return (
        <div className="clinical-studies background-image">
            <div className="container">
                <div className="studies">
                    <h2 className="title">Clinical studies</h2>
                    <div className="content">
                        <img src={get_img_path('/icons/home/studies-img.png')}/>
                        <a href="#">View studies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

ClinicalStudies.propTypes = {

};

ClinicalStudies.defaultProps = {

};

export default ClinicalStudies;