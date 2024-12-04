const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware for CORS and JSON parsing
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);
app.use(bodyParser.json());

// Destructure environment variables
const { EMAIL, PASSWORD, TO_EMAIL } = process.env;

// Check environment variables
if (!EMAIL || !PASSWORD || !TO_EMAIL) {
  console.error(
    "Missing environment variables. Ensure EMAIL, PASSWORD, and TO_EMAIL are set in the .env file."
  );
  process.exit(1);
}

// Create Nodemailer transporter with timeout settings for email sending
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD, // Use app-specific password if 2FA is enabled
  },
  tls: {
    rejectUnauthorized: false, // Optional: Only necessary if using self-signed certificates
  },
  // Timeout configuration
  socketTimeout: 10000, // 10 seconds timeout for socket connection
  connectionTimeout: 5000, // 5 seconds timeout for establishing connection
});

// POST route to send email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received request:", req.body); // Log the incoming request

  if (!name || !email || !message) {
    console.log("Missing required fields"); // Log when fields are missing
    return res.status(400).json({ error: "Please fill all the fields." });
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    console.log("Invalid email format:", email); // Log invalid email format
    return res
      .status(400)
      .json({ error: "Please provide a valid email address." });
  }

  const mailOptions = {
    from: EMAIL,
    to: TO_EMAIL,
    subject: `New Message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
    replyTo: email,
  };

  // Inside your /send-email POST route
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Error sending email. Please try again later." });
    }
    console.log("Email sent successfully:", info.response);
    res.status(200).json({ message: "Email sent successfully!" });
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
