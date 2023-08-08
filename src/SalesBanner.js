import salesBanner from './resource/image/sales_banner.webp'
import './SalesBanner.css'

function SalesBanner(){

  return(
    <div className='sales__banner__gallary'>
        <div className="sales__banner">
          <img src= {salesBanner} alt="sales banner" className='sales__banneriamge' height={200} width={1500}/>
         
        </div>
    </div>
  )
}

export default SalesBanner