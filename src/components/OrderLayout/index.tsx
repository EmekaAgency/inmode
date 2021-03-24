import { Link } from 'gatsby';
import React from 'react';

import { useCart } from '../contexts/cart-provider';
import { InmodePanel_Order_Interface } from '../interfaces';
import LoadingGIF from '../LoadingGIF';

import './index.css';

interface OrderLayoutParams {
    status: string;
    order?: InmodePanel_Order_Interface;
};

function get_day(day:number):string {
    switch(day) {
        case 1: return 'lundi';
        case 2: return 'mardi';
        case 3: return 'mercredi';
        case 4: return 'jeudi';
        case 5: return 'vendredi';
        case 6: return 'samedi';
        case 7: return 'dimanche';
        default: return 'unknown';
    }
}

function get_month(month:number):string {
    switch(month) {
        case 1: return 'janvier';
        case 2: return 'février';
        case 3: return 'mars';
        case 4: return 'avril';
        case 5: return 'mai';
        case 6: return 'juin';
        case 7: return 'juillet';
        case 8: return 'août';
        case 9: return 'septembre';
        case 10: return 'octobre';
        case 11: return 'novembre';
        case 12: return 'décembre';
        default : return 'unknown';
    }
}

function get_date(date:string):string {
    const _date = new Date(date);
    let _temp = "";
    _temp += get_day(_date.getDay()) + ' ';
    _temp += (_date.getDate() < 10 ? `0${_date.getDate()}` : _date.getDate()) + ' ';
    _temp += get_month(_date.getMonth() + 1) + ' ';
    _temp += _date.getFullYear() + ' à ';
    _temp += (_date.getHours() + 1 < 10 ? `0${_date.getHours() + 1}` : _date.getHours() + 1) + ':';
    _temp += (_date.getMinutes() < 10 ? `0${_date.getMinutes()}` : _date.getMinutes()) + ':';
    _temp += (_date.getSeconds() < 10 ? `0${_date.getSeconds()}` : _date.getSeconds());
    return _temp;
}

function status_message(status:string):string {
    return status;
}

const OrderLayout = ({ status, order }:OrderLayoutParams) => {

    const cart = useCart();

    return (
        <div className="order-layout">
            <div className="container">
                <h2>{status}</h2>
                {!order ? <LoadingGIF/> :
                <div className="order">
                    {/* Reference: "geGCkk" */}
                    {/* <div className="order-id">Order {order.Reference}</div> */}
                    {/* Article: (3) [{…}, {…}, {…}] */}
                    {/* <div className="order-articles">
                        {order.Article.map((article , key:number):any => {
                            console.log(article.Article.reference);
                            let _art = cart.article(article.Article.reference);
                            console.log(_art);
                            if(_art) {
                                return (
                                    <div key={key} className="order-article">
                                        <div className="article-name">{_art.Name}</div>
                                        <div className="article-price">{_art.price}</div>
                                        <div className="article-pack_size">{_art.pack_size}</div>
                                        <div className="article-quantity">{article.Quantity}</div>
                                        <div className="article-total">{_art.price * article.Quantity * (_art.discount > 0 ? _art.discount : 1)}</div>
                                    </div>
                                );
                            }
                            return null;
                        }).filter(e => e)}
                    </div> */}
                    {/* DeliveryTax: 10 */}
                    {/* <div className="order-delivery"> */}
                        {/* {order.DeliveryTax == 0 && "Livraison gratuite"} */}
                        {/* TODO Fonction currency(currency:number):string, ex 978 => '€' */}
                        {/* {order.DeliveryTax > 0 && `Frais de livraison : ${order.DeliveryTax}€`} */}
                    {/* </div> */}
                    {/* Date: "2021-02-26T05:40:43.000Z" */}
                    <div className="order-date">
                        Achat effectué le {get_date(order.Date)}
                    </div>
                    {/* Billing: {id: 20, Firstname: "m", Lastname: "m", Phone: "0667630604", Mail: "test@gmail.com", …} */}
                    {/* {order.Billing && <div className="order-billing">
                        <h3>Informations de facturation</h3>
                        <div className="billing-table">
                            {order.Billing.Firstname && <div className="billing-firstname">{order.Billing.Firstname}</div>}
                            {order.Billing.Lastname && <div className="billing-lastname">{order.Billing.Lastname}</div>}
                            {order.Billing.Society && <div className="billing-society">{order.Billing.Society}</div>}
                            {order.Billing.Address1 && <div className="billing-address1">{order.Billing.Address1}</div>}
                            {order.Billing.Address2 && <div className="billing-address2">{order.Billing.Address2}</div>}
                            {order.Billing.ZIP && <div className="billing-zip">{order.Billing.ZIP}</div>}
                            {order.Billing.City && <div className="billing-city">{order.Billing.City}</div>}
                            {order.Billing.Phone && <div className="billing-phone">{order.Billing.Phone}</div>}
                            {order.Billing.Mail && <div className="billing-mail">{order.Billing.Mail}</div>}
                        </div>
                    </div>} */}
                    {/* Shipping: null */}
                    {/* {order.Shipping && <div className="order-shipping">
                        <h3>Informations de livraison</h3>
                        <div className="shipping-table">
                            {order.Shipping.Firstname && <div className="shipping-firstname">{order.Shipping.Firstname}</div>}
                            {order.Shipping.Lastname && <div className="shipping-lastname">{order.Shipping.Lastname}</div>}
                            {order.Shipping.Society && <div className="shipping-society">{order.Shipping.Society}</div>}
                            {order.Shipping.Address1 && <div className="shipping-address1">{order.Shipping.Address1}</div>}
                            {order.Shipping.Address2 && <div className="shipping-address2">{order.Shipping.Address2}</div>}
                            {order.Shipping.ZIP && <div className="shipping-zip">{order.Shipping.ZIP}</div>}
                            {order.Shipping.City && <div className="shipping-city">{order.Shipping.City}</div>}
                            {order.Shipping.Phone && <div className="shipping-phone">{order.Shipping.Phone}</div>}
                        </div>
                    </div>} */}
                    {/* TODO Create a function to display a generic message according to the status */}
                    {/* Statut: "ACCEPTED" */}
                    {/* <div className="order-status">
                        {status_message(order.Statut)}
                    </div> */}
                </div>
                }
                <div className="payment-suggestions">
                    <Link to="/" title="Accueil">Accueil</Link>
                    <Link to="/products" title="Machines">Machines</Link>
                    {/* SWITCH CART */}
                    {/* <Link to="/shop" title="Shop">Shop</Link> */}
                </div>
            </div>
        </div>
    );
};

export default OrderLayout;