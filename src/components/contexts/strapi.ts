import {
    Article_Interface,
    InmodePanel_Order_Interface,
    SogecommerceOrder,
    InmodePanel_Order_Shipping_Interface,
    InmodePanel_Order_Billing_Interface
} from "../interfaces";

const _countries = {
    'FR': 'France',
    'BE': 'Belgique',
    'LU': 'Luxembourg',
};

// function date_from_transdate(_transdate:string):number {
function date_from_transdate(_transdate:string):string {
    let str_date:string = "";
    str_date += _transdate.substring(0, 4) + '-';
    str_date += _transdate.substring(4, 6) + '-';
    str_date += _transdate.substring(6, 8) + ' ';
    str_date += _transdate.substring(8, 10) + ':';
    str_date += _transdate.substring(10, 12) + ':';
    str_date += _transdate.substring(12, 14);
    return str_date;
    // return new Date(str_date).getTime();
}

function fill_billing(datas:InmodePanel_Order_Billing_Interface):InmodePanel_Order_Billing_Interface | null {
    if(
        (typeof datas.Firstname == 'string' && datas.Firstname.length > 0) &&
        (typeof datas.Lastname == 'string' && datas.Lastname.length > 0) &&
        (
            (typeof datas.Phone == 'string' && datas.Phone.length >0)
            ||
            (typeof datas.Phone == 'number' && datas.Phone > 0)
        ) &&
        (typeof datas.Mail == 'string' && datas.Mail.length > 0) &&
        (typeof datas.Address == 'string' && datas.Address.length > 0) &&
        (typeof datas.Country == 'string' && datas.Country.length > 0) &&
        (
            (typeof datas.ZIP == 'string' && datas.ZIP.length >0)
            ||
            (typeof datas.ZIP == 'number' && datas.ZIP > 0)
        ) &&
        (typeof datas.City == 'string' && datas.City.length )> 0
    ) {
        return datas;
    }
    return null;
}

function fill_shipping(datas:InmodePanel_Order_Shipping_Interface):InmodePanel_Order_Shipping_Interface | null {
    if(
        (typeof datas.Firstname == 'string' && datas.Firstname.length > 0) &&
        (typeof datas.Lastname == 'string' && datas.Lastname.length > 0) &&
        (
            (typeof datas.Phone == 'string' && datas.Phone.length >0)
            ||
            (typeof datas.Phone == 'number' && datas.Phone > 0)
        ) &&
        // (typeof datas.Mail == 'string' && datas.Mail.length > 0) &&
        (typeof datas.Address == 'string' && datas.Address.length > 0) &&
        (typeof datas.Country == 'string' && datas.Country.length > 0) &&
        (
            (typeof datas.ZIP == 'string' && datas.ZIP.length >0)
            ||
            (typeof datas.ZIP == 'number' && datas.ZIP > 0)
        ) &&
        (typeof datas.City == 'string' && datas.City.length )> 0
    ) {
        return datas;
    }
    return null;
}

// function fill_shipping(datas:StrapiShipping):StrapiShipping {
//     return datas;
// }

function filter(datas:InmodePanel_Order_Interface):InmodePanel_Order_Interface {
    datas.Billing = fill_billing(datas.Billing);
    datas.Shipping = fill_shipping(datas.Shipping);
    return datas;
}

export function create_strapi_order(_datas:SogecommerceOrder, cart:Article_Interface[], total:number, sepa:boolean = false, country:string):InmodePanel_Order_Interface {
    console.log(_datas);
    console.log(`total : ${total}`);
    console.log(`sepa : ${sepa}`);
    console.log(`country : ${country}`);
    // vads_amount: "86400" // À AJOUTER PLUS TARD DANS LE MODÈLE DE PAIEMENT
    // vads_currency: 978 // À AJOUTER PLUS TARD DANS LE MODÈLE DE PAIEMENT

    let _temp:InmodePanel_Order_Interface = {
        Reference: _datas.vads_order_id,
        // vads_trans_date: "20210225143539"
        Date: date_from_transdate(_datas.vads_trans_date),
        Article: cart.map((article:Article_Interface) => {
            return {
                Article: article.id,
                Quantity: article.quantity,
                Price: article.price,
                Name: article.name,
                Pack: article.pack_name(),
            }
        }),
        Billing: {
            Firstname: _datas.vads_cust_first_name,
            Lastname: _datas.vads_cust_last_name,
            Phone: _datas.vads_cust_cell_phone,
            Mail: _datas.vads_cust_email,
            Address: _datas.vads_cust_address,
            Country: _countries[_datas.vads_cust_country],
            ZIP: _datas.vads_cust_zip,
            City: _datas.vads_cust_city,
            Society: _datas.vads_cust_legal_name,
        },
        Shipping: {
            Firstname: _datas.vads_ship_to_first_name,
            Lastname: _datas.vads_ship_to_last_name,
            Phone: _datas.vads_ship_to_phone_num,
            Mail: _datas.delivery_mail,
            Address: _datas.vads_ship_to_street,
            Country: _countries[_datas.vads_ship_to_country],
            ZIP: _datas.vads_ship_to_zip,
            City: _datas.vads_ship_to_city,
            Society: _datas.vads_ship_to_legal_name,
        },
        Firstname: _datas.vads_cust_first_name,
        Lastname: _datas.vads_cust_last_name,
        Society: _datas.vads_cust_legal_name,
        DeliveryTax: _datas.vads_product_qty9999 && _datas.vads_product_qty9999 == 1 ? 10 : 0,
        Paid: false,
        Status: 'UNDER_VERIFICATION',
        Total: ((typeof _datas.vads_amount == 'string' ? parseInt(_datas.vads_amount, 10) : _datas.vads_amount)/100).toFixed(2) || total,
        SEPA: sepa,
        Country: _countries[country],
        TVA_Intra: _datas.intra_tva,
    };

    return filter(_temp);
}

export async function create_object(body:InmodePanel_Order_Interface, url:string):Promise<Response> {
    console.log(body);
    let promise:Promise<Response>;
    let vars:RequestInit = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(body)
    };
    promise = await fetch(url, vars).catch(err => console.error(err));
    return promise;
}

export async function load_object(reference:string, url:string):Promise<Response> {
    let promise:Promise<Response>;
    let vars:RequestInit = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({reference: reference})
    };
    return await fetch(url, vars);
}