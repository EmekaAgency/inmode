/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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