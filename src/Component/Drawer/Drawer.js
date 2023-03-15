import React, { useState, useEffect } from 'react'
import './Drawer.css'
import Sidebar from "react-sidebar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector, useDispatch } from 'react-redux';
import { getBrand } from '../../Redux/Action/BrandAction';
import { getStore } from '../../Redux/Action/StoreAction';
import { Link } from 'react-router-dom';
import { toggleDrawer } from '../../Redux/Action/DrawerAction';


const Drawer = (props) => {
    const departments = useSelector(state=>state.Department.department)
    const brands = useSelector(state=>state.Brand.brand)
    const stores = useSelector(state=>state.Store.store)
    const drawer = useSelector(state => state.drawer);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getBrand());
      dispatch(getStore());

    },[])
 
    return(
        <>
      
        <Sidebar
        rootClassName = "rootsidebar"
        overlayClassName="overlaysidebar"   
        
        sidebar={
            <Tabs className="sidebartabs" selectedIndex={drawer.activeTab} onSelect={index => dispatch(toggleDrawer(true, index))}>
            <TabList>
                <div className="welcome"><h6>Hi! Manjunath</h6><p>+91 9480134391</p></div>
              <Tab>Category</Tab>
              <Tab>Brand</Tab>
              <Tab>Store</Tab>
            </TabList>
         
            <TabPanel>
            <ul className="list-group categorylist">
              {departments.map((department,index)=>{
                  return(
                    <Link to ={"/department/category/"+department.DepartmentId}><li className="list-group-item" key={index}>{department.DepartmentName}</li></Link>
                  )
              })}
              </ul>
            </TabPanel>
            <TabPanel>
            <form className="formdrawer">
                <div class="form-group selectdrawer">
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Select Department</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div class="form-group searchdrawer">
                    <input type="text" class="form-control "  placeholder="Search By Brand" />
                </div>
            </form>
            <ul className="list-group brandlist">
                {brands.map((brand,index)=>{
                    return(
                        <Link to ={"/brandcategory/"+brand.BrandId}><li className="list-group-item" key={index}>{brand.BrandName}</li></Link>
                    )
                })}
            </ul>             
            </TabPanel>
            <TabPanel>
            <form className="formdrawer">
                <div class="form-group selectdrawer">
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Select Department</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div class="form-group searchdrawer">
                    <input type="text" class="form-control "  placeholder="Search By Store" />
                </div>
            </form>
            <ul className="list-group storelist">
                {stores.map((store,index) =>{
                    return(
                        <Link to ={"/shoppage/"+store.DealerId}><li className="list-group-item" key={index}>{store.ShopName}</li></Link>
                    )
                })}
            </ul>
              
            </TabPanel>
          </Tabs>

        }
        open={props.sidebarOpen}
            onSetOpen={(isOpen)=>{
                props.setSidebarOpen(isOpen)
            }}
            styles={{ sidebar: { background: "white" } }}
        />

        
        </>
    )

}
export default Drawer;