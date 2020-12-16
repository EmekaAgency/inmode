import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const GenericDetails = ({ datas }) => {

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

    return (
        <div id="what-is" className="details">
            <div className="what-is transition">
                <div className="details-img transition">
                    <img
                        src={datas.what_is.picture.childImageSharp.fluid.srcWebp}
                        srcSet={datas.what_is.picture.childImageSharp.fluid.srcSetWebp}
                        alt="detail-main-pic"
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
            <div id={datas.anchor_key || "list"}></div>
            <div className="text-list transition">
                <div className="title">
                    {datas.list_title}
                </div>
                {datas.list && datas.list.map((elem, key) => {
                    return (
                        <div key={key} className="list-elem">
                            {datas.list_icon && <img
                                src={icons[datas.list_icon].childImageSharp.fluid.srcWebp}
                                alt={`elem-${key}`}
                                className="before-text"
                            />}
                            {!datas.list_icon && <span className="before-text">&bull;</span>}
                            <div className="text">{elem.texte}</div>
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

GenericDetails.propTypes = {

};

GenericDetails.defaultProps = {

};

export default GenericDetails;