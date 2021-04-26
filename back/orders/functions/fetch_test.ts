let _url = 'http://51.178.141.192:3000/order-load';
let _request_init:RequestInit = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        cors: 'no-cors',
    },
    body: JSON.stringify({
        reference: 'a8g9m1',
    })
};

fetch(_url, _request_init)
.then(async(res:Response) => {
    switch(res.status) {
        case 200:
            //* console.log(await res.json());
            break;
        default:
            //* console.log(`Status : ${res.status}`);
    }
})
.catch(/*err => console.log(err)*/)