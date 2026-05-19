const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact — submit a contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Name, email, and message are required." });
    }

    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json({
      success: true,
      message: "Message received! I'll get back to you soon.",
      data: { id: contact._id },
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, error: messages.join(". ") });
    }
    res.status(500).json({ success: false, error: "Server error. Please try again." });
  }
});

// GET /api/contact — retrieve all messages (admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;