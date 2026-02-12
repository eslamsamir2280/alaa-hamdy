const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// 1. استقبال رسالة جديدة (POST)
router.post("/", async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 2. عرض جميع الرسائل (GET) - عشان لوحة التحكم
router.get("/", async (req, res) => {
  try {
    // بنرتبهم من الأحدث للأقدم (-1)
    const messages = await Message.find().sort({ date: -1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
