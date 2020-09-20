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

    // TODO ajout TABLEs pour les textes
    //          - short_banner
    //          - key_benefits
    //          - treats

    return (
        <MenusProvider>
            <Layout>
                <SEO title="Product"/>
                <ProductBanner/>            {/* Status => done */}
                <ProductNavigation/>        {/* Status => todo */}
                <ProductDetails/>           {/* Status => todo */}
                <Addons/>                   {/* Status => todo */}
                <ProductClinicalStudies/>   {/* Status => todo */}
            </Layout>
        </MenusProvider>
    );
}

export default Product