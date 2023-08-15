import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShopIcon from '@mui/icons-material/Shop';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch  } from 'react-redux';
import {totalNumberOfProducts,setCategory,setSearchProducts,setCurrentExpand } from '../components/myStoreReducerSlice'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom'

function Header (){

  const mycounter = useSelector(totalNumberOfProducts)
  const dispatch = useDispatch()
  const [currText, setText] = useState('')
  let nav = useNavigate()

  return(
    <div className="Header">
      <Link to = '/' onClick={()=>
        { dispatch(setCategory('ALL'));
          dispatch(setCurrentExpand('clear'));
          dispatch(setSearchProducts(''));
        }

        }>
      <div className="header__logo">
        <ShopIcon className='header__logoImage' fontSize='large' 
        />
        <h2 className='header__logoTitle'>Online Store</h2>
      </div>
      </Link>

      <div className="header__search">
        <input type="text" className='header__searchInput ' value={currText} onChange={(e)=>setText(e.target.value)}/>
        <SearchIcon className='header__searchIcon ' onClick={()=>
        { dispatch(setSearchProducts(currText));
          setText('');
          dispatch(setCategory('ALL'));
          dispatch(setCurrentExpand('clear'));
          nav(`/search/${currText}`)
        }}/>
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className='nav__itemLineOne'>Hello Guest</span>  
          <span className='nav__itemLineTwo'>Sign In</span>  
        </div>

        <Link to = '/myCart'>
        <div className="nav__item">
          <span className='nav__itemLineOne'>Your</span>
          <span className='nav__itemLineTwo'>Shop</span>
        </div>
        </Link>

        <div className="nav__itemBasket">
          <Link to ='/MyCart'><ShoppingBasketIcon /></Link>
          <span className='nav__itemLineTwo nav__basketCount'>{mycounter}</span>  
        </div>

      </div>
    </div>
  )
}

export default Header