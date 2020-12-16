import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

const Alveoles = () => {

    const [images] = React.useState(useStaticQuery(graphql`
        {
            back: file(relativePath: {eq: "home/bg-alveoles.jpg"}) {
                publicURL
            }
            image_1: file(relativePath: {eq: "home/alveole-1.jpg"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
            image_2: file(relativePath: {eq: "home/alveole-2.jpg"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
            image_3: file(relativePath: {eq: "home/alveole-3.jpg"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
            image_4: file(relativePath: {eq: "home/alveole-4.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
            image_5: file(relativePath: {eq: "home/alveole-5.jpg"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                        srcSetWebp
                    }
                }
            }
        }
    `));

    const hexs = [
        {
            'image': images.image_1.childImageSharp.fluid,
            'target': '_self',
            'text': 'Congrès',
            'link': '/events/congress'
        },
        {
            'image': images.image_2.childImageSharp.fluid,
            'target': '_self',
            'text': 'Webinar',
            'link': '/events/webinars'
        },
        {
            'image': images.image_3.childImageSharp.fluid,
            'target': '_self',
            'text': 'Workshop',
            'link': '/events/workshops'
        },
        {
            'image': images.image_4.childImageSharp.fluid,
            'target': '_self',
            'text': 'Produits',
            'link': '/workstation'
        },
        {
            'image': images.image_5.childImageSharp.fluid,
            'target': '_blank',
            'text': 'Avant / Après',
            'link': 'https://inmodemd.com/gallery/'
        }
    ]

    return (
        <div className="alveoles">
            <div className="back-hex left">
                <img
                    src={images.back.publicURL}
                    alt="back-left"
                />
            </div>
            <div className="back-hex right">
                <img
                    src={images.back.publicURL}
                    alt="back-right"
                />
            </div>
            <div className="alveoles-container">
                {hexs.map((hex, key) => {
                    return (
                        <div key={key} className="alveole">
                            <img className="first" src={hex.image.srcWebp} srcSet={hex.image.srcSetWebp} alt={hex.text}/>
                            <div className="alveole-text">{hex.text}</div>
                            {hex.target === '_self' ?
                                <Link className="zone-link" to={hex.link}></Link>
                                :
                                <a className="zone-link" target="_blank" href={hex.link} rel="noreferrer"></a>
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

Alveoles.propTypes = {

}

Alveoles.defaultProps = {

}

export default Alveoles;