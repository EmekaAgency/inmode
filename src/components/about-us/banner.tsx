import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Strapi_AboutUs_Interface } from "../interfaces";

const Banner = ({ from = "" }:Banner) => {

    const [datas]:[Strapi_AboutUs_Interface, React.Dispatch<Strapi_AboutUs_Interface>] = React.useState(useStaticQuery(graphql`
        {
            strapiAboutUs {
                banner {
                    childImageSharp {
                        fluid {
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
            }
        }
    `).strapiAboutUs);

    return (
        <div className={`full-img-banner${from ? ` ${from}` : ''}`}>
            <img
                src={datas.banner ? datas.banner.childImageSharp.fluid.srcWebp : ""}
                srcSet={datas.banner ? datas.banner.childImageSharp.fluid.srcSetWebp : ""}
                alt='about-us-banner'
            />
        </div>
    );
};

interface Banner {
    from?: string;
};

export default Banner;