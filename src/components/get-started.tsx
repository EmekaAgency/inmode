import { Link } from "gatsby";
import React from "react";

const GetStarted = ({ from = null }:GetStarted) => {
    return (
        <div className="get-started">
            <div className="container">
                <p>Get started</p>
                <h2>Which technology is right for you ?</h2>
                <Link to="/contact" title="Contact us">Contact us</Link>
            </div>
        </div>
    );
};

interface GetStarted {
    from?: string | null;
};

export default GetStarted;