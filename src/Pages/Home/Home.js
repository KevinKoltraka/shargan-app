import React from 'react';
import AboutZolaha from '../../components/AboutZolaha/AboutZolaha';
import SharganImage from './../../images/shargan2.jpg';
import Hero from '../../components/HeroSection/Hero';
import Partner from '../../components/Partners/Partner';
import AboutImage from './../../images/mission.jpg';
import Ecom from './../../images/ecom.png';
import Business from './../../images/Projections.png';
import Portfolio from './../../images/portfolio.png';
import Happy from './../../images/HappyNew.png';
import Card from './../Services/Cards/Card';
import './home.css';
import { FiAward, FiBox } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <>
      <Hero
        title="Shargan Consulting Agency"
        description="Shargan Consulting drives business success through tailored HR solutions, recruitment, and leadership development. With expertise in talent growth and custom training, we empower organizations to excel in a competitive market."
        btnText="Start a conversation"
        heroImg={SharganImage} // Main Hero Image
        heroAlt="Shargan Consulting Image"
        staticImage={'./../../images/animationReplacement.jpg'} // New static image
        classNameLottie={'lottie_css'}
        urlLink={'https://api.whatsapp.com/send?phone=355699305604'}
      />

      <div className='our-partners-homepage'>
        <h2>Our Associates</h2>
        <Partner className="our-partners-homepage-brands"/>
      </div>
    
      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={AboutImage}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Our Mission"
        CompanyScene="Empowering Organizations with Tailored Consulting Solutions for Sustainable Growth and Talent Development."
        CompanyDetails="To provide customized and innovative consulting solutions that help our clients improve performance, develop their human capacities and achieve long-term sustainability. We aim to be strategic partners in the transformation process of organizations, offering specialized expertise in human resource management, training, mentoring and recruitment, always adapting to the specific needs of each client."
        Checklist1="Recruitment Marketing Services"
        Checklist2="Talent Acquisition Solutions"
        Checklist3="Employer Branding Agency"
        Checklist4="Digital Recruitment Marketing"
        Checklist5="HR Marketing Strategies"
        Checklist6="Candidate Engagement Services"
        AboutBtnText="Know More"
        FaIcon={<FiBox />}
        AboutBtnTextClassName={'button-header btn-about-zolaha'}
        urlAboutLink="/about"
      />

      <div className="home-our-services-section">
        <div className="home-our-services">
          <h2>Some of our Services</h2>
          <Link to='/services'><button className='home-more-services thisisdarkmode'>View More</button></Link>
        </div>
        <div className='home-our-services-cards'>
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
          />
        </div>
      </div>

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section who-we-are-section"}
        AboutImg={Happy}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Loved by Everyone"
        CompanyScene="Discover Why clients choose Zolaha for their Online Success - Trusted Digital Marketing Agency"
        CompanyDetails="We understand that the digital world can be intimidating, but we're here to help you tackle any challenge. We offer a comprehensive range of digital marketing and web development services that are tailored to meet your unique needs and budget."
        FaIcon={<FiAward />}
        Checklist1="Competitive pricing"
        Checklist2="Proven track record"
        Checklist3="Communication and transparency"
        Checklist4="Experienced team"
        Checklist5="Tailored solutions"
        Checklist6="Comprehensive range of services"
        AboutBtnText="Know More"
        AboutBtnTextClassName={'button-header btn-about-zolaha'}
        urlAboutLink="/about"
      />
    </>
  );
};

export default Home;
