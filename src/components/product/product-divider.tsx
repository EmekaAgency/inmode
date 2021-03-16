import React from "react"

const ProductDivider = ({position, specialBackground, specialFill}) => {

    return (
        <div className={`product-divider-${position}`} style={{backgroundColor: specialBackground || null}}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" style={{fill: specialFill || null}}></path>
            </svg>
        </div>
    );
};

export default ProductDivider;