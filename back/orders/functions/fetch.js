const { default: axios } = require('axios');
const fetch = require('node-fetch');

/*export */function request_init(token, body = {}) {
    return {
        // method: method,
        // headers: {'content-type': 'application/json'},
        // mode: 'cors',
        // cache: 'default',
        // body: JSON.stringify(typeof body == "object" && body != {} ? body : {}),
        // ...body,
        // identifier: process.env.STRAPI_ID,
        // password: process.env.STRAPI_PASS,
    };
}

function bearer(token) {
    if(typeof token != "string" || (typeof token == 'string' && token.length == 0)) {
        return {};
    }
    return {
        Authorization: `Bearer ${token}`
    };
}

function _headers(token, _bearer = true, _options = {}) {
    let headers = {};
    if(_bearer == true) {
        headers = {...bearer(token)};
    }
    //* console.log(typeof _options);
    //* console.log(Array.isArray(_options));
    //* console.log(Object.keys(_options).length);
    if(typeof _options == "object" && !Array.isArray(_options) && Object.keys(_options).length > 0) {
        headers = {...headers, ..._options};
    }
    headers = {...headers, 'Content-Type': 'application/json'};
    return headers;
}
// method   token   url         body                        _bearer options
// 'POST'   null    PHP_back    mailBody(order, 'client')   false   {}
/*export */const _request = async function(method, token, url, body = {}, _bearer = true, options = {}) {
    //* console.log('_request');
    //* console.log(`method : ${method}`);
    //* console.log(`url : ${url}`);
    //* console.log(JSON.stringify(body));
    let promise;
    switch(method) {
        case "POST":
        case "PUT":
            if(_bearer == true) {
                //* console.log({method: method,url: url,headers: _headers(token),data: body,});
                promise = axios({
                    method: method,
                    url: url,
                    headers: _headers(token, _bearer, options),
                    data: body
                }).catch(/* error => console.log(error) */);
            }
            else {
                promise = axios({
                    method: method,
                    url: url,
                    headers: _headers(null, false, options),
                    data: body
                }).catch(/* error => console.log(error) */);
            }
            break;
        case "DELETE":
        case "GET":
            if(_bearer == true) {
                //* console.log({method: method,url: url,headers: bearer(token),});
                promise = axios({
                    method: method,
                    url: url,
                    headers: bearer(token)
                }).catch(/* error => console.log(error) */);
            }
            else {
                promise = axios({
                    method: method,
                    url: url
                }).catch(error => console.log(error));
            }
            break;
        default:
            return false;
    }
    return await promise
    // .then((res) => {
    //     // console.log(res);
    //     return res.json();
    // })
    // .then((response) => {
        // console.log(response);
    // })
    // .catch(function (error) {
        // console.log('There has a problem with the fetch operation: ' + error.message);
    // });
}

module.exports._request = _request;