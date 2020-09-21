import React from "react"
import { format_string } from "../../functions/format_string";
import ProductsContext from "../contexts/products-context";
import Flickity from "react-flickity-component";
import { get_img_path } from "../../functions/get_images";

const AddonVideos = ({  }) => {
  
  const addon = React.useContext(ProductsContext).addons[0];

  const img_extensions = ['jpg', 'png', 'svg', 'jpeg', 'webp', 'bmp'];
  const [index, setIndex] = React.useState(0);

  const resolve_image = (name ) => {
    let img = new Image();
    img.src = get_img_path(`${name}.${img_extensions[index]}`);
    img.onerror = function() {
        setIndex(index + 1);
        return resolve_image(name);
    };

    return get_img_path(`${name}.${img_extensions[index]}`);
};

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
            {`${format_string(addon.name)} videos`}
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
              {
                [
                  'https://youtu.be/_a2FmrUngDU',
                  'https://www.youtube.com/watch?v=slrvvo2zlNs',
                  'https://youtu.be/2lLZhWjvLLw',
                  'https://youtu.be/_a2FmrUngDU',
                  'https://www.youtube.com/watch?v=slrvvo2zlNs',
                  'https://youtu.be/2lLZhWjvLLw'
                ].map((video, index) => {
                  return (
                    <video
                      playsInline="" 
                      autoPlay="autoplay"
                      loop={true}
                      muted={true}
                      poster={get_img_path(`products/addons/${addon.name}/v-poster-${(index + 1) - Math.floor(index / 3) * 3}.png`)}
                      height={380}
                      key={index}
                    >
                      <source
                        src={video}
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