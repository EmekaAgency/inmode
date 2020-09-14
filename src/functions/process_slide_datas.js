const _TYPES = ['PRODUCT', 'ADDON'];

export const process_slide_datas = (products = [], from = "") => {
    let retour = [], slides = {}, addons = {}, i, j;
    for(i = 0; i < products.length; i++) {
        if(_TYPES[products[i].node.type] == 'PRODUCT') {
            slides[products[i].node.mysqlId] = products[i].node;
        }
        else if(_TYPES[products[i].node.type] == 'ADDON') {
            addons[products[i].node.mysqlId] = products[i].node;
        }
    }
    let keys_slides = Object.keys(slides).map((nb)=>{return parseInt(nb);});
    for(i = 0; i < keys_slides.length; i++) {
        retour[i] = {
            'name': slides[keys_slides[i]].name,
            'short_descr': slides[keys_slides[i]].short_descr,
            'descr': slides[keys_slides[i]].descr,
            'img_path': slides[keys_slides[i]].img_path,
            'price': slides[keys_slides[i]].price
        }
    }
    let keys_addons = Object.keys(addons).map((nb)=>{return parseInt(nb);});
    for(i = 0; i < keys_addons.length; i++) {
        let parents = addons[keys_addons[i]].parents.replace('[', '').replace(']', '').split(',').sort().map((nb)=>{return parseInt(nb);});
        for(j = 0; j < parents.length; j++) {
            if(retour[parents[j] - 1].under == undefined) {
                retour[parents[j] - 1].under = []; 
            }
            retour[parents[j] - 1].under.push({
                'name': addons[keys_addons[i]].name,
                'short_descr': addons[keys_addons[i]].short_descr,
                'descr': addons[keys_addons[i]].descr,
                'img_path': addons[keys_addons[i]].img_path,
                'price': addons[keys_addons[i]].price,
                'parents': parents
            });
        }
    }
    return retour;
}

// ALTER TABLE `product` ADD column `type` INT NOT NULL;

// CREATE TABLE IF NOT EXISTS `product_matching` (
//     product_id INT NOT NULL,
//     addon_id INT NOT NULL,
//     CONSTRAINT FOREIGN KEY (`product_id`) REFERENCES product(id),
//     CONSTRAINT FOREIGN KEY (`addon_id`) REFERENCES product(id),
//     CONSTRAINT UniqueMatch UNIQUE (product_id, addon_id)
// );

// INSERT INTO `product`(`name`, `short_descr`, `descr`, `img_path`, `price`, `type`) VALUES ('add-1', '', '', '', 5, 1);       9
// INSERT INTO `product`(`name`, `short_descr`, `descr`, `img_path`, `price`, `type`) VALUES ('add-2-3', '', '', '', 5, 1);     10
// INSERT INTO `product`(`name`, `short_descr`, `descr`, `img_path`, `price`, `type`) VALUES ('add-1-6', '', '', '', 5, 1);     11
// INSERT INTO `product`(`name`, `short_descr`, `descr`, `img_path`, `price`, `type`) VALUES ('add-3-8', '', '', '', 5, 1);     12
// INSERT INTO `product`(`name`, `short_descr`, `descr`, `img_path`, `price`, `type`) VALUES ('add-2-4', '', '', '', 5, 1);     13
// INSERT INTO `product`(`name`, `short_descr`, `descr`, `img_path`, `price`, `type`) VALUES ('add-1-3-7', '', '', '', 5, 1);   14
// INSERT INTO `product`(`name`, `short_descr`, `descr`, `img_path`, `price`, `type`) VALUES ('add-3-4-7', '', '', '', 5, 1);   15

// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (1, 9);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (2, 10);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (3, 10);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (1, 11);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (6, 11);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (3, 12);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (9, 12);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (2, 13);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (4, 13);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (1, 14);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (3, 14);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (8, 14);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (3, 15);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (4, 15);
// INSERT INTO `product_matching` (`product_id`, `addon_id`) VALUES (7, 15);

// const products = {
//     '3': {
//         name
//         img_url
//         add: [
//             {name, price}
//             {name, price}
//         ]
//     }
// }

// "[1,2,3]".replace('[', '').replace(']', '').join(',') => [1, 2, 3]