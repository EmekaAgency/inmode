import React from "react"
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const AddonWhatTreat = ({  }) => {
  
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
        <div className="addon-what-treat">
          <div className="title">what can you treat</div>
          <div className="treats">
            {[
              {'treat': 'face and body', 'descr': 'Morpheus8 targets subdermal layers of the skin and tissue to remodel collagen on the face and body.'},
              {'treat': 'collagen', 'descr': 'This fractional tissue treatment simulates the production of collagen in the underlying layers of the dermis. Morpheus8’s modular tips enable procedures to be customized for large or small body areas.'},
              {'treat': 'darker skin tones', 'descr': 'Morpheus8 effectively remodels skin and tissue with minimal risk of post-inflammatory hyperpigmentation. Patients should expect little to no thermal damage to skin types I – VI.'}
            ].map((treat, key) => {
              return (
                <div key={key} className="treat-part">
                  <img
                    src={get_img_path(`products/addons/${addon.name}/treat-${key + 1}.jpg`)}
                    alt={`${addon.name}-treat-${key + 1}`}
                  />
                  <div className="it-treats">{treat.treat}</div>
                  <div className="treat-descr">{treat.descr}</div>
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