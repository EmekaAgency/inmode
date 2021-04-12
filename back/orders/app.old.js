// npm install express --save && npm install body-parser --save && npm install strapi --save && npm install axios --save && npm install cors --save

const express = require('express');
const app = express();
const qs = require('qs');
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const strapi = require('strapi');
const fs = require('fs');
const fetch = require('node-fetch')
const axios = require('axios');
const cors = require('cors');
const { create_test_object,test_create,update_test_object,test_update,load_test_object,test_load,delete_test_object,test_delete} = require('./functions/test_object.js');
const { 
    create_order_object,
    order_create,
    update_order_object,
    update_order_payment_status,
    order_update,
    load_order_object,
    order_load,
    delete_order_object,
    order_delete,
    is_secured
} = require('./functions/order_object.js');

const hmacSHA256 = require('crypto-js/hmac-sha256');
const hmacMd5 = require('crypto-js/hmac-md5');
const Base64 = require('crypto-js/enc-base64');

const { auth } = require('./middleware/auth.js');
const { send } = require('process');

// const create_test_object = require('./functions/test_object.ts');
// const test_create = require('./functions/test_object.ts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

require("dotenv").config({
    path: `.env.${process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"}`,
    // path: `.env`,
});

//////////////////////////////

async function get_strapi_jwt() {
    try {
        const { data } = await axios.post(`${process.env.STRAPI_URL}/auth/local`, {
            identifier: process.env.STRAPI_ID,
            password: process.env.STRAPI_PASS,
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
        return data.jwt;
    }
    catch(err) {
        console.log(err);
        return err;
    }
}

//////////////////////////////

app.get('/back/orders/', (req, res) => {
    res.status(200).send("It works !");
});

app.get('/back/orders/jwt'/*, auth*/, async (req, res) => {

    const jwt = await get_strapi_jwt();

    res.status(200).send(jwt);
});

app.get('/back/orders/test'/*, auth*/, async (req, res) => {

    // const data = await fetch('http://51.178.141.192:3000/order-load', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    //     cors: 'no-cors',
    //     body: JSON.stringify({reference: 'a8g9m1'})
    // })
    // .then((res) => {
    //     console.log(res);
    //     res.json();
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    res.status(200).send("Test en cours");
});

app.get('/back/orders/test/create'/*, auth*/, async (req, res) => {
    const token = await get_strapi_jwt();
    const _post = await create_test_object(test_create, token);
    if(!_post) {
        res.status(400).send('create did not work');
        return false;
    }
    if(_post.data == undefined || _post.data.length == 0) {
        res.status(400).send('create.data is empty');
        return false;
    }
    res.status(200).send('create worked');
    return false;
});
app.get('/back/orders/test/update'/*, auth*/, async (req, res) => {
    const token = await get_strapi_jwt();
    const _update = await update_test_object(test_update.reference, test_update, token);
    if(!_update) {
        res.status(400).send('update did not work');
        return false;
    }
    if(_update.data == undefined || _update.data.length == 0) {
        res.status(400).send('update.data is empty');
        return false;
    }
    res.status(200).send('update worked');
    return false;
});
app.get('/back/orders/test/load'/*, auth*/, async (req, res) => {
    const token = await get_strapi_jwt();
    const _get = await load_test_object(test_load, token);
    if(!_get) {
        res.status(400).send('load did not work');
        return false;
    }
    if(_get.data == undefined || _get.data.length == 0) {
        res.status(400).send('load.data is empty');
        return false;
    }
    res.status(200).send('load worked');
    return false;
});
app.get('/back/orders/test/delete'/*, auth*/, async (req, res) => {
    const token = await get_strapi_jwt();
    const _delete = await delete_test_object(test_delete, token);
    if(!_delete) {
        res.status(400).send('delete did not work');
        return false;
    }
    if(_delete.data == undefined || _delete.data.length == 0) {
        res.status(400).send('delete.data is empty');
        return false;
    }
    res.status(200).send('delete worked');
    return false;
});

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

app.get('/back/orders/test/order-create'/*, auth*/, async (req, res) => {
    const token = await get_strapi_jwt();
    const _post = await create_order_object(order_create, token);
    if(!_post) {
        res.status(400).send('create did not work');
        return false;
    }
    if(_post.data == undefined || _post.data.length == 0) {
        res.status(400).send('create.data is empty');
        return false;
    }
    res.status(200).send('create worked');
    return false;
});
app.get('/back/orders/test/order-update'/*, auth*/, async (req, res) => {
    const token = await get_strapi_jwt();
    const _update = await update_order_object(order_update.OrderId, order_update, token);
    if(!_update) {
        res.status(400).send('update did not work');
        return false;
    }
    if(_update.data == undefined || _update.data.length == 0) {
        res.status(400).send('update.data is empty');
        return false;
    }
    res.status(200).send('update worked');
    return false;
});
app.get('/back/orders/test/order-load'/*, auth*/, async (req, res) => {
    const token = await get_strapi_jwt();
    const _get = await load_order_object(order_load, token);
    if(!_get) {
        res.status(400).send('load did not work');
        return false;
    }
    if(_get.data == undefined || _get.data.length == 0) {
        res.status(400).send('load.data is empty');
        return false;
    }
    res.status(200).send('load worked');
    return false;
});
app.get('/back/orders/test/order-delete'/*, auth*/, async (req, res) => {
    const token = await get_strapi_jwt();
    const _delete = await delete_order_object(order_delete, token);
    if(!_delete) {
        res.status(400).send('delete did not work');
        return false;
    }
    if(_delete.data == undefined || _delete.data.length == 0) {
        res.status(400).send('delete.data is empty');
        return false;
    }
    res.status(200).send('delete worked');
    return false;
});

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

app.post('/back/orders/order-create'/*, auth*/, async (req, res) => {
    if(!req.body || req.body.length == 0) {
        res.sendStatus(400).send('Form empty');
    }
    try {
        const token = await get_strapi_jwt();
        try {
            const _post = await create_order_object(req.body, token);
            // console.log('///////////////////////');
            // console.log('///////////////////////');
            // console.log(_post);
            // console.log('///////////////////////');
            // console.log('///////////////////////');
            // if(_post.error != undefined) {
            //     throw _post.error;
            // }
            if(!_post) {
                res.status(400).send('create did not work');
                return false;
            }
            if(_post.data == undefined || _post.data.length == 0) {
                res.status(400).send('create.data is empty');
                return false;
            }
            res.status(200).send({
                status: 'success',
                order: _post.data,
            });
            return false;
        }
        catch(error) {
            console.log('/order-create error');
            console.log(error);
            res.status(500).send(JSON.stringify({
                status: 'error',
                message: 'Error during order create',
                error: error,
            }));
        }
    }
    catch(error) {
        console.log('/order-create jwt token error');
        console.log(error);
        res.status(500).send(JSON.stringify({
            status: 'error',
            message: 'Error during jwt fetch',
            error: error,
        }));
    }
});
app.post('/back/orders/order-payment-update'/*, auth*/, async (req, res) => {
    if(!req.body || req.body.length == 0) {
        res.sendStatus(400).send('Form empty');
    }
    if(!is_secured(req.body)) {
        res.status(400).send();
    }
    try {
        const token = await get_strapi_jwt();
        try {
            const _post = await update_order_payment_status(req.body.vads_order_id, req.body.vads_trans_status, token);
            // console.log('///////////////////////');
            // console.log('///////////////////////');
            // console.log(_post);
            // console.log('///////////////////////');
            // console.log('///////////////////////');
            // if(_post.error != undefined) {
            //     throw _post.error;
            // }
            if(!_post) {
                res.status(400).send('update payment status did not work');
                return false;
            }
            if(_post.data == undefined || _post.data.length == 0) {
                res.status(400).send('update_payment.data is empty');
                return false;
            }
            res.status(200).send({
                status: 'success',
                order: _post.data,
            });
            return false;
        }
        catch(error) {
            console.log('/order-payment-update error');
            // console.log(error);
            res.status(500).send(JSON.stringify({
                status: 'error',
                message: 'Error during order payment update',
                error: error,
            }));
        }
    }
    catch(error) {
        console.log('/order-payment-update jwt token error');
        // console.log(error);
        res.status(500).send(JSON.stringify({
            status: 'error',
            message: 'Error during jwt fetch',
            error: error,
        }));
    }
});
app.post('/back/orders/order-update'/*, auth*/, async (req, res) => {
    if(!req.body || req.body.length == 0) {
        res.sendStatus(400).send('Form empty');
    }
    if(!is_secured(req.body)) {
        res.status(400).send();
    }
    try {
        const token = await get_strapi_jwt();
        try {
            const _update = await update_order_object(req.body.OrderId, req.body, token);
            // console.log('///////////////////////');
            // console.log('///////////////////////');
            // console.log(_update);
            // console.log('///////////////////////');
            // console.log('///////////////////////');
            // if(_update.error != undefined) {
            //     throw _update.error;
            // }
            if(!_update) {
                res.status(400).send('update did not work');
                return false;
            }
            if(_update.data == undefined || _update.data.length == 0) {
                res.status(400).send('update.data is empty');
                return false;
            }
            // res.status(200).send({
            //     'status': 'success',
            //     order: _update.data,
            // });
            res.status(200).send();
            return false;
        }
        catch(error) {
            console.log('/order-update error');
            // console.log(error);
            res.status(500).send(JSON.stringify({
                status: 'error',
                message: 'Error during order update',
                error: error,
            }));
        }
    }
    catch(error) {
        console.log('/order-update jwt token error');
        // console.log(error);
        res.status(500).send(JSON.stringify({
            status: 'error',
            message: 'Error during jwt fetch',
            error: error,
        }));
    }
});
app.post('/back/orders/order-load'/*, auth*/, async (req, res) => {
    if(!req.body || req.body.length == 0) {
        res.sendStatus(400).send('Form empty');
    }
    try {
        const token = await get_strapi_jwt();
        try {
            const _get = await load_order_object(req.body.reference, token);
            // console.log('///////////////////////');
            // console.log('///////////////////////');
            // console.log(_get);
            // console.log('///////////////////////');
            // console.log('///////////////////////');
            // if(_get.error != undefined) {
            //     throw _get.error;
            // }
            if(!_get) {
                res.status(400).send('load did not work');
                return false;
            }
            if(_get.data == undefined || _get.data.length == 0) {
                res.status(400).send('load.data is empty');
                return false;
            }
            res.status(200).send(JSON.stringify({
                status: 'success',
                order: _get.data[0]
            }));
            return false;
        }
        catch(error) {
            console.log('/order-load error');
            // console.log(error);
            res.status(500).send(JSON.stringify({
                status: 'error',
                message: 'Error during order load',
                error: error,
            }));
        }
    }
    catch(error) {
        console.log('/order-load jwt token error');
        // console.log(error);
        res.status(500).send(JSON.stringify({
            status: 'error',
            message: 'Error during jwt fetch',
            error: error,
        }));
    }
});
app.post('/back/orders/order-delete'/*, auth*/, async (req, res) => {
    if(!req.body || req.body.length == 0) {
        res.sendStatus(400).send('Form empty');
    }
    try {
        const token = await get_strapi_jwt();
        try {
            const _delete = await delete_order_object(req.body.reference, token);
            // console.log('///////////////////////');
            // console.log('///////////////////////');
            // console.log(_delete);
            // console.log('///////////////////////');
            // console.log('///////////////////////');
            // if(_delete.error != undefined) {
            //     throw _delete.error;
            // }
            if(!_delete) {
                res.status(400).send('delete did not work');
                return false;
            }
            if(_delete.data == undefined || _delete.data.length == 0) {
                res.status(400).send('delete.data is empty');
                return false;
            }
            res.status(200).send(JSON.stringify({
                'status': 'success',
                reference: re.body.reference
            }));
            return false;
        }
        catch(error) {
            console.log('/order-delete error');
            // console.log(error);
            res.status(500).send(JSON.stringify({
                status: 'error',
                message: 'Error during order delete',
                error: error,
            }));
        }
    }
    catch(error) {
        console.log('/order-delete jwt token error');
        // console.log(error);
        res.status(500).send(JSON.stringify({
            status: 'error',
            message: 'Error during jwt fetch',
            error: error,
        }));
    }
});
app.post('/back/orders/order-signature'/*, auth*/, async (req, res) => {
    console.log('/order-signature');
    console.log(req.body);
    const signature = Base64.stringify(hmacSHA256(req.body.string + `+${process.env.BO_KEY}`, process.env.BO_KEY));
    console.log(`signature : ${signature}`);
    res.status(200).send(JSON.stringify({signature: signature}));
})

// reference       || SIZE € [6, 6]
// Text2       || OBLIGATOIRE
// Number      || OBLIGATOIRE MIN0
// Datetime    || OBLIGATOIRE
// Addon       || 
// Email       || OBLIGATOIRE UNIQUE
// Boolean     || OBLIGATOIRE

//////////////////////////////

http.listen(3000, () => {
  console.log('listening on *:3000');
  console.log(`Environment : ${process.env.NODE_ENV}`);
});