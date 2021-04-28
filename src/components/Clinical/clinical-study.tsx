import { Link } from "gatsby";
import React from "react";
import { format_title } from "../../functions/format_title";
import { InmodePanel_Generic_ClinicalStudies_Interface } from "../interfaces";

const ClinicalStudy = ({study, prop_key = null}:ClinicalStudy) => {
    
    return (
        <div key={prop_key} className="study-slide">
            <div className="study-img">
                <img
                    src={study.picture.childImageSharp.fluid.srcWebp}
                    srcSet={study.picture.childImageSharp.fluid.srcSetWebp}
                    alt="clinical-study"
                />
            </div>
            <div className="study-text">
                <div className="study-name">{study.title}</div>
                <div className="study-author">Authors : {study.author}</div>
                <div className="study-technologies">Technologies : 
                    {study.addons.map((addon, key2) => {
                        return (
                            <>
                                &nbsp;
                                <Link key={`${prop_key}-${key2}` || null} to={`/technology/${format_title(addon.Name)}`} /*title={format_title(addon.Name)}*/>
                                    {format_title(addon.Name)}
                                </Link>
                                &nbsp;
                            </>
                        );
                    })}
                </div>
                <div className="study-published">Publication date : {study.published_date}</div>
                <div className="study-publication">Publication : {study.publication}</div>
                <div className="study-download">
                    Download
                    <a 
                        className="zone-link"
                        href={study.url}
                        target="_blank"
                        rel="noreferrer"
                        title="Download study"
                    ></a>
                </div>
            </div>
        </div>
    );
}

interface ClinicalStudy {
    study: InmodePanel_Generic_ClinicalStudies_Interface;
    prop_key?: number | null;
}

export default ClinicalStudy;