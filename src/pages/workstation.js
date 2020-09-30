import React from "react"
import MenusProvider from "../components/contexts/menus-provider";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ShopMenu from "../components/shop/shop-menu";
import { edges_to_array } from "../functions/edges_to_array";

const ShopPage = ({ data }) => {
    
    return (
        <MenusProvider>
        <Layout>
          <SEO title="Shop"/>
          <ShopMenu
            products={edges_to_array(data.allStrapiProduct.edges)}
            tag_families={edges_to_array(data.allStrapiTagFamily.edges)}
            technologies={edges_to_array(data.allStrapiAddon.edges)}
        />
        </Layout>
      </MenusProvider>
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