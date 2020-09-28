import React from "react"

const ProductDemo = ({ datas }) => {

    if(!datas) {
        return false;
    }

    return (
        <div id="demo" className="product-demo">
            <div className="picture">
                <img src={datas.picture.childImageSharp.fluid.srcWebp}/>
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