const mongoose = require("mongoose");

const officeUtilitySchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
      enum: ["pdf", "image", "video"], 
    },
    cloudinaryLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const OfficeUtility = mongoose.model("OfficeUtility", officeUtilitySchema);

module.exports = OfficeUtility;
