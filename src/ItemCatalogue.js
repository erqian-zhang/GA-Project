import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function ItemCatalogue (){

  const handleChange=(value)=>{
    console.log(value)
  }

  return(
    <div>
      <p>ItemCatalogue</p>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Catalogue</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="electronics"
        name="radio-buttons-group"
        onChange={(e,value)=>handleChange(value)}
      >
       <FormControlLabel value="1" control={<Radio />} label="electronics" />
       <FormControlLabel value="2" control={<Radio />} label="jewelery" />
       <FormControlLabel value="3" control={<Radio />} label="men's clothing" />
       <FormControlLabel value="4" control={<Radio />} label="women's clothing" />
      </RadioGroup>
      </FormControl>
    </div>
  )
}

export default ItemCatalogue