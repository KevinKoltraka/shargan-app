import React from 'react'
import Hero from '../../components/HeroSection/Hero'
import './about.css'
import uiDesign from './../../images/UI-Design.png'
import OfficeTrans from './../../images/office.png'
import AboutZolaha from '../../components/AboutZolaha/AboutZolaha'
import { FiCheck } from 'react-icons/fi'
const About = () => {
  return (
     <div id="About">
    <Hero
      title="Who We are"
      description="Welcome to Zolaha, we are specialize in providing top-notch digital marketing and development services that can help you grow your business.
       Whether you need a new website or mobile app, or you want to optimize your existing online presence, we have the expertise and experience to help." 
      btnText="Hire Us"
      heroImg={uiDesign}
        heroAlt="Digital Success"
        urlLink={'https://api.whatsapp.com/send?phone=918736082960&text=Hiii%20!!%20%F0%9F%99%83'}
      />
    
      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={OfficeTrans}
        AboutZolahaImage="about-zolaha-img"
      CompanyName="About Zolaha"
        CompanyScene="We Provide Web Solutions in Affordable Prices"
        CompanyDetails={"At ZOLAHA, we believe that everyone deserves to have a high-quality, professional website that accurately reflects their brand and helps them achieve their goals. That's why we offer web solutions that are not only affordable but also top-notch in terms of quality and functionality. We understand that your website is a reflection of your business and your values, so we work closely with our clients to create websites that are both visually stunning and highly functional. Our team is passionate about what we do, and we take pride in helping our clients succeed online. Whether you need a simple website or a complex web application, we are here to help you every step of the way."}
        FaIcon={<FiCheck/>}
      Checklist1="Transparency and honesty"
      Checklist2="Respect and professionalism"
      Checklist3="Quality and excellence"
      Checklist4="Collaboration and teamwork"
      Checklist5="Accountability and responsibility"
      Checklist6="Ethics and integrity"
      AboutBtnText="We are Made in BHARAT for BHARAT"
        AboutBtnTextClassName="Button-Bharat"
        urlAboutLink={'https://api.whatsapp.com/send?phone=918736082960&text=Hiii%20!!%20%F0%9F%99%83'}
        
    />
  
    
    </div>
  )
}

export default About