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
            }
          }
        }
        products: allStrapiProduct {
          edges {
            node {
              id
              Name
            }
          }
        }
        treatments: allStrapiTreatment {
          edges {
            node {
              id
              Name
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
      path: `/technology/${addon.node.Name.replace(/ /g, '-')}`,
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
      path: `/workstation/${product.node.Name}`,
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
      path: `/treatment/${treatment.node.Name.replace(/ /g, '-')}`,
      component: TreatmentTemplates,
      context: {
        id: treatment.node.id
      },
    })
  })

}