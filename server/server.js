const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration: allowing only specific origin
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Adjust based on your frontend's URL
  methods: ['GET', 'POST'],
};
app.use(cors(corsOptions));

// Middleware for parsing JSON
app.use(bodyParser.json()); 

// Destructure environment variables
const { EMAIL, PASSWORD, TO_EMAIL } = process.env;

// Check if environment variables are set
if (!EMAIL || !PASSWORD || !TO_EMAIL) {
  console.error('Missing environment variables. Ensure EMAIL, PASSWORD, and TO_EMAIL are set in the .env file.');
  process.exit(1);
}

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,  
    pass: PASSWORD, 
  },
});

// POST route to send email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Validation: Ensure all fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all the fields.' });
  }

  // Email options
  const mailOptions = {
    from: EMAIL,  
    to: TO_EMAIL, 
    subject: `New Message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
    replyTo: email,  
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email.' });
    }
    console.log('Email sent successfully:', info.response);
    return res.status(200).json({ message: 'Email sent successfully!' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
