import { Link } from "gatsby";
import React from "react";

const HowCanWeHelp = ({ from }:HowCanWeHelp) => {
    return (
        <div className={`how-can-we-help main-container ${from}`}>
            <div className="title">How can we help you ?</div>
            <div className="rule">Select a subject below</div>
            <hr/>
            <div className="topic">
                Find a <Link to="#" title="Clinic">clinic</Link>
            </div>
            <div className="topic">
                Questions about <Link to="#" title="Treatments">treatments</Link>
            </div>
            <div className="topic">
                Questions about <Link to="#" title="Technologies and workstations">technologies and workstations</Link>
            </div>
            <div className="topic">
                General inquiries by <Link to="mailto: info@inmodeuk.emeka.fr" title="Email">email</Link> or on <Link to="tel: +44 (0)20-8965-2594" title="Call us"> +44 (0)20-8965-2594</Link>
            </div>
        </div>
    );
};

interface HowCanWeHelp {
    from: string;
}

export default HowCanWeHelp;