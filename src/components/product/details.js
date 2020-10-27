import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const ProductDetails = ({ datas }) => {

    const icons = useStaticQuery(graphql`
        {
            key_benefit: file(relativePath: {eq: "icons/key_benefit.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                    }
                }
            }
        }
    `);

    return (
        <div id="what-is" className="product-details">
            <div className="what-is transition">
                <div className="product-details-img transition">
                    <img
                        src={datas.what_is.picture.childImageSharp.fluid.srcWebp}
                    />
                </div>
                {datas.what_is.TitleText.map((section, key) => {
                    return (
                        <div key={key}>
                            <div className="title">
                                {section.title}
                            </div>
                            <p className="text">
                                {section.text}
                            </p>
                        </div>
                    )
                })}
            </div>
            <div id="key-benefits" className="key-benefits transition">
                <div className="title">
                    {'key benefits:'}
                </div>
                {datas.key_benefits.map((benefit, key) => {
                    return (
                        <div key={key} className="key">
                            <img
                                src={icons.key_benefit.childImageSharp.fluid.srcWebp}
                                alt="key_benefit"
                            />
                            <div className="text">{benefit.texte}</div>
                        </div>
                    );
                })}
            </div>
            <a className="request-informations" href="#">
                request informations
            </a>
        </div>
    );
}

ProductDetails.defaultProps = {

}

ProductDetails.propTypes = {

}

export default ProductDetails;