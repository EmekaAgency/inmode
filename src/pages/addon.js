import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import AddonBanner from '../components/addon/banner';
import AddonClinicalStudies from '../components/addon/clinical-studies';
import AddonDetails from '../components/addon/details';
import AddonNavigation from '../components/addon/navigation';
import AddonVideos from '../components/addon/videos';
import AddonWhatTreat from '../components/addon/what-treat';
import FixedMenu from '../components/fixed-menu';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { footer_process } from '../functions/footer_process';
import { header_process } from '../functions/header_process';
import { process_slide_datas } from '../functions/process_slide_datas';

const Addon = () => {

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

    const [addon] = React.useState(process_slide_datas(datas)[0]);

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
            <SEO title="Addon"/>
            <AddonBanner addon={addon}/>
            <AddonNavigation addon={addon}/>
            <AddonDetails addon={addon}/>
            <AddonVideos addon={addon}/>
            <AddonWhatTreat addon={addon}/>
            <AddonClinicalStudies addon={addon}/>
        </Layout>
    );
}

export default Addon