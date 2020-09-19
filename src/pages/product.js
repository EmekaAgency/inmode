import React from 'react'
import MenusProvider from '../components/contexts/menus-provider';
import Layout from '../components/layout';
import Addons from '../components/product/addons';
import ProductBanner from '../components/product/banner';
import ProductClinicalStudies from '../components/product/clinical-studies';
import ProductDetails from '../components/product/details';
import ProductNavigation from '../components/product/navigation';
import SEO from '../components/seo';
import ProductsContext from "../components/contexts/products-context";

const Product = () => {

    const product = React.useContext(ProductsContext).product(5);

    return (
        <MenusProvider>
            <Layout>
                <SEO title="Product"/>
                <ProductBanner/>
                <ProductNavigation/>
                <ProductDetails/>
                {Array.isArray(product.under) ? <Addons/> : null}
                <ProductClinicalStudies/>
            </Layout>
        </MenusProvider>
    );
}

export default Product