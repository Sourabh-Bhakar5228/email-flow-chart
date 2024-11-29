const express = require("express");
const agenda = require("../agenda");
const router = express.Router();

router.post("/schedule-email", async (req, res) => {
  const { time, emailBody, subject, emailAddress } = req.body;
  try {
    await agenda.schedule(time, "send-email", {
      emailBody,
      subject,
      emailAddress,
    });
    res.status(200).send({ message: "Email scheduled successfully!" });
  } catch (error) {
    res.status(500).send({ error: "Failed to schedule email" });
  }
});

module.exports = router;
