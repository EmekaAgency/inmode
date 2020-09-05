module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        header_icons: [
          'public/icons/social-network/facebook.jpg',
          'public/icons/social-network/twitter.jpg',
          'public/icons/social-network/instagram.jpg',
          'public/icons/social-network/linkedin.jpg',
          'public/icons/social-network/youtube.jpg'
        ],
        footer_icons: [
          'public/icons/icomoon/svg/073-location2.jpg',
          'public/icons/icomoon/svg/067-phone.jpg',
          'public/icons/icomoon/svg/391-mail5.jpg',
          'public/icons/icomoon/svg/social-facebook.jpg',
          'public/icons/icomoon/svg/social-instagram.jpg',
          'public/icons/icomoon/svg/social-linkedin.jpg',
          'public/icons/icomoon/svg/social-youtube.jpg'
        ]
      },
    },
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'inmode'
        },
        queries: [
          {
            statement: 'SELECT * FROM menus WHERE container = \'header-top\'',
            idFieldName: 'id',
            nameFieldName: 'name',
            urlFieldName: 'url',
            underFieldName: 'under',
            typeFieldName: 'type',
            containerFieldName: 'container',
            positionFieldName: 'position',
            variantFieldName: 'variant',
            name: 'header-top'
          },
          {
            statement: 'SELECT * FROM menus WHERE container = \'header-bottom\'',
            idFieldName: 'id',
            nameFieldName: 'name',
            urlFieldName: 'url',
            underFieldName: 'under',
            typeFieldName: 'type',
            containerFieldName: 'container',
            positionFieldName: 'position',
            variantFieldName: 'variant',
            name: 'header-bottom'
          },
          {
            statement: 'SELECT * FROM menus WHERE container LIKE \'footer%\'',
            idFieldName: 'id',
            nameFieldName: 'name',
            urlFieldName: 'url',
            underFieldName: 'under',
            typeFieldName: 'type',
            containerFieldName: 'container',
            positionFieldName: 'position',
            variantFieldName: 'variant',
            name: 'footer'
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
