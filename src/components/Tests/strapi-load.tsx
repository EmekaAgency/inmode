import React from 'react';
import { useCart } from '../contexts/cart-provider';

import './index.css';
import './fetch';
import { send_form } from './fetch';

const StrapiLoad = ({  }) => {

    const cart = useCart();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit load');
        send_form(e.target);
    }

    return (
        <form id="strapi-load" className="strapi-form" onSubmit={handleSubmit}>
            <input type="number" name="reference" placeholder="Object reference to load" required/>
            {/* reference       || SIZE € [6, 6] */}
            <div id="load-reference">---</div>
            {/* Text2       || OBLIGATOIRE */}
            <div id="load-Text2">---</div>
            {/* Number      || OBLIGATOIRE MIN0 */}
            <div id="load-Number">---</div>
            {/* Datetime    || OBLIGATOIRE */}
            <div id="load-Datetime">---</div>
            {/* Article     ||  */}
            <div id="load-Article">---</div>
            {/* Email       || OBLIGATOIRE UNIQUE */}
            <div id="load-Email">---</div>
            {/* Boolean     || OBLIGATOIRE */}
            <div id="load-Boolean">---</div>
            <button type="submit" id="load-submit">LOAD</button>
        </form>
    );
};

export default StrapiLoad;