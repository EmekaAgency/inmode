const _TYPES = ['PRODUCT', 'ADDON'];

export const process_slide_datas = (products = [], addons = [], from = "") => {
    let retour = [], temp = {};
    for(let i = 0; i < datas.length; i++) {
        temp[datas[i].node.mysqlId] = datas[i].node;
    }
    let keys = Object.keys(temp);
    console.log(temp);
    console.log(products);
    console.log(addons);
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