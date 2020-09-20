import React from "react"
import { resolve_image } from "../../functions/get_images";
import Flickity from "react-flickity-component";
import ProductsContext from "../contexts/products-context";

const Addons = ({  }) => {
  
    const addons = React.useContext(ProductsContext).addons;

    console.log(addons);

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
        <div className="product-addons">
            <div className="section-title"></div>
            {addons.map((addon, key) => {
                return (
                    <div key={key} className="product-addon">
                        <div className="addon-details">
                            <div className="addon-description">
                                <div className="addon-img">
                                    <img src={resolve_image(`products/morpheus8/${key + 1}-pic`)} alt="addon-img"/>
                                </div>
                                <div className="addon-title">{addon.name}</div>
                                <div className="addon-description">{addon.description || 'Id excepteur quis ea aute elit laborum laboris sint irure Lorem esse aliquip. Velit eiusmod irure ex adipisicing do nulla nulla qui aute Lorem fugiat cupidatat consequat nisi. Reprehenderit proident veniam mollit duis exercitation ea tempor nulla.'}</div>
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
                            <img className="addon-single" src={resolve_image(`products/morpheus8/${key + 1}-single`)} alt={`morpheus8-${key + 1}-single`}/>
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
                                            <img key={index} className="addon" src={resolve_image(`products/morpheus8/${key + 1}-slide-${index}`)} alt={`morpheus8-${key + 1}-slide-${index}`}/>
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