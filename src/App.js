import './App.css';
import Header from './store/mainpage/Header'
import Home from './store/mainpage/Home'
import Footer from './store/mainpage/Footer'
import SalesBanner from './store/mainpage/SalesBanner'
import ItemPage from './store/components/ItemPage';
import MyCart from './store/components/MyCart';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import CategoryPage from './store/mainpage/CategoryPage';
import SearchPage from './store/mainpage/SearchPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <SalesBanner/>
        <Routes>
          <Route path ='/' element = {<Home />} />
          <Route path ='/search' element = {<SearchPage />} >
            <Route path = '/search/:searchTXT' element = {<SearchPage />} />
          </Route>
          <Route path ='/:cate' element = {<CategoryPage />} /> 
            <Route path ='/:cate/:itemID' element = {<ItemPage />} />
          <Route path ='/myCart' element = {<MyCart />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
