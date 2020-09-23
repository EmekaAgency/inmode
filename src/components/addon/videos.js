import React from "react"
import Flickity from "react-flickity-component";

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

    return (
        <div className="addon-videos">
          <div className="title">
            {datas.title}
          </div>
            <Flickity
              id={`carousel-addon-videos`}
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate={true} // default false
              static // default false
              className="carousel-addon-videos transition"
            >
              {[...(datas.videos), ...(datas.videos)].map((video, index) => {
                  return (
                    <video
                      playsInline="" 
                      autoPlay="autoplay"
                      loop={true}
                      muted={true}
                      poster={video.poster.publicURL}
                      height={380}
                      key={index}
                    >
                      <source
                        src={video.video_url}
                        // type="video/mp4"
                      />
                      <track src="" kind="subtitles" srcLang="en" label="English"></track>
                    </video>
                  );
                })
              }
            </Flickity>
        </div>
    );
}

AddonVideos.defaultProps = {

}

AddonVideos.propTypes = {

}

export default AddonVideos;