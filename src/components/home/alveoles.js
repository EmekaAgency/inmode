import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { get_img_path } from "../../functions/get_images";

const Alveoles = () => {

    const images = useStaticQuery(graphql`
        {
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
    `);

    const alveoles = (size) => {
        let temp = [];
        for(let i = 0; i < size; i++) {
            temp[i] = `al ${i + 1}`;
        }
        return temp;
    };

    // TODO div back color pour shadow

    const hexs = [
        {'image': images.image_1.childImageSharp.fluid, 'text': 'Congrès', 'link': '/events/congress'},
        {'image': images.image_2.childImageSharp.fluid, 'text': 'Webinar', 'link': '/events/webinars'},
        {'image': images.image_3.childImageSharp.fluid, 'text': 'Workshop', 'link': '/events/workshops'},
        {'image': images.image_4.childImageSharp.fluid, 'text': 'Produits', 'link': '/workstation'},
        {'image': images.image_5.childImageSharp.fluid, 'text': 'Avant / Après', 'link': 'https://inmodemd.com/gallery/'}
    ]

    return (
        <div className="alveoles">
            <div className="alveoles-container">
                {hexs.map((hex, key) => {
                    return (
                        <div key={key} className="alveole">
                            <img src={hex.image.srcWebp} srcSet={hex.image.srcSetWebp} alt={hex.text}/>
                            <div className="alveole-text">{hex.text}</div>
                            <a className="zone-link" href={hex.link}></a>
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