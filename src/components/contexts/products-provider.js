import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ProductsContext from "./products-context";
import { process_products } from '../../functions/process_products';
import { process_addons } from '../../functions/process_addons';

const ProductsProvider = ({ requested = "", children }) => {
    const datas = useStaticQuery(graphql`
        {
            allMysqlProducts {
                edges {
                    node {
                        mysqlId
                        name
                        short_descr
                        descr
                        price
                        type
                    }
                }
            }
            allMysqlProductMatching {
                edges {
                    node {
                        product_id
                        addon_id
                    }
                }
            }
        }
    `);

    const [products] = React.useState(process_products(datas.allMysqlProducts.edges, datas.allMysqlProductMatching.edges, 'Products'));
    const [addons] = React.useState(process_addons(datas.allMysqlProducts.edges, 'Addons'));

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
                'products': products,
                'addons': addons
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;