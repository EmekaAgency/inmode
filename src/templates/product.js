import React from 'react'
import MenusProvider from '../components/contexts/menus-provider';
import Layout from '../components/layout';
import Addons from '../components/product/addons';
import Divider from '../components/divider';
import ProductBanner from '../components/product/banner';
import Details from '../components/details';
import ProductNavigation from '../components/product/navigation';
import SEO from '../components/seo';
import ProductBeforeAfter from '../components/product/before-after';
import ProductDemo from '../components/product/demo';
import SellingArgs from '../components/selling-args';
import ClinicalStudies from '../components/clinical-studies';
import GenericDetails from '../components/details';

const ProductTemplates = ({ data }) => {

    const [datas] = React.useState(data.strapiProduct);

    console.log(datas);

    return (
        <MenusProvider>
            <Layout>
                <SEO title="Product"/>
                <ProductBanner datas={datas.Banner}/>
                <ProductNavigation
                    name={datas.name}
                    exist={{
                        'before-after': datas.BeforesAfters != [] && datas.BeforesAfters.length > 0,
                        'studies': datas.ClinicalStudies != [] && datas.ClinicalStudies.length > 0
                    }}
                />
                <GenericDetails
                    datas={{
                        'what_is': datas.WhatIs,
                        'before_keys': datas.BeforeKeyBenefits,
                        'list': datas.KeyBenefits,
                        'list_title': 'key benefits',
                        'list_icon': 'icons/key_benefit.png',
                        'anchor_key': 'key-benefits'
                    }}
                />
                <Divider position="top"/>
                <Addons datas={{'addons': datas.Addons, id: datas.strapiId}}/>
                <Divider position="bottom" specialBackground={datas.Demo ? 'darkcyan' : null}/>
                <ProductDemo datas={datas.Demo}/>
                {datas.Demo && <Divider position="top" specialBackground={'darkcyan'} specialFill={"#0b1a25"}/>}
                <ProductBeforeAfter datas={datas.BeforesAfters}/>
                <SellingArgs datas={datas.SellingArgs[0]}/>
                <ClinicalStudies datas={datas.ClinicalStudies}/>
            </Layout>
        </MenusProvider>
    );
}

export default ProductTemplates;

export const query = graphql`
    query Product($id: String!) {
        strapiProduct(id: {eq: $id}) {
            strapiId
            Banner {
                left_img {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
                left_video
                right_img {
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
                right_text
            }
            WhatIs {
                picture {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
                TitleText {
                    text
                    title
                }
            }
            BeforeKeyBenefits
            KeyBenefits {
                texte
            }
            Addons {
                ProductPresentation {
                    left_image {
                        childImageSharp {
                            fluid {
                                srcWebp
                            }
                        }
                    }
                    title_image {
                        childImageSharp {
                            fluid {
                                srcWebp
                            }
                        }
                    }
                    title_text
                    Images {
                        image {
                            childImageSharp {
                                fluid {
                                    srcWebp
                                }
                            }
                        }
                        product {
                            id
                        }
                    }
                    AddonProductsDescr {
                        descr
                        product {
                            id
                        }
                    }
                    ProductPresentationTreats {
                        treat_short
                        product {
                            id
                        }
                    }
                    appears_everywhere
                    products {
                        id
                    }
                }
            }
            Demo {
              text
              picture {
                childImageSharp {
                  fluid {
                    srcWebp
                  }
                }
              }
            }
            BeforesAfters {
                doctor
                image {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
                text
            }
            SellingArgs {
                SectionTitle
                Arg {
                    texte
                }
            }
            ClinicalStudies {
                addons {
                    Name
                }
                author
                published_date
                title
                url
                picture {
                    childImageSharp {
                        fluid {
                            srcWebp
                        }
                    }
                }
                publication
            }
            Name
        }
    }
`;