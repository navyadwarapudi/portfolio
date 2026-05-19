require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("../models/Project");

const navyaProjects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive personal portfolio to showcase profile, skills, projects, certifications, and contact information.",
    longDescription:
      "Designed and developed a full-stack personal portfolio website with responsive UI, smooth navigation, project showcase section, contact form, and MongoDB integration. Built to highlight technical skills, certifications, and academic projects with a clean modern design.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    category: "web",
    featured: true,
    order: 1,
  },
];

async function seed() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio"
    );
    console.log("✅ Connected to MongoDB");

    await Project.deleteMany({});
    console.log("🗑️  Cleared existing projects");

    const created = await Project.insertMany(navyaProjects);
    console.log(`🌱 Seeded ${created.length} projects for Navya Sree`);

    await mongoose.disconnect();
    console.log("✅ Done! Run: npm run dev to start.");
  } catch (err) {
    console.error("❌ Seed error:", err.message);
    process.exit(1);
  }
}

seed();