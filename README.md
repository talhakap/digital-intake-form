📄 Digital Service Intake Form — Proof of Concept
This project is a modern, responsive e-Form built with React and simulated with a lightweight Express.js backend. It was developed as part of the interview assignment for a Developer Position .

✅ Features
Dynamic multi-field intake form (text, dropdown, radio, checkbox, file)

Prefilled data from simulated backend API (GET /api/prefill)

Conditional logic (shows notes field when subscribed)

Client-side validation (required, placeholders)

File input reset after submission

Backend submission endpoint (POST /api/submit)

Full form resets after each successful submission

Responsive + modern UI with neutral styling (pure CSS)

🧰 Tech Stack
Frontend	Backend
React	Node.js + Express
HTML/CSS	REST API simulation

📁 Project Structure
css
Copy
Edit
/client         ← React app
  ├── src
  │   ├── components/
  │   │   └── Form.jsx / Form.css
  │   ├── App.jsx / App.css
  │   ├── main.jsx / index.css

/server         ← Express backend
  ├── server.js
  ├── mockdata.json

README.md       ← You are here
🚀 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/digital-intake-form.git
cd digital-intake-form
2. Start the backend
bash
Copy
Edit
cd server
npm install
node server.js
The backend runs on http://localhost:5000

3. Start the frontend
bash
Copy
Edit
cd client
npm install
npm run dev
The React frontend runs on http://localhost:5173

🔐 Security Considerations
Input validation (HTML5 constraints)

Simulated backend with clean API endpoints

File input excluded from API payload for safety

Secure architecture ready for scale to AEM/enterprise use

🛠 Future Enhancements
Add server-side validation

Store submissions in a database

Integrate authentication (OAuth, etc.)

Export submitted data

Migrate backend to cloud (e.g., Azure or AWS Lambda)

👤 Author
Talha Kapadiya
For Developer Interview Assignment
