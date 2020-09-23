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

    const [datas] = React.useState(data.strapiAddonTemplates);

    return (
        <MenusProvider>
            <Layout>
                <SEO title="Addon"/>
                <AddonBanner datas={datas.addon_banner}/>
                <AddonNavigation/>
                <AddonDetails datas={{'key_benefits': datas.key_benefits, 'what_is': datas.what_is}}/>
                <AddonDivider position="top"/>
                <AddonVideos datas={{'videos': datas.videos, 'title': datas.VideoTitle}}/>
                <AddonBeforeAfter datas={{'before_after': datas.befores_afters, 'title': datas.BeforeAfterTitle}}/>
                <AddonDivider position="bottom"/>
                <AddonWhatTreat datas={{'what_treats': datas.what_treats, 'title': datas.TreatTitle}}/>
                <AddonClinicalStudies datas={datas.clinical_studies}/>
            </Layout>
        </MenusProvider>
    );
};

export default AddonTemplates;

export const query = graphql`
    query AddonTemplates($id: String!) {
        strapiAddonTemplates(id: {eq: $id}) {
            BeforeAfterTitle
            TitrePage
            TreatTitle
            VideoTitle
            addon_banner {
                banner_left {
                    publicURL
                }
                banner_mini {
                    publicURL
                }
                banner_right_title {
                    publicURL
                }
                short_descr
            }
            befores_afters {
                descr
                doctor
                image {
                    publicURL
                }
            }
            clinical_studies {
                description
                title
                url
                image {
                    publicURL
                }
            }
            key_benefits {
                text
            }
            videos {
                video_url
                poster {
                    publicURL
                }
            }
            what_is {
                description
                image {
                    publicURL
                }
                title
            }
            what_treats {
                description
                image {
                    publicURL
                }
                title
            }
          }
        }
      `;


// what_treats {
//     description
//     title
//     image {
//         publicURL
//     }
// }
// what_is {
//     description
//     title
//     image {
//         publicURL
//     }
// }
// videos {
//     video_url
//     poster {
//         publicURL
//     }
// }
// key_benefits {
//     text
// }
// clinical_studies {
//     description
//     title
//     url
//     image {
//         publicURL
//     }
// }
// befores_afters {
//     descr
//     doctor
//     image {
//         publicURL
//     }
// }
// addon_banner {
//     banner_right_title {
//         publicURL
//     }
//     banner_mini {
//         publicURL
//     }
//     banner_left {
//         publicURL
//     }
//     short_descr
// }
// VideoTitle
// BeforeAfterTitle
// TreatTitle