import React from 'react'
import './Generic.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Logo = () => {
    return(
        <>
                <div className="logo col-6 d-block d-md-none">
        <Link to="/"><LazyLoadImage width="90px" height="33px" src={require('../../../src/images/logo.png')} alt="price,availability,store"/></Link>
        </div>
        <div className="logo col-2 d-none d-md-block">
            <Link to="/"><LazyLoadImage width="150px" height="63px" className="" src="https://www.cityonnet.com/images/cityonnet_logo.jpg" alt="Price,Offers,Availability,Location,Buy" /></Link>
        </div>
        
        </>
    )
}

export default Logo;