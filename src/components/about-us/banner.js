import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Banner = ({ from = "" }) => {

    const [datas] = React.useState(useStaticQuery(graphql`
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
                src={datas.banner.childImageSharp.fluid.srcWebp}
                srcSet={datas.banner.childImageSharp.fluid.srcSetWebp}
                alt='about-us-banner'
            />
        </div>
    );
};

Banner.propTypes = {

};

Banner.defaultProps = {

};

export default Banner;