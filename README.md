# Developer Portfolio

A premium, interactive, and high-fidelity developer portfolio built with **React**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed with a cinema-dark aesthetic, modern typography, glassmorphism, and smooth micro-animations.

---

## 🚀 Key Features

- **Cinematic Hero Landing**: Floating gradient ambient glows, active availability badges, and interactive scroll indicators.
- **Workstation Bio**: Modern terminal window UI design featuring personal bio highlights, quick-info metadata cards, and professional metrics.
- **Interactive Tech Stack**: Category-filtered skills grid (Front-End, Back-End, DevOps, Databases, Core) featuring dynamic layout changes and active pulsing status indicators.
- **Curated Projects Index**: Visual cards displaying project snapshots, code tags, source repositories, and live demo buttons.
- **Professional Experience Timeline**: Structured, vertical chronological timeline highlighting leadership experiences, academic education, and internships.
- **One-Click Resume PDF Download**: Clean, high-fidelity CTA section card offering direct local download of the resume document from the `/public` assets folder.
- **Responsive Navigation**: Smooth section scrolling with a sticky, scroll-tracked desktop navbar and mobile overlay drawer.
- **Contact & Follow-up**: Visual contact form with state animations (idle, loading, success/error feedback) and external social links.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: React 19 (Component-driven architecture)
- **Build System**: Vite 6 (Fast HMR & Optimized tree-shaking production builds)
- **Language**: TypeScript (Type-safe codebase)
- **Styling**: Tailwind CSS v4 (Sleek CSS tokens & utility styles)
- **Animations**: Framer Motion / Motion v12 (High-performance spring transitions & overlays)
- **Icons**: Lucide React (Clean vector iconography)

---

## 📂 Project Directory Structure

```text
├── dist/                  # Compiled production build assets
├── public/                # Static asset files
│   └── Greeshmitha-Resume.pdf  # PDF Resume downloaded by CTA buttons
├── src/
│   ├── components/        # Reusable UI sections
│   │   ├── About.tsx      # Terminal-style biography & statistics
│   │   ├── Contact.tsx    # Contact form & social connections
│   │   ├── Experience.tsx # Chronological career/education timeline
│   │   ├── Footer.tsx     # Copywriter & quick links
│   │   ├── Hero.tsx       # Welcoming header section & CTA buttons
│   │   ├── Navbar.tsx     # Scroll-locked sticky navigation drawer
│   │   ├── Projects.tsx   # Project cards grid
│   │   ├── Resume.tsx     # High-fidelity CV PDF download card
│   │   └── Skills.tsx     # Dynamic technology stack tabs
│   ├── data.ts            # Centralized repository for all site copy & texts
│   ├── types.ts           # Shared TypeScript interfaces & types
│   ├── App.tsx            # Main layout wrapper & Intersection Observer
│   ├── index.css          # Styling entrypoint & Tailwind imports
│   └── main.tsx           # React mounting entrypoint
├── tsconfig.json          # TypeScript compilation configuration
└── vite.config.ts         # Vite bundler plugins and server options
```

---

## ⚙️ Getting Started & Development

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser to view the portfolio.

### 4. Build for production
To compile optimization bundles to the `/dist` directory:
```bash
npm run build
```

### 5. Code Quality & Linting
Run TypeScript checks without emitting build outputs:
```bash
npm run lint
```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
