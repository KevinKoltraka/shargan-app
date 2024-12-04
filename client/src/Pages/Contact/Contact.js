import { React, useState, useEffect } from 'react';
import './contact.css';
import ContactImg from './../../images/chat.gif';
import Social from '../../components/SocialIcons/Social';
import Hero from '../../components/HeroSection/Hero';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      setStatus('Please fill all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setStatus(''); // Clear any previous status before sending a new request

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(data.error || 'Error sending message.');
      }
    } catch (error) {
      console.error("Error during fetch:", error); // Log detailed error for debugging
      setStatus('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Automatically clear the status after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timeout on component unmount or new status
    }
  }, [status]);

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
              <input
                type="text"
                name="sender"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name:</label>
            </div>
            <div className="form-item">
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
          <div>
            {status && <p className={status.startsWith('Error') ? 'error' : 'success'}>{status}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
