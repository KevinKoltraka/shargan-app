import React from 'react'
import './social.css'
import {FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Social = () => {
  return (
      <div className='social-icons'>
      <Link className='social-links' to="https://facebook.com/zolahadotcom"  target="blank" rel="noopener noreferrer"> <FaFacebook/> </Link> 
      <Link className='social-links'to="https://instagram.com/zolahadotcom"  target="blank" rel="noopener noreferrer"> <FaInstagram/> </Link> 
      <Link className='social-links'to="https://www.linkedin.com/company/zolaha/"  target="blank" rel="noopener noreferrer"> <FaLinkedinIn/> </Link> 
      </div>
  )
}

export default Social