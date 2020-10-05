import React from 'react'
import { graphql } from 'gatsby';
import Divider from '../components/divider';
import AddonBanner from '../components/addon/banner';
import AddonBeforeAfter from '../components/addon/before-after';
import Details from '../components/details';
import AddonNavigation from '../components/addon/navigation';
import AddonVideos from '../components/addon/videos';
import AddonWhatTreat from '../components/addon/what-treat';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MenusProvider from '../components/contexts/menus-provider';
import SellingArgs from '../components/selling-args';
import SellingNew from '../components/selling-new';
import ClinicalStudies from '../components/clinical-studies';
import GenericDetails from '../components/details';

const AddonTemplates = ({ data }) => {

    const [datas] = React.useState(data.strapiAddon);

    console.log(datas);

    return (
        <MenusProvider>
            <Layout>
                <SEO title="Addon"/>
                <AddonBanner datas={datas.Banner}/>
                <AddonNavigation
                    name={datas.Name}
                    exist={{
                        'before-after': datas.BeforesAfters != [] && datas.BeforesAfters.length > 0,
                        'studies': datas.ClinicalStudies != [] && datas.ClinicalStudies.length > 0
                    }}
                />
                <GenericDetails datas={{'list': datas.KeyBenefits, 'what_is': datas.WhatIs, 'list_title': 'key benefits', 'list_icon' : 'icons/key_benefit.png'}}/>
                <Divider position="top"/>
                <AddonVideos datas={{'videos': datas.Videos, 'title': `${datas.Name} videos`, 'name': datas.Name}}/>
                <AddonBeforeAfter datas={datas.BeforesAfters}/>
                <Divider position="bottom"/>
                <AddonWhatTreat datas={{'what_treats': datas.WhatTreats}}/>
                <ClinicalStudies datas={datas.ClinicalStudies}/>
                <SellingArgs datas={datas.SellingArgs && datas.SellingArgs[0] || []}/>
                <SellingNew datas={datas.SellingNewGeneration}/>
            </Layout>
        </MenusProvider>
    );
};

export default AddonTemplates;

export const query = graphql `
    query Addon($id: String!) {
        strapiAddon(id: { eq: $id }) {
            Name
            Page_addon
            Banner {
                left_img {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
                mini {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
                right_img {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
                right_text
            }
            WhatIs {
                TitleText {
                    title
                    text
                }
                picture {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
            }
            KeyBenefits {
                texte
            }
            AfterKeyBenefits
            Videos {
                url
                poster {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
            }
            BeforesAfters {
                doctor
                text
                image {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
            }
            WhatTreats {
                title
                text
                picture {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
            }
            ClinicalStudies {
                addons {
                    Name
                }
                author
                picture {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
                publication
                published_date
                title
                url
            }
            SellingArgs {
                SectionTitle
                Arg {
                    texte
                }
                picture {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
            }
            SellingNewGeneration {
                title
                text
                picture {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
            }
        }
    }
`;