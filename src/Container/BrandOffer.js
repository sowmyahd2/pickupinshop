import React, {useEffect} from 'react';
import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import OfferDepartments from '../Component/OfferDepartment/OfferDepartment';
import { useParams } from 'react-router-dom';
import { getBrandOffer } from '../Redux/Action/BrandAction';

const BrandOffer = () => {
    const {id}= useParams();
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    useEffect(()=>{
        dispatch(getBrandOffer(city,id))

    },[])
    const brandDeals = useSelector(state => state.Brand.brandOffer);
    return(
        <> 
        <Header />
        <div className="container-fluid my-2">
            <div className="row"> 
            {brandDeals.map((data,index)=>{
                  return(
                    <OfferDepartments name={data.BrandName} image={data.BrandLogo} key={index} link={"/brandofferdetail/"+id+"/"+data.BrandId} />
                  )
                })}
            </div>
        </div>
        </>
    )
}
export default BrandOffer;