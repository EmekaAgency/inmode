import React from "react"
import { format_string } from "../../functions/format_string";
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const AddonDetails = ({  }) => {
  
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
                    src={get_img_path(`products/addons/${addon.name}/main-p.png`)}
                    alt={addon.name}
                />
            </div>
            <div className="title">
                {`What is ${format_string(addon.name)} ?`}
            </div>
            <p className="text">
                {addon.descr + '. Incididunt Lorem consequat minim incididunt ullamco tempor et ad. Voluptate dolor ipsum enim id consequat do nulla. Id non magna culpa duis est voluptate deserunt nostrud est. Aute ut ex nisi veniam reprehenderit ipsum sint anim elit culpa ad commodo ut.'}
            </p>
        </div>
        <div className="key-benefits transition">
            <div className="title">
                {'key benefits:'}
            </div>
            {/* TODO table key_benefits addon_id + position */}
            {[
                'Morpheus8 delivers the deepest fractional treatments available, penetrating subdermal tissue up to 8mm (7mm + 1mm thermal profile).',
                'Dual Handpieces allow for increased treatment functionality: Morpheus8 for smaller treatment areas and Morpheus8 Body for larger and deeper tissue treatments.',
                'Four fractional tips with different microneedle configurations (Prime 12 pin, Resurfacing 24 pin, Morpheus8 24 pin, and Body 40 pin) deliver clinically proven RF energy to multiple treatment depths (0.5mm – 7mm).',
                'Safe on skin types up to and including VI with little risk of post inflammatory hyperpigmentation (PIH) which is common with other resurfacing methods.'
            ].map((benefit, key) => {
                return (
                    <div key={key} className="key">
                        <img
                            src={get_img_path('icons/key_benefit.png')}
                            alt="key_benefit"
                        />
                        <div className="text">{benefit}</div>
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