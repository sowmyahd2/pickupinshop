import React from "react";
import Slider from "react-slick";
import'./Homeslider.css';
import { depart } from '../../data/Departmetnt';


const Homeslider = () => {
  
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      

   
      
    return(
        <>
        <div className="container-fluid homebannerimage"> 
            <div className="row">
        
        <Slider {...settings} className="sliderlayout ">
        {depart.map((data, index) => {
                            return (
          <div key={data.DepartmentId} className="sliderbox">
            <figure className="figure imgfig">
              <img src={data.Icons} className="figure-img img-fluid rounded" alt="{data.DepartmentName}" />
              <figcaption className="figure-caption">{data.DepartmentName}</figcaption>
            </figure>
          </div> )
                        })}
          
       
        </Slider>
        
        </div>
        </div>
        </>
    )
} 

export default Homeslider;