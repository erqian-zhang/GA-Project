import  './ItemPage.css'
import { useParams } from "react-router-dom"
import NativeSelect from '@mui/material/NativeSelect'
import {  useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import {addToCart} from './myStoreReducerSlice'
import { useDispatch } from 'react-redux';
import ItemCatagory from "./ItemCatagory"

function ItemPage (){

  const currID = useParams()
  const [count, setCount] = useState(1)
  const [thisitem, setProduct] = useState([])
  const dispatch = useDispatch()

  const loadProduct =()=>{
    fetch(`https://dummyjson.com/products/${currID.itemID}`).then(aaa=>aaa.json()).then(aaa=>setProduct(aaa))
  }

  useEffect(()=>loadProduct(),[currID])

  return(
    <div className="item__page__main">
      <div className="item__page__left">
      <ItemCatagory />
      </div>

      <div className='item__page' >
        <div className="item__page__gallary">
          <img src={thisitem.thumbnail} alt="" className='item__page__photo'/>
        </div>

        <div className="item__page__detail">
          <h1>{thisitem.title}</h1>
          <br />
          <h2>Price: ${Intl.NumberFormat('en-US').format(thisitem.price)}</h2>
          <span>{thisitem.rating} </span><i data-star={thisitem.rating}></i>
          <span> &nbsp; {thisitem.stock} ratings</span>
          <p>Brand: {thisitem.brand}</p>
          <br />
          <h3>About this item </h3>
          <p>{thisitem.description}</p>
        </div>

        <div className="item__page__addCart">
          <h2>In Stock</h2>
          <br />
          <h3>Total Price: ${Intl.NumberFormat('en-US').format(thisitem.price*count)}</h3>
          <span>Quantity: </span>
          {<NativeSelect defaultValue={1}
            inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
            }}
            onChange={(e)=>setCount(e.target.value)}
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
          <br></br>
          <button className="add_cart_button1" onClick={()=>dispatch(addToCart([thisitem, Number(count)]))}>Add to Cart</button>
          <br />

          <Link to = '/MyCart'>
          <button className="check_out_button2">Check Out Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemPage