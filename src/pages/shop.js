import React from "react"
import CartProvider from "../components/contexts/cart-provider";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Shop from "../components/shop/shop";
import { edges_to_array } from "../functions/edges_to_array";

const ShopPage = ({ data }) => {
    
  return (
    <Layout>
      <SEO title="Shop"/>
        {/* <CartProvider> */}
          <Shop
            products={data.allStrapiShop.group}
            tag_families={edges_to_array(data.allStrapiTagFamily.edges)}
            technologies={edges_to_array(data.allStrapiAddon.edges)}
            shop_card="shop"
          />
      {/* </CartProvider> */}
    </Layout>
  )
}

export default ShopPage;

// TODO Récupérer données
// TODO Process .Tags selon products

export const query = graphql`
  {
    allStrapiProduct {
      edges {
        node {
          strapiId
          Addons {
            id
          }
          Icon {
            childImageSharp {
              fluid {
                srcWebp
                srcSetWebp
              }
            }
          }
          MenuParams {
            url
          }
          ShopPicture {
            childImageSharp {
              fluid {
                  srcWebp
              }
            }
          }
          Tags {
            tag
          }
        }
      }
    }
    allStrapiTagFamily {
      edges {
        node {
          FamilyName
          tags {
            tag
          }
        }
      }
    }
    allStrapiAddon {
      edges {
        node {
          Name
        }
      }
    }
    allStrapiShop {
      group(field: addon___Name) {
        fieldValue
        nodes {
          reference
          Name
          pack_size
          pack_type
          price
          discount
          addon {
            id
            Name
            Banner {
              left_img {
                childImageSharp {
                  fluid {
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
          }
          picture {
            childImageSharp {
              fluid {
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  }
`;