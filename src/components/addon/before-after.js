import React from "react"
import Flickity from "react-flickity-component";
import Slider from "../slider";

const AddonBeforeAfter = ({ datas }) => {

    const [flickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: true,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        autoPlay: 5000,
        wrapAround: true,
    });
    
    if(!datas || datas.length == 0) {
        return false;
    }

    console.log(datas);

    return (
        <div id="before-after" className="before-after">
            <div className="title">
                before and after
            </div>
            <div className={`container-ba${datas.length < 3 ? ' few' : ''}`}>
                {datas.length < 3 ?
                    datas.map((ba, key) => {
                        return (
                            <div key={key} className="few-ba">
                                <img
                                    src={ba.image.childImageSharp.fluid.srcWebp}
                                />
                                <div className="ba-doctor">{ba.doctor}</div>
                                <div className="ba-descr">{ba.text}</div>
                            </div>
                        );
                    })
                    :
                    <Flickity
                        id={`carousel-ba`}
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate={true} // default false
                        static // default false
                        className="slides-before-after transition"
                    >
                        {[...datas, ...datas].map((ba, key) => {
                                return (
                                    <div key={key} className="ba-slide">
                                        <img
                                            src={ba.image.childImageSharp.fluid.srcWebp}
                                        />
                                        <div className="ba-doctor">{ba.doctor}</div>
                                        <div className="ba-descr">{ba.text}</div>
                                    </div>
                                );
                            })
                        }
                    </Flickity>
                }
            </div>
            <a className="request-informations" href="#">
                request informations
            </a>
        </div>
    );
}

AddonBeforeAfter.defaultProps = {

}

AddonBeforeAfter.propTypes = {

}

export default AddonBeforeAfter;