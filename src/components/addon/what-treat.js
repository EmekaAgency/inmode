import React from "react"
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const AddonWhatTreat = ({ datas }) => {
  
  const addon = React.useContext(ProductsContext).addons[0];

  const img_extensions = ['jpg', 'png', 'svg', 'jpeg', 'webp', 'bmp'];
  const [index, setIndex] = React.useState(0);

  const resolve_image = (name ) => {
    let img = new Image();
    img.src = get_img_path(`${name}.${img_extensions[index]}`);
    img.onerror = function() {
        setIndex(index + 1);
        return resolve_image(name);
    };

    return get_img_path(`${name}.${img_extensions[index]}`);
};

    return (
        <div id="what-treat" className="addon-what-treat">
          <div className="title">{datas.title}</div>
          <div className="treats">
            {datas.what_treats.map((treat, key) => {
              return (
                <div key={key} className="treat-part">
                  <img
                    src={treat.image.publicURL}
                  />
                  <div className="it-treats">{treat.title}</div>
                  <div className="treat-descr">{treat.description}</div>
                </div>
              );
            })}
          </div>
          <a className="request-informations" href="#">
              request informations
          </a>
        </div>
    );
}

AddonWhatTreat.defaultProps = {

}

AddonWhatTreat.propTypes = {

}

export default AddonWhatTreat;