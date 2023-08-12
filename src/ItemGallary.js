
import  './ItemGallary.css'
import fakeproduct from './fakeproduct'
import { useSelector, useDispatch } from 'react-redux';
import {selectedCategory } from './store/myStoreReducerSlice'
import { Link } from 'react-router-dom';


function ItemGallary (){


  const currCategory = useSelector(selectedCategory)

  

  return(
    <div className='total__gallary' key = 'gallary'>

      {fakeproduct.filter(aaa=>aaa.category === currCategory || currCategory ==='ALL').map((ppp,index)=>
      <Link to = {`/${ppp.category}/${ppp.id}`}>
      <div className='product__gallary' key = {index}>
    
      <img src={ppp.image} alt="" className='product__gallary__iamge'/>
      
      <p>{ppp.title}</p>
      <span>${ppp.price}</span> 
      <button  >More Details</button>

      </div>
      </Link>
      )}
       

    </div>
  )
}

export default ItemGallary