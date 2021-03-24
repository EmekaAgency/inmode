import React from "react";
import { Link } from "gatsby";

import './index.css';

const Unknown404 = ({  }:Unknown404) => {

    return (
        <div className="_404-zone">
            <div className="_404-message">
                Il semblerait que la page que vous cherchez n'existe pas
            </div>
            <div className="_404-suggestions">
                <Link to="/" title="Accueil">Accueil</Link>
                <Link to="/products" title="Machines">Machines</Link>
                {/* SWITCH CART */}
                {/* <Link to="/shop" title="Shop">Shop</Link> */}
            </div>
        </div>
    );
}

interface Unknown404 {

};

export default Unknown404;