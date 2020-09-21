import React from 'react'
import MenusProvider from '../components/contexts/menus-provider';
import Layout from '../components/layout';
import Addons from '../components/product/addons';
import ProductDivider from '../components/product/product-divider';
import ProductBanner from '../components/product/banner';
import ProductClinicalStudies from '../components/product/clinical-studies';
import ProductDetails from '../components/product/details';
import ProductNavigation from '../components/product/navigation';
import SEO from '../components/seo';

const Product = () => {

    // TODO ajout TABLEs pour les textes
    //          - short_banner
    //          - key_benefits
    //          - treats

    return (
        <MenusProvider>
            <Layout>
                <SEO title="Product"/>
                <ProductBanner/>                        {/* Status => done */}
                <ProductNavigation/>                    {/* Status => done */}
                <ProductDetails/>                       {/* Status => done */}
                <ProductDivider position="top"/>        {/* Status => done */}
                <Addons/>                               {/* Status => done */}
                <ProductDivider position="bottom"/>     {/* Status => done */}
                <ProductClinicalStudies/>               {/* Status => done */}
            </Layout>
        </MenusProvider>
    );
}

export default Product