const nodemailer = require("nodemailer");

const sendEmail = async (emailAddress, subject, emailBody) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can change this depending on your email service
    auth: {
      user: process.env.EMAIL_USER, // Email address from .env
      pass: process.env.EMAIL_PASS, // Email password from .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: emailAddress,
    subject: subject,
    text: emailBody,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmail;
