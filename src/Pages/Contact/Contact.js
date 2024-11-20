import { React, useState } from 'react';
import './contact.css';
import ContactImg from './../../images/chat.gif';
import Social from '../../components/SocialIcons/Social';
import Hero from '../../components/HeroSection/Hero';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      openGmailCompose(message);
    } else {
      alert("Please enter a message.");
    }
  };

  const openGmailCompose = (message) => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@sharganconsulting.com&body=${encodeURIComponent(message)}`;
    const newWindow = window.open(gmailLink, '_blank');

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      alert("Popup blocked! Please allow popups for this site to proceed.");
    }
  };

  return (
    <>
      <Hero
        title="Contact Us"
        description="We’d love to hear from you! Feel free to reach out with any questions, feedback, or inquiries, and we’ll get back to you as soon as possible."
        heroImg={ContactImg}
        urlLink="https://api.whatsapp.com/send?phone=355699305604"
      />

      <div className="social-contact">
        <Social />
      </div>

      <div className="mega-contact-box">
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit}>
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
              <textarea
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
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
