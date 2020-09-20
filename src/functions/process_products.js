export const process_products = (products = [], matching, from = "") => {
    let prods = new Object({});
    for(let i = 0; i < products.length; i++) {
        prods[products[i].mysqlId] = products[i];
    }
    let matchs = new Object({});
    for(let i = 0; i < matching.length; i++) {
        matchs[i]  = matching[i];
    }
    // console.log(products);
    // console.log(matching);
    return Object.keys(prods).map((key) => {
        if(prods[key].type === 0) {
            return {...prods[key], ...{
                'under': Object.keys(matchs).map((match_key) => {
                    if(matchs[match_key].product_id == prods[key].mysqlId) {
                        return prods[matchs[match_key].addon_id];
                    }
                    return false;
                }).filter(addon => addon)}
            };
        }
        return false;
    }).filter(prod => prod);
}