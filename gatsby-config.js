require("dotenv").config({
  path: `.env.${process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "dev"}`,
})

module.exports = {
  siteMetadata: {
    description: `InMode offers cutting edge medical devices for minimally-invasive & non-invasive procedures that provide amazing results for the patient and the practice.`,
    robots: `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`,
    og_locale: `fr_FR`,
    og_type: `website`,
    og_title: `InMode offers cutting edge medical devices for minimally-invasive & non-invasive procedures that provide amazing results for the patient and the practice.`,
    og_description: `InMode offers cutting edge medical devices for minimally-invasive & non-invasive procedures that provide amazing results for the patient and the practice.`,
    og_url: `https://inmodemd.fr/`,
    og_site_name: `InModeMD France`,
    twitter_card: `summary_large_image`,
    twitter_description: `InMode offers cutting edge medical devices for minimally-invasive & non-invasive procedures that provide amazing results for the patient and the practice.`,
    twitter_title: `InMode offers cutting edge medical devices for minimally-invasive & non-invasive procedures that provide amazing results for the patient and the practice.`,
    twitter_site: `@InModeMDFrance`,
    twitter_image: ``,
    twitter_creator: `@InModeMDFrance`,
    msapplication_TileImage: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
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
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: `${process.env.STRAPI_URL}`,
        apiURL: `http://51.178.141.192:1337`,
        // apiURL: `http://localhost:1337`,
        contentTypes: [ // List of the Collection Types you want to be able to request from Gatsby.
          `addon`,
          `product`,
          `tag`,
          `tag-family`,
          `treatment`,
          `menu`,
          `shop`,
          // `event`
        ],
        singleTypes: [
          `footer`,
          `about-us`
        ],
        queryLimit: 10000,
        data: {
          login: {
          //   identifier: process.env.STRAPI_ID,
            identifier: 'inmode@emeka.fr',
          //   // password: process.env.STRAPI_PASS
            password: 'Bonsoir34**'
          }
        }
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `1317505554`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
