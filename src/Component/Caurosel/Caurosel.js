import React, { Component } from "react";
import './Caurosel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CauroselItem from "../CauroselItem/CauroselItem";
import { Link } from 'react-router-dom';

const Caurosel = (props) => {

    const setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        lazyLoad: true,
        focusOnSelect: true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
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
        <div className="mostviewed col-12 px-0 my-2">
            <div className="mostviewheading px-0 mx-0">
            {props.product && (
              <h5>Most Viewed Products</h5>
            )}
            {props.store && (
              <h5>Most Viewed Stores</h5>
            )}
            {props.offer && (
              <h5>Offers At Brand Stores</h5> 
            )}
            </div>
            <Slider className="" {...setting}>
                {props.product && props.data.map((data,index)=>{
                  return(
                    <CauroselItem name={data.ProductName} image={data.medium_image} productId={data.ProductId} key={index} link={"/productdetails/"+data.ProductId} /> )
                  
                })}
                {props.store && props.data.map((data,index)=>{
                  return(
                    <CauroselItem name={data.ShopName} image={data.ShopLogo} Dealerid={data.DealerId} locality={data.Locality} key={index} link={"/shoppage/"+data.DealerId} />)
                  
                })}                
                {props.offer && props.data.map((data,index)=>{
                  return(
                    <CauroselItem name={data.DepartmentName} id={data.DepartmentId} image={data.Icons} key={index} link={"/deals/offers/"+data.DepartmentId} />)
                })}
            </Slider>
        </div>
    )
}

// https://react-slick.neostack.com/docs/example/responsive/
export default Caurosel;