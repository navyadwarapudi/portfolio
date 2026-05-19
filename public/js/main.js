const API_BASE = window.location.origin;

// ─── NAV ────────────────────────────
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ─── SMOOTH SCROLL ──────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ─── PROJECTS ───────────────────────
let allProjects = [];
let activeFilter = "all";

async function fetchProjects() {
  try {
    const res = await fetch(`${API_BASE}/api/projects`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    allProjects = data.data || [];
    renderProjects(allProjects);
  } catch (err) {
    allProjects = getDemoProjects();
    renderProjects(allProjects);
  }
}

function renderProjects(projects) {
  const grid = document.getElementById("projectsGrid");
  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  if (!filtered.length) {
    grid.innerHTML = `<div class="projects-loading"><p>No projects in this category yet.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => buildProjectCard(p, i)).join("");
}

function buildProjectCard(p, index) {
  const categoryLabels = { web: "Web App", ml: "ML / AI", backend: "Backend", mobile: "Mobile", other: "Other" };
  const stacks = (p.techStack || []).slice(0, 5).map((t) => `<span class="stack-tag">${t}</span>`).join("");
  const liveLink = p.liveUrl
    ? `<a href="${p.liveUrl}" class="card-link" target="_blank">Live ↗</a>`
    : `<span class="card-link disabled">No demo</span>`;
  const ghLink = p.githubUrl
    ? `<a href="${p.githubUrl}" class="card-link" target="_blank">GitHub ↗</a>`
    : `<span class="card-link disabled">Private</span>`;

  return `
    <div class="project-card ${p.featured ? "featured" : ""}" style="animation-delay:${index * 0.07}s">
      <div class="card-header">
        <span class="card-category">${categoryLabels[p.category] || p.category}</span>
        ${p.featured ? '<span class="card-featured-mark">★ Featured</span>' : ""}
      </div>
      <h3 class="card-title">${escapeHtml(p.title)}</h3>
      <p class="card-desc">${escapeHtml(p.description)}</p>
      <div class="card-stack">${stacks}</div>
      <div class="card-links">${liveLink}${ghLink}</div>
    </div>`;
}

// ─── FILTER ─────────────────────────
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderProjects(allProjects);
  });
});

// ─── CONTACT FORM ───────────────────
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const btnText = submitBtn.querySelector(".btn-text");
  const btnLoading = submitBtn.querySelector(".btn-loading");

  submitBtn.disabled = true;
  btnText.hidden = true;
  btnLoading.hidden = false;
  formStatus.hidden = true;

  const body = {
    name: contactForm.name.value.trim(),
    email: contactForm.email.value.trim(),
    subject: contactForm.subject.value.trim(),
    message: contactForm.message.value.trim(),
  };

  try {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (data.success) {
      showStatus("success", "✓ Message sent! I'll get back to you soon.");
      contactForm.reset();
    } else {
      showStatus("error", data.error || "Something went wrong. Please try again.");
    }
  } catch {
    showStatus("success", "✓ Message received! (Demo mode)");
    console.log("Contact submission:", body);
    contactForm.reset();
  } finally {
    submitBtn.disabled = false;
    btnText.hidden = false;
    btnLoading.hidden = true;
  }
});

function showStatus(type, msg) {
  formStatus.className = `form-status ${type}`;
  formStatus.textContent = msg;
  formStatus.hidden = false;
  setTimeout(() => { formStatus.hidden = true; }, 6000);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getDemoProjects() {
  return [
    {
      _id: "1",
      title: "Personal Portfolio Website",
      featured: true,
      category: "web",
      description: "Responsive personal portfolio to showcase profile, skills, projects, certifications, and contact information. Deployed on GitHub Pages.",
      techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      liveUrl: "https://navyadwarapudi.github.io",
      githubUrl: "https://github.com/navyadwarapudi",
    },
    {
      _id: "2",
      title: "Cyber Security Simulation",
      featured: true,
      category: "other",
      description: "Completed Deloitte's Cyber Security Job Simulation on Forage — worked on real-world security scenarios and threat analysis tasks.",
      techStack: ["Cybersecurity", "Threat Analysis", "Forage"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      _id: "3",
      title: "Data Analytics Simulation",
      featured: false,
      category: "ml",
      description: "Completed Tata's Data Analytics Job Simulation on Forage — performed data analysis, visualization, and business insight extraction.",
      techStack: ["Data Analytics", "Python", "MS Excel", "Forage"],
      liveUrl: "",
      githubUrl: "",
    },
  ];
}

// ─── INIT ────────────────────────────
fetchProjects();