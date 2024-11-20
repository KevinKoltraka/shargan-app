// Import required packages
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // To use environment variables from .env

// Initialize the express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors()); // Allow cross-origin requests from React app
app.use(bodyParser.json()); // Parse JSON request body

// Ensure necessary environment variables are available
const { EMAIL, PASSWORD, TO_EMAIL } = process.env;
if (!EMAIL || !PASSWORD || !TO_EMAIL) {
  console.error("Missing environment variables. Please ensure EMAIL, PASSWORD, and TO_EMAIL are set in the .env file.");
  process.exit(1); // Exit if environment variables are missing
}

// Setup Nodemailer transporter (email service configuration)
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Mailgun, SendGrid, etc.
  auth: {
    user: EMAIL,  // Your email address from environment variables
    pass: PASSWORD, // Your email password from environment variables (app password if 2FA is enabled)
  },
});

// POST route to handle form submission and send an email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation to check if all fields are present
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all the fields.' });
  }

  // Email options
  const mailOptions = {
    from: EMAIL,  // Email address you are authenticated with
    to: TO_EMAIL, // The email address where you want to receive contact messages
    subject: `New Message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
    replyTo: email,  // Set the reply-to address to the email provided in the form
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email.' });
    }
    return res.status(200).json({ message: 'Email sent successfully!' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
