import { Link } from "gatsby";
import React from "react";

const HowCanWeHelp = ({ from }) => {
    return (
        <div className={`how-can-we-help main-container ${from}`}>
            <div className="title">Comment pouvons-nous vous aider ?</div>
            <div className="rule">Sélectionnez votre sujet ci-dessous</div>
            <hr/>
            <div className="topic">
                Trouver une <Link to="">clinique</Link>
            </div>
            <div className="topic">
                Questions à propos des <Link to="">traitements</Link>
            </div>
            <div className="topic">
                Questions sur <Link to="">technologies et machines</Link>
            </div>
            <div className="topic">
                Demandes générales par <Link to="">mail</Link> ou au <Link to="tel:+18559829199">1.855.982.9199</Link>
            </div>
        </div>
    );
}

HowCanWeHelp.propTypes = {

};

HowCanWeHelp.defaultProps = {

};

export default HowCanWeHelp;