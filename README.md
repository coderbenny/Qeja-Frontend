# Qeja Frontend — Real Estate Platform

<div align="center">

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge\&logo=vercel\&logoColor=white)](https://qeja-frontend.vercel.app)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)](https://reactjs.org/)
[![Flask Backend](https://img.shields.io/badge/Backend-Flask-000000?style=for-the-badge\&logo=flask\&logoColor=white)](https://flask.palletsprojects.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

### **A modern real estate platform connecting property seekers with rentals and homes for purchase**

[Live Demo](https://qeja-frontend.vercel.app) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

---

## 📋 Table of Contents

* [Overview](#overview)
* [Key Features](#key-features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Environment Variables](#environment-variables)
* [Available Scripts](#available-scripts)
* [Project Structure](#project-structure)
* [Deployment](#deployment)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgments](#acknowledgments)

---

## 🏠 Overview

**Qeja** is a full-featured real estate platform designed to simplify the process of discovering rental properties and homes for sale. Built with a modern UI powered by **React**, Qeja provides property listings, interactive forums, real-time chat, and an intuitive search experience.

### Why Qeja?

Searching for a home is often scattered across multiple platforms. **Qeja solves this** by:

* Centralizing verified listings
* Providing a built-in chat system
* Offering a community forum for property discussions
* Delivering smooth navigation and responsive UI

---

## ✨ Key Features

### 🧩 Core Functionality

* **🔐 Secure User Authentication (Firebase)**
* **🏠 Browse Properties** for rent & sale
* **💬 Real-Time User Chat** with property owners
* **📝 Social Community Forum** for posts and discussions
* **✨ Advanced Property Filters** (price, location, type, amenities)
* **❤️ Save Favorites** to personal dashboard
* **📱 Fully Responsive UI** for mobile, tablet, and desktop

### 🎯 Unique Additions

* Swiper-powered image carousels
* Animated hero and UI sections
* Chart.js powered dashboards
* Tailwind + MUI hybrid styling
* Smooth page transitions and typing animations

---

## 🛠 Tech Stack

### **Frontend**

* **React 18.2**
* **Material-UI (MUI)**
* **Tailwind CSS**
* **React Router DOM**
* **Axios**
* **Firebase Authentication**
* **Chart.js & React-ChartJS-2**
* **Swiper Carousel**
* **React Icons**
* **React Typing Effect**

### **Backend**

* Flask REST API
* SQLite database
* Hosted on Render

### **DevOps & Hosting**

* Vercel (Frontend)
* Render (Backend)
* GitHub Actions (CI/CD)

---

## 🚀 Getting Started

Follow these steps to get the project running locally.

### ✔️ Prerequisites

Ensure you have:

* Node.js 16+
* npm or yarn
* Git
* Python 3.8+ (for backend dev)

---

## 🔧 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/coderbenny/Qeja-frontend.git
cd Qeja-frontend
```

### 2️⃣ Install frontend dependencies

```bash
npm install
```

### 3️⃣ Add environment variables

Create a `.env` file in the project root:

```env
REACT_APP_APIKEY=your_firebase_api_key
REACT_APP_AUTHDOMAIN=your_firebase_auth_domain
REACT_APP_PROJECTID=your_firebase_project_id
REACT_APP_STORAGEBUCKET=your_firebase_storage_bucket
REACT_APP_MESSAGINGSENDERID=your_firebase_messaging_sender_id
REACT_APP_APPID=your_firebase_app_id
REACT_APP_MEASUREMENTID=your_firebase_measurement_id
```

### 4️⃣ Start the development server

```bash
npm start
```

The app will be available at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

The frontend requires the following Firebase settings:

| Variable                      | Description              |
| ----------------------------- | ------------------------ |
| `REACT_APP_APIKEY`            | Firebase API Key         |
| `REACT_APP_AUTHDOMAIN`        | Authentication Domain    |
| `REACT_APP_PROJECTID`         | Project ID               |
| `REACT_APP_STORAGEBUCKET`     | File Storage Bucket      |
| `REACT_APP_MESSAGINGSENDERID` | Messaging Sender ID      |
| `REACT_APP_APPID`             | Application ID           |
| `REACT_APP_MEASUREMENTID`     | Analytics Measurement ID |

---

## 🧪 Available Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm start`     | Runs app in development mode |
| `npm run build` | Builds production bundle     |
| `npm test`      | Starts Jest test runner      |
| `npm run eject` | Ejects CRA configuration     |
| `docker build`  | Builds Docker image          |
| `docker run`    | Runs Docker container        |

### Running with Docker

```bash
docker build -t qeja-frontend .
docker run -p 3000:3000 qeja-frontend
```

---

## 📁 Project Structure

```
qeja-frontend/
├── public/                # Static assets
├── src/
│   ├── components/        # Shared UI components
│   ├── pages/             # Page-level components
│   ├── hooks/             # Custom hooks
│   ├── context/           # Auth / Global context
│   ├── utils/             # Helper functions
│   ├── App.js             # Main React component
│   ├── index.js           # React DOM entry point
│   ├── App.css            # Global styles
│   └── index.css          # TailwindCSS entry
├── Dockerfile             # Docker config
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🌐 Deployment

### **Frontend — Vercel**

Deployed using automatic CI/CD:

1. Connect GitHub repo to Vercel
2. Add environment variables
3. Push to `main` → Vercel deploys automatically

### Backend — Render

* Auto deploys on each push
* Provides public API endpoint for frontend

### CI/CD

* GitHub Actions for build testing
* Automatic deployments to Vercel and Render

---

## 🗺 Roadmap

### Completed

* [x] Authentication
* [x] Listings page & advanced filters
* [x] Chat system
* [x] Community posts
* [x] Dashboard visuals

### Upcoming

* [ ] Secure payment integration
* [ ] Push notifications
* [ ] AI-powered property recommendations
* [ ] Virtual property tours
* [ ] Mobile apps (React Native)
* [ ] Multi-language support

---

## 🤝 Contributing

Contributions are welcome and appreciated ❤️

### Steps

1. Fork the repo
2. Create a feature branch:

   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit changes
4. Push to GitHub
5. Open a pull request

### Guidelines

* Follow existing code conventions
* Write clean commit messages
* Update documentation where necessary
* Add tests if applicable

---

## 📄 License

Distributed under the **MIT License**.
See [`LICENSE`](LICENSE) for details.

---

## 🙏 Acknowledgments

* **React**
* **Material-UI**
* **Firebase**
* **Tailwind CSS**
* **Vercel**
* **Render**
* **Chart.js**
* **Swiper.js**

---

<div align="center">

### **Made with ❤️ from Kenya*

⭐ *Star this repo if you find it helpful!*

</div>
