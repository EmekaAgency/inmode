import React from "react";
import { get_img_path } from "../../functions/get_images";

const FollowInstagram = () => {
    return (
        <div className="follow-instagram">
            <div className="container">
                <h2>
                    <a href="#">
                        Suivez nous sur Instagram
                    </a>
                </h2>
                <div className="wrapper">
                    <div className="elem">
                        <img className="background-image" src={get_img_path('home/insta-1.jpg')} alt="insta-1"/>
                    </div>
                    <div className="elem">
                        <img className="background-image" src={get_img_path('home/insta-2.jpg')} alt="insta-2"/>
                    </div>
                    <div className="elem">
                        <img className="background-image" src={get_img_path('home/insta-3.jpg')} alt="insta-3"/>
                    </div>
                    <div className="elem">
                        <img className="background-image" src={get_img_path('home/insta-4.jpg')} alt="insta-4"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

FollowInstagram.propTypes = {

};

FollowInstagram.defaultProps = {

};

export default FollowInstagram;