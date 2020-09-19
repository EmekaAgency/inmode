import React from "react"
import ProductsContext from "../contexts/products-context";

const AddonWhatTreat = ({  }) => {
  
  const addon = React.useContext(ProductsContext).addons[0];

    return (
        <div className="addon-what-treat">

        </div>
    );
}

AddonWhatTreat.defaultProps = {

}

AddonWhatTreat.propTypes = {

}

export default AddonWhatTreat;