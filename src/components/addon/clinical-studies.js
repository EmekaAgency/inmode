import React from "react"
import Flickity from "react-flickity-component";
import { resolve_image } from "../../functions/get_images";

const AddonClinicalStudies = ({ addon }) => {

    const [flickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: false,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        autoPlay: 3000,
        wrapAround: true
    });

    return (
        <div className="addon-clinical-studies">
            <div className="title">
                études cliniques
            </div>
            <div className="clinical-studies-slider">
                <Flickity
                    id={`carousel-addons-${addon.name}`}
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate={true} // default false
                    static // default false
                    className="slide-studies transition"
                >
                    {['1', '2', '3'].map((study, key) => {
                        return (
                            <div className="study-slide">
                                <div className="study-img">
                                    <img src={resolve_image('products/clinical_study')} alt="clinical-study"/>
                                </div>
                                <div className="study-text">
                                    <div className="study-name">Magna adipisicing laborum sint dolore.</div>
                                    <div className="study-details">
                                        Veniam ex cupidatat aliquip id non.<br/>
                                        Nisi dolor cupidatat velit eiusmod.<br/>
                                        Nostrud proident enim nisi sunt dolor in commodo.<br/>
                                        Exercitation commodo minim magna ullamco ullamco laboris culpa ullamco dolor incididunt exercitation do laborum.<br/>
                                        Excepteur aute qui labore qui.<br/>
                                    </div>
                                    <div className="study-download">Télécharger</div>
                                </div>
                            </div>
                        );
                    })}
                </Flickity>
            </div>
        </div>
    );
}

AddonClinicalStudies.defaultProps = {

}

AddonClinicalStudies.propTypes = {

}

export default AddonClinicalStudies;