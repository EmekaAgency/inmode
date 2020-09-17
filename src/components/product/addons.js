import React from "react"
import { resolve_image } from "../../functions/get_images";
import Flickity from "react-flickity-component";

const Addons = ({ product }) => {

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
            {product.under.map((addon, key) => {
                return (
                    <div key={key} className="product-addon">
                        <div className="addon-details">
                            <div className="addon-description">
                                <div className="addon-img">
                                    <img src={resolve_image(`products/addons/${'product-01'}`)} alt="addon-img"/>
                                </div>
                                <div className="addon-title">{addon.name}</div>
                                <div className="addon-description">{addon.description || 'Id excepteur quis ea aute elit laborum laboris sint irure Lorem esse aliquip. Velit eiusmod irure ex adipisicing do nulla nulla qui aute Lorem fugiat cupidatat consequat nisi. Reprehenderit proident veniam mollit duis exercitation ea tempor nulla.'}</div>
                                <div className="addon-what-can-i-treat">
                                    <div className="title">
                                        Que puis-je traiter ?
                                    </div>
                                    <ul>
                                        <li>Bla</li>
                                        <li>Ble</li>
                                        <li>Bli</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                                {['1', '2', '3'].map((pic, key) => {
                                    return (
                                        <div key={key} className="addon">{pic}</div>
                                    );
                                })}
                            </Flickity>
                        </div>
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