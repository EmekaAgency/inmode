import React from "react"

const ProductBanner = ({ datas }) => {

    // TODO récupérer images et vidéos pour chaque produit
    return (
        <div className="product-banner transition">
            <div className="top-transition"></div>
            <div className="product-banner-media">
                <video
                    playsInline="" 
                    autoPlay="autoplay"
                    loop={true}
                    muted={true}
                    poster={datas.left_img.childImageSharp.fluid.srcWebp}
                    height={380}
                >
                    <source
                        src={datas.left_video}
                        type="video/mp4"
                    />
                    <track src="" kind="subtitles" srcLang="en" label="English"></track>
                </video>
            </div>
            <div className="product-banner-details">
                <img
                    className="product-banner-logo"
                    src={datas.right_img.childImageSharp.fluid.srcWebp}
                    alt="bodytite-logo-text"
                />
                {/* <div className="product-banner-short-descr">{product.short_descr}</div> */}
                <div className="product-banner-short-descr">
                    {datas.right_text}
                </div>
            </div>
            <div className="product-banner-mini">
                <img
                    src={datas.mini.childImageSharp.fluid.srcWebp}
                    alt="product-banner-mini"
                />
            </div>
            <div className="product-banner-mask"></div>
        </div>
    );
}

ProductBanner.defaultProps = {

}

ProductBanner.propTypes = {

}

export default ProductBanner;