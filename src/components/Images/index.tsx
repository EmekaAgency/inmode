import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  {
    keyBenefitIcon: file(relativePath: {eq: "icons/key_benefit.png"}) {
      childImageSharp {
        fluid {
          srcWebp
        }
      }
    }
    cartBasketIcon: file(relativePath: {eq: "icons/cart_basket.svg"}) {
      publicURL
    }
    closeWhiteIcon: file(relativePath: {eq: "icons/close-white.webp"}) {
      publicURL
    }
    hexagonalCross: file(relativePath: {eq: "icons/closingcross.png"}) {
      childImageSharp {
        fluid {
          srcSet
          srcSetWebp
        }
      }
    }
    rmvInit: file(relativePath: {eq: "icons/rmv-article-init.svg"}) {
      publicURL
    }
    rmvHover: file(relativePath: {eq: "icons/rmv-article-blue.svg"}) {
      publicURL
    }
    contactUsPiece: file(relativePath: {eq: "contact_us.png"}) {
      childImageSharp {
        fluid {
          srcSet
          srcSetWebp
        }
      }
    }
    fixedMenuLogo: file(relativePath: {eq: "header-logo.png"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    headerLogo: file(relativePath: {eq: "header-logo.png"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
          base64
          tracedSVG
        }
      }
    }
    seoLogo: file(relativePath: {eq: "header-logo.png"}) {
      img: childImageSharp {
        srcProps: fixed(width: 100, height: 100) {
          src: srcWebp
        }
      }
    }
    footerLogo: file(relativePath: {eq: "footer-logo.png"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    addressIcon: file(relativePath: {eq: "icons/icomoon/svg/073-location2.svg"}) {
      publicURL
    }
    phoneIcon: file(relativePath: {eq: "icons/icomoon/svg/067-phone.svg"}) {
      publicURL
    }
    mailIcon: file(relativePath: {eq: "icons/icomoon/svg/391-mail5.svg"}) {
      publicURL
    }
    bgPattern: file(relativePath: {eq: "footer-bg-pattern.png"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    privacyPolicyTriangle: file(relativePath: {eq: "privacy-icon.svg"}) {
      publicURL
    }
    privacyPolicyC: file(relativePath: {eq: "privacy-c.png"}) {
      childImageSharp {
        fluid {
          srcWebp
        }
      }
    }
    backAlveole: file(relativePath: {eq: "home/bg-alveoles.jpg"}) {
      publicURL
    }
    alveole1: file(relativePath: {eq: "home/alveole-1.jpg"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    alveole2: file(relativePath: {eq: "home/alveole-2.jpg"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    alveole3: file(relativePath: {eq: "home/alveole-3.jpg"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    alveole4: file(relativePath: {eq: "home/alveole-4.png"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    alveole5: file(relativePath: {eq: "home/alveole-5.jpg"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    homeClinicalBack: file(relativePath: {eq: "home/media-bg.webp"}) {
      publicURL
    }
    homeClinicalStudy: file(relativePath: {eq: "home/studies-img.png"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    heroHeader: file(relativePath: {eq: "hero-3.png"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    plusIcon: file(relativePath: {eq: "icons/add.svg"}) {
      publicURL
    }
    arrowRightIcon: file(relativePath: {eq: "icons/arrow-right.png"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
    gatsbyAstronaut: file(relativePath: {eq: "gatsby-astronaut.png"}) {
      childImageSharp {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`

// keyBenefitIcon
// cartBasketIcon
// closeWhiteIcon
// hexagonalCross
// rmvInit
// rmvHover
// contactUsPiece
// fixedMenuLogo
// headerLogo
// seoLogo
// footerLogo
// addressIcon
// mailIcon
// bgPattern
// privacyPolicyTriangle
// privacyPolicyC
// backAlveole
// alveole1
// alveole2
// alveole3
// alveole4
// alveole5
// homeClinicalBack
// homeClinicalStudy
// heroHeader
// plusIcon
// arrowRightIcon
// gatsbyAstronaut