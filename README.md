# Nexora — AI-Powered Digital Transformation Website

A bold, cutting-edge marketing website for **Nexora**, an AI and digital transformation startup brand. Built with React, Vite, and React Router.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Routing:** React Router v6
- **Styling:** Inline styles + global CSS (no external UI library)
- **Fonts:** Inter + Space Grotesk (Google Fonts)

## Brand

| Token | Value |
|---|---|
| Electric Blue | `#0066ff` |
| Near Black | `#050a14` |
| Light Cyan | `#00d4ff` |
| White | `#ffffff` |
| Dark Navy | `#111827` |

## Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, AI Solutions, Stats, Case Studies, Trusted By, CTA |
| `/about` | About — Mission, Timeline, Tech Pillars, Team |
| `/services` | Services — 6 service cards with feature lists + process steps |
| `/contact` | Contact — Form with validation, contact info, global offices |

## Getting Started

```bash
cd /home/user/websites/Nexora
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
Nexora/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        └── Contact.jsx
```
