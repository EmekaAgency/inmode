import React from "react"
import Flickity from "react-flickity-component";
import { format_title } from "../../functions/format_title";
import ClinicalStudy from "../clinical-study";

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
                {datas.length == 1 ?
                    <ClinicalStudy study={datas[0]}/>
                    :
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
                            return (<ClinicalStudy prop_key={key} study={study}/>);
                        })}
                    </Flickity>
                }
            </div>
        </div>
    );
}

ProductClinicalStudies.defaultProps = {

}

ProductClinicalStudies.propTypes = {

}

export default ProductClinicalStudies;