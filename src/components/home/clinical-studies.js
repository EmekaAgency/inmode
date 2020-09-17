import React from "react";
import { get_img_path } from "../../functions/get_images";

const ClinicalStudies = () => {
    return (
        <div className="clinical-studies background-image">
            <div className="container">
                <div className="studies">
                    <h2 className="title">Études cliniques</h2>
                    <div className="content">
<<<<<<< Updated upstream
                        <img src={get_img_path('/icons/home/studies-img.png')} alt="studies-img"/>
=======
                        <img src={get_img_path('/icons/home/studies-img.png')}/>
>>>>>>> Stashed changes
                        <a href="#">Voir les études</a>
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