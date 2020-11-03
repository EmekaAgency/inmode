import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import Flickity from "react-flickity-component";
import Slider from "../slider";

const AddonVideos = ({ datas = {} }) => {

    const [icons] = React.useState(useStaticQuery(graphql`
      {
        close_white: file(relativePath: {eq: "icons/close-white.webp"}) {
          publicURL
        }
      }
    `));

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
    
    if(!datas.videos || datas.videos.length === 0) {
        return false;
    }

    const resolve_click = (e) => {
      e.preventDefault();
      if(e.currentTarget.id === "video-iframe" || e.currentTarget.classList.contains('close-pic')) {
        document.getElementsByTagName('main')[0].style.zIndex = 'initial';
        document.getElementById('video-iframe').classList.toggle('opened');
        e.currentTarget.innerHTML = "";
      }
    }

    const openVideo = (e, url) => {
      e.preventDefault();
      if(url.includes('youtube')) {
        url = url.replace('watch?v=', 'embed/') + '?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1';
      }
      else if(url.includes('vimeo')) {
        url = url.replace('https://vimeo.com/', '//player.vimeo.com/video/') + '?autoplay=1&hd=1&show_title=1&show_byline=1&show_portrait=0&fullscreen=1';
      }
      document.getElementsByTagName('main')[0].style.zIndex = 4;
      document.getElementById('video-iframe').classList.toggle('opened');
      document.getElementById('video-iframe').innerHTML = '\
        <img class="close-pic" src=' + icons.close_white.publicURL + ' onclick="resolve_click(e)"/>\
        <iframe\
          allowfullscreen="allowfullscreen"\
          allow="autoplay; fullscreen"\
          src="' + url +'"\
          scrolling="no"\
        ></iframe>\
      ';
    }

    return (
        <div className="videos-slide">
          <div id="video-iframe" onClick={(e) => {resolve_click(e);}}></div>
          <div className="title">
            {datas.title}
          </div>
          <div className={`videos-container${datas.videos.length < 3 ? ' few' : ''}`}>
            {datas.videos.length < 3 ?
              datas.videos.map((video, index) => {
                return (
                  <img
                    src={video.poster.childImageSharp.fluid.srcWebp}
                    className=" few-videos poster"
                    onClick={(e) => {openVideo(e, video.url)}}
                  />
                  // <video
                  //   playsInline="" 
                  //   autoPlay={false}
                  //   loop={true}
                  //   muted={true}
                  //   poster={video.poster.childImageSharp.fluid.srcWebp}
                  //   height={380}
                  //   key={index}
                  //   className="few-videos"
                  // >
                  //   <source
                  //     src={video.url}
                  //     type="video/mp4"
                  //   />
                  //   <track src="" kind="subtitles" srcLang="en" label="English"></track>
                  // </video>
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
                      <img
                        src={video.poster.childImageSharp.fluid.srcWebp}
                        className=" poster"
                        onClick={(e) => {openVideo(e, video.url)}}
                      />
                      // <video
                      //   playsInline="" 
                      //   autoPlay={false}
                      //   loop={true}
                      //   muted={true}
                      //   poster={video.poster.childImageSharp.fluid.srcWebp}
                      //   height={380}
                      //   key={index}
                      // >
                      //   <source
                      //     src={video.url}
                      //     type="video/mp4"
                      //   />
                      //   <track src="" kind="subtitles" srcLang="en" label="English"></track>
                      // </video>
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