import React from "react"
import { LazyImage } from "react-lazy-images";
import './Banner.css'


const Banner = () => {
    const xs = require('../../images/hmeban_responsive_xnqxvd_c_scale,w_200.jpeg')
    const small = require('../../images/hmeban_responsive_xnqxvd_c_scale,w_410.jpeg')
    const medium = require('../../images/hmeban_responsive_xnqxvd_c_scale,w_586.jpeg')
    const large = require('../../images/hmeban_responsive_xnqxvd_c_scale,w_803.webp')
    const xlarge = require('../../images/hmeban_responsive_xnqxvd_c_scale,w_1120.jpeg')
    const master = require('../../images/hmeban_responsive_xnqxvd_c_scale,w_1130.jpeg')
    return (
        <>
        <div className="container-fluid homebannerimage"> 
            <div className="row">
            {/* <img
            sizes="(max-width: 1130px) 100vw, 1130px"
            src={xs} 
            srcSet={`${xs} 200w, ${small} 410w, ${medium} 586w, ${large} 803w, ${xlarge} 1120w, ${master} 1130w`}
            alt="" 
            className="img-fluid hmeban"
            width="1130px" height="320px" 
            as = {Image}
            
            /> */}
            <img src={require('../../../src/images/hmebanner1.webp')} className="img-fluid hmeban" width="100%" height="auto" />
            </div>
            </div>
        </>
    )
}

export default Banner;