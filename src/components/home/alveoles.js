import React from "react";
import { get_img_path } from "../../functions/get_images";

const Alveoles = ({  }) => {

    const alveoles = (size) => {
        let temp = [];
        for(let i = 0; i < size; i++) {
            temp[i] = `al ${i + 1}`;
        }
        return temp;
    };

    // TODO div back color pour shadow

    const images = [
        'alveole-1.jpg',
        'alveole-2.png',
        'alveole-3.jpg',
        'alveole-4.jpg',
        'alveole-5.jpg'
    ];

    const texts = [
        'meetings',
        'stations',
        'technologies',
        'patients',
        'physiciens'
    ];

    return (
        <div className="alveoles">
            <div className="alveoles-container">
                {alveoles(5).map((alveole, key) => {
                    return (
                        <div key={key} className="alveole">
                            <img src={get_img_path(`/icons/home/${images[key]}`)} alt={`/icons/products/alveole-${key + 1}`}/>
                            <div className="alveole-text">{texts[key]}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

Alveoles.propTypes = {

}

Alveoles.defaultProps = {

}

export default Alveoles;