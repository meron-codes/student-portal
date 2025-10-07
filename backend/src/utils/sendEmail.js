const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async (to, subject, text) => {
  const info = await transporter.sendMail({
    from: `"Abune Gorgorios School" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text
  });
  console.log('Email sent: ', info.messageId);
};

module.exports = sendEmail;
