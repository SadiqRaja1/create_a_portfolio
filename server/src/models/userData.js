const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  // Basic Info
  name: { type: String, required: true },
  profileImage: { type: String, required: true },
  comment: { type: String, required: true },
  about: { type: String, required: true },

  // Tech Stack (multiple selection)
  techStack: { type: [String], required: true },

  // Experience 1 (required)
  companyStart1: { type: String, required: true },  // "YYYY-MM"
  companyEnd1: { type: String, required: true },
  companyName1: { type: String, required: true },
  designation1: { type: String, required: true },
  companyComment1: { type: String, required: true },

  // Experience 2 (optional)
  companyStart2: { type: String },
  companyEnd2: { type: String },
  companyName2: { type: String },
  designation2: { type: String },
  companyComment2: { type: String },

  // Project 1 (required)
  projectImage1: { type: String, required: true },
  projectTitle1: { type: String, required: true },
  projectGithubLink1: { type: String, required: true },
  projectTech1: { type: String, required: true },
  projectDetails1: { type: String, required: true }, // You may split into array later

  // Project 2 (optional)
  projectImage2: { type: String },
  projectTitle2: { type: String },
  projectGithubLink2: { type: String },
  projectTech2: { type: String },
  projectDetails2: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("UserData", userDataSchema);
