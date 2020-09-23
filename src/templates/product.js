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

const ProductTemplates = ({ data }) => {

    const [datas] = React.useState(data.strapiProductTemplates);

    return (
        <MenusProvider>
            <Layout>
                <SEO title="Product"/>
                <ProductBanner datas={datas.banner}/>
                <ProductNavigation/>
                <ProductDetails datas={{'key_benefits': datas.key_benefits, 'what_is': datas.what_is}}/>
                <ProductDivider position="top"/>
                <Addons datas={datas}/>
                <ProductDivider position="bottom"/>
                <ProductClinicalStudies datas={datas.clinical_studies}/>
            </Layout>
        </MenusProvider>
    );
}

export default ProductTemplates;

export const query = graphql`
    query ProductTemplates($id: String!) {
        strapiProductTemplates(id: {eq: $id}) {
            what_is {
                title
                image {
                    publicURL
                }
                description
            }
            key_benefits {
                text
            }
            clinical_studies {
                url
                title
                description
                image {
                    publicURL
                }
            }
            banner {
                short_descr
                banner_right_title {
                    publicURL
                }
                banner_mini {
                    publicURL
                }
                banner_left {
                    publicURL
                }
            }
            addons {
                url
                treats {
                    text
                }
                title_text
                title_pic {
                    publicURL
                }
                descr
                addon {
                    publicURL
                }
            }
            TitrePage
        }
    }
`;