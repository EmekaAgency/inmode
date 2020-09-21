import React from "react"
import ProductsContext from "../contexts/products-context";
import Flickity from "react-flickity-component";
import { get_img_path } from "../../functions/get_images";

const AddonBeforeAfter = ({  }) => {
  
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

    const [flickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: true,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        autoPlay: 5000,
        wrapAround: true,
    });

    return (
        <div className="addon-before-after">
          <div className="title">
            {`before and afters`}
          </div>
            <Flickity
              id={`carousel-addon-ba`}
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate={true} // default false
              static // default false
              className="slides-before-after transition"
            >
                {[
                    {'doctor': 'Dr. V. Rodopoulou','descr': 'Morpheus8 Body is a fast and deep penetrating technology to address adipose tissue in large body areas.'},
                    {'doctor': 'Dr. E. Dayan & Dr. R. Rohrich','descr': 'Target the deeper layers of the skin to remodel the dermis and sub-dermis with Morpheus8’s advanced radiofrequency technology.'},
                    {'doctor': 'Dr. A. Khalfin','descr': 'Deliver exceptional skin, tissue and collagen remodeling with the Morpheus8 fractional technology.'},
                    {'doctor': 'Dr. V. Rodopoulou','descr': 'Morpheus8 Body is a fast and deep penetrating technology to address adipose tissue in large body areas.'},
                    {'doctor': 'Dr. E. Dayan & Dr. R. Rohrich','descr': 'Target the deeper layers of the skin to remodel the dermis and sub-dermis with Morpheus8’s advanced radiofrequency technology.'},
                    {'doctor': 'Dr. A. Khalfin','descr': 'Deliver exceptional skin, tissue and collagen remodeling with the Morpheus8 fractional technology.'}
                ].map((ba, key) => {
                    return (
                        <div key={key} className="ba-slide">
                            <img
                                src={get_img_path(`products/addons/${addon.name}/b-a-${(key + 1) - Math.floor(key / 3) * 3}.jpg`)}
                                alt={`${addon.name}-b-a-${(key + 1) - Math.floor(key / 3) * 3}`}
                            />
                            <div className="ba-doctor">{ba.doctor}</div>
                            <div className="ba-descr">{ba.descr}</div>
                        </div>
                    );
                })}
            </Flickity>
            <a className="request-informations" href="#">
                request informations
            </a>
        </div>
    );
}

AddonBeforeAfter.defaultProps = {

}

AddonBeforeAfter.propTypes = {

}

export default AddonBeforeAfter;