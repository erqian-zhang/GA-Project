import ItemPage from './ItemPage'
import  './ItemGallary.css'
import fakeproduct from './fakeproduct'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function ItemGallary (){

  return(
    <div className='total__gallary'>
      
          
      {fakeproduct.map((ppp,index)=>
      <div className='product__gallary' key = {index}>
      
      <img src={ppp.image} alt="" className='product__gallary__iamge'/>
      <p>{ppp.title}</p>
      <span>${ppp.price}</span> <button>Add to Cart</button>
      </div>
      )}
       

    </div>
  )
}

export default ItemGallary