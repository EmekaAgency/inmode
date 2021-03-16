import React from 'react';
import { Link } from 'gatsby';

const RequestInformation = ({ data = {} }) => {
    return (
        <Link className="request-informations" to="/contact" title="Plus d'informations">
            request informations
        </Link>
    );
};

export default RequestInformation;