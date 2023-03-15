import React, { Component } from "react";
import './ProductPage.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CauroselItem from "../CauroselItem/CauroselItem";

const SimilarProduct = (props) => {

    const setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
    
    return(
        <div className="mostviewed col-12 ">
            <div className="mostviewheading ">
            {props.product && (
              <h5>Similar Products</h5>
            )}
            </div>
            <Slider className="" {...setting}>
                {props.product && props.data.map((data,index)=>{
                  return(
                    <CauroselItem name={data.ProductName} image={data.medium_image} key={index} />
                  )
                })}
            </Slider>
        </div>
    )
}

// https://react-slick.neostack.com/docs/example/responsive/
export default SimilarProduct;