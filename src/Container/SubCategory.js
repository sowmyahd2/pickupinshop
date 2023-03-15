import React, {useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../Component/Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductbySubcategory } from '../Redux/Action/ProductAction';
import Product from '../Component/Product/Product';
import SortbyFilter from '../Component/SortbyFilter/SortbyFilter';
import SubCategoryFilter from '../Component/FilterBySort/SubCategoryFilter';
import Sort from '../Component/FilterBySort/Sort';
import BrowseByShop from '../Component/BrowseBox/BrowseByShop';
import BrowseByBrands from '../Component/BrowseBox/BrowseByBrand';
import {getSubCategoryFilter} from '../Redux/Action/SubCategoryAction';
import FilterBox from '../Component/FilterBox/FilterBox';
import BoxFilter from '../Component/FilterBox/BoxFilter'
import { getBrowseBySubCategory } from '../Redux/Action/CategoryAction';
import { pathOr } from 'ramda';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import Type from '../Redux/Action/Types';
let offset = 0
const SubCategory = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    const [checkedValues, setCheckedValues] = React.useState([]);
    const [price, setPrice] = React.useState({min: 0, max:0})
    const [selectedPrice, setSelectedPrice] = React.useState({min: 0, max:0})
    let limit = 24
    useEffect(()=>{
        dispatch(getSubCategoryFilter(city, id))
        dispatch(getBrowseBySubCategory(city,id))
        getMinMaxPrice()
    },[])
    useEffect(() => {
        offset = 0;
        dispatch({
            type: Type.resetProducts
        })
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch(getProductbySubcategory(city, id,limit, offset, checkedValues.toString(), cost))
        
    }, [checkedValues, selectedPrice])
    const subCategoryProduct = useSelector(state => state.Product.productBySubcategory);
    const subCategoryFilter = useSelector(state => state.SubCategory.subCategoryFilter);
    const hasMore = useSelector(state => state.Product.productBySubcategoryHasMore)
    const keys = Object.keys(subCategoryFilter);
    const getMinMaxPrice = () => {
        let max = 0;
        let min =0;
        if(subCategoryProduct.length > 0) { 
            subCategoryProduct.forEach((data) => {
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
    const panelheading = () => { 
    let node = []
        keys.forEach((key) => {
        node.push(<BoxFilter title={key}>{panelbody(subCategoryFilter[key])}</BoxFilter>)
        })
        return node;
    };

    const panelbody = (item) => {
        return item.map((data,index)=>{
            return (<FilterBox name="brandIds" id={data.BrandId} onChange={(target) => { handleBrandsFilter(target) }} label={data.SpecificationValue || data.BrandName} checkbox />)
        }
        )}
        const fetcProductByPrice = (value) => {
            setSelectedPrice(value)
        }
        const BrowseBySubCategoryStore = useSelector(state => pathOr([],["store"], state.Category.browseBySubCategory));    
        const BrowseBySubCategorybrand = useSelector(state => pathOr([],["brand"], state.Category.browseBySubCategory));
     
        const fetchData = () => {
            offset = limit + offset;
            const cost = selectedPrice.min + "," + selectedPrice.max
            dispatch(getProductbySubcategory(city, id, limit, offset, checkedValues.toString(), cost))
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
    return(
        <>
        <Header />
        <div className="container-fluid">
            <div className="row">
                <div className="subcategorylayout col-lg-2 d-none d-lg-block">
                {panelheading()}
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
                <div className="subcategoryproducts col-lg-10 col-md-12 col-sm-12 col-12 ">
                    <div className="container-fluid my-2">
                        <div className="row">
                            <div className="browselayout col-12 ">
                                <BrowseByShop  stores={BrowseBySubCategoryStore}/>
                                <BrowseByBrands brands={BrowseBySubCategorybrand}/>
                            </div>
                        </div>
                    </div>                    
                    <div className="container-fluid d-block d-md-none my-2">
                        <div className="row">
                            <div className="filterbysortlayout col-12">
                                <SubCategoryFilter />
                                <Sort />
                            </div>
                        </div>
                    </div>
                    <div className="maincateproducts">
                        <div className="container-fluid ">
                            <div className="row">
                                <SortbyFilter />
                                <InfiniteScroll
                                        dataLength={subCategoryProduct.length}
                                        next={() => { fetchData() }}
                                        hasMore={hasMore}
                                        className={"row"}
                                        endMessage={
                                            <div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >That's all folks...</div>
                                        }
                                        loader={<div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >Loading Products...</div>}
                                    >
                                {
                                    subCategoryProduct.map((data,index)=>{
                                        return (<Product product={data}  />)
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

export default SubCategory;
