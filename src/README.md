# Rudra Raval - Portfolio Website

A stunning, highly interactive portfolio website showcasing my work as a Media Designer and Visual Storyteller.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![Theme](https://img.shields.io/badge/Theme-Light%20%26%20Dark-blue)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)

## ✨ Features

### 🎨 Design & Interactivity
- **Custom Cursor System** - Unique cursor with smooth animations
- **Light/Dark Theme Toggle** - Seamless theme switching with persistence
- **Glassmorphism Design** - Modern glass-effect UI elements
- **3D Card Transformations** - Interactive 3D hover effects
- **Particle System** - 150+ animated particles in hero section
- **Parallax Scrolling** - Depth and dimension throughout
- **Smooth Animations** - Motion/Framer Motion powered transitions

### 🧭 Navigation
- **Floating Navigation Bar** - Shows section labels (Home, About, Skills, etc.)
- **Active Section Indicator** - Highlights current section
- **Scroll Progress Bar** - Visual feedback of page position
- **Smooth Scrolling** - Elegant section transitions

### 📱 Sections

#### Hero Section
- Animated gradient background
- Interactive text with hover effects
- Magnetic hover elements
- Download CV button

#### About Section
- Interactive stat cards with 3D effects
- Animated background orbs
- Skills tags with animations
- Personal story and journey

#### Skills Section
- Category-based skill display
- Animated progress bars with shimmer effects
- 3D card rotations
- Proficiency indicators
- Interactive hover states

#### Projects Section
- Project showcase with filters
- Hover animations and transitions
- Image zoom effects
- Tag system

#### Experience & Education
- Interactive timeline
- 3D card design
- Pulsing animation dots
- Key highlights for each experience
- Download resume button

#### Contact Section
- Working contact form
- Social media links with animations
- Email integration (Web3Forms)
- Success/error notifications
- Form validation

### 🛠️ Technical Features
- **Fully Responsive** - Works on all devices (320px - 4K+)
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Performance** - Optimized animations and loading
- **Accessibility** - ARIA labels and keyboard navigation
- **Modern Stack** - React, TypeScript, Tailwind CSS, Motion

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rudraraval/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:5173
```

## ⚙️ Configuration

### 1. Add Your Resume
- Place your resume PDF at `/public/resume.pdf`
- Keep filename as `resume.pdf`
- Download buttons will automatically work

### 2. Setup Contact Form

**Using Web3Forms (Recommended - Free):**

1. Sign up at [web3forms.com](https://web3forms.com)
2. Get your Access Key
3. Open `/components/ContactNew.tsx`
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key
5. Update `to_email` with your email address

```typescript
// In ContactNew.tsx
access_key: 'your-actual-access-key-here',
to_email: 'your-email@example.com',
```

### 3. Update Personal Information

All personal info is in component files:
- **Name & Title:** `/components/HeroNew.tsx`
- **About Text:** `/components/AboutNew.tsx`
- **Skills:** `/components/SkillsNew.tsx`
- **Projects:** `/components/Projects.tsx`
- **Experience:** `/components/ExperienceNew.tsx`
- **Social Links:** `/components/ContactNew.tsx`

## 📂 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf              # Your resume (add here)
├── src/
│   ├── components/
│   │   ├── HeroNew.tsx         # Hero section
│   │   ├── AboutNew.tsx        # About section
│   │   ├── SkillsNew.tsx       # Skills section
│   │   ├── Projects.tsx        # Projects section
│   │   ├── ExperienceNew.tsx   # Experience section
│   │   ├── ContactNew.tsx      # Contact section
│   │   ├── FloatingNav.tsx     # Navigation bar
│   │   ├── CustomCursor.tsx    # Custom cursor
│   │   ├── ThemeToggle.tsx     # Theme switcher
│   │   └── AnimatedBackground.tsx
│   ├── styles/
│   │   └── globals.css         # Global styles & theme
│   └── App.tsx                 # Main app component
├── SETUP_INSTRUCTIONS.md       # Detailed setup guide
└── README.md                   # This file
```

## 🎨 Customization

### Change Theme Colors
Edit `/styles/globals.css`:
- Light mode: `:root` section
- Dark mode: `.dark` section

### Modify Animations
All animations use Motion (Framer Motion):
```typescript
<motion.div
  animate={{ ... }}
  transition={{ duration: 0.6 }}
/>
```

### Update Skills
Edit `/components/SkillsNew.tsx`:
```typescript
const skillCategories = [
  {
    category: 'Your Category',
    skills: [
      { name: 'Skill Name', level: 80, color: 'from-cyan-500 to-blue-500' },
    ],
  },
];
```

## 🌐 Deployment

### Recommended Platforms:

**Netlify (Easiest):**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**GitHub Pages:**
```bash
# Build
npm run build

# Deploy (use any static hosting)
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Forms:** Web3Forms
- **Build Tool:** Vite

## 📄 License

This portfolio is for personal use. Feel free to fork and customize for your own portfolio!

## 👤 About Me

**Rudra Raval**
- 📍 Toronto, Canada (from Ahmedabad, India)
- 🎓 Interactive Media Design Student at Seneca College
- 🎬 Media Designer specializing in Video Editing & Motion Graphics
- ✉️ ravalrudrap@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern web portfolios
- Built with love and passion for design ❤️

## 📞 Support

Need help? Check out:
1. `SETUP_INSTRUCTIONS.md` - Detailed setup guide
2. Browser console for error messages
3. Component comments for inline documentation

---

Made with 💙 by Rudra Raval | © 2024
