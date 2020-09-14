import React from "react";

const Alveoles = ({  }) => {

    const alveoles = (size) => {
        let temp = [];
        for(let i = 0; i < size; i++) {
            temp[i] = `al ${i + 1}`;
        }
        return temp;
    };

    return (
        <div className="alveoles">
            <div className="alveoles-container">
                {alveoles(5).map((alveole, key) => {
                    return (
                        <div key={key} className="alveole">
                            <div className="alveole-text">{alveole}</div>
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