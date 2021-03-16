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
                <Link to="/products" title="Produits">Produits</Link>
                <Link to="/addons" title="Pièces à main">Pièces à main</Link>
            </div>
        </div>
    );
}

interface Unknown404 {

};

export default Unknown404;