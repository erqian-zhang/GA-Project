import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector, useDispatch } from 'react-redux';
 import {selectedCategory,setCategory } from './store/myStoreReducerSlice'
 import { useNavigate } from "react-router-dom";

function ItemCatalogue (){

  const cccategory = useSelector(selectedCategory)
  const dispatch = useDispatch()
  const nav = useNavigate()



  return(
    <div>
      <p>Shop by Category</p>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue= {cccategory}
        name="radio-buttons-group"
        onChange={(e,value)=>
          { nav(`/${value}`);
            dispatch(setCategory(value));
            
          }}
      >
       <FormControlLabel value="ALL" control={<Radio />} label="ALL" />
       <FormControlLabel value="electronics" control={<Radio />} label="electronics" />
       <FormControlLabel value="jewelery" control={<Radio />} label="jewelery" />
       <FormControlLabel value="men's clothing" control={<Radio />} label="men's clothing" />
       <FormControlLabel value="women's clothing" control={<Radio />} label="women's clothing" />
      </RadioGroup>
      </FormControl>
    </div>
  )
}

export default ItemCatalogue