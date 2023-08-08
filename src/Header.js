import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShopIcon from '@mui/icons-material/Shop';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Header (){

  return(
    <div className="Header">
      <Link to = '/' >
      <div className="header__logo">
        <ShopIcon className='header__logoImage' fontSize='large' />
        <h2 className='header__logoTitle'>Online Store</h2>
      </div>
      </Link>

      <div className="header__search">
        <input type="text" className='header__searchInput '/>
        <SearchIcon className='header__searchIcon '/>
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
          <Link to ='/MyCart'><ShoppingBasketIcon  /></Link>
          <span className='nav__itemLineTwo nav__basketCount'>0</span>  
        </div>

      </div>
      
    </div>
  )
}

export default Header