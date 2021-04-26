import React from 'react';
import { useCart } from '../contexts/cart-provider';

import './index.css';
import './fetch';
import { send_form } from './fetch';

const StrapiDeletePage = ({  }) => {

    const cart = useCart();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //* console.log('Submit delete');
        send_form(e.target);
    }

    return (
        <form id="strapi-delete" className="strapi-form" onSubmit={handleSubmit}>
            <input type="text" name="reference" placeholder="Object reference to delete" required/>
            <button type="submit" id="delete-submit">DELETE</button>
            <div id="delete-result">---</div>
        </form>
    );
};

export default StrapiDeletePage;