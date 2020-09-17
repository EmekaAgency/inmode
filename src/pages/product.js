import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import FixedMenu from '../components/fixed-menu';
import Layout from '../components/layout';
import Addons from '../components/product/product-addons';
import ProductBanner from '../components/product/product-banner';
import ProductClinicalStudies from '../components/product/product-clinical-studies';
import ProductDetails from '../components/product/product-details';
import ProductNavigation from '../components/product/product-navigation';
import SEO from '../components/seo';
import { footer_process } from '../functions/footer_process';
import { header_process } from '../functions/header_process';
import { process_slide_datas } from '../functions/process_slide_datas';

const Product = () => {

    const datas = useStaticQuery(graphql`
        {
            allMysqlSlidesProducts {
                edges {
                    node {
                        type
                        short_descr
                        price
                        parents
                        name
                        mysqlId
                        img_path
                        descr
                    }
                }
            }
        }
    `).allMysqlSlidesProducts.edges;

    const [product] = React.useState(process_slide_datas(datas)[0]);

    return (
        <Layout
          process_header={{'header-top': true, 'header-bottom': true}}
          header_process_functions={{'header-top': header_process, 'header-bottom': header_process}}
          process_footer={{'footer': true}}
          footer_process_functions={{'footer': footer_process}}
        >
          <FixedMenu
            datas={datas}
            process={true}
            process_function={header_process}
            customClass={'product'}
          />
          <SEO title="Product"/>
          <ProductBanner product={product}/>
          <ProductNavigation product={product}/>
          <ProductDetails product={product}/>
          {Array.isArray(product.under) ? <Addons product={product}/> : null}
          <ProductClinicalStudies product={product}/>
        </Layout>
    );
}

export default Product