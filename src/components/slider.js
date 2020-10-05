import React from "react"
import Flickity from "react-flickity-component";

const Slider = ({ children, options, id, classlist }) => {

    const [flickityOptions] = React.useState({
        initialIndex: options.current || 0,
        cellAlign: options.align || 'left',
        pageDots: options.dots || false,
        accessibility: options.accessible || true,
        selectedAttraction: options.attraction || 0.01,
        friction: options.friction || 0.15,
        percentPosition: options.percent || false,
        autoPlay: options.autoplay || 5000,
        wrapAround: options.wrap || true,
        draggable: options.draggable || true,
    });

    return (
            <Flickity
              id={id}
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate={true} // default false
              static // default false
              className={classlist}
            >
                {children}
            </Flickity>
    );
}

Slider.propTypes = {

};

Slider.defaultProps = {

};

export default Slider;