import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const AboutUs = ({ from = "" }) => {

    const [datas] = React.useState(useStaticQuery(graphql`
        {
            strapiAboutUs {
                about_video_url
                about_txt
            }
        }
    `).strapiAboutUs);

    return (
        <div className={`about${from ? ` ${from}` : ''}`}>
            <div className="container">
                <div className="title">About InMode</div>
                <div className="content">
                    <iframe title="about-us" src={datas.about_video_url} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
                        
                    </iframe>
                    <div className="txt">
                        {datas.about_txt}
                    </div>
                </div>
            </div>
        </div>
    );
};

AboutUs.propTypes = {

};

AboutUs.defaultProps = {

};

export default AboutUs;