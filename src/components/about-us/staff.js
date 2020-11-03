import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Flickity from "react-flickity-component";

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

    const [current, setCurrent] = React.useState(-1);

    const [flickityOptions, setFlickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: false,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        autoPlay: false,
        wrapAround: true
    });
    
    return (
        <div className={`staff${from ? ` ${from}` : ''}`}>
            <div className="container-1660">
            <Flickity
                id={`carousel-${from}`}
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate={true} // default false
                static // default false
                className="slides-main transition carousel-staff"
                // flickityRef={(e) => {set_current(e);}}
            >
                {datas.staff && [...datas.staff, ...datas.staff].map((slide, key) => {
                    // console.log(slide);
                    return (
                        <div
                            key={key}
                            className="elem"
                        >
                            <img
                                src={slide.picture.childImageSharp.fluid.srcWebp}
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
            </Flickity>
            </div>
        </div>
    );
};

Staff.propTypes = {

};

Staff.defaultProps = {

};

export default Staff;