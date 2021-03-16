import React from "react";
import Img from "gatsby-image";

import { useImages } from '../contexts/images-provider';

const Hero = ({}:Hero) => {

    const images = useImages();

    // TODO faire un bloc bleu border-radius bottom-right et un bloc down #59b7b3, image en position absolute du hero

    const img_init_right = 3;

    // const size = useWindowSize();

    return (
        <div
            className="home-hero"
            // onMouseMove={(e) => {
            //     let _w = size.innerWidth/2;
            //     let _h = size.innerHeight/2;
            //     let _mouseX = e.clientX;
            //     let _mouseY = e.clientY;
            //     document.getElementById('hero-img').style.right = `calc(${(_mouseX - _w) * 0.005}% + ${img_init_right}vw`;
            //     document.getElementById('hero-img').style.bottom = `${(_mouseY - _h) * 0.005}%`;
            // }}
        >
            <div className="hero-left">
                <div className="top-text">
                    Les technologies innovantes
                    Inmode fournissent des résultats
                    supérieurs à vos patients.
                </div>
                {/* {size.width < 670 && <> */}
                <div className="border-5"></div>
                <div className="border-4"></div>
                <div className="border-3"></div>
                {/* </>} */}
                <div className="bottom-text">
                    Traitements esthétiques du visage,
                    corps, peau et santé et bien-être des femmes.
                </div>
            </div>
            <div className="hero-right">
                <img
                    id="hero-img"
                    src={images.getOne('heroHeader').childImageSharp.fluid.srcWebp}
                    srcSet={images.getOne('heroHeader').childImageSharp.fluid.srcSetWebp}
                    style={{"right": img_init_right + 'vw'}}
                    alt="hero-right-img"
                />
            </div>
            <div className="layout-2"></div>
            <div className="layout-3"></div>
            <div className="layout-4"></div>
            <div className="layout-5"></div>
            <div className="layout-6"></div>
        </div>
    );
};

interface Hero {

};

export default Hero;