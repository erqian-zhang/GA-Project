import {  useSelector } from "react-redux/es/hooks/useSelector"
import {selectedCategory } from './store/myStoreReducerSlice' 
import { Link } from 'react-router-dom';

function NavBar (){
  const currPath = useSelector(selectedCategory)

  return(
    <div>
      <Link to ='/'>Home>> </Link><Link>{currPath} </Link>
      


    </div>
  )
}

export default NavBar