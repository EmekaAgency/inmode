import React from 'react';
import { useCart } from '../contexts/cart-provider';

import './index.css';
import './fetch';
import { send_form } from './fetch';

const StrapiCreate = ({  }) => {

    const cart = useCart();
    const articles = cart.articles;

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit create');
        send_form(e.target);
    }

    return (
        <form id="strapi-create" className="strapi-form" onSubmit={handleSubmit}>
            {/* reference       || SIZE € [6, 6] */}
            <input type="text" defaultValue="" name="reference" placeholder="reference"/>
            {/* Text2       || OBLIGATOIRE */}
            <input type="text" defaultValue="" name="Text2" placeholder="Text2" required/>
            {/* Number      || OBLIGATOIRE MIN0 */}
            <input type="number" defaultValue="" name="Number" placeholder="Number" required/>
            {/* Datetime    || OBLIGATOIRE */}
            {/* <input type="date" defaultValue="" name="Datetime" placeholder="Datetime" required/> */}
            <input id="update-Datetime" type="number" value={Date.now()} name="Datetime" placeholder="Datetime" required disabled/>
            {/* Article     ||  */}
            <select name="Article" required>
                <option value="" selected disabled style={{display: 'none'}}>Article</option>
                {Object.keys(articles).map((reference:any, key:number) => {
                    return <option key={key} value={articles[reference].id}>{`${articles[reference].relative} ${reference}`}</option>
                })}
            </select>
            {/* Email       || OBLIGATOIRE UNIQUE */}
            <input type="mail" defaultValue="" name="Email" placeholder="Email" required/>
            {/* Boolean     || OBLIGATOIRE */}
            <input type="checkbox" defaultValue="" name="Boolean" placeholder="Boolean"/>
            <button type="submit" id="create-submit">CREATE</button>
            <div id="create-result">---</div>
        </form>
    );
};

export default StrapiCreate;