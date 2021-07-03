import React from 'react';
import { Link } from 'gatsby';

const RequestInformation = ({  }:RequestInformation_Interface) => {
    return (
        <Link className="request-informations" to="/contact" title="Plus d'informations">
            request informations
        </Link>
    );
};

interface RequestInformation_Interface {

};

export default RequestInformation;