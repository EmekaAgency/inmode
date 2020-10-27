import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ProductsContext from "./products-context";
import { process_products } from '../../functions/process_products';
import { process_addons } from '../../functions/process_addons';
import { add_product_datas } from '../../functions/add_product_datas';
import { request_db } from '../../functions/request_db';

const ProductsProvider = ({ requested = "", children }) => {

// SELECT * FROM ((product INNER JOIN short_banner ON product.id = short_banner.product) INNER JOIN key_benefits ON key_benefits.product = short_banner.product) INNER JOIN treats ON treats.product = key_benefits.product;
// graphql-markdown ./path/to/schema.json > schema.md
    const datas = useStaticQuery(graphql`
        {
            allMysqlProducts {
                nodes {
                    mysqlId
                    name
                    short_descr
                    descr
                    price
                    type
                }
            }
            allMysqlProductMatching {
                nodes {
                    product_id
                    addon_id
                }
            }
            allMysqlShortBanner {
                nodes {
                    product
                    banner_text
                }
            }
            allMysqlKeyBenefits {
                nodes {
                    product
                    key_text
                    position
                }
            }
            allMysqlTreats {
                nodes {
                    product
                    addon
                    position
                    treats_text
                }
            }
            allStrapiProduct(sort: {order: ASC, fields: position}) {
                edges {
                    node {
                        Name
                        ShopPicture {
                            childImageSharp {
                                fluid {
                                    srcWebp
                                    srcSetWebp
                                }
                            }
                        }
                        short_descr
                        Icon {
                            childImageSharp {
                                fluid {
                                    srcWebp
                                    srcSetWebp
                                }
                            }
                        }
                        MenuParams {
                            url
                        }
                        WhatIs {
                            TitleText {
                                text
                            }
                        }
                        Addons {
                            Name
                            Banner {
                                left_img {
                                    childImageSharp {
                                        fluid {
                                            srcWebp
                                            srcSetWebp
                                        }
                                    }
                                }
                                right_img {
                                    childImageSharp {
                                        fluid {
                                            srcWebp
                                            srcSetWebp
                                        }
                                    }
                                }
                                right_text
                            }
                            MenuParams {
                                url
                            }
                            WhatIs {
                                picture {
                                    childImageSharp {
                                        fluid {
                                            srcWebp
                                            srcSetWebp
                                        }
                                    }
                                }
                                TitleText {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    // request_db();

    // https://github.com/gatsbyjs/gatsby/issues/26226

    const [products] = React.useState(
        add_product_datas(
            process_products(datas.allMysqlProducts.nodes, datas.allMysqlProductMatching.nodes, 'Products'),
            {
                'banner': datas.allMysqlShortBanner.nodes,
                'key_benefits': datas.allMysqlKeyBenefits.nodes,
                'treats': datas.allMysqlTreats.nodes
            }
        )
    );

    const [products2] = React.useState(datas.allStrapiProduct.edges.map(product => product.node));
    
    const [addons] = React.useState(
        process_addons(datas.allMysqlProducts.nodes, 'Addons'),
        {
            'banner': datas.allMysqlShortBanner.nodes,
            'key_benefits': datas.allMysqlKeyBenefits.nodes,
            'treats': datas.allMysqlTreats.nodes,
        }
    );

    const product_navigation = [
        {'name': 'what is it', 'url': '#what-is'},
        {'name': 'key benefits', 'url': '#key-benefits'},
        {'name': 'technologies on the workstation', 'url': '#technologies'},
        {'name': 'clinical studies', 'url': '#studies'}
    ];

    const addon_navigation = [
        {'name': 'what is it', 'url': '#what-is'},
        {'name': 'before and after\'s', 'url': '#before-after'},
        {'name': 'what can you treat', 'url': '#what-treat'},
        {'name': 'clinical studies', 'url': '#studies'}
    ];

    const get_products = () => {
        return products;
    };

    const get_product = (index) => {
        return products[index];
    };

    const get_addons = () => {
        return addons;
    };

    const get_addon = (index) => {
        return addons[index];
    };
    
    return (
        <ProductsContext.Provider
            value={{
                'product_navigation': product_navigation,
                'addon_navigation': addon_navigation,
                'products': products2,
                'addons': addons
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;