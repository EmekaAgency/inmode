import React from "react"
import Flickity from "react-flickity-component";
import { get_img_path } from "../../functions/get_images";
import ProductsContext from "../contexts/products-context";

const Addons = ({ datas }) => {

    console.log(datas);
  
    const addons = React.useContext(ProductsContext).addons;

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
        autoPlay: 3000,
        wrapAround: true,
    });

    return (
        <div id="technologies" className="product-addons">
            <div className="section-title"></div>
            {addons.map((addon, key) => {
                return (
                    <div key={key} className="product-addon">
                        <div className="addon-details">
                            <div className="addon-description">
                                <div className="addon-img">
                                    <img
                                        src={get_img_path(`products/morpheus8/${key + 1}-pic.png`)}
                                        alt="addon-img"
                                    />
                                </div>
                                <div className="addon-title">
                                    <img src={get_img_path(`products/morpheus8/${key + 1}-title.png`)} alt={`morpheus8-${key + 1}-title`}/>
                                    <a className="zone-link" href="/addon"></a>
                                </div>
                                <div className="addon-description">{addon.descr}</div>
                                <div className="addon-what-can-i-treat">
                                    <div className="title">
                                        Que puis-je traiter ?
                                    </div>
                                    <ul>
                                        {key + 1 == 1 && <li>Large body areas</li>}
                                        {key + 1 == 2 && <li>Small hard-to-reach and facial soft tissue areas</li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {key + 1 == 1 ?
                            <img
                                className="addon-single"
                                src={get_img_path(`products/morpheus8/${key + 1}-single.jpg`)}
                                alt={`morpheus8-${key + 1}-single`}
                            />
                            :
                            <div className="addon-carousel">
                                <Flickity
                                    id={`carousel-addons-${addon.name}`}
                                    elementType={'div'} // default 'div'
                                    options={flickityOptions} // takes flickity options {}
                                    disableImagesLoaded={false} // default false
                                    reloadOnUpdate={true} // default false
                                    static // default false
                                    className="slide-addons transition"
                                >
                                    {[1, 2, 3].map((index) => {
                                        return (
                                            <img
                                                key={index}
                                                className="addon"
                                                src={get_img_path(`products/morpheus8/${key + 1}-slide-${index}.jpg`)}
                                                alt={`morpheus8-${key + 1}-slide-${index}`}
                                            />
                                        );
                                    })}
                                </Flickity>
                            </div>
                        }
                    </div>
                );
            })}
        </div>
    );
}

Addons.defaultProps = {

}

Addons.propTypes = {

}

export default Addons;