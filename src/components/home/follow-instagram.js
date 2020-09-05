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
                        <img className="background-image" src={get_img_path('/icons/home/insta-1.jpg')}/>
                    </div>
                    <div className="elem">
                        <img className="background-image" src={get_img_path('/icons/home/insta-2.jpg')}/>
                    </div>
                    <div className="elem">
                        <img className="background-image" src={get_img_path('/icons/home/insta-3.jpg')}/>
                    </div>
                    <div className="elem">
                        <img className="background-image" src={get_img_path('/icons/home/insta-4.jpg')}/>
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