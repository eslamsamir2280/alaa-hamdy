const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./routes/contact");
const articlesRoute = require("./routes/articles");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
// فتح مجلد الصور للعامة عشان الفرونت يقدر يعرضها
app.use("/images", express.static(path.join(__dirname, "uploads")));

// Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/lawyer-db")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// Routes (الروابط)
app.use("/api/contact", contactRoute);
app.use("/api/articles", articlesRoute);
app.post("/api/login", (req, res) => {
  const { password } = req.body;
  const ADMIN_PASSWORD = "admin1234"; // غيرها هنا

  if (password === ADMIN_PASSWORD) {
    res.status(200).json({ success: true, token: "secret_admin_token" });
  } else {
    res.status(401).json({ success: false, message: "Wrong password!" });
  }
});
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
