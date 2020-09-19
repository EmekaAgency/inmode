import React from "react"
import ProductsContext from "../contexts/products-context";

const AddonVideos = ({  }) => {
  
  const addon = React.useContext(ProductsContext).addons[0];

    return (
        <div className="addon-videos">

        </div>
    );
}

AddonVideos.defaultProps = {

}

AddonVideos.propTypes = {

}

export default AddonVideos;