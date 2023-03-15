import React, { useEffect, Suspense, lazy} from 'react'
//import Header from '../Component/Header/Header';
//import Category from '../Component/Category/Category';
//import Banner from '../Component/Banner/Banner';
import { useDispatch, useSelector } from 'react-redux';
import Homeslider from '../Component/Homeslider/Homeslider';
import { getMostViewProduct } from '../Redux/Action/ProductAction';
import { getMostViewStore } from '../Redux/Action/StoreAction';

import './styles/Home.css'
const Header = lazy(() => import('../Component/Header/Header'));
const Category = lazy(() => import('../Component/Category/Category'));
const Banner = lazy(() => import('../Component/Banner/Banner'));
const Vertical = lazy(() => import('../Component/Verticals/Verticals'));
const Caurosel = lazy(() => import('../Component/Caurosel/Caurosel'));
const Footer = lazy(() => import('../Component/Footer/Footer'));

const Home = () => {
    
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    useEffect(() => {
        dispatch(getMostViewProduct(city))
        dispatch(getMostViewStore(city))
     

    }, [city])
    const mostViewProduct = useSelector(state => state.Product.mostView);
    console.log(mostViewProduct);
    const mostViewStore = useSelector(state => state.Store.mostView);
    const offersBrand = useSelector(state => state.Department.department);
    console.log(offersBrand);
    return ( 
        <Suspense fallback={<div />}>
            <Header />
            <div className="container-fluid mt-2">
                <Suspense>
                    
                <div className="row">
                            {/* <Category /> */}
                       
                    
                   
                        <div className="bannerhome col-lg-12 col-md-12 col-sm-12 col-12">
                        
                            <Homeslider />
                            <Banner />
                            <Vertical />
                            <Caurosel data={mostViewProduct} product={true} />
                            <Caurosel data={mostViewStore} store={true} />
                            <Caurosel data={offersBrand} offer={true} />

                        </div>
                </div>
                </Suspense>
            </div>

            <Footer />
        </Suspense>
        
    )
}

export default Home;


// https://squoosh.app/