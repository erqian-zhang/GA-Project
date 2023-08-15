
import { useParams } from 'react-router-dom';
import ItemCatagory from '../components/ItemCatagory'
import ItemGallary from '../components/ItemGallary';
import {selectedCategory,setCategory}  from '../components/myStoreReducerSlice'
import { useSelector,useDispatch  } from 'react-redux';


function CategoryPage(){

  const param = useParams()
  const dispatch = useDispatch()
  const currCate = useSelector(selectedCategory)
  
  if (currCate !== param.cate){
    dispatch(setCategory(param.cate))
  }

  return(
    <div>
      <div className="home">
        <div className='home__cateloge'>
          <ItemCatagory />
        </div>
        
        <div className='home__gallary'>
          <ItemGallary />
        </div>
      </div>
    </div>
  )
}

export default CategoryPage