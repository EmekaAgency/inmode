import React from 'react';
import { useCart } from '../contexts/cart-provider';

import './index.css';
import './fetch';
import { send_form } from './fetch';

const StrapiUpdate = ({  }) => {

    const cart = useCart();
    const articles = cart.articles;

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //* console.log('Submit update');
        send_form(e.target);
    }

    return (
        <form id="strapi-update" className="strapi-form" onSubmit={handleSubmit}>
            <input type="text" name="id" placeholder="Object id to update"/>
            {/* reference       || SIZE € [6, 6] */}
            <input id="update-reference" type="text" defaultValue="" name="reference" placeholder="reference"/>
            {/* Text2       || OBLIGATOIRE */}
            <input id="update-Text2" type="text" defaultValue="" name="Text2" placeholder="Text2" required/>
            {/* Number      || OBLIGATOIRE MIN0 */}
            <input id="update-Number" type="number" defaultValue="" name="Number" placeholder="Number" required/>
            {/* Datetime    || OBLIGATOIRE */}
            {/* <input id="update-Datetime" type="date" defaultValue="" name="Datetime" placeholder="Datetime" required/> */}
            <input id="update-Datetime" type="number" value={Date.now()} name="Datetime" placeholder="Datetime" required disabled/>
            {/* Article     ||  */}
            <select id="article-update" name="Article" required>
                <option value="" selected disabled style={{display: 'none'}}>Article</option>
                {Object.keys(articles).map((reference:any, key:number) => {
                    return <option key={key} value={articles[reference].id}>{`${articles[reference].relative} ${reference}`}</option>
                })}
            </select>
            {/* Email       || OBLIGATOIRE UNIQUE */}
            <input id="update-Email" type="mail" defaultValue="" name="Email" placeholder="Email" required/>
            {/* Boolean     || OBLIGATOIRE */}
            <input id="update-Boolean" type="checkbox" defaultValue="" name="Boolean" placeholder="Boolean"/>
            <button type="submit" id="update-submit">UPDATE</button>
            <div id="update-result">---</div>
        </form>
    );
};

export default StrapiUpdate;