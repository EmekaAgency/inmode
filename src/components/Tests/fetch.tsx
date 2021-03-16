import { AxiosResponse } from "axios";
import { FormEventHandler } from "react";

const _base_url = "http://localhost:3000";

function get_body(form:EventTarget & HTMLFormElement):Object | any {
    if(!form) {
        return {};
    }
    return Object.fromEntries(Array.from(form).filter(elem => elem.getAttribute("name")).map(elem => [elem.getAttribute("name"), elem.getAttribute("value") || elem.getAttribute("checked")]));
}

function send_request(method:string, body?:Object, url:string = _base_url) {
    let promise:Promise<Response>;
    switch(method) {
        case "POST":
        case "UPDATE":
        case "DELETE":
            let vars:RequestInit = {
                method: method,
                headers: new Headers({'content-type': 'application/json'}),
                mode: 'cors',
                cache: 'default',
                body: JSON.stringify(body)
            };
            promise = fetch(url, vars);
            break;
        case "GET":
            promise = fetch(url);
            break;
        default:
            return false;
    }
    promise.then((promise) => {
        return promise.json();
    })
    .then((response:Response) => {
        console.log(response);
    })
    .catch(function (error:Error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

export const send_form = (form:EventTarget & HTMLFormElement) => {
    let body;
    switch(form.getAttribute("id")) {
        case "strapi-create":
            body = get_body(form);
            body != {} && send_request("POST", body, `${_base_url}/create`);
            break;
        case "strapi-update":
            body = get_body(form);
            body != {} && send_request("POST", body, `${_base_url}/update`);
            break;
        case "strapi-load":
            body != {} && send_request("GET", undefined, `${_base_url}/load/${form.reference.value}`);
            break;
        case "strapi-delete":
            body = get_body(form);
            body != {} && send_request("DELETE", body, `${_base_url}/delete`);
            break;
    }
    return false;
}