import './Home.css'
import ItemCatalogue from './ItemCatalogue'
import ItemGallary from './ItemGallary';

function Home(){

  return(
    <div>
      <div className="home">
       
        <div className='home__cateloge'>
          <ItemCatalogue  />
        </div>
        <div className='home__gallary'>
          <ItemGallary />
        </div>
      </div>
    </div>
  )
}

export default Home