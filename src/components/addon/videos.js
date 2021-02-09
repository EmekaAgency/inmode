import React from "react";
import Carousel from "../Carousel";
import { useImages } from '../contexts/images-provider';

const AddonVideos = ({ datas = {} }) => {

  const images = useImages();

    const [flickityOptions] = React.useState({
        initialIndex: 0,
        cellAlign: 'left',
        pageDots: true,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        percentPosition: false,
        // autoPlay: 10000,
        draggable: true,
        // wrapAround: true
    });
    
    if(!datas.videos || datas.videos.length === 0) {
        return false;
    }

    const resolve_click = (e) => {
      e.preventDefault();
      if(e.currentTarget.id === "video-iframe" || e.currentTarget.classList.contains('close-pic')) {
        document.getElementsByTagName('main')[0].style.removeProperty('z-index');
        document.getElementById('video-iframe').classList.remove('opened');
        e.currentTarget.innerHTML = "";
        document.querySelector('header').classList.remove('video-opened');
        document.querySelector('.header-mini-menu').classList.remove('video-opened');
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
      document.querySelector('header').classList.add('video-opened');
      document.querySelector('.header-mini-menu').classList.add('video-opened');
      document.getElementsByTagName('main')[0].style.zIndex = 4;
      document.getElementById('video-iframe').classList.add('opened');
      let iframe = '';
      iframe += '<img class="close-pic" src=' + images.getOne('closeWhiteIcon').publicURL + ' onclick="resolve_click(e)"/>';
      iframe += '<iframe';
      iframe += 'allowfullscreen="allowfullscreen"';
      iframe += 'allow="autoplay; fullscreen"';
      iframe += 'src="' + url +'"';
      iframe += 'scrolling="no"';
      iframe += '></iframe>';
      iframe += '';
      document.getElementById('video-iframe').innerHTML = iframe;
    }

    const resolveVideoClick = (e, url) => {
      openVideo(e, url);
    }

    return (
        <div className="videos-slide">
          <div id="video-iframe" onClick={(e) => {resolve_click(e);}}></div>
          <div className="title">
            {datas.title}
          </div>
          <div className={`videos-container${datas.videos.length < 3 ? ' few' : ''}`}>
            {datas.videos.length < 3 ?
              datas.videos.map((video, key) => {
                return (
                  <div
                    className=" few-videos poster video"
                    onMouseDown={(e) => {resolveVideoClick(e, video.url);}}
                    onMouseUp={(e) => {resolveVideoClick(e, video.url);}}
                    onClick={(e) => {resolveVideoClick(e, video.url);}}
                  >
                    <img
                      src={video.poster.childImageSharp.fluid.srcWebp}
                      alt={`addon-videos-${key}`}
                    />
                    <span className="video-bg"></span>
                    <span className="video-play-btn"></span>
                  </div>
                );
              })
              :
              <Carousel
                  id={`carousel-videos-${datas.name}`}
                  options={flickityOptions}
                  classList={'carousel-videos transition'}
              >
                {/* {[...(datas.videos), ...(datas.videos)].map((video, index) => { */}
                {datas.videos.map((video, key) => {
                    return (
                      <div
                        className="poster video"
                        onMouseDown={(e) => {resolveVideoClick(e, video.url);}}
                        onMouseUp={(e) => {resolveVideoClick(e, video.url);}}
                        onClick={(e) => {resolveVideoClick(e, video.url);}}
                        key={key}
                      >
                        <img
                          src={video.poster.childImageSharp.fluid.srcWebp}
                          alt={`addon-videos-${key}`}
                        />
                        <span className="video-bg"></span>
                        <span className="video-play-btn"></span>
                      </div>
                    );
                  })
                }
              </Carousel>
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