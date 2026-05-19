const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    longDescription: {
      type: String,
      trim: true,
    },
    techStack: {
      type: [String],
      required: [true, "Tech stack is required"],
    },
    category: {
      type: String,
      enum: ["web", "mobile", "ml", "backend", "other"],
      default: "web",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    liveUrl: {
      type: String,
      default: "",
    },
    githubUrl: {
      type: String,
      default: "",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

projectSchema.index({ featured: -1, order: 1 });

module.exports = mongoose.model("Project", projectSchema);