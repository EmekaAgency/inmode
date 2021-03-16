import React from "react";

const ProductDemo = ({ datas }) => {

    if(!datas) {
        return <></>;
    }

    return (
        <div id="demo" className="product-demo">
            <div className="picture">
                <img
                    src={datas.picture.childImageSharp.fluid.srcWebp}
                    srcSet={datas.picture.childImageSharp.fluid.srcSetWebp}
                        alt="product-demo"
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