
import './App.css';
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'
import SalesBanner from './SalesBanner'
import ItemPage from './ItemPage';
import MyCart from './MyCart';

import { BrowserRouter,Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <SalesBanner/>

        <Routes>
          <Route path ='/' element = {<Home />} />
          <Route path ='/:cate' element = {<Home />} /> 
            <Route path ='/:cate/:itemID' element = {<ItemPage />} />
          <Route path ='/myCart' element = {<MyCart />} />
        </Routes>
        
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
