import './Home.css'
import ItemCatagory from '../components/ItemCatagory'
import ItemGallary from '../components/ItemGallary';

function Home(){

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

export default Home