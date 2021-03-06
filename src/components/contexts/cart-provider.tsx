import { useStaticQuery, graphql } from 'gatsby';
import React, { ReactChild, useContext } from 'react';
import { disableMainScroll, enableMainScroll } from '../../functions/disable-scroll';
import { useWindowSize } from '../../functions/window-size';
import CartContext from './cart-context';

import hmacSHA256 from 'crypto-js/hmac-sha256';
import hmacMd5 from 'crypto-js/hmac-md5';
import Base64 from 'crypto-js/enc-base64';
import { _sort_html_list, _sort_object } from '../../functions/sort';
import rand_token from '../../functions/rand_token';
import { formById, oneById } from '../../functions/selectors';

import moment from 'moment';
import { filter_object } from '../../functions/filter_object';

import { create_object, create_strapi_order, load_object } from './strapi';

import '../interfaces';
import {
    Article_Interface,
    NameTable_Interface,
    InmodePanel_Shop_Interface,
    SogecommerceOrder,
    Cart_Interface,
    Cart_FormSave_Interface
} from '../interfaces';
import { openModale, paymentSEPA } from '../../functions/modale';

export const useCart = ():Cart_Interface => {
    return useContext(CartContext);
}

const CartProvider = ({ requested = "", children }:{requested:string, children:ReactChild}):React.Provider<Cart_Interface> => {

    // moment.locale('fr');

    const name_table:NameTable_Interface = {
        tip: ['tip', 'tips'],
        canule: ['canule', 'canules'],
        kit: ['Kit-Mix', 'Kit-Mix'],
        pin: ['pin', 'pins'],
        unite: ['unité', 'unités']
    };

    const [appeared, setAppeared] = React.useState(false);

    const [articles] = React.useState(
        Object.fromEntries(
            useStaticQuery(graphql`
                {
                    allStrapiShop(sort: {order: ASC, fields: relative}) {
                        nodes {
                            strapiId
                            relative
                            reference
                            Name
                            pack_size
                            pack_type
                            price
                            discount
                            picture {
                                childImageSharp {
                                    fluid {
                                        srcWebp
                                        srcSetWebp
                                    }
                                }
                            }
                        }
                    }
                }
            `).allStrapiShop.nodes.map((article:InmodePanel_Shop_Interface) => {
                return [
                    article.reference,
                    {
                        ...article,
                        'pack_name': (function() {
                            return `${article.pack_size} ${name_table[article.pack_type][article.pack_size === 1 ? 0 : 1]}`;
                        }),
                    }];
            }),
        ),
    );

    const currencies = {
        'EUR': 978
    };

    // SWITCH TEST / PRODUCTION MODE
    const [pay_params, setPayParams] = React.useState({
        signature: "",
        actionMode: "INTERACTIVE",
        // ctxMode: "TEST",
        ctxMode: "PRODUCTION",
        currency: currencies.EUR,
        pageAction: "PAYMENT",
        siteId: "",
        transDate: "",
        transId: "",
        version: "V2",
        Reference: "",
        url_success: "",
        url_cancel: "",
        url_refused: "",
        url_error: "",
        order_create: "",
        order_load: "",
        order_signature: "",
    });

    const [otherAddress, setOtherAddress]:[Boolean, React.Dispatch<Boolean>] = React.useState(new Boolean(false));
    const [formFields, setFormFields]:[Cart_FormSave_Interface, React.Dispatch<Cart_FormSave_Interface>] = React.useState({});

    const article_base = (ref:string, qnt:number):Article_Interface => {
        return {
            id: articles[ref].strapiId,
            name: articles[ref].Name,
            reference: ref,
            quantity: qnt,
            pack_size: articles[ref].pack_size,
            type: articles[ref].pack_type,
            pack_name():string {return `${qnt * this.pack_size} ${name_table[this.type][qnt * this.pack_size === 1 ? 0 : 1]}`;},
            add(qnt:number):Article_Interface {this.quantity+=qnt;return this;},
            remove(qnt:number):Article_Interface {
                let process = 0;
                this.quantity > qnt && ++process && this.add(0 - qnt);
                this.quantity <= qnt && !process && this.add(0 - this.quantity);
                return this;
            },
            is_ref(ref:string):boolean {return ref === this.reference;},
            price: articles[ref].price,
            discount: articles[ref].discount || 0,
            total():number {return this.price * this.quantity * (1 + this.discount / 100);},
            // 'delete': (function() {
            //     // console.log("HARA KIRI KIRI !")
            //     delete this;
            // })
        };
    }

    const init_shop = async(
        shop_id:string,
        urls:{success: string, cancel: string, refused: string, error: string},
        order_urls:{create: string, load:string, signature:string}
    ):Promise<void> => {
        let _temp = {
            ...pay_params,
            siteId: shop_id,
            url_success: urls.success,
            url_cancel: urls.cancel,
            url_refused: urls.refused,
            url_error: urls.error,
            order_create: order_urls.create,
            order_load: order_urls.load,
            order_signature: order_urls.signature,
        };
        // console.log(_temp);
        await setPayParams(_temp);
    }

    const [cart, setCart] = React.useState([]);
    const [purchaseOpened, setPurchaseOpened] = React.useState(false);
    const size = useWindowSize();

    const open_purchase = ():void => {
        !appeared && setAppeared(true);
        setPurchaseOpened(true);
        size.width < 1200 && disableMainScroll();
    }
    const close_purchase = ():void => {
        enableMainScroll();
        setPurchaseOpened(false);
    }
    const toggle_open_purchase = ():void => {purchaseOpened ? close_purchase() : open_purchase();}

    const article_index = (ref:string):number => {
        return cart.map((item:Article_Interface, key) => {
            return item.is_ref(ref) ? key : 0;
        }).reduce((a, b) => {return a + b;});
    }

    const find_in_cart = (ref:string):Article_Interface | undefined | null => {
        if(cart && cart.length) {
            return cart.find((item:Article_Interface) => {
                if(ref === item.reference) {
                    return item;
                }
            })
        }
        return null;
    }

    const find_in_articles = (ref:string):Article_Interface | undefined | null => {
        if(!ref) {
            return null;
        }
        if(typeof ref != 'string') {
            return null;
        }
        return articles[ref] || null;
    }

    const add_article = (ref:string, qnt:number):void => {
        !appeared && setAppeared(true);
        let temp = find_in_cart(ref);
        if(temp) {
            let _cart:Cart_Interface["cart"] = new Array(...cart);
            _cart.splice(article_index(ref), 1, temp.add(qnt));
            setCart(_cart);
            // add_paying_datas(ref, temp.quantity);
        }
        else {
            let _cart:Cart_Interface["cart"] = new Array(...cart);
            _cart.push(article_base(ref, qnt));
            setCart(_cart);
            // add_paying_datas(ref, qnt);
        }
    }

    const remove_article = (ref:string, qnt:number):void => {
        let temp = find_in_cart(ref);
        if(nb_articles() <= 1) {
            setPurchaseOpened(false);
        }
        if(temp && temp.quantity <= qnt) {
            delete_article(ref);
        }
        if(temp && temp.quantity > qnt) {
            let _cart:Cart_Interface["cart"] = new Array(...cart);
            _cart.splice(article_index(ref), 1, temp.remove(qnt))
            setCart(_cart);
            // edit_paying_datas(ref, temp.quantity);
        }
    }

    const delete_article = (ref:string):void => {
        if(cart.length === 1) {
            setCart([]);
        }
        else if(article_index(ref) >= 0) {
            let _cart:Cart_Interface["cart"] = new Array(...cart);
            _cart.splice(article_index(ref), 1)
            setCart(_cart);
        }
        // delete_paying_datas(ref);
    }

    const add_paying_datas = (ref:string, qnt:number):void => {
        // console.log('add_paying_datas');
        let temp = find_in_cart(ref);
        // console.log(temp);
        // console.log(oneById('payment_articles'));
    }

    const edit_paying_datas = (ref:string, qnt:number):void => {
        // console.log('edit_paying_datas');
        let temp = find_in_cart(ref);
        // console.log(temp);
        // console.log(oneById('payment_articles'));
    }

    const delete_paying_datas = (ref:string):void => {
        // console.log('delete_paying_datas');
        // console.log(`ref : ${ref}`);
        let temp = find_in_cart(ref);
        // console.log(temp);
        // console.log(oneById('payment_articles'));
    }

    const count_total = ():number => {
        return cart.map((article:Article_Interface) => {
            return article.total();
        }).reduce((a, b) => {
            return a + b;
        }, 0);
    };

    const total_DELIVER = ():string => {return count_total() === 0 ? (0).toFixed(2) : (10).toFixed(2);}
    const total_HT = ():string => {return count_total().toFixed(2);}
    const hasTVA = ():boolean => {
        if(formFields.vads_cust_country == undefined && formFields.vads_ship_to_country == undefined) {
            return true;
        }
        if((formFields.vads_cust_country == 'FR' && otherAddress == false) || (formFields.vads_ship_to_country == 'FR' && otherAddress == true)) {
            return true;
        }
        return false;
    }
    const hasTVAIntra = ():boolean => {
        let i = 0;
        console.log(`vads_cust_country : ${formFields.vads_cust_country}`);
        console.log(`vads_ship_to_country : ${formFields.vads_ship_to_country}`);
        if(formFields.vads_cust_country == undefined && formFields.vads_ship_to_country == undefined) {
            console.log('Cas ' + ++i);
            return false;
        }
        if(formFields.vads_cust_country != undefined && formFields.vads_cust_country != 'FR' && otherAddress == false) {
            console.log('Cas ' + ++i);
            return true;
        }
        if(formFields.vads_ship_to_country != undefined && formFields.vads_ship_to_country != 'FR' && otherAddress == true) {
            console.log('Cas ' + ++i);
            return true;
        }
        let _select_cust = document.getElementById('vads_cust_country');
        let _select_ship = document.getElementById('vads_ship_to_country');
        if(_select_cust == null && _select_ship == null) {
            console.log('Cas ' + ++i);
            return true;
        }
        if(_select_cust != null && _select_cust.value != 'FR' && otherAddress == false) {
            console.log('Cas ' + ++i);
            return true;
        }
        if(_select_ship != null && _select_ship.value != 'FR' && otherAddress == true) {
            console.log('Cas ' + ++i);
            return true;
        }
        console.log('Cas ', ++i);
        return false;
    }
    /*PAS DE FRAIS DE LIVRAISON*/
    const total_TVA = ():string => {return (count_total() * 0.2 * 0).toFixed(2);}
    const total_TTC = ():string => {return ((count_total() * (hasTVA() ? 1.2 : 1)) + (pay_delivery() && false ? 10 : 0)).toFixed(2);}
    // /*FRAIS DE LIVRAISON*/
    // const total_TVA = ():string => {return hasTVA() ? (count_total() * 0.2).toFixed(2) : (0).toFixed(2);}
    // const total_TTC = ():string => {return ((count_total() * (hasTVA() ? 1.2 : 1)) + (pay_delivery() ? 10 : 0)).toFixed(2);}
    
    /*PAS DE FRAIS DE LIVRAISON*/
    const pay_delivery = ():boolean => {return count_total() * 1.2 < 500 && false ? true : false;}
    /*PAS FRAIS DE LIVRAISON*/
    // const pay_delivery = ():boolean => {return count_total() * 1.2 < 500 ? true : false;}

    const payment_str = (form_fields) => {
        // console.log("payment_str");
        // return [...form_fields, pay_params.hash_key].map(elem => elem ? typeof elem == 'string' ? elem : elem.value : null).join('+');
        // return Object.keys(form_fields).sort().map(key => form_fields[key] && form_fields[key] != "" ? form_fields[key] : null).filter(elem => elem).join('+');
        return Object.keys(form_fields).sort().map((key:string):string => {return form_fields[key]}).join('+');
    }

    const get_signature = async(str:string):Promise<{signature?:string}> => {
        let promise:Promise<{signature?:string}>;
        let vars:RequestInit = {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({string: str})
        };
        promise = await (await fetch(pay_params.order_signature, vars)).json().catch(err => console.log(err));
        return promise;
        // Base64.stringify(hmacSHA256(str, pay_params.hash_key));
    }

    const form_fields = (form) => {
        // console.log("form_fields");
        return _sort_html_list(Array.from(form.elements), 'name', 'up').filter(e => e.name && e.id);
    }

    const redirect_payment = async (form_fields:any, sepa:Boolean):Promise<boolean | void> => {
        console.log("redirect_payment");

        form_fields = [...form_fields, ...Array.from(formById('pay_back_params').elements)];


        form_fields = _sort_html_list(form_fields);

        console.log(form_fields);

        const date = moment.utc().format('YYYYMMDDHHmmss');
        
        let _temp:SogecommerceOrder = new Object({});
        form_fields.forEach((elem:{name:string, value:string}) => {
            _temp = {..._temp, [elem.name]: elem.value};
        });
        
        // const order_id = Base64.stringify(hmacMd5(`${date}`, pay_params.hash_key));
        // const order_id = `${f_cust_first_name}${f_cust_last_name}${f_ship_first_name}${f_ship_last_name}${f_cust_legal_name}${f_ship_legal_name}_${date}_${cart.map(art => art.id).join('_')}`;
        const order_id = rand_token(6);

        // TODO call back to check if id exists

        _temp["vads_action_mode"] = pay_params.actionMode;
        _temp["vads_ctx_mode"] = pay_params.ctxMode;
        _temp["vads_currency"] = pay_params.currency;
        _temp["vads_page_action"] = pay_params.pageAction;
        // REMPLACER PAR STRING '#SHOP_ID#' et replace en back pour garder secret l'identifiant du shop
        _temp["vads_site_id"] = pay_params.siteId;
        _temp["vads_trans_date"] = date;
        _temp["vads_trans_id"] = order_id;
        _temp["vads_version"] = pay_params.version;
        _temp["vads_order_id"] = order_id;
        _temp["vads_return_mode"] = "GET";
        // _temp['vads_return_mode'] = "POST";
        _temp["vads_url_success"] = pay_params.url_success;
        _temp["vads_url_cancel"] = pay_params.url_cancel;
        _temp["vads_url_refused"] = pay_params.url_refused;

        console.log(_temp);

        _temp = _sort_object(filter_object(_temp, (e:any) => e && e != ""));
        
        const { signature } = await get_signature(payment_str(_temp));
        // console.log(payment_str(_temp));
        // console.log(_temp);
        console.log(order_id);
        console.log(signature);

        _temp['signature'] = signature || '';

        setPayParams({
            ...pay_params,
            signature: signature || '',
            transDate: date,
            Reference: order_id,
            transId: order_id,
        });

        let _delivery_mail:HTMLElement | HTMLInputElement | null = document.getElementById('delivery_mail');
        if(_delivery_mail) {
            _temp['delivery_mail'] = _delivery_mail.value;
        }
        let intra_tva:HTMLElement | HTMLInputElement | null = document.getElementById('intra_tva');
        if(intra_tva) {
            _temp['intra_tva'] = intra_tva.value;
        }
        
        let _country = null;
        console.log(`otherAddress : ${otherAddress}`);
        if(!formFields.vads_cust_country && !formFields.vads_ship_to_country) {
            if(otherAddress == true) {
                _country = document.getElementById('vads_ship_to_country').value;
            }
            else {
                _country = document.getElementById('vads_cust_country').value
            }
        }
        else {
            if(otherAddress == true) {
                _country = formFields.vads_ship_to_country;
            }
            else {
                _country = formFields.vads_cust_country;
            }
        }
        if(_country == null) {
            _country = 'FR';
        }
        console.log(create_strapi_order(_temp, cart, parseInt(total_TTC()), sepa, _country));

        // initialize_transaction(_temp);
        let { status } = await (await create_object(create_strapi_order(_temp, cart, parseInt(total_TTC()), sepa, _country), pay_params.order_create)).json();
        console.log(status);
        if(status && status == 'success') {
            if(sepa) {
                openModale(
                    paymentSEPA(
                        {
                            reference: order_id,
                            total: total_TTC(),
                            RIB: "FR76 3000 3015 7800 0200 1741 805",
                            BIC: "SOGEFRPP",
                        },
                    )
                );
            }
            else {
                fill_redirect_form('payment_form', _temp);
                submit_form('payment_form');
                // TODO vérifier que la redirection est bien effectuée, sinon afficher erreur et détruire form
                // document.getElementById('payment_form').remove();
            }
            close_purchase();
            reset_form_fields();
            reset_cart();
            setOtherAddress(false);
            return true;
        }
        else {
            return false;
        }
    }

    const fill_redirect_form = (selector:string, values:Object) => {
        if(!selector || typeof selector != 'string') {
            return false;
        }
        if(!values || typeof values != 'object') {
            return false;
        }
        let _form = formById(selector);
        _form.action = "https://sogecommerce.societegenerale.eu/vads-payment/";
        _form.method = "POST";
        // _form.target = "_blank";
        _form.innerHTML = Object.keys(values).map(key => `<input hidden name="${key}" id="${key}" value="${values[key]}"/>`).join('');
        // _form.innerHTML += `<input name="certificate" value="${pay_params.hash_key}"/>`;
        _form.innerHTML += '<input type="submit" name="payer" value="Payer"/>';
    }

    const submit_form = (selector:string) => {
        if(!selector || typeof selector != 'string') {
            return false;
        }
        if(!formById(selector)) {
            return false;
        }
        // console.log(formById(selector));
        formById(selector).submit();
    }

    const reset_form_fields = ():void => {
        setFormFields(Object.fromEntries(Object.keys(formFields).map((field) => {
            return [field, undefined];
        })));
    }

    const reset_cart = ():void => {
        setCart([]);
    }

    const update_form_fields = (e:Event | any):void => {
        e.preventDefault();
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        });
    }

    const nb_articles = ():number => {
        if(cart.length == 0) {
            return 0;
        }
        return cart.map(article => article.quantity).reduce((sum, nbr) => sum + nbr);
    }

    const setOther = (_b:boolean):void => {
        setOtherAddress(_b);
    }

    return (
        <CartContext.Provider
            value={{
                articles: articles,
                article: find_in_articles,
                cart: cart,
                find: find_in_cart,
                add: add_article,
                remove: remove_article,
                total: count_total,
                delivery_tax: total_DELIVER,
                total_base: total_HT,
                total_tva: total_TVA,
                total_all_included: total_TTC,
                pay_delivery: pay_delivery,
                delete: delete_article,
                cart_opened: purchaseOpened,
                open_cart: open_purchase,
                close_cart: close_purchase,
                toggle_open_cart: toggle_open_purchase,
                appeared: appeared,
                redirectPay: redirect_payment,
                pay: pay_params,
                init_shop: init_shop,
                updateForm: update_form_fields,
                total_articles: nb_articles,
                formSave: formFields,
                formReset: reset_form_fields,
                cartReset: reset_cart,
                differentAddress: otherAddress,
                hasDifferentShipping: setOther,
                getTVAIntra: hasTVAIntra,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

