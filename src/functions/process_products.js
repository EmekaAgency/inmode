export const process_products = (products = [], matching, from = "") => {
    let prods = new Object({});
    for(let i = 0; i < products.length; i++) {
        prods[products[i].node.mysqlId] = products[i].node;
    }
    let matchs = new Object({});
    for(let i = 0; i < matching.length; i++) {
        matchs[i]  = matching[i].node;
    }
    return Object.keys(prods).map((key) => {
        return {...prods[key], ...{'under': [Object.keys(matchs).map((match_key) => {
                if(matchs[match_key].product_id == prods[key].mysqlId) {
                    return prods[matchs[match_key].addon_id];
                }
                return false;
            })]}
        };
    });
}