require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "https://syal-law-firm-ferozepur.netlify.app",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

// CONTACT FORM API
app.post("/contact", (req, res) => {
    console.log("New Contact Message:", req.body);
    res.json({ success: true, message: "Message received" });
});

// APPOINTMENT FORM API
app.post("/appointment", (req, res) => {
    console.log("New Appointment:", req.body);
    res.json({ success: true, message: "Appointment received" });
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend running on port 5000");
});