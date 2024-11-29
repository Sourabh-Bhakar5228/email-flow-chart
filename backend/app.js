require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const emailRoutes = require("./routes/emailRoutes");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/emails", emailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
