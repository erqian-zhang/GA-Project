import  './ItemGallary.css'
import { useSelector, } from 'react-redux';
import {selectedCategory,getsearchResults } from './myStoreReducerSlice'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemGallary (){
  const currCategory = useSelector(selectedCategory)
  const currSearch = useSelector(getsearchResults)
  const [currList, setList] = useState([])

  const loadList =()=>{
  //  console.log(currSearch)
    if(currSearch !== ''){
      fetch(`https://dummyjson.com/product/search?q=${currSearch}`).then(aaa=>aaa.json()).then(aaa=>setList(aaa))
      console.log(currList)
    } else

    if (currCategory === 'ALL'){
      fetch(`https://dummyjson.com/products`).then(aaa=>aaa.json()).then(aaa=>setList(aaa))
    } else {
    fetch(`https://dummyjson.com/products/category/${currCategory}`)
    .then(aaa=>aaa.json()).then(aaa=>setList(aaa))
    }
  }

  useEffect(()=>loadList(),[currCategory,currSearch])

  if (currList.products === undefined ||currList.products.length===0){
    return(
      <div>
        <br />
        <h1>No Products Found for "{currSearch}"</h1>
        <br />
        <h3>Please Search Again</h3>
      </div>
    )
  } else {
    return(
      <div className='total__gallary' key = 'gallary'>

        {currList.products.filter(aaa=>aaa.category === currCategory || currCategory ==='ALL').map((ppp,index)=>
          <Link to = {`/${ppp.category}/${ppp.id}`} key = {index}>
          <div className='product__gallary' key = {index}>
            <img src={ppp.thumbnail} alt="" className='product__gallary__iamge'/>
            <p>{ppp.title}</p>
            <div className='product__gallary__rating'>
              <i data-star={ppp.rating}></i>
              <span>${ppp.price}</span> 
            </div>
          </div>
          </Link>
        )}
       
      </div>
    ) 
  }
}

export default ItemGallary