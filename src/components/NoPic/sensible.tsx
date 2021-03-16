import React from 'react';

import  './index.css';
import { sensible } from './const';

const Sensible = ({from}:Sensible) => {
    return (
        <div className="sensible">
            {sensible[from]}
        </div>
    );
};

interface Sensible {
    from: string;
};

export default Sensible;