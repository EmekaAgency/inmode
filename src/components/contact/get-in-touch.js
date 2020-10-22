import React from "react";

const GetInTouch = ({ from }) => {
    return (
        // TODO rajouter main-container pour les container 1170px
        <div className={`get-in-touch main-container ${from}`}>
            <div className="text">
                Get in touch
            </div>
            <hr/>
        </div>
    );
}

GetInTouch.propTypes = {

};

GetInTouch.defaultProps = {

};

export default GetInTouch;