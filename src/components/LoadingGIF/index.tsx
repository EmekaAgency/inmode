import React from 'react';

import './index.css';

const LoadingGIF = ({ custom = undefined }:LoadingGIF) => {
    return (
        <div className={`loading-gif${' ' + custom || null}`}>
            <div className="loader-circle"></div>
            <div className="loader-bar"></div>
            {/* <div className="up-border"></div> */}
            {/* <div className="down-border"></div> */}
        </div>
    );
};

interface LoadingGIF {
    custom?: string;
}

export default LoadingGIF;