import React from "react"
import Flickity from "react-flickity-component";
import { format_title } from "../../functions/format_title";

const ProductClinicalStudies = ({ datas }) => {

    const [flickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: false,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        autoPlay: 5000,
        wrapAround: true
    });

    if(!datas || datas.length == 0) {
        return false;
    }

    return (
        <div id="studies" className="product-clinical-studies">
            <div className="title">
                études cliniques
            </div>
            <div className="clinical-studies-slider">
                <Flickity
                    id={`carousel-clinical-studies`}
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate={true} // default false
                    static // default false
                    className="slide-studies transition"
                >
                    {[...datas, ...datas].map((study, key) => {
                        return (
                            <div key={key} className="study-slide">
                                <div className="study-img">
                                    <img
                                        src={study.picture.childImageSharp.fluid.srcWebp}
                                        alt="clinical-study"
                                    />
                                </div>
                                <div className="study-text">
                                    <div className="study-name">{study.title}</div>
                                    <div className="study-author">Auteurs : {study.author}</div>
                                    <div className="study-technologies">Technologies : 
                                        {study.addons.map((addon, key2) => {
                                            return (
                                                <>
                                                    &nbsp;
                                                    <a key={`${key}-${key2}`} href={`/technology/${format_title(addon.Name)}`}>
                                                        {format_title(addon.Name)}
                                                    </a>
                                                    &nbsp;
                                                </>
                                            );
                                        })}
                                    </div>
                                    <div className="study-published">Date de publication : {study.published_date}</div>
                                    <div className="study-publication">Publication : {study.publication}</div>
                                    <div className="study-download">
                                        Télécharger
                                        <a
                                            className="zone-link"
                                            href={study.url}
                                            // download={study.url.split('/')[study.url.split('/').length - 1]}
                                            download
                                            target="_blank"
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Flickity>
            </div>
        </div>
    );
}

ProductClinicalStudies.defaultProps = {

}

ProductClinicalStudies.propTypes = {

}

export default ProductClinicalStudies;