import React from "react";
import PropTypes from "prop-types";
import Flickity from "react-flickity-component";

const Carousel = ({
    children,
    id,
    elementType,
    options,
    disableImagesLoaded,
    reloadOnUpdate,
    isStatic,
    classList
}) => {


    return (
        <Flickity
            id={id}
            elementType={elementType} // default 'div'
            options={options} // takes flickity options {}
            disableImagesLoaded={disableImagesLoaded} // default false
            reloadOnUpdate={reloadOnUpdate} // default false
            static={isStatic} // default false
            className={classList}
        >
            {children}
        </Flickity>
    );
};

Carousel.propTypes = {
    // children: ,
    id: PropTypes.string,
    customStyle: PropTypes.object,
    elementType: PropTypes.string,
    options: PropTypes.object,
    disableImagesLoaded: PropTypes.bool,
    reloadOnUpdate: PropTypes.bool,
    static: PropTypes.bool,
    classList: PropTypes.string,
};

Carousel.defaultProps = {
    // children: ,
    id: '',
    customStyle: {},
    elementType: 'div',
    options: {},
    disableImagesLoaded: false,
    reloadOnUpdate: true,
    static: false,
    classList: '',
};

export default Carousel;