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
                    poster={datas.banner_left.publicURL}
                    height={380}
                >
                    <source
                        src="https://inmodemd.com/wp-content/uploads/2020/08/Morpheus8-Workstation-Video.mp4"
                        type="video/mp4"
                    />
                    <track src="" kind="subtitles" srcLang="en" label="English"></track>
                </video>
            </div>
            <div className="product-banner-details">
                <img
                    className="product-banner-logo"
                    src={datas.banner_right_title.publicURL}
                    alt="bodytite-logo-text"
                />
                {/* <div className="product-banner-short-descr">{product.short_descr}</div> */}
                <div className="product-banner-short-descr">
                    {datas.short_descr}
                </div>
            </div>
            <div className="product-banner-mini">
                <img
                    src={datas.banner_mini.publicURL}
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