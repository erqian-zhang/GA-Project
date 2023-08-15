import  './ItemCatagory.css'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setCategory,setSearchProducts,getCurrentExpand,setCurrentExpand } from './myStoreReducerSlice'
import { useNavigate } from "react-router-dom";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';




function ItemCatagory (){

  const dispatch = useDispatch()
  const nav = useNavigate()
  const currExp = useSelector(getCurrentExpand)

  const setID =(id)=>{
    if (isNaN(id)){
      nav(`/${id}`)
      dispatch(setCategory(id))
      dispatch(setSearchProducts(''))
    }else {
      dispatch(setCurrentExpand([id]))
    }
  }

  const showALL =()=>{
    nav('/ALL')
    dispatch(setCategory('ALL'))
    dispatch(setCurrentExpand('clear'))
  }

  return(
    <div className='Item__Catagory'>
    
      <h2 >All Categories</h2>
      <span className='show__all' onClick={showALL}>Show All Products</span>

      <TreeView className='tree__view'
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        onNodeSelect={(e,value)=>{setID(value)}}
        expanded={currExp}
      >
        <br />
        <TreeItem nodeId="1"  label="Home & Garden" >
          <TreeItem nodeId="furniture" label="Furniture" />
          <TreeItem nodeId="lighting" label="Lighting" />
          <TreeItem nodeId="home-decoration" label="Home-decoration" />
        </TreeItem>
        
        <TreeItem nodeId="2" label="Clothing & Accessories">
          <TreeItem nodeId="3" label="Men's">
            <TreeItem nodeId="mens-shirts" label="Mens-shirts" />
            <TreeItem nodeId="mens-shoes" label="Mens-shoes" />
          </TreeItem>

          <TreeItem nodeId="4" label="Women's">
            <TreeItem nodeId="tops" label="Womens-tops" />
            <TreeItem nodeId="womens-dresses" label="Womens-dresses" />
            <TreeItem nodeId="womens-shoes" label="Womens-shoes" />
            <TreeItem nodeId="womens-bags" label="Womens-bags" />
          </TreeItem>
          <TreeItem nodeId="5" label="Accessories">
            <TreeItem nodeId="sunglasses" label="Sunglasses" />
          </TreeItem>
        </TreeItem>

        <TreeItem nodeId="6" label="Electronics">
          <TreeItem nodeId="smartphones" label="Smartphones" />
          <TreeItem nodeId="laptops" label="Laptops" />
        </TreeItem>

        <TreeItem nodeId="7" label="Jewellery & Watches">
          <TreeItem nodeId="mens-watches" label="Mens Watches" />
          <TreeItem nodeId="womens-watches" label="Womens Watches" />
          <TreeItem nodeId="womens-jewellery" label="Jewellery" />
        </TreeItem>

        <TreeItem nodeId="8" label="Health & Beauty">
          <TreeItem nodeId="groceries" label="Groceries" />
          <TreeItem nodeId="fragrances" label="Fragrances" />
          <TreeItem nodeId="skincare" label="Skincare" />
        </TreeItem>

        <TreeItem nodeId="9" label="Motors">
          <TreeItem nodeId="automotive" label="Automotive" />
          <TreeItem nodeId="motorcycle" label="Motorcycle" />
        </TreeItem>
      </TreeView>
    </div>
  )
}

export default ItemCatagory