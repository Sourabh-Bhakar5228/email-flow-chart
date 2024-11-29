const Agenda = require("agenda");
const sendEmail = require("./nodemailer");

const agenda = new Agenda({
  db: { address: process.env.MONGO_URI }, // MongoDB connection string from .env
});

agenda.define("send-email", async (job) => {
  const { emailBody, subject, emailAddress } = job.attrs.data;
  try {
    await sendEmail(emailAddress, subject, emailBody);
    console.log(`Email sent to ${emailAddress}`);
  } catch (error) {
    console.error(`Failed to send email to ${emailAddress}:`, error);
  }
});

// Start Agenda after defining jobs
(async () => {
  await agenda.start();
})();

module.exports = agenda;
