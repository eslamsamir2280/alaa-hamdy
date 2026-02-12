const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  // English Content
  titleEn: { type: String, required: true },
  contentEn: { type: String, required: true },

  // Arabic Content
  titleAr: { type: String, required: true },
  contentAr: { type: String, required: true },

  // Shared Data
  category: { type: String, required: true }, // ممكن نسيب التصنيف انجليزي بس ونترجمه في الفرونت
  image: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Article", ArticleSchema);
