import  './Footer.css'
import { Link } from 'react-router-dom';


function Footer (){

  const toTop =()=>{
    document.documentElement.scrollTop = 0;
  }

  return(
    <div className="footer">

      <div className="footer__row_one" onClick={toTop}> 
        <span className="footer__back_to_top">Back to top</span>
      </div>
      
      <div className="footer__row_two">
        <Link className='footer__link' >About Us</Link>
        <Link className='footer__link'>Contact Us</Link>
        <Link className='footer__link'>Help Center</Link>
        <Link className='footer__link'>Community</Link>
        <Link className='footer__link'>Policy and Privacy</Link>
      </div>
      
    </div>
  )
}

export default Footer