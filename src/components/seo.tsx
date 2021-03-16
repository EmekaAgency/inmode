/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useImages } from './contexts/images-provider';

function SEO({ description, lang, meta, title }) {

  const images = useImages();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            og_locale
            og_type
            og_title
            og_description
            og_url
            og_site_name
            twitter_card
            twitter_description
            twitter_title
            twitter_site
            twitter_image
            twitter_creator
            msapplication_TileImage
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title ? title + ' | ' : ''}Inmode - Votiva, FaceTite, BodyTite, AccuTite, BodyFX, Fractora`}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:locale`,
          content: site.siteMetadata.og_locale,
        },
        {
          property: `og:type`,
          content: site.siteMetadata.og_type,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.og_title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.og_description,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.og_url,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.og_site_name,
        },
        {
          name: `twitter:card`,
          content: site.siteMetadata.twitter_card,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.twitter_description,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.twitter_title,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitter_site,
        },
        {
          name: `twitter:image`,
          content: images.getOne('seoLogo').img.srcProps.src,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitter_creator,
        },
        {
          name: `msapplication-TileImage`,
          content: images.getOne('seoLogo').img.srcProps.src,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
