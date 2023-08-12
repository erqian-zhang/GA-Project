import { useSelector, useDispatch } from 'react-redux';
import {setProductAmount,removeFromCart,numberofDiffProductsinCart,productArrayinCart,totalPrice } from './store/myStoreReducerSlice'
import NativeSelect from '@mui/material/NativeSelect'
import { useEffect, useState } from "react"
import  './MyCart.css'

function MyCart (){

  const productlist = useSelector(productArrayinCart)
  const priceTotal = useSelector(totalPrice)
  const isemptycart = ( useSelector(numberofDiffProductsinCart) ===0)
  const dispatch = useDispatch()



  return(
 
    <div className='Cart_main'>

      <div className='Shopping__Cart__Main'>
          <h2>Shopping Cart</h2>
        <div className='Shopping__Cart__List'>
         { isemptycart
            ? <div>  <h2>CART IS EMPTY</h2>  </div>
            : <div >
                {productlist.map((ppp,index)=>
                  <div className='Shopping__Cart__List_item' key = {index}>
                    <div className='SC_IAMGE'> 
                    <img src={ppp.product.image} alt="" className='Shopping__Cart__iamge'/>
                    </div>
                    <div className='SC_descriprion'>
                    <p>{ppp.product.title}</p>
                    <p>Price: ${ppp.product.price}</p> 
                   
                    <p>{ppp.productamount} in the Cart</p>
                    {<NativeSelect defaultValue={ppp.productamount}

                      onChange={(e)=>dispatch(setProductAmount([ppp.product,Number(e.target.value)]))}
                    >
                      <option value={1} >1</option>
                      <option value={2} >2</option>
                      <option value={3} >3</option>
                      <option value={4} >4</option>
                      <option value={5} >5</option>
                      <option value={6} >6</option>          
                      <option value={7} >7</option>
                      <option value={8} >8</option>
                      <option value={9} >9</option>
                      <option value={10} >10</option>
                    </NativeSelect>}
                    <button>SET AMOUNT</button>
                    <button onClick={()=>dispatch(removeFromCart(ppp.product.id))}>Remove From List</button>

                    </div>
              </div>
            )
            
          } </div>
        }
          
        </div>
      </div>

      <div className='Check_out'>
          <h2>total amount:</h2>
          <h3>${ Intl.NumberFormat('en-US').format(priceTotal)}</h3>
          <button>click to pay </button>
      </div>
    </div>
  )
}

export default MyCart