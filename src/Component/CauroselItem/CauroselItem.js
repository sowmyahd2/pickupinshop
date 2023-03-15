import React from 'react';
import './CauroselItem.css'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const CauroselItem = (props) => {
    return(

        <div className="productlayout m-1">
            <Link to={props.link}> 
            <div className="productimage">
                <LazyLoadImage width="auto" height="auto" effect='blur' className="imageproduct" src={props.image} alt="product"/>
            </div>
            <div className="producttext ">
                <p>{props.name}</p>
            </div> 
            <div className="locality"> 
                <p>{props.locality}</p>
            </div>                   
            </Link>
        </div>
    )
}

export default CauroselItem