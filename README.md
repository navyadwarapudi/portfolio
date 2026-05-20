# 🌐 Personal Portfolio Website — Navya Sree Dwarapudi

<p align="center">
  <img src="https://img.shields.io/badge/Full%20Stack-Portfolio-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Database-MongoDB-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel" />
</p>

<p align="center">
  A modern full-stack portfolio website showcasing projects, skills, certifications, and career interests in Artificial Intelligence, Machine Learning, and Web Development.
</p>

---

## 🚀 Live Demo

🔗 https://portfolio-pi-woad-67.vercel.app

---

# 📌 Overview

This project is a responsive and scalable personal portfolio website developed to professionally showcase:

- Technical skills
- Full-stack development projects
- Certifications
- Career interests
- Contact information

The application follows a clean full-stack architecture using Node.js, Express.js, MongoDB, and Vanilla JavaScript.

---

# ✨ Features

✅ Responsive modern UI  
✅ Full-stack REST API architecture  
✅ MongoDB database integration  
✅ Dynamic project management  
✅ Contact form with backend storage  
✅ Secure Express middleware configuration  
✅ Organized folder structure  
✅ Deployment-ready configuration for Vercel  

---

# 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Deployment | Vercel |
| Version Control | Git & GitHub |
| Development Tools | VS Code |

---

# 📂 Project Structure

```bash
portfolio/
│
├── config/
│   └── seed.js
│
├── models/
│   ├── Project.js
│   └── Contact.js
│
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
│
├── routes/
│   ├── projects.js
│   └── contact.js
│
├── .gitignore
├── package.json
├── server.js
└── vercel.json
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/navyadwarapudi/portfolio.git
```

---

## 2️⃣ Navigate into Project

```bash
cd portfolio
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
```

---

## 5️⃣ Seed Database

```bash
node config/seed.js
```

---

## 6️⃣ Start Development Server

```bash
npm run dev
```

---

## 7️⃣ Open in Browser

```
http://localhost:3000
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Fetch all projects |
| GET | `/api/projects/:id` | Fetch single project |
| POST | `/api/projects` | Create project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/health` | Health check |

---

# ☁️ Deployment

## Deploy on Vercel

### 1️⃣ Push Code to GitHub

```bash
git add .
git commit -m "Production deployment"
git push
```

---

### 2️⃣ Import Repository in Vercel

- Login to Vercel
- Click **Add New Project**
- Import GitHub repository

---

### 3️⃣ Add Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
```

---

### 4️⃣ Deploy Project

Click **Deploy** and your application will go live instantly.

---

# 🔒 Security Features

- Helmet.js security headers
- CORS protection
- Express rate limiting
- Environment variable protection
- MongoDB connection security

---

# 📈 Future Improvements

- Admin dashboard
- Authentication system
- Dark/Light theme
- Blog section
- Project category filters
- Animations & transitions
- Resume download section

---

# 👩‍💻 Author

## Navya Sree Dwarapudi

B.Tech — Computer Science & Engineering (AI & ML)
Raghu Engineering College, Visakhapatnam

### Connect With Me

- GitHub: [https://github.com/navyadwarapudi](https://github.com/navyadwarapudi)
- LinkedIn: [https://linkedin.com/in/navyadwarapudi](https://linkedin.com/in/navyadwarapudi)
- Email: [navyadwarapudi07.10.05@gmail.com](mailto:navyadwarapudi07.10.05@gmail.com)

---

# 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ by Navya Sree Dwarapudi
</p>