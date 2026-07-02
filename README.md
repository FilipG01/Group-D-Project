# Root Therapy Website

A modern psychotherapy practice website developed for the rebranding of the current Dublin Psychotherapist website.

The project aims to provide a calming, professional and accessible online presence while demonstrating a scalable React frontend that can later integrate with a full backend system.

---

## Project Overview

This website has been built using React and Vite with a component-based architecture. The project focuses on improving user experience, accessibility, maintainability and future scalability compared to the current production website.

Current implemented pages include:

- Home
- About
- Services
- Contact

The frontend has been designed to support future backend integration without requiring significant architectural changes.

---

## Technologies Used

- React 19
- Vite
- React Router
- JavaScript (ES6+)
- CSS3
- HTML5

Development Environment

- IntelliJ IDEA
- Git
- GitHub

---

## Features

### Current Features

- Responsive navigation
- Modern landing page
- Animated interactive Services Tree
- Therapist information page
- Contact page
- Reusable component architecture
- Modular page styling
- Responsive layouts
- Modern colour palette and branding



## Project Structure

```
src/
│
├── assets/
│
├── components/
│   ├── about/
│   ├── home/
│   ├── services/
│   └── shared/
│
├── data/
│
├── pages/
│
├── styles/
│   ├── global.css
│   ├── home.css
│   ├── about.css
│   ├── services.css
│   ├── header.css
│   └── footer.css
│
├── App.jsx
└── main.jsx
```

The application follows a modular component-based architecture where each page is composed of reusable React components.

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate into the project

```bash
cd Group-D-Project
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

The application will then be available at

```
http://localhost:5173
```

---

## Development

The project follows a feature-based component structure.

Pages should only be responsible for assembling components.

Business logic, reusable UI sections and data should remain separated into their respective folders.

Styling is separated into individual page stylesheets with a shared global stylesheet responsible for application-wide styling.

---


## Documentation

Project documentation includes:

- Use Case Diagram
- Entity Relationship Diagram
- Class Diagram
- Sequence Diagram

These documents describe both the implemented frontend and the proposed backend architecture.

---

## Authors

Developed by Group D

- Filip Gnitecki
- Conor Fuchs
- Sean Byrne
