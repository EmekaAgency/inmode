import React from "react";
import PropTypes from "prop-types";
import Flickity from "react-flickity-component";

const Carousel = ({
    id = '',
    elementType = 'div',
    options = {},
    disableImagesLoaded = false,
    reloadOnUpdate = true,
    isStatic = false,
    classList = '',
    children,
}:Carousel) => {


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

interface Carousel {
    id?: string;
    elementType?: string;
    options?: object;
    disableImagesLoaded?: boolean;
    reloadOnUpdate?: boolean;
    isStatic?: boolean;
    classList?: string;
    children: any;
};

export default Carousel;