import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector, useDispatch } from 'react-redux';
import {selectedCategory,setCategory,setSearchProducts } from './myStoreReducerSlice'
import { useNavigate } from "react-router-dom";
import  './ItemCatagory.css'

function ItemCatagory (){

  const cccategory = useSelector(selectedCategory)
  const dispatch = useDispatch()
  const nav = useNavigate()

  return(
    <div className='Item__Catagory'>
      <h2 >Shop by Category</h2>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value= {cccategory}
        name="radio-buttons-group"
        onChange={(e,value)=>
          { nav(`/${value}`);
            dispatch(setCategory(value));
            dispatch(setSearchProducts(''))
          }}
      >
       <FormControlLabel value="ALL" control={<Radio />} label="All Products" />
       <FormControlLabel value="smartphones" control={<Radio />} label="smartphones" />
       <FormControlLabel value="laptops" control={<Radio />} label="laptops" />
       <FormControlLabel value="fragrances" control={<Radio />} label="fragrances" />
       <FormControlLabel value="skincare" control={<Radio />} label="skincare" />
       <FormControlLabel value="groceries" control={<Radio />} label="groceries" />
       <FormControlLabel value="home-decoration" control={<Radio />} label="home-decoration" />
       <FormControlLabel value="furniture" control={<Radio />} label="furniture" />
       <FormControlLabel value="tops" control={<Radio />} label="tops" />
       <FormControlLabel value="womens-dresses" control={<Radio />} label="womens-dresses" />
       <FormControlLabel value="womens-shoes" control={<Radio />} label="womens-shoes" />
       <FormControlLabel value="mens-shirts" control={<Radio />} label="mens-shirts" />
       <FormControlLabel value="mens-shoes" control={<Radio />} label="mens-shoes" />
       <FormControlLabel value="mens-watches" control={<Radio />} label="mens-watches" />
       <FormControlLabel value="womens-watches" control={<Radio />} label="womens-watches" />
       <FormControlLabel value="womens-bags" control={<Radio />} label="womens-bags" />
       <FormControlLabel value="womens-jewellery" control={<Radio />} label="womens-jewellery" />
       <FormControlLabel value="sunglasses" control={<Radio />} label="sunglasses" />
       <FormControlLabel value="automotive" control={<Radio />} label="automotive" />
       <FormControlLabel value="motorcycle" control={<Radio />} label="motorcycle" />
       <FormControlLabel value="lighting" control={<Radio />} label="lighting" />
      </RadioGroup>
      </FormControl>
    </div>
  )
}

export default ItemCatagory