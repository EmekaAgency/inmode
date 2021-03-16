export const request_db = (query = "", url = "http://localhost:3000") => {
    let promise = fetch('http://localhost:8081/', {
    // let promise = fetch(url, {
        method: "POST", //ou POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "text/plain;charset=UTF-8" //pour un corps de type chaine
        },
        body: {
            'query': "SELECT * FROM product_matching"
            // 'query': query
        }, //ou string, FormData, Blob, BufferSource, ou URLSearchParams
        referrer: "about:client", //ou "" (pas de réferanr) ou une url de l'origine
        referrerPolicy: "no-referrer-when-downgrade", //ou no-referrer, origin, same-origin...
        mode: "cors", //ou same-origin, no-cors
        credentials: "same-origin", //ou omit, include
        cache: "default", //ou no-store, reload, no-cache, force-cache, ou only-if-cached
        redirect: "follow", //ou manual ou error
        integrity: "", //ou un hash comme "sha256-abcdef1234567890"
        keepalive: false, //ou true pour que la requête survive à la page
        signal: undefined //ou AbortController pour annuler la requête
    });
}