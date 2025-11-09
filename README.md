# NoirAutoSpa Website

A premium static website for NoirAutoSpa, a car wrapping and modification company, built with React, Vite, Tailwind CSS v4, and 3D effects.

## 🎨 Features

- **Modern Design**: Black and golden color theme with elegant UI/UX
- **3D Effects**: Interactive 3D car model in the hero section using Three.js
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations throughout the site
- **Service Pages**: Detailed pages for all services with image zoom effects
- **Horizontal Gallery**: Beautiful scrolling gallery showcasing work
- **Contact Form**: React Hook Form with validation

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Three.js & React Three Fiber** - 3D graphics
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation
- **Lucide React** - Icon library

## 📦 Services Offered

1. **Window Tints** - Premium automotive window tinting
2. **Ceramic Coating** - Advanced nano-ceramic protection
3. **Paint Protection Film** - Self-healing PPF technology
4. **Dashcam Installation** - Professional dashcam setup
5. **Racing Strips** - Custom racing stripe designs
6. **Custom Decals** - Personalized vehicle graphics

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
noirautospa-website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Color Palette

- **Primary Black (Noir)**: #0a0a0a
- **Golden Accent**: #f59e0b, #d97706
- **Text**: White (#ffffff) on dark backgrounds

## 📱 Pages

- **Home** - Hero section with 3D car, features, services preview, stats, testimonials
- **About** - Company story, mission, values, and team information
- **Services** - Detailed service cards with images, features, and pricing
- **Contact** - Contact form with validation, business info, and FAQ

## ✨ Key Features

### Image Zoom Effect
Service cards feature smooth image zoom on hover within their containers.

### Horizontal Gallery
A beautiful horizontal scrolling gallery showcasing portfolio work with vertical images.

### 3D Hero Section
Interactive 3D car model that auto-rotates in the hero section.

### Smooth Animations
All sections feature smooth scroll-triggered animations using Framer Motion.

## 🚀 Deployment

To deploy the website:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider (Vercel, Netlify, etc.)

---

Built with ❤️ for automotive excellence
