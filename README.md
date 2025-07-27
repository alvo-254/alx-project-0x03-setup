# ALX Project 0x03 - Advanced React with TypeScript

## 📌 Overview

This project is part of the ALX Software Engineering Program. It focuses on mastering advanced patterns in React and TypeScript using the Next.js framework. The app is built with clean architecture, modular components, and robust TypeScript interfaces.

The main goals include:
- Using Next.js and TypeScript for server-rendered React apps.
- Building shared layouts and reusable components.
- Implementing programmatic routing with `useRouter`.
- Handling interface organization and custom error pages.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: Next.js Pages Router
- **Fonts**: Google Fonts (via `@next/font`)
- **Linting**: ESLint + Prettier
- **Package Manager**: npm

---

## 🧠 Features

- ✅ Shared Layout Components
- ✅ Google Fonts integration using `next/font`
- ✅ Imperative routing with `useRouter`
- ✅ Type-safe props and component interfaces
- ✅ Custom 404 Error Page
- ✅ Responsive design with Tailwind CSS
- ✅ ESLint and TypeScript strict mode
- ✅ Modular component organization

---

## 📁 Project Structure

```bash
alx-project-0x03/
│
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable UI components
│   ├── interfaces/         # TypeScript interfaces
│   ├── pages/              # Next.js page routes
│   ├── styles/             # Global CSS (Tailwind)
│   └── utils/              # Helper functions (optional)
├── .eslintrc.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
git clone https://github.com/<your-username>/alx-project-0x03.git
cd alx-project-0x03
npm install
npm run dev
npm run lint
