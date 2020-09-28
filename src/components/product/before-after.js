import React from "react"
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

    if(datas.length == 0) {
        return false;
    }

    if(datas.length == 1) {
        return (
            <div id="before-after" className="addon-before-after">
                <div className="title">
                before and after
                </div>
                    <div className="ba-slide">
                        <img
                            src={datas[0].image.childImageSharp.fluid.srcWebp}
                        />
                        <div className="ba-doctor">{datas[0].doctor}</div>
                        <div className="ba-descr">{datas[0].text}</div>
                    </div>
                <a className="request-informations" href="#">
                    request informations
                </a>
            </div>
        );
    }

    return (
        <div id="before-after" className="addon-before-after product">
          <div className="title">
            before and after
          </div>
            <Flickity
              id={`carousel-addon-ba`}
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate={true} // default false
              static // default false
              className="slides-before-after transition"
            >
                {[...datas, ...datas].map((ba, key) => {
                    return (
                        <div key={key} className="ba-slide">
                            <img
                                src={ba.image.childImageSharp.fluid.srcWebp}
                            />
                            <div className="ba-doctor">{ba.doctor}</div>
                            <div className="ba-descr">{ba.text}</div>
                        </div>
                    );
                })}
            </Flickity>
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