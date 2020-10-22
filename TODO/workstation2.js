import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Shop from "../components/shop/shop";
import { edges_to_array } from "../functions/edges_to_array";

const ShopPage = ({ data }) => {
    
    return (
        <Layout>
          <SEO title="Shop"/>
          <Shop
            products={edges_to_array(data.allStrapiProduct.edges)}
            tag_families={edges_to_array(data.allStrapiTagFamily.edges)}
            technologies={edges_to_array(data.allStrapiAddon.edges)}
            special={true}
        />
        </Layout>
    )
}

export default ShopPage;

export const query = graphql`
  {
    allStrapiProduct {
      edges {
        node {
          Name
          ShopPicture {
            childImageSharp {
            fluid {
                srcWebp
            }
            }
          }
          ShopDescription
          Addons {
            Name
          }
          ShopTreats {
            texte
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
  }
`;