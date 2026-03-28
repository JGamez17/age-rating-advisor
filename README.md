# 🛡️ PlayGuard

> **A full-stack mobile application for modern parental controls — built with React Native, Expo, and Firebase.**

PlayGuard helps parents make informed decisions about the apps their children use. With real-time monitoring, age-based filtering, and community-driven app reviews, it gives families the tools they need to build healthier digital habits together.

🌐 **Live Web Proof-of-Concept:** [age-rating-advisor.vercel.app](https://age-rating-advisor.vercel.app)
📱 **Mobile Repo (this one):** React Native + Expo

-----

## 📸 Overview

PlayGuard started as a Next.js web application, then pivoted to a mobile-first product after market research revealed parents needed on-the-go monitoring rather than a desktop dashboard. The web proof-of-concept lives at the link above; this repo is the full mobile implementation.

-----

## ✨ Features

- **Parent App Reviews & Ratings** — Browse community-sourced reviews from other parents before allowing a new app download
- **Age-Based Filtering & Evolution** — Content restrictions automatically adjust as your child hits age milestones (6–8, 9–12, 13+)
- **Unified Family Dashboard** — Track screen time, app usage, and content consumption across devices in real time
- **Secure Authentication** — Firebase Auth handles user registration, login, and session management
- **Cross-Platform** — Single codebase targets iOS, Android, and web via Expo

-----

## 🏗️ System Architecture

PlayGuard uses a **Backend-as-a-Service (BaaS)** approach, eliminating the need for a custom API server.

```
┌─────────────────────────────────────────────┐
│           Presentation Tier                 │
│     React Native + Expo (cross-platform)    │
└────────────────────┬────────────────────────┘
                     │
┌────────────────────▼────────────────────────┐
│           Logic & Data Tier                 │
│               Firebase BaaS                 │
│  ┌──────────────────┐  ┌─────────────────┐  │
│  │ Firebase Auth    │  │ Cloud Firestore  │  │
│  │ (user identity)  │  │ (real-time data) │  │
│  └──────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────┘
```

-----

## 🛠️ Tech Stack

|Layer               |Technology                            |
|--------------------|--------------------------------------|
|Mobile Framework    |React Native + Expo                   |
|Language            |TypeScript + JavaScript               |
|Backend             |Firebase (BaaS)                       |
|Auth                |Firebase Authentication               |
|Database            |Cloud Firestore (NoSQL, real-time)    |
|Styling             |NativeWind (Tailwind for React Native)|
|Web Proof-of-Concept|Next.js + Vercel                      |

-----

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- A Firebase project ([create one here](https://console.firebase.google.com))
- Expo Go app on your physical device, or a mobile emulator (iOS Simulator / Android Emulator)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/JGamez17/PGApp.git
cd PGApp
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure Firebase**

- Go to your [Firebase Console](https://console.firebase.google.com) and create a new project
- Add a Web App to your project and copy the `firebaseConfig` object
- Open `config/firebaseConfig.js` (or equivalent) and replace the placeholder config with your own:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

**4. Start the development server**

```bash
npx expo start
```

Scan the QR code with Expo Go on your device, or press `i` for iOS Simulator / `a` for Android Emulator.

-----

## 📁 Project Structure

```
PGApp/
├── app/              # Expo Router screens and navigation
├── assets/           # Images, fonts, icons
├── config/           # Firebase configuration
├── contexts/         # React Context providers (auth state, etc.)
├── services/         # Firebase service functions (auth, Firestore)
├── app.json          # Expo project config
├── eas.json          # EAS Build config
└── tailwind.config.js
```

-----

## 💡 Design Decisions

**Why Firebase over a custom backend?**
Firebase provided the fastest path to a working, scalable backend with real-time data sync — letting the focus stay on the mobile UX and feature logic rather than infrastructure.

**Why pivot from web to mobile?**
Initial market research showed parents needed quick, on-the-go access to monitoring tools. A mobile-first product better serves that use case. The web proof-of-concept at [age-rating-advisor.vercel.app](https://age-rating-advisor.vercel.app) demonstrates the product concept for stakeholders who don’t have the mobile app installed.

**Why NativeWind?**
Bringing Tailwind’s utility-first approach into React Native keeps styling consistent with the web proof-of-concept and speeds up iteration.

-----

## 🔮 What’s Next

- [ ] Push notifications for screen time alerts
- [ ] App Store / Google Play listing
- [ ] Parent-child messaging within the dashboard
- [ ] AI-powered app content summarization

-----

## 👩‍💻 Author

**Jess Gamez**
Full Stack Developer · QA Engineer · Technical Support

- 🌐 [Portfolio](https://vercel.com) <!-- update with your actual portfolio URL -->
- 💼 [LinkedIn](https://linkedin.com/in/jpgamez/)
- 🐙 [GitHub](https://github.com/JGamez17)

-----

## 📄 License

Distributed under the MIT License.