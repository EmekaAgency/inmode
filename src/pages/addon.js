import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import AddonDivider from '../components/addon/addon-divider';
import AddonBanner from '../components/addon/banner';
import AddonBeforeAfter from '../components/addon/before-after';
import AddonClinicalStudies from '../components/addon/clinical-studies';
import AddonDetails from '../components/addon/details';
import AddonNavigation from '../components/addon/navigation';
import AddonVideos from '../components/addon/videos';
import AddonWhatTreat from '../components/addon/what-treat';
import MenusProvider from '../components/contexts/menus-provider';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Addon = () => {

  return (
    <MenusProvider>
      <Layout>
          <SEO title="Addon"/>
          <AddonBanner/>                      {/* Status => done */}
          <AddonNavigation/>                  {/* Status => done */}
          <AddonDetails/>                     {/* Status => done */}
          <AddonDivider position="top"/>      {/* Status => done */}
          <AddonVideos/>                      {/* Status => done */}
          <AddonBeforeAfter/>                 {/* Status => done */}
          <AddonDivider position="bottom"/>   {/* Status => done */}
          <AddonWhatTreat/>                   {/* Status => done */}
          <AddonClinicalStudies/>             {/* Status => done */}
      </Layout>
    </MenusProvider>
  );
}

export default Addon