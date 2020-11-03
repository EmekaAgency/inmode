import React from "react";
import Flickity from "react-flickity-component";

const ProductBeforeAfter = ({ datas }) => {

    const [flickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: true,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        autoPlay: 5000,
        wrapAround: true,
    });

    if(datas.length === 0) {
        return false;
    }

    return (
        <div id="before-after" className="before-after">
            <div className="title">
                before and after
            </div>
            <div className={`container-ba${datas.length < 3 ? ' few' : ''}`}>
                {datas.length < 3 ?
                    datas.map((ba, key) => {
                        return (
                            <div key={key} className="few-ba">
                                <img
                                    src={ba.image.childImageSharp.fluid.srcWebp}
                                    srcSet={ba.image.childImageSharp.fluid.srcSetWebp}
                                />
                                <div className="ba-doctor">{ba.doctor}</div>
                                <div className="ba-descr">{ba.text}</div>
                            </div>
                        );
                    })
                    :
                    <Flickity
                        id={`carousel-ba`}
                        elementType={'div'}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate={true}
                        static
                        className="slides-before-after transition"
                    >
                        {[...datas, ...datas].map((ba, key) => {
                                return (
                                    <div key={key} className="ba-slide">
                                        <img
                                            src={ba.image.childImageSharp.fluid.srcWebp}
                                            srcSet={ba.image.childImageSharp.fluid.srcSetWebp}
                                        />
                                        <div className="ba-doctor">{ba.doctor}</div>
                                        <div className="ba-descr">{ba.text}</div>
                                    </div>
                                );
                            })
                        }
                    </Flickity>
                }
            </div>
            <a className="request-informations" href="#">
                request informations
            </a>
        </div>
    );
}

ProductBeforeAfter.defaultProps = {

}

ProductBeforeAfter.propTypes = {

}

export default ProductBeforeAfter;