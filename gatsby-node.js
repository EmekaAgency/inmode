exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      // It's important to have 'node_modules' in resolve module,
      // otherwise the webpack resolve won't be able to find dependencies
      // correctly.
      modules: ['node_modules']
    }
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        addons: allStrapiAddon {
          edges {
            node {
              id
              Name
              Page_addon
              MenuParams {
                url
              }
            }
          }
        }
        products: allStrapiProduct {
          edges {
            node {
              id
              Name
              MenuParams {
                url
              }
            }
          }
        }
        treatments: allStrapiTreatment {
          edges {
            node {
              id
              Name
              MenuParams {
                url
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors
  }

  // Create addons pages.
  const addons = result.data.addons.edges

  const AddonTemplates = require.resolve("./src/templates/addon.js")

  addons.forEach((addon, index) => {
    addon.node.Page_addon && createPage({
      path: addon.node.MenuParams.url,
      component: AddonTemplates,
      context: {
        id: addon.node.id,
      },
    })
  })

  // Create products pages.
  const products = result.data.products.edges

  const ProductTemplates = require.resolve("./src/templates/product.js")

  products.forEach((product, index) => {
    createPage({
      path: product.node.MenuParams.url,
      component: ProductTemplates,
      context: {
        id: product.node.id,
      },
    })
  })

  // Create treatments pages.
  const treatments = result.data.treatments.edges

  const TreatmentTemplates = require.resolve("./src/templates/treatment.js")

  treatments.forEach((treatment, index) => {
    createPage({
      path: treatment.node.MenuParams.url,
      component: TreatmentTemplates,
      context: {
        id: treatment.node.id
      },
    })
  })

}