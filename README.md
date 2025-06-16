# 📄 Digital Service Intake Form — Proof of Concept

This project simulates a modern, scalable e-Form experience for replacing outdated PDF-based intake forms. Built using **React** for the frontend and **Express.js** for the backend, it demonstrates intelligent form behavior, conditional logic, prefill from an API, and secure data handling — as required for the Developer Interview Assignment.

---

## ✅ Features

- 🔹 Modern dynamic form (React functional components)
- 🔹 Prefill form values from a mock backend API (`/api/prefill`)
- 🔹 Conditional logic (e.g., show "Notes" if newsletter is selected)
- 🔹 Client-side validation (`required`, `placeholder="Type something"`)
- 🔹 Multiple input types: text, email, phone, textarea, select, radio, checkbox, file upload
- 🔹 Auto-reset of entire form — including file input — after submission
- 🔹 Responsive layout and neutral UI using basic CSS (no libraries)
- 🔹 Backend receives submission (`/api/submit`) and logs to console

---

## 🧰 Technologies Used

| Frontend         | Backend          |
|------------------|------------------|
| React (Vite)     | Node.js + Express |
| HTML5 + CSS3     | REST API simulation |
| Axios (or Fetch) | JavaScript (ES6+) |

---

## 🗂️ Project Structure

digital-intake-form/
│
├── client/                         # React frontend
│   ├── public/                     # Static assets
│   └── src/
│       ├── components/
│       │   ├── Form.jsx            # Main dynamic intake form
│       │   └── Form.css            # Form styling (basic, modern)
│       ├── App.jsx                 # App wrapper
│       ├── App.css                 # Centers form on screen
│       ├── index.css               # Global CSS + reset
│       └── main.jsx                # React app entry point
│
├── server/                         # Express backend
│   ├── server.js                   # REST API for prefill + submission
│   └── mockdata.json               # Simulated backend prefill data
│
├── .gitignore                      # Node/Vite ignores
├── README.md                       # Assignment documentation
└── package.json (optional at root if monorepo)

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/digital-intake-form.git
cd digital-intake-form
2️⃣ Start the Backend (Express)
bash
Copy
Edit
cd server
npm install
node server.js
➡ Runs at http://localhost:5000
Endpoints:

GET /api/prefill

POST /api/submit

3️⃣ Start the Frontend (React + Vite)
bash
Copy
Edit
cd ../client
npm install
npm run dev
➡ Runs at http://localhost:5173

🔐 Security & Privacy Considerations
Input validation is enforced on the client side

File input is excluded from the submission payload

API endpoints are clearly separated and only accept structured JSON

Architecture supports future extension to secure AEM or enterprise backends

📈 Scalability & AEM Readiness
This solution is designed to easily map to Adobe Experience Manager (AEM) in the future:

React components can become AEM components

Form data structure mirrors enterprise-grade form builder logic

REST API layer can integrate into enterprise microservices

🧠 Future Enhancements
Add backend validation and error responses

Store form submissions in a database

Add authentication (e.g., OAuth or JWT)

File upload support (via Multer)

Accessibility improvements (WCAG compliance)

Support for multilingual forms

🧪 Demo & Submission Notes
This form will be demonstrated in a live interview (max 15 minutes).
The code has been submitted as per the assignment instructions to:

👤 Author
Talha Kapadiya
Frontend & Backend Developer

