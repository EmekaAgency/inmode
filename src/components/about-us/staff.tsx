import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Carousel from "../Carousel";

import { FlickityOptions_Interface, InmodePanel_AboutUs_Interface } from "../interfaces";
import { FlickityOptions } from "react-flickity-component";

const Staff = ({ from = "" }:Staff) => {

    const [datas]:[InmodePanel_AboutUs_Interface, React.Dispatch<InmodePanel_AboutUs_Interface>] = React.useState(useStaticQuery(graphql`
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

    // TODO Understand why any and not FlickityOptions_Interface on Dispatch
    const [flickityOptions]:[FlickityOptions_Interface, React.Dispatch<any>] = React.useState({
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
                                    src={slide.picture ? slide.picture.childImageSharp.fluid.srcWebp : ""}
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

interface Staff {
    from?: string;
};

export default Staff;