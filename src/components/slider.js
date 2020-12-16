import React from "react";
import Carousel from "./Carousel";

const Slider = ({ children, options, id, classList }) => {

    const [flickityOptions] = React.useState({
        initialIndex: options.current || 0,
        cellAlign: options.align || 'left',
        pageDots: options.dots || false,
        accessibility: options.accessible || true,
        selectedAttraction: options.attraction || 0.01,
        friction: options.friction || 0.15,
        percentPosition: options.percent || false,
        // autoPlay: options.autoplay || 5000,
        // wrapAround: options.wrap || true,
        draggable: options.draggable || true,
    });

    return (
        <Carousel
            id={id}
            options={flickityOptions}
            classList={classList}
        >
            {children}
        </Carousel>
    );
}

Slider.propTypes = {

};

Slider.defaultProps = {

};

export default Slider;