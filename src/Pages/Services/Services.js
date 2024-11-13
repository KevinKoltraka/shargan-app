import React from 'react';
import './services.css';
import Card from './Cards/Card'
import Ecom from './../../images/ecom.gif';
import Portfolio from './../../images/portfolio.gif'
import Hero from '../../components/HeroSection/Hero';
import ServiceImg from './../../images/home.png'
import Business from './../../images/Projections.gif'
import SEO from './../../images/seo.png'
import SocialMedia from './../../images/Business-Online.png'
import DigitalRocket from './../../images/digital-rocket.png'

const Services = () => {
  
  return (
    <>
      <Hero
      title="Building better businesses through Digital Presence"
      description="ZOLAHA is your go-to destination for high-quality digital services, including website development and digital products. Let us help you elevate your brand and achieve your online goals."
      btnText="Hire Us"
      heroImg={ServiceImg}
        heroAlt="Digital Success"
        urlLink={'https://api.whatsapp.com/send?phone=918736082960&text=Hiii%20!!%20%F0%9F%99%83'}

      
      />
      <div className='our-services'>
      <h2>Our Services</h2>
      </div>
    

      <div className="how-we-do-cards">
        <Card
          image={Ecom}
          altText="E-commerce Management"
          businessLabel="Website Development & Design"
          businessPara="Zolaha offers professional e-commerce website development services that are tailored to your business needs and designed to drive sales."
          businessTitle="E-commerce"
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          image={Portfolio}
          altText="E-commerce Management"
          businessLabel="Website Development & Design"
          businessTitle="Portfolio"
          businessPara="Showcase your story and achievements with our professional portfolio design and development services. Impress your audience and stand out from the competition."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          image={Business}
          altText="E-commerce Management"
          businessLabel="Website Development & Design"
          businessTitle="Business Website"
         businessPara="Discover how our business website development services can help you establish a powerful online presence and drive growth for your brand."
          btText1="Learn More"
          btText2="Contact us"
        /></div>
      
        <div className="how-we-do-cards">
        <Card
          image={SEO}
          altText="E-commerce Management"
          businessLabel="Website Development & Design"
          businessTitle="SEO & SEM"
          businessPara="Maximize your online visibility and drive targeted traffic to your website with our expert SEO and SEM services. See results in no time."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          image={SocialMedia}
          altText="E-commerce Management"
          businessLabel="Branding Management"
          businessTitle="Social Media Management"
          businessPara="Unlock the full potential of social media for your business with our comprehensive social media management services. Build your brand and engage with your audience today."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          image={DigitalRocket}
          altText="E-commerce Management"
          businessLabel="Leads Generation"
          businessTitle="Ads & Email Marketing"
          businessPara="Connect with your audience in a more personalized way with our targeted ads and email marketing services. Drive conversions and increase customer loyalty today."
          btText1="Learn More"
          btText2="Contact us"
        /></div>
     
        </>
  );
};

export default Services;
