import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
      
      <div className="footer-section">
        
        <div className="footer-section-box">
        <div className='mobile-div'>   
         <div className='mobile-footer-links'>
         <h3>Quick Links</h3>
         <div className='link-in-footer'>
         <Link to="/" className='link' >Home</Link>
         <Link to='/about' className='link' >About</Link>
         <Link to='/contact' className='link'>Contact</Link>
         <Link to='/services' className='link'>Services</Link>
         </div>
         
         </div>
        <div className='mobile-footer-links'>
         <h3>Service</h3>
         <div className='link-in-footer'>
         <li>Website Devlopement</li>
         <li>Content Marketing</li>
         <li>Advertisement</li>
         <li>Business Development</li>
         </div>
         </div>
         </div>  
         <div className='mobile-div'>   
        <div className="mobile-footer-links">
        <h3>Company</h3>
            <div className='link-in-footer'>
              
              <Link to='/terms'   className='link'>
                <li>Terms</li></Link>
              
              <Link to='/disclaimer'  className='link'>
                <li>Disclaimer</li></Link>
              
              <Link to='/privacy-policy'  className='link'>
                <li>Privacy Policy</li></Link>
              {/*<li>Sales and Bond</li>*/}
         </div>
         </div>
         <div className="mobile-footer-links"><h3>Social Links</h3>
            <div className='link-in-footer'>
              
         
              
         <Link to='https://www.instagram.com/zolahadotcom/'  target='_blank' className='link'>
                <li>Instagram</li></Link>
         <Link to='https://www.facebook.com/zolahadotcom/'  target='_blank' className='link'>
                <li>Facebook</li></Link>
                <Link to='https://www.linkedin.com/company/zolaha'  target='_blank' className='link'>
                <li>LinkedIn</li></Link>
              
        
         </div>
         </div> 
         </div>
         </div>
        <div className="subscribe-newsletter">
        <h3>Subscribe our Newsletter</h3>
        <input type="email" id='email' name='e-mail' placeholder='Enter Your E-mail Id' />
        <button type='submit' >Subscribe</button>
          </div>
          
          
          <div className="copyright-section">
          <hr/>
          <p> Copyright - ZOLAHA 2023 - All Rights Reserved </p>
          </div>

         </div>
      
    )
}

export default Footer