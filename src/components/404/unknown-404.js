import { Link } from "gatsby";
import React from "react"

const Unknown404 = () => {

    return (
        <div className="_404-zone">
            <div className="_404-message">
                Il semblerait que la page que vous cherchez n'existe pas
            </div>
            <div className="_404-suggestions">
                <Link to="/">Accueil</Link>
                <Link to="/products">Produits</Link>
                <Link to="/addons">Pièces à main</Link>
            </div>
        </div>
    );
}

Unknown404.defaultProps = {

}

Unknown404.propTypes = {

}

export default Unknown404;