import './App.css';
import Header from './store/mainpage/Header'
import Home from './store/mainpage/Home'
import Footer from './store/mainpage/Footer'
import SalesBanner from './store/mainpage/SalesBanner'
import ItemPage from './store/components/ItemPage';
import MyCart from './store/components/MyCart';
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
