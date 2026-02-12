const express = require("express");
const router = express.Router(); // <--- ده السطر اللي كان ناقص
const Article = require("../models/Article");
const multer = require("multer");
const path = require("path");

// إعدادات رفع الصور (Multer Config)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// 1. إضافة مقال جديد (POST)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newArticle = new Article({
      titleEn: req.body.titleEn,
      contentEn: req.body.contentEn,
      titleAr: req.body.titleAr,
      contentAr: req.body.contentAr,
      category: req.body.category,
      image: req.file ? req.file.filename : "",
    });

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 2. عرض جميع المقالات (GET)
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 3. تعديل مقال (PUT)
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      titleEn: req.body.titleEn,
      contentEn: req.body.contentEn,
      titleAr: req.body.titleAr,
      contentAr: req.body.contentAr,
      category: req.body.category,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true },
    );

    res.status(200).json(updatedArticle);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 4. حذف مقال (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(200).json("Article has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
