import React from "react"
import Flickity from "react-flickity-component";

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

    return (
        <div id="before-after" className="addon-before-after">
          <div className="title">
            {datas.title}
          </div>
            <Flickity
              id={`carousel-addon-ba`}
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate={true} // default false
              static // default false
              className="slides-before-after transition"
            >
                {[...datas.before_after, ...datas.before_after].map((ba, key) => {
                    return (
                        <div key={key} className="ba-slide">
                            <img
                                src={ba.image.publicURL}
                            />
                            <div className="ba-doctor">{ba.doctor}</div>
                            <div className="ba-descr">{ba.descr}</div>
                        </div>
                    );
                })}
            </Flickity>
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