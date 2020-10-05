import React from "react"

const SellingNew = ({ datas = {} }) => {
    
    if(!datas || datas.length == 0) {
        return false;
    }

    return (
        <div className="selling-new transition">
            <div className="selling-details-img transition">
                <img
                    src={datas.picture.childImageSharp.fluid.srcWebp}
                />
            </div>
            <div className="selling-details">
                <div className="title">
                    {datas.title}
                </div>
                <p className="text">
                    {datas.text}
                </p>
            </div>
        </div>
    );
}

SellingNew.propTypes = {

};

SellingNew.defaultProps = {

};

export default SellingNew;