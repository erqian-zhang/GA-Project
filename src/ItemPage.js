import { useParams } from "react-router-dom"
import  './ItemPage.css'
import fakeproduct from "./fakeproduct"
import NativeSelect from '@mui/material/NativeSelect'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import {addToCart,numberofDiffProductsinCart,productArrayinCart } from './store/myStoreReducerSlice'
import { useSelector, useDispatch } from 'react-redux';
import ItemCatalogue from "./ItemCatalogue"

function ItemPage (product){

  const currID = useParams()
  const [count, setCount] = useState(1)
  const thisitem = fakeproduct.find(ppp => ppp.id == currID.itemID)

  const dispatch = useDispatch()
  const productlist = useSelector(productArrayinCart)

  return(
    <div className="item__page__main">
      
      <div className="item__page__left">
      <ItemCatalogue />
      </div>

      <div className='item__page' >
        <div className="item__page__gallary">
          <img src={thisitem.image} alt="" className='item__page__gallary'/>
        </div>
        <div className="item__page__detail">
          <p>{thisitem.title}</p>
          <p></p>
          <p>{thisitem.description}</p>
          <p></p>
          <p>{thisitem.category}</p>
          <p>Rating: {thisitem.rating.rate}</p>
          <p>{thisitem.rating.count}</p>
        </div>

        <div className="item__page__addCart">
          <p>Price: ${thisitem.price}</p>
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
           </NativeSelect>}
          <p></p>
          <button onClick={()=>dispatch(addToCart([thisitem, Number(count)]))}>Add to Cart</button>
          
          <p></p>
          <p></p>
          <Link to = '/MyCart'>
          <button>Check Out Now</button>
          </Link>
        </div>
      </div>
    </div>
    
  )
}

export default ItemPage