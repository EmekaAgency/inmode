import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Carousel from "../Carousel";

const Staff = ({ from = "" }) => {

    const [datas] = React.useState(useStaticQuery(graphql`
        {
            strapiAboutUs {
                staff {
                    picture {
                        childImageSharp {
                            fluid {
                                srcWebp
                            }
                        }
                    }
                    name
                    position
                    short_descr
                }
            }
        }
    `).strapiAboutUs);

    const [flickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: false,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        // autoPlay: false,
        // wrapAround: true,
    });
    
    return (
        <div className={`staff${from ? ` ${from}` : ''}`}>
            <div className="container-1660">
                <Carousel
                    id={`carousel-${from}`}
                    options={flickityOptions}
                    classList={'slides-main transition carousel-staff'}
                >
                    {/* {datas.staff && [...datas.staff, ...datas.staff].map((slide, key) => { */}
                    {datas.staff && datas.staff.map((slide, key) => {
                        return (
                            <div
                                key={key}
                                className="elem"
                            >
                                <img
                                    src={slide.picture.childImageSharp.fluid.srcWebp}
                                    alt={`about-us-staff-${key}`}
                                />
                                <div className="name">
                                    {slide.name}
                                </div>
                                <div className="position">
                                    {slide.position}
                                </div>
                                <div className="descr">
                                    {slide.short_descr}
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
};

Staff.propTypes = {

};

Staff.defaultProps = {

};

export default Staff;