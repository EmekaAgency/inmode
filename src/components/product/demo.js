import React from "react"
import Img from "gatsby-image"

const ProductDemo = ({ datas }) => {

    if(!datas) {
        return false;
    }

    return (
        <div id="demo" className="product-demo">
            <div className="picture">
                {/* <Img
                    fluid={datas.picture.childImageSharp.fluid}
                    fadeIn={true}
                    style={{position: 'unset'}}
                    imgStyle={{objectFit: 'contain'}}
                    durationFadeIn={100}
                /> */}
                <img
                    src={datas.picture.childImageSharp.fluid.srcWebp}
                    srcSet={datas.picture.childImageSharp.fluid.srcSetWebp}
                />
            </div>
            <div className="text">
                {datas.text}
            </div>
        </div>
    );
}

ProductDemo.propTypes = {

};

ProductDemo.defaultProps = {

};

export default ProductDemo;