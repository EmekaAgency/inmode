export const process_addons = (products = [], from = "") => {
    let retour = new Array();
    for(let i = 0; i < products.length; i++) {
        if(products[i].type === 1) {
            retour.push(products[i]);
        }
    }
    return retour;
};