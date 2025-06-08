This Anti-Doping Platform is a full-stack web application designed to assist anti-doping agencies in detecting and managing doping-related activities in sports. It leverages AI, data analytics, and risk assessment to identify suspicious patterns, manage reports and cases, and streamline collaboration between investigators, researchers, and sports organizations. The system includes a secure backend for data processing and a user-friendly frontend for interaction and reporting.


🧰 Tech Stack

Backend: Node.js, Express.js, MongoDB 

Frontend: React , Axios, CSS/SCSS

Authentication: JWT-based 

Additional Tools: ESLint, Prettier, dotenv for environment variables


✅ Project Setup & Run Guide
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/V-Varna/Anti-Doping-platform.git
cd Anti-Doping-platform
You should see this structure:

bash
Copy
Edit
project-sih/
├─ final_back/      # Node.js backend
└─ final_front/     # React frontend
2. Backend Setup (final_back)
Navigate to backend:

bash
Copy
Edit
cd final_back
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file  with your environment variables:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
Start the backend server:

bash
Copy
Edit
npm start
The API should now be running at:

arduino
Copy
Edit
http://localhost:5000
3. Frontend Setup 
Open a new terminal and go to frontend:

bash
Copy
Edit
cd final_front
Install dependencies:

bash
Copy
Edit
npm install
Create a .env.local file with:

env
Copy
Edit
REACT_APP_API_URL=http://localhost:5000
Start the development server:

bash
Copy
Edit
npm start
The app should now be live at:

arduino
Copy
Edit
http://localhost:3000
4. Access the Full App
With both servers running:

Frontend: http://localhost:3000

Backend API: http://localhost:5000

Now you can explore the frontend screens, test API routes, and interact with the full system.

5. (Optional) Setup ESLint + Prettier
For best code quality, install relevant extensions in VS Code/WebStorm:

ESLint

Prettier

Additionally, you may run formatting and linting:

bash
Copy
Edit
npm run lint     # if configured
npm run format   # if configured

