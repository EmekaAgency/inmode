import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const ProductSellingArgs = ({ datas }) => {

    const [icons] = React.useState(useStaticQuery(graphql`
        {
            key_benefit: file(relativePath: {eq: "icons/key_benefit.png"}) {
                childImageSharp {
                    fluid {
                        srcWebp
                    }
                }
            }
        }
    `));
    
    if(!datas || datas.length === 0) {
        return false;
    }

    return (
        <div id="selling" className="product-selling-args">
            <div className="title">{datas.SectionTitle}</div>
            {datas.Arg.map((arg, key) => {
                return (
                    <div key={key} className="key">
                        <img
                            src={icons.key_benfit.childImageSharp.fluid.srcWebp}
                            alt="key_benefit"
                        />
                        <div className="text">{arg.texte}</div>
                    </div>
                );
            })}
        </div>
    );
}

ProductSellingArgs.propTypes = {

};

ProductSellingArgs.defaultProps = {

}

export default ProductSellingArgs;