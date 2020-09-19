import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import AddonBanner from '../components/addon/banner';
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
          <AddonBanner/>
          <AddonNavigation/>
          <AddonDetails/>
          <AddonVideos/>
          <AddonWhatTreat/>
          <AddonClinicalStudies/>
      </Layout>
    </MenusProvider>
  );
}

export default Addon