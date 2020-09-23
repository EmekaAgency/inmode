import React from "react"
import { format_string } from "../../functions/format_string";
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const AddonDetails = ({ datas }) => {
  
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
        <div className="addon-details">
        <div id="what-is" className="what-is transition">
            <div className="addon-details-img transition">
                <img
                    src={datas.what_is.image.publicURL}
                    alt={addon.name}
                />
            </div>
            <div className="title">
                {datas.what_is.title}
            </div>
            <p className="text">
                {datas.what_is.description}
            </p>
        </div>
        <div className="key-benefits transition">
            <div className="title">
                {'key benefits:'}
            </div>
            {/* TODO table key_benefits addon_id + position */}
            {datas.key_benefits.map((benefit, key) => {
                return (
                    <div key={key} className="key">
                        <img
                            src={get_img_path('icons/key_benefit.png')}
                            alt="key_benefit"
                        />
                        <div className="text">{benefit.text}</div>
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

AddonDetails.defaultProps = {

}

AddonDetails.propTypes = {

}

export default AddonDetails;