
import ItemCatagory from '../components/ItemCatagory';
import ItemGallary from '../components/ItemGallary';
import { useParams } from 'react-router-dom';
import {setSearchProducts}  from '../components/myStoreReducerSlice'
import { useDispatch  } from 'react-redux';

function SearchPage(){

  const param = useParams()
  const dispatch = useDispatch()

  dispatch(setSearchProducts(param.searchTXT))

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

export default SearchPage