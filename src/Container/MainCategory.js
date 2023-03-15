import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './CommonContainer.css'
import Header from '../Component/Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByMaincategory } from '../Redux/Action/ProductAction';
import { getCategory, getBrowseByMainCategory } from '../Redux/Action/CategoryAction';
import Product from '../Component/Product/Product';
import SortbyFilter from '../Component/SortbyFilter/SortbyFilter';
import FilterBox from '../Component/FilterBox/FilterBox';
import { pathOr } from 'ramda';
import BoxFilter from '../Component/FilterBox/BoxFilter';
import BrowseByShop from '../Component/BrowseBox/BrowseByShop';
import BrowseByBrands from '../Component/BrowseBox/BrowseByBrand';
import MainCategoryFilter from '../Component/FilterBySort/MainCategoryFilter';
import Sort from '../Component/FilterBySort/Sort';
import Type from '../Redux/Action/Types';
import '../Component/Generic/Generic.css'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import '../Component/FilterBox/FilterBox.css';
let offset = 0
const Maincategory = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    const [checkedValues, setCheckedValues] = React.useState([]);
    const [price, setPrice] = React.useState({min: 0, max:0})
    const [selectedPrice, setSelectedPrice] = React.useState({min: 0, max:0})
    let limit = 24
    useEffect(() => {
        dispatch(getCategory(city, id))
        dispatch(getBrowseByMainCategory(city, id))
        getMinMaxPrice()
    }, [])
    useEffect(() => {
        offset = 0;
        dispatch({
            type: Type.resetProducts
        })
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch(getProductByMaincategory(city, id, limit, offset, checkedValues.toString(), cost))
    }, [checkedValues, selectedPrice])


    const MainCategoryProduct = useSelector(state => state.Product.productByMaincategory);
    const MainCategory = useSelector(state => pathOr([], ["category", "category"], state.Category));
    const brands = useSelector(state => pathOr([], ["category", "brands"], state.Category));
    const storeBrands = useSelector(state => pathOr([], ["category", "localBrands"], state.Category));
    const hasMore = useSelector(state => state.Product.productByMaincategoryHasMore)
    const BrowseByMainCategoryStore = useSelector(state => pathOr([], ["store"], state.Category.browseByMainCategory));
    const BrowseByMainCategorybrand = useSelector(state => pathOr([], ["brand"], state.Category.browseByMainCategory));

    const getMinMaxPrice = () => {
        let max = 0;
        let min =0;
        if(MainCategoryProduct.length > 0) { 
            MainCategoryProduct.forEach((data) => {
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

    const banner = () => {
        return "https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/maincategorybanner/" + id + ".jpg"
    }

    const fetchData = () => {
        offset = limit + offset;
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch(getProductByMaincategory(city, id, limit, offset, checkedValues.toString(), cost))
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


    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="subcategoryfilter col-2  d-none d-lg-block ">
                        <div className="subfilter  my-2">

                            {MainCategory.map((data, index) => {
                                return (
                                    <FilterBox label={data.SubCategoryName} link={'/subcategory/' + data.SubCategoryId} id={data.SubCategoryId} key={index} />
                                )
                            })}
                        </div>

                        <div className="">
                            <BoxFilter title="Brands">
                                {brands.map((brand, index) => {
                                    return (<FilterBox name="brandIds" onChange={(target) => { handleBrandsFilter(target) }} label={brand.BrandName} id={brand.BrandId} key={index} checkbox />)
                                })}
                            </BoxFilter>
                        </div>
                        <div className="">
                            <BoxFilter title="Store Brands">
                                {storeBrands.map((brand, index) => {
                                    return (<FilterBox name="brandIds" onChange={(target) => { handleBrandsFilter(target) }} label={brand.BrandName} id={brand.BrandId} key={index} checkbox />)
                                })}
                            </BoxFilter>
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
                    </div>
                    <div className="subcategorybanner col-lg-10 col-md-12 col-sm-12 col-12 my-2">
                        <img className="subcategoryimage" width="100%" src={banner()} />

                        <div className="container-fluid my-2">
                            <div className="row">
                                <div className="browselayout col-12 ">
                                    <BrowseByShop stores={BrowseByMainCategoryStore} />
                                    <BrowseByBrands brands={BrowseByMainCategorybrand} />
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid d-block d-md-none my-2">
                            <div className="row">
                                <div className="filterbysortlayout col-12">
                                    <MainCategoryFilter />
                                    <Sort />
                                </div>
                            </div>
                        </div>
                        <div className="subcateproducts">
                            <div className="container-fluid my-2">
                                <div className="row">

                                    <SortbyFilter />
                                    <InfiniteScroll
                                        dataLength={MainCategoryProduct.length}
                                        next={() => { fetchData() }}
                                        hasMore={hasMore}
                                        className={"row"}
                                        endMessage={
                                            <div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >That's all folks...</div>
                                        }
                                        loader={<div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >Loading Products...</div>}
                                    >
                                        {
                                            MainCategoryProduct.map((data, index) => {
                                                return (<Product product={data} />)
                                            })
                                        }
                                    </InfiniteScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Maincategory;
