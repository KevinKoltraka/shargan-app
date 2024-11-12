import { React } from 'react';
import './contact.css';
import ContactImg from './../../images/contact.png';
import Social from '../../components/SocialIcons/Social';
import Hero from '../../components/HeroSection/Hero';
const Contact = () => {
  return (
    <>
      <Hero
        title="Contact Us"
        description="Digital marketing is a field that is always changing, but one thing remains the same: it's a lot of work.
     If you're looking to get started in digital marketing and want to learn how to get your business up and running as quickly as possible, we've got some great tips for you!"
        btnText="Free Consultancy"
        heroImg={ContactImg}
        urlLink={
          'https://api.whatsapp.com/send?phone=918736082960&text=Hiii%20!!%20%F0%9F%99%83'
        }
      />

      <div className="social-contact">
        <Social />
      </div>

      <div className="mega-contact-box">
        <div className="contact-form-wrapper">
          <form
            action="mailto:rishiratanmishra2@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <div className="enquiry-form">
              <h3>Enquiry Form</h3>
            </div>
            <div className="form-item">
              <input type="text" name="sender" required />
              <label>Name:</label>
            </div>
            <div className="form-item">
              <input type="text" name="email" required />
              <label>Email:</label>
            </div>
            <div className="form-item">
              <textarea className="" name="message" required></textarea>
              <label>Message:</label>
            </div>
            <button type="submit" value="Send" className="submit-btn">
              Send
            </button>
            <div style={{ fontSize: '10px' }}></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
