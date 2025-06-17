# Muqaddas

Welcome to **Muqaddas**, a full-featured web platform designed to simplify the journey of booking and managing Hajj and Umrah pilgrimage packages. Our goal is to ensure a spiritually fulfilling and hassle-free experience for every pilgrim.

---

## 🌐 Live Site

🔗 [Visit Muqaddas Live](https://safar-e-muqaddas.web.app)  
📌 *Best viewed on desktop and mobile browsers*

---

## ✨ Key Features

- 📦 View curated Hajj & Umrah packages
- 🔍 Advanced filtering by date, price, location, and duration
- 🗓️ Real-time booking system with availability tracking
- 🧾 Detailed package information and itinerary
- 👤 Secure login, registration & user dashboard
- 📍 Embedded Google Maps for destination guidance
- 📈 Booking statistics and dynamic counts
- 🔐 Admin and user role management *(optional)*

---

## ⚙️ Tech Stack

### Frontend

- **React** — Core UI library
- **Tailwind CSS** — Utility-first CSS framework
- **DaisyUI** — Tailwind UI components
- **React Router** — Declarative routing
- **Firebase Auth** — User authentication
- **Framer Motion** — Animations and transitions

### Backend

- **Express.js** — Server and routing
- **MongoDB** — NoSQL database
- **Firebase Admin SDK** — Admin-level auth & user mgmt
- **Dotenv** — Environment variable handling
- **CORS** — Secure cross-origin access

---

## 📦 NPM Packages Used

### Client Side

| Package               | Purpose                            |
|-----------------------|------------------------------------|
| `@tailwindcss/vite`   | Tailwind plugin for Vite           |
| `axios`               | HTTP client                        |
| `firebase`            | Firebase SDK                       |
| `motion`              | Animation & transition effects     |
| `react-countup`       | Number animation for statistics    |
| `react-dom`           | DOM rendering                      |
| `react-hook-form`     | Form handling and validation       |
| `react-icons`         | Icon library                       |
| `react-modal`         | Modal component                    |
| `react-multi-carousel`| Responsive carousel slider         |
| `react-router`        | Frontend routing                   |
| `react-toastify`      | Toast notifications                |
| `sweetalert2`         | Alert modal popups                 |
| `tailwindcss`         | Core Tailwind CSS                  |

---

## 🛠️ Setup Instructions & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ameerhamzahd/muqaddas.git
   cd muqaddas


2. **Install dependencies:**:
    ```bash
    npm install

    ⚠️ Make sure to initialize Tailwind CSS and configure Vite if you haven’t already. For example, after installing, run:
    ```bash
    npx tailwindcss init -p

3. **Configure Firebase**:
    Create a .env.local file and add your Firebase config:
    ```env
    VITE_API_KEY=your_api_key
    VITE_AUTH_DOMAIN=your_auth_domain
    VITE_PROJECT_ID=your_project_id
    VITE_STORAGE_BUCKET=your_storage_bucket
    VITE_MESSAGING_SENDER_ID=your_sender_id
    VITE_APP_ID=your_app_id

4. **Run locally**:
    ```bash
    npm run dev

---

## Fix Client-Side Routing (React Router)
    If using React Router, add a _redirects file in your public/ folder:
    ```bash
    /*    /index.html   200

---

## 🚀 Deployment Steps to Firebase

1. **Login to Firebase CLI (if not already)**:
    ```bash
    npm install -g firebase-tools
    firebase login

2. **Initialize Firebase in your project**:
    ```bash
    firebase init

    Choose Hosting.
    Select your Firebase project.
    Set dist as the public directory.
    Choose Yes for single-page app rewrite (index.html).
    Choose No for GitHub deploys (unless needed).

3. **Build your React app**:
    ```bash
    npm run build

4. **Deploy to Firebase**:
    ```bash
    firebase deploy

---

## 📬 Contact

For issues or suggestions, please contact: ameerhamzah.daiyan@gmail.com

---

## 📄 License

-This project is licensed under the MIT License.

---

## ✨ Acknowledgements

Thanks to Firebase, Tailwind, and the React ecosystem for powering this project.

---
