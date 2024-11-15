import { React } from 'react';
import './contact.css';
import ContactImg from './../../images/chat.gif';
import Social from '../../components/SocialIcons/Social';
import Hero from '../../components/HeroSection/Hero';
const Contact = () => {
  return (
    <>
      <Hero
        title="Contact Us"
        description="We’d love to hear from you! Feel free to reach out with any questions, feedback, or inquiries, and we’ll get back to you as soon as possible."
        heroImg={ContactImg}
        urlLink={
          'https://api.whatsapp.com/send?phone=355699305604'
        }
      />

      <div className="social-contact">
        <Social />
      </div>

      <div className="mega-contact-box">
        <div className="contact-form-wrapper">
          <form
            action="mailto:kevikoltraka157@gmail.com"
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
