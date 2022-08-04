const mongoose = require('mongoose');

const subCateogrySchema = new mongoose.Schema(
  {
    info: { type: String, maxlength: 50 },
    hint: { type: String, maxlength: 50 },
    url: { type: String, maxlength: 200 },
    answers: [{ type: String, maxlength: 50 }],
  },
  { timestamps: true },
);

module.exports = mongoose.model('SubCategory', subCateogrySchema);
