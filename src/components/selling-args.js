import React from "react"
import { get_img_path } from "../functions/get_images";
import { graphql, useStaticQuery } from "gatsby";

const SellingArgs = ({ datas }) => {

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
    
    if(!datas || datas.length == 0) {
        return false;
    }

    return (
        <div id="selling" className="selling-args">
            <div className="title">{datas.SectionTitle}</div>
            {datas.Arg.map((arg, key) => {
                return (
                    <div key={key} className="key">
                        {/* TODO single type */}
                        <img
                            src={icons.key_benefit.childImageSharp.fluid.srcWebp}
                            alt="key_benefit"
                        />
                        <div className="text">{arg.texte}</div>
                    </div>
                );
            })}
        </div>
    );
}

SellingArgs.propTypes = {

};

SellingArgs.defaultProps = {

}

export default SellingArgs;