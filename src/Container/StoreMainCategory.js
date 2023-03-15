import React,{useEffect} from 'react';
import './CommonContainer.css';
import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../Component/Product/Product';
import { pathOr } from 'ramda';
import FilterBox from '../Component/FilterBox/FilterBox';
import BoxFilter from '../Component/FilterBox/BoxFilter';
import { getStoreMainCategoryProducts } from '../Redux/Action/shopPageAction';
import StoreFront from '../Component/StoreFront/StoreFront';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import Type from '../Redux/Action/Types';
import InfiniteScroll from 'react-infinite-scroll-component';
let offset = 0
const StoreMainCategoryProducts = () => {
    const {DealerId,DepartmentId}= useParams();
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    const [price, setPrice] = React.useState({min: 0, max:0})
    const [checkedValues, setCheckedValues] = React.useState([]);
    const [selectedPrice, setSelectedPrice] = React.useState({min: 0, max:0})
    useEffect(() => {
        getMinMaxPrice()
    }, [])
    let limit = 24
    useEffect(()=>{
        offset = 0;
        dispatch({
            type: Type.resetProducts
        })
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch(getStoreMainCategoryProducts(city,DealerId,DepartmentId,limit, offset, checkedValues.toString(), cost))

    },[checkedValues, selectedPrice])
    const Detail = useSelector(state => pathOr({},['detail'], state.ShopPage.storeMainCategoryProducts))
    const storeMainCategoryProducts = useSelector(state => pathOr([],["products"], state.ShopPage.storeMainCategoryProducts));
    const storeMainCategoryFilter = useSelector(state => pathOr([],["filter","category"], state.ShopPage.storeMainCategoryProducts))
    const storeMainCategoryPrice = useSelector(state => pathOr([],["price"], state.ShopPage.storeMainCategoryProducts));
    const storeMainCategoryBrands = useSelector(state => pathOr([],["filter","brands"], state.ShopPage.storeMainCategoryProducts) );
    const hasMore = useSelector(state => state.ShopPage.storeMainCategoryProductsHasMore)
    const getMinMaxPrice = () => {
        let max = 0;
        let min =0;
        if(storeMainCategoryProducts.length > 0) { 
            storeMainCategoryProducts.forEach((data) => {
            if(parseInt(data.SellingPrice) > parseInt(max))
            {
                max = data.SellingPrice;
            }
            if(parseInt(data.SellingPrice) < parseInt(min))
            {
                min = data.SellingPrice;
            }
        })
        setPrice({min,max})
        setSelectedPrice({min,max})
        return{
            min, max
        }
    } else {
        setPrice({min,max})
        setSelectedPrice({min,max})
        return{
            min, max
        }
    }
    }
    const fetchData = () => {
        offset = limit + offset;
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch(getStoreMainCategoryProducts(city,DealerId,DepartmentId,limit, offset, checkedValues.toString(), cost))
    }

    const handleBrandsFilter = (target) => {
        if (target.checked) {
            setCheckedValues(checkedValues.concat(target.value))
        } else {
            const index = checkedValues.indexOf(target.value)
            if (index !== -1) {
                setCheckedValues(checkedValues.filter(item => item != target.value))
            }
        }

    }
    const fetcProductByPrice = (value) => {
        setSelectedPrice(value)
    }
    return(
        <>
        <Header />
        <StoreFront detail={Detail}/>
        <div className="container-fluid">
            <div className="row">
                <div className="brandmaincategory col-lg-2 d-none d-lg-block">    
                   <div className="">
                   {
                       storeMainCategoryFilter.map((data,index) => {
                           return(<FilterBox label = {data.SubCategoryName}  />)
                       }
                   )
                    } 
                    </div>
                    
                    <div className="">
                            <BoxFilter title="Price">
                                <div class="mx-4 p-4 filterbox">
                                <InputRange
                                    draggableTrack
                                    maxValue={price.max}
                                    minValue={price.min}
                                    onChange={value => fetcProductByPrice(value)}
                                    onChangeComplete={value => fetcProductByPrice(value)}
                                    value={selectedPrice} />
                                </div>
                            </BoxFilter>
                        </div>
                    <div className="">
                        <BoxFilter title="Brands">
                            {storeMainCategoryBrands.map((brand,index)=>{
                                return (<FilterBox onChange={(target) => { handleBrandsFilter(target) }} id={brand.BrandId}    label={brand.BrandName} key={index} checkbox  />)
                            })}
                        </BoxFilter>
                    </div>
                </div>
                <div className="brandmaincategorylayout col-lg-10 col-md-12 col-sm-12 col-12 my-2">
                    <div className="container-fluid">
                        <div className="row">
                        <InfiniteScroll
                                        dataLength={storeMainCategoryProducts.length}
                                        next={() => { fetchData() }}
                                        hasMore={hasMore}
                                        className={"row"}
                                        endMessage={
                                            <div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >That's all folks...</div>
                                        }
                                        loader={<div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >Loading Products...</div>}
                                    >
                            {
                                storeMainCategoryProducts.map((data,index)=>{
                                return (<Product product={data}  />)
                            })
                            }
                             </InfiniteScroll>
                        </div>
                    </div>
                </div>            
            </div>
        </div>

        </>
    )
}

export default StoreMainCategoryProducts;