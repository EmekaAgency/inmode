import React from 'react'
import { graphql } from 'gatsby';
import AddonDivider from '../components/addon/addon-divider';
import AddonBanner from '../components/addon/banner';
import AddonBeforeAfter from '../components/addon/before-after';
import AddonClinicalStudies from '../components/addon/clinical-studies';
import AddonDetails from '../components/addon/details';
import AddonNavigation from '../components/addon/navigation';
import AddonVideos from '../components/addon/videos';
import AddonWhatTreat from '../components/addon/what-treat';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MenusProvider from '../components/contexts/menus-provider';

const AddonTemplates = ({ data }) => {

    // const [datas] = React.useState(data.strapiAddon.strapiId);

    return (
        <MenusProvider>
            <Layout>
                <SEO title="Addon"/>
                {/* <AddonBanner datas={datas.addon_banner}/> */}
                {/* <AddonNavigation name={datas.name}/> */}
                {/* <AddonDetails datas={{'key_benefits': datas.key_benefits, 'what_is': datas.what_is}}/> */}
                <AddonDivider position="top"/>
                {/* <AddonVideos datas={{'videos': datas.videos, 'title': datas.VideoTitle}}/> */}
                {/* <AddonBeforeAfter datas={{'before_after': datas.befores_afters, 'title': datas.BeforeAfterTitle}}/> */}
                {/* <AddonDivider position="bottom"/> */}
                {/* <AddonWhatTreat datas={{'what_treats': datas.what_treats, 'title': datas.TreatTitle}}/> */}
                {/* <AddonClinicalStudies datas={datas.clinical_studies}/> */}
                {/* <AddonSellingArgs datas={datas.strapiId}/> */}
                {/* <AddonSellingNew datas={datas.strapiId}/> */}
            </Layout>
        </MenusProvider>
    );
};

export default AddonTemplates;

export const query = graphql`
    query Addon($id: String!) {
        strapiAddon(id: {eq: $id}) {
            strapiId
        }
    }
`;
