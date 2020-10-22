export const process_products = (products : Array<any> = [], matching : Array<any> = [], from : String = "") => {
    let prods = new Object({}), i;
    for(i = 0; i < products.length; i++) {
        prods[products[i].mysqlId] = products[i];
    }
    let matchs = new Object({});
    for(i = 0; i < matching.length; i++) {
        matchs[i]  = matching[i];
    }
    matchs[++i] = {'product_id': 1, 'addon_id' :16};
    matchs[++i] = {'product_id': 1, 'addon_id' :18};
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