require("dotenv").config({
  path: `.env.${process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "dev"}`,
})

module.exports = {
  siteMetadata: {
    title: `Inmode - Votiva, FaceTite, BodyTite, AccuTite, BodyFX, Fractora`,
    description: `Les technologies innovantes Inmode fournissent des résultats supérieurs à vos patients. Traitements esthétiques du visage, corps, peau et santé et bien-être des femmes.`,
    author: `@emeka`,
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
        // apiURL: `http://51.178.141.192:1338`,
        apiURL: `http://localhost:1337`,
        contentTypes: [ // List of the Collection Types you want to be able to request from Gatsby.
          `addon`,
          `product`,
          `tag`,
          `tag-family`,
          `treatment`,
          `menu`,
          `shop`,
          `event`
        ],
        singleTypes: [
          `footer`,
          `about-us`
        ],
        queryLimit: 10000,
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
