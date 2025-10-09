# Qeja - Real Estate Platform

<div align="center">

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://qeja-frontend.vercel.app)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/Flask-Backend-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**A modern real estate platform connecting house hunters with rental and purchase opportunities**

[Live Demo](https://qeja-frontend.vercel.app) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## 🏠 About The Project

**Qeja** is a comprehensive real estate platform designed to streamline the house hunting experience. Whether you're looking for a rental property or a home to own, Qeja provides a centralized platform where users can browse listings, communicate with property owners, and engage with a community of fellow house hunters.

### Problem Statement

Finding the right home can be a time-consuming and fragmented process. Qeja solves this by:
- Consolidating rental and purchase listings in one place
- Enabling direct communication between buyers/renters and property owners
- Fostering a community where users can share experiences and advice

### Target Audience

- **House Hunters**: Individuals and families searching for rental properties or homes to purchase
- **Property Owners**: Landlords and sellers looking to list their properties
- **Real Estate Enthusiasts**: Users seeking community insights and market information

---

## ✨ Features

### Core Functionality

- **🔐 User Authentication**: Secure sign-up and login system powered by Flask
- **🏡 Property Listings**: Browse rental properties and homes for sale
- **💬 Real-Time Chat**: Direct messaging between users and property owners
- **📝 Community Forum**: Create and engage with posts, share experiences, and get advice
- **📊 Dashboard**: Personalized user dashboard with saved properties and activity
- **🔍 Advanced Search**: Filter properties by location, price, type, and more
- **📱 Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

### Unique Capabilities

- Integrated chat system for instant communication
- Community-driven insights through forum discussions
- Interactive property visualization with Swiper carousels
- Real-time data updates and notifications

---

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18.2.0
- **UI Library**: Material-UI (MUI) 5.15.20
- **Styling**: Tailwind CSS 3.4.3, Emotion
- **Routing**: React Router DOM 6.23.0
- **HTTP Client**: Axios 1.6.8
- **Authentication**: Firebase 10.12.2
- **Charts**: Chart.js 4.4.3 with React-ChartJS-2
- **Carousel**: Swiper 11.1.4
- **Icons**: React Icons 5.1.0, MUI Icons
- **Animations**: React Typing Effect 2.0.5

### Backend
- **Framework**: Flask (Python)
- **Database**: SQLite
- **Deployment**: Render

### DevOps & Deployment
- **Frontend Hosting**: Vercel
- **Backend Hosting**: Render
- **CI/CD**: GitHub Actions
- **Containerization**: Docker

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Python 3.8+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/coderbenny/Qeja-frontend.git
   cd Qeja-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   REACT_APP_APIKEY=your_firebase_api_key
   REACT_APP_AUTHDOMAIN=your_firebase_auth_domain
   REACT_APP_PROJECTID=your_firebase_project_id
   REACT_APP_STORAGEBUCKET=your_firebase_storage_bucket
   REACT_APP_MESSAGINGSENDERID=your_firebase_messaging_sender_id
   REACT_APP_APPID=your_firebase_app_id
   REACT_APP_MEASUREMENTID=your_firebase_measurement_id
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000`

### Environment Variables

The following environment variables are required for Firebase integration:

| Variable | Description |
|----------|-------------|
| `REACT_APP_APIKEY` | Firebase API Key |
| `REACT_APP_AUTHDOMAIN` | Firebase Auth Domain |
| `REACT_APP_PROJECTID` | Firebase Project ID |
| `REACT_APP_STORAGEBUCKET` | Firebase Storage Bucket |
| `REACT_APP_MESSAGINGSENDERID` | Firebase Messaging Sender ID |
| `REACT_APP_APPID` | Firebase App ID |
| `REACT_APP_MEASUREMENTID` | Firebase Measurement ID |

---

## 💻 Usage

### Available Scripts

- **`npm start`**: Runs the app in development mode
- **`npm run build`**: Builds the app for production
- **`npm test`**: Launches the test runner
- **`npm run eject`**: Ejects from Create React App (one-way operation)

### Running with Docker

```bash
docker build -t qeja-frontend .
docker run -p 3000:3000 qeja-frontend
```

---

## 📁 Project Structure

```
qeja-frontend/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   ├── App.js           # Main application component
│   ├── App.css          # Application styles
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
├── Dockerfile           # Docker configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # Project documentation
```

---

## 🌐 Deployment

### Frontend (Vercel)

The frontend is automatically deployed to Vercel on every push to the main branch.

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically via GitHub integration

### Backend (Render)

The Flask backend is deployed on Render with automatic deployments from GitHub.

### CI/CD

GitHub Actions is configured for continuous integration and deployment:
- Automatic deployment to Vercel (frontend) and Render (backend)
- Build validation and error checking

---

## 🗺 Roadmap

### Current Focus
- [x] User authentication system
- [x] Property listing functionality
- [x] Real-time chat feature
- [x] Community forum

### Future Enhancements
- [ ] **Codebase Refactoring**: Improve code structure and maintainability
- [ ] **Payment Integration**: Implement secure payment processing for deposits and rent
- [ ] **Advanced Filters**: Add more sophisticated search and filtering options
- [ ] **Mobile App**: Native iOS and Android applications
- [ ] **Property Tours**: Virtual tour integration
- [ ] **AI Recommendations**: Smart property suggestions based on user preferences
- [ ] **Multi-language Support**: Internationalization for broader accessibility

See the [open issues](../../issues) for a full list of proposed features and known issues.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   ```bash
   git clone https://github.com/coderbenny/Qeja-frontend.git
   ```

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
   
   Or use your name:
   ```bash
   git checkout -b yourname/feature-description
   ```

3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting PR

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 📧 Contact

Project Link: [https://github.com/coderbenny/Qeja-frontend](https://github.com/coderbenny/Qeja-frontend)

Live Demo: [https://qeja-frontend.vercel.app](https://qeja-frontend.vercel.app)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Firebase](https://firebase.google.com/)
- [Vercel](https://vercel.com/)
- [Render](https://render.com/)
- [Chart.js](https://www.chartjs.org/)
- [Swiper](https://swiperjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  
**Made with ❤️ by the Qeja Team**

⭐ Star this repo if you find it helpful!

</div>