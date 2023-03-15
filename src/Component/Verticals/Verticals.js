import React from "react"
import './Vertical.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../Redux/Action/DrawerAction";



const Vertical = () => {
    const dispatch = useDispatch();
    const drawer = useSelector(state => state.drawer);
    return(
        
        <div className="verticals col-lg-12 col-md-12 col-sm-12 col-12 "> 
            <div className="row row-cols-lg-6 row-cols-md-6 row-cols-sm-3 row-cols-3 mx-0">
                <div className="figlayout mx-0 ">
                    <figure classname="figure col figtag" onClick={()=>dispatch(toggleDrawer(drawer))}>
                        <img width="388px" height="232px" src="https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/homepageimages/products_homepage.png" className="figure-img" alt="" />
                        <figcaption classname="figure-caption text-center" >Shop by Products</figcaption>
                    </figure>        
                </div>
                <div className="figlayout m-0">
            <figure classname="figure col " onClick={()=>dispatch(toggleDrawer(drawer, 1))}>
                <img width="388px" height="232px" src="https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/homepageimages/brand_homepage.jpg" className="figure-img rounded" alt="" />
                <figcaption className="figure-caption text-center" > Shop by Brands</figcaption>
            </figure>
            </div>
            <div className="figlayout m-0 ">
            <figure classname="figure col " onClick={()=>dispatch(toggleDrawer(drawer, 2))}>
                <img width="388px" height="232px" src="https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/homepageimages/favshop_homepage.jpg" className="figure-img rounded" alt="" />
                <figcaption classname="figure-caption text-center" >Shop at Stores </figcaption>
            </figure> 
            </div>
            <div className="figlayout m-0 ">
            <figure classname="figure col ">
            <Link to={"/newarrivals"}><img width="388px" height="232px" src="https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/homepageimages/products_homepage.jpg" className="figure-img rounded" alt="" />
                <figcaption className="figure-caption text-center" > New Arrivals</figcaption></Link>
            </figure>
            </div>
            <div className="figlayout m-0 ">
            <figure classname="figure col">
                <Link to={"/deals"}><img width="388px" height="232px" src="https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/homepageimages/brandhome.webp" className="figure-img rounded" alt="" />
                <figcaption className="figure-caption text-center" > Deals & Offers </figcaption></Link>
            </figure>
            </div>
            <div className="figlayout m-0 px-0">
            <figure classname="figure col ">
                <img width="388px" height="232px" src="https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/homepageimages/nearby_homepage.png" className="figure-img rounded" alt="" />
                <figcaption className="figure-caption text-center" > Nearby you </figcaption>
            </figure>
            </div>
            </div>
          </div>  
        
       
    )
}

export default Vertical;