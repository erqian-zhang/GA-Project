import { useSelector, useDispatch } from 'react-redux';
import {setProductAmount,removeFromCart,numberofDiffProductsinCart,
  setCurrentExpand,productArrayinCart,totalPrice,totalNumberOfProducts } from './myStoreReducerSlice'
import NativeSelect from '@mui/material/NativeSelect'
import  './MyCart.css'
import { Link } from 'react-router-dom';

function MyCart (){

  const productlist = useSelector(productArrayinCart)
  const priceTotal = useSelector(totalPrice)
  const itemTotal = useSelector(totalNumberOfProducts)
  const isemptycart = ( useSelector(numberofDiffProductsinCart) ===0)
  const dispatch = useDispatch()

  return(
 
    <div className='Shopping__Cart'>
      <div  className='Shopping__Cart_title'>
        <h1>Shopping Cart</h1>
      </div>

      <div className="Shopping__Cart_Body">
        <div className='Shopping__Cart__Main'>
          <div className='Shopping__Cart__List'>
            {isemptycart
              ? 
                <div className='Cart__Empty'><h2>Your Shopping Cart is empty.</h2></div>
              :
                <div >
                  {productlist.map((ppp,index)=>
                    <div className='Shopping__Cart__List_item' key = {index}>
                      <div className='SC_IAMGE'> 
                        <img src={ppp.product.thumbnail} alt="" className='Shopping__Cart__iamge'/>
                      </div>

                      <div className='SC_descriprion'>
                        <h2>{ppp.product.title}</h2>
                        <h3>Price: ${ppp.product.price}</h3> 
                        <h4>You have {ppp.productamount} in the Shopping Cart</h4>
                        <span>Change Quantity to: &nbsp;&nbsp;</span>
                        {<NativeSelect value={ppp.productamount}
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
                          <option value={11} >11</option>
                          <option value={12} >12</option>
                          <option value={13} >13</option>
                          <option value={14} >14</option>
                          <option value={15} >15</option>
                          <option value={16} >16</option>
                          <option value={17} >17</option>
                          <option value={18} >18</option>
                          <option value={19} >19</option>
                          <option value={20} >20</option>
                        </NativeSelect>}
                        <span> &nbsp;Or &nbsp;&nbsp;</span>
                        
                        <button onClick={()=>dispatch(removeFromCart(ppp.product.id))}>Remove Product</button>
                      </div>
                    </div>)
                  }
                </div>
            }
          </div>

          <div className='Shopping__Cart_footer'>
            <div className='Shopping__Cart_footer_button'>
              <Link to = '/'>
              <button className='Shopping__Cart_footer_button2' onClick={()=>dispatch(setCurrentExpand([]))}>Continues Shopping</button>
              </Link>
            </div>

            <div className='Shopping__Cart_footer_total'>
              <h2>Subtotal: {itemTotal} items</h2>
            </div>
          </div>
        </div>

        <div className='Check_out'>
          <div className='Check_out_title'>
            <h2>Cart Summary:</h2>
          </div>

          <div className='check_out_bottom'>
            <div className='check_out_bottom_left'>
            <p>Total Items: </p>
            <p>Total Amount: </p>
            </div>
            <div className='check_out_bottom_right'>
            <p>{itemTotal}</p>
            <p>${Intl.NumberFormat('en-US').format(priceTotal)}</p>
            </div>
          </div>

          <div className='check_out_total'>
            <br />
            <button className='check_out_button'>Proceed to Check Out </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCart
