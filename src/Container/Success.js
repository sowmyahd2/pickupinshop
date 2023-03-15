import React, { useEffect, Suspense, lazy} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMostViewProduct } from '../Redux/Action/ProductAction';
import { getMostViewStore } from '../Redux/Action/StoreAction';
import './styles/Home.css'
const Header = lazy(() => import('../Component/Header/Header'));
const Footer = lazy(() => import('../Component/Footer/Footer'));

const Success = () => {
    
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    useEffect(() => {
        dispatch(getMostViewProduct(city))
        dispatch(getMostViewStore(city))

    }, [city])

    return ( 
        <Suspense fallback={<div />}>
            <Header />
            <div className="container-fluid mt-2">
                <Suspense>
                    <h3>Order Placed Successfully</h3>
                </Suspense>
            </div>

            <Footer />
        </Suspense>
        
    )
}

export default Success;


// https://squoosh.app/