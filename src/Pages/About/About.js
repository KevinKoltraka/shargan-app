import React from "react";
import Hero from "../../components/HeroSection/Hero";
import "./about.css";
import uiDesign from "./../../images/UI-Design.jpg";
import OfficeTrans from "./../../images/office.png";
import AboutZolaha from "../../components/AboutZolaha/AboutZolaha";
import { FiCheck } from "react-icons/fi";
const About = () => {
  return (
    <div id="About">
      <Hero
        title="Student Journey Albania"
        description="Student Journey Albania is a concept that describes the journey and experience of international students who come to study in Albania with the help of Shargan Consulting representatives.
This process includes all stages of the student experience, from the moment of application for a study program at an Albanian university to the completion of studies and post-graduate experiences."
        btnText="Contact Us for More Information"
        heroImg={uiDesign}
        heroAlt="Digital Success"
        urlLink={
          "https://api.whatsapp.com/send?phone=918736082960&text=Hiii%20!!%20%F0%9F%99%83"
        }
        imgClass="hero-img-custom-style"
        style={{
          width:
            (window.innerWidth >= 1200 && window.innerWidth <= 1440) ||
            window.innerWidth < 1999
              ? "100%"
              : "auto",
          height: "auto",
          marginLeft:
            window.innerWidth >= 1200 && window.innerWidth <= 1440
              ? "-70px"
              : "0",
          display: "block",
        }}
      />
      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={OfficeTrans}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Information and Research"
        CompanyScene="Guidance on Academic Programs, Living Costs, and Scholarships in Albania"
        CompanyDetails={
          "Students initially seek information on academic programs, universities, cost of living, and scholarship opportunities in Albania. Shargan Consulting is present to represent these institutions in this regard."
        }
        FaIcon={<FiCheck />}
        Checklist1="Academic programs in Albania"
        Checklist2="Universities in Albania"
        Checklist3="Cost of living in Albania for students"
        Checklist4="Scholarship opportunities Albania"
        Checklist5="Shargan Consulting education"
        Checklist6="Study in Albania assistance"
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={OfficeTrans}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="About Zolaha"
        CompanyScene="We Provide Web Solutions in Affordable Prices"
        CompanyDetails={
          "At ZOLAHA, we believe that everyone deserves to have a high-quality, professional website that accurately reflects their brand and helps them achieve their goals. That's why we offer web solutions that are not only affordable but also top-notch in terms of quality and functionality. We understand that your website is a reflection of your business and your values, so we work closely with our clients to create websites that are both visually stunning and highly functional. Our team is passionate about what we do, and we take pride in helping our clients succeed online. Whether you need a simple website or a complex web application, we are here to help you every step of the way."
        }
        FaIcon={<FiCheck />}
        Checklist1="Transparency and honesty"
        Checklist2="Respect and professionalism"
        Checklist3="Quality and excellence"
        Checklist4="Collaboration and teamwork"
        Checklist5="Accountability and responsibility"
        Checklist6="Ethics and integrity"
        AboutBtnText="We are Made in BHARAT for BHARAT"
        AboutBtnTextClassName="Button-Bharat"
        urlAboutLink={
          "https://api.whatsapp.com/send?phone=918736082960&text=Hiii%20!!%20%F0%9F%99%83"
        }
      />
    </div>
  );
};

export default About;
