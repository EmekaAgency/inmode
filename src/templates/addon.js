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
import SellingArgs from '../components/selling-args';
import SellingNew from '../components/selling-new';
import ClinicalStudies from '../components/clinical-studies';
import GenericDetails from '../components/details';

const AddonTemplates = ({ data }) => {

    const [datas] = React.useState(data.strapiAddon);

    console.log(datas);

    return (
            <Layout>
                <SEO title="Addon"/>
                <AddonBanner datas={datas.Banner}/>
                <AddonNavigation
                    name={datas.Name}
                    exist={{
                        'before-after': datas.BeforesAfters !== [] && datas.BeforesAfters.length > 0,
                        'studies': datas.ClinicalStudies !== [] && datas.ClinicalStudies.length > 0
                    }}
                />
                <GenericDetails datas={{'list': datas.KeyBenefits, 'what_is': datas.WhatIs, 'list_title': 'key benefits', 'list_icon' : 'key_benefit'}}/>
                <Divider position="top"/>
                <AddonVideos datas={{'videos': datas.Videos, 'title': `${datas.Name} videos`, 'name': datas.Name}}/>
                <AddonBeforeAfter datas={datas.BeforesAfters}/>
                <Divider position="bottom"/>
                <AddonWhatTreat datas={{'what_treats': datas.WhatTreats}}/>
                <ClinicalStudies datas={datas.ClinicalStudies}/>
                <SellingArgs datas={datas.SellingArgs && datas.SellingArgs[0] || []}/>
                <SellingNew datas={datas.SellingNewGeneration}/>
            </Layout>
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
                            base64
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
                mini {
                    childImageSharp {
                        fluid {
                            base64
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
                right_img {
                    childImageSharp {
                        fluid {
                            base64
                            srcWebp
                            srcSetWebp
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
                            base64
                            srcWebp
                            srcSetWebp
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
                            base64
                            srcWebp
                            srcSetWebp
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
                            base64
                            srcWebp
                            srcSetWebp
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
                            base64
                            srcWebp
                            srcSetWebp
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
                            base64
                            srcWebp
                            srcSetWebp
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
                            base64
                            srcWebp
                            srcSetWebp
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
                            base64
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
            }
        }
    }
`;