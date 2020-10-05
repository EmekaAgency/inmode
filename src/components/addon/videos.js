import React from "react"
import Flickity from "react-flickity-component";
import Slider from "../slider";

const AddonVideos = ({ datas }) => {

    const [flickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: true,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        autoPlay: 10000,
        wrapAround: true,
        draggable: true
    });
    
    if(!datas.videos || datas.videos.length == 0) {
        return false;
    }

    console.log(datas);

    return (
        <div className="videos-slide">
          <div className="title">
            {datas.title}
          </div>
          <div className={`videos-container${datas.videos.length < 3 ? ' few' : ''}`}>
            {datas.videos.length < 3 ?
              datas.videos.map((video, index) => {
                return (
                  <video
                    playsInline="" 
                    autoPlay={false}
                    loop={true}
                    muted={true}
                    poster={video.poster.childImageSharp.fluid.srcWebp}
                    height={380}
                    key={index}
                    className="few-videos"
                  >
                    <source
                      src={video.url}
                      type="video/mp4"
                    />
                    <track src="" kind="subtitles" srcLang="en" label="English"></track>
                  </video>
                );
              })
              :
              <Flickity
                id={`carousel-videos-${datas.name}`}
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate={true} // default false
                static // default false
                className="carousel-videos transition"
              >
                {[...(datas.videos), ...(datas.videos)].map((video, index) => {
                    return (
                      <video
                        playsInline="" 
                        autoPlay={false}
                        loop={true}
                        muted={true}
                        poster={video.poster.childImageSharp.fluid.srcWebp}
                        height={380}
                        key={index}
                      >
                        <source
                          src={video.url}
                          type="video/mp4"
                        />
                        <track src="" kind="subtitles" srcLang="en" label="English"></track>
                      </video>
                    );
                  })
                }
              </Flickity>
            }
          </div>
        </div>
    );
}

AddonVideos.defaultProps = {

}

AddonVideos.propTypes = {

}

export default AddonVideos;