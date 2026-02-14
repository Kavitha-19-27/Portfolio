# Kavitha M - Portfolio Design Specification & Implementation Prompt

**Author:** Kavitha M (First-Year MERN Stack Learner)  
**Role:** UI/UX Designer & Prompt Engineer  
**Date:** February 2026

---

## 1. Design Brief & Visual Direction

### Brand Identity
- **Tone:** Professional yet approachable, clean, modern, student-friendly
- **Mood:** Fresh, confident, tech-savvy, minimalist

### Color Palette

| Role | Color | Hex Code | Usage |
|------|-------|----------|-------|
| Primary | Deep Indigo | `#4F46E5` | CTAs, links, accent elements |
| Primary Light | Soft Indigo | `#818CF8` | Hover states, secondary accents |
| Background | Off-White | `#FAFAFA` | Main background |
| Surface | Pure White | `#FFFFFF` | Cards, sections |
| Text Primary | Charcoal | `#1F2937` | Headings, body text |
| Text Secondary | Slate Gray | `#6B7280` | Captions, meta info |
| Accent | Coral | `#F97316` | Highlights, badges |
| Success | Emerald | `#10B981` | Status indicators |

### Typography

| Element | Font Family | Weight | Size (Desktop) | Size (Mobile) |
|---------|-------------|--------|----------------|---------------|
| H1 (Hero) | Inter | 700 | 3.5rem (56px) | 2.25rem (36px) |
| H2 (Section) | Inter | 600 | 2.25rem (36px) | 1.75rem (28px) |
| H3 (Card Title) | Inter | 600 | 1.5rem (24px) | 1.25rem (20px) |
| Body | Inter | 400 | 1rem (16px) | 1rem (16px) |
| Small | Inter | 400 | 0.875rem (14px) | 0.875rem (14px) |

**Font Stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Layout Language
- **Grid:** 12-column CSS Grid with 24px gutters
- **Max-width:** 1200px container
- **Spacing Scale:** 4px base unit (4, 8, 16, 24, 32, 48, 64, 96px)
- **Border Radius:** 8px (cards), 4px (buttons), 50% (avatars)
- **Shadows:** Subtle elevation using `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1)`

---

## 2. Page Structure & Content Plan

### Section Breakdown

```
┌─────────────────────────────────────────────────────┐
│                    NAVIGATION                        │
│  Logo (Kavitha M)    Home | About | Projects | Contact │
├─────────────────────────────────────────────────────┤
│                                                      │
│                    HERO SECTION                      │
│  "Hi, I'm Kavitha M"                                │
│  "Aspiring Full-Stack Developer"                    │
│  [View My Work] [Download Resume]                   │
│                         [Profile Image Placeholder] │
│                                                      │
├─────────────────────────────────────────────────────┤
│                    ABOUT SECTION                     │
│  Brief intro paragraph about learning journey       │
│  Tech interests, goals, fun fact                    │
│                                                      │
├─────────────────────────────────────────────────────┤
│                   PROJECTS SECTION                   │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │   Project 1      │  │   Project 2      │        │
│  │   [Thumbnail]    │  │   [Thumbnail]    │        │
│  │   Title          │  │   Title          │        │
│  │   Description    │  │   Description    │        │
│  │   [Live] [Code]  │  │   [Live] [Code]  │        │
│  └──────────────────┘  └──────────────────┘        │
│                                                      │
├─────────────────────────────────────────────────────┤
│                    SKILLS SECTION                    │
│  HTML | CSS | JavaScript | React | Node.js | Git   │
│  (Progress bars or icon grid)                       │
│                                                      │
├─────────────────────────────────────────────────────┤
│                   CONTACT SECTION                    │
│  Email | LinkedIn | GitHub icons                    │
│  Simple contact form (Name, Email, Message)         │
│                                                      │
├─────────────────────────────────────────────────────┤
│                      FOOTER                          │
│  © 2026 Kavitha M | Made with ❤️                    │
└─────────────────────────────────────────────────────┘
```

### Content Placeholders

#### Hero Section
```
Greeting: "Hi, I'm"
Name: "Kavitha M"
Tagline: "First-Year Student & Aspiring MERN Stack Developer"
Description: "I'm passionate about building beautiful, functional web experiences. Currently learning and growing one project at a time."
CTA Primary: "View My Work"
CTA Secondary: "Download Resume"
Image: [400x400 profile-placeholder.jpg]
```

#### About Section
```
Heading: "About Me"
Paragraph 1: "I'm a first-year computer science student with a deep curiosity for web development. My journey into coding began with [insert origin story], and since then, I've been hooked on creating digital experiences."
Paragraph 2: "When I'm not coding, you'll find me [hobby 1], [hobby 2], or exploring the latest tech trends. I believe in continuous learning and am excited to grow as a developer."
Fun Fact: "Fun fact: [Insert interesting personal detail]"
```

#### Projects Section
```
Heading: "My Projects"
Subheading: "A selection of work I'm proud of"

Project 1:
- Title: "Task Manager App"
- Description: "A responsive to-do list application with local storage persistence, drag-and-drop reordering, and category filtering."
- Tech Stack: ["HTML", "CSS", "JavaScript"]
- Image: [project1-placeholder.jpg - 600x400]
- Live Demo URL: "#"
- GitHub URL: "#"

Project 2:
- Title: "Weather Dashboard"
- Description: "A weather application fetching real-time data from OpenWeather API with location search and 5-day forecast display."
- Tech Stack: ["HTML", "CSS", "JavaScript", "API"]
- Image: [project2-placeholder.jpg - 600x400]
- Live Demo URL: "#"
- GitHub URL: "#"
```

#### Skills Section
```
Heading: "Skills & Technologies"

Technical Skills:
- HTML5 (85%)
- CSS3/Flexbox/Grid (80%)
- JavaScript ES6+ (70%)
- React (Learning - 40%)
- Node.js (Learning - 30%)
- Git/GitHub (75%)

Soft Skills:
- Problem Solving
- Communication
- Team Collaboration
- Quick Learner
```

#### Contact Section
```
Heading: "Let's Connect"
Subheading: "I'm always open to discussing new opportunities, collaborations, or just chatting about tech!"

Form Fields:
- Name (required)
- Email (required)
- Message (required, textarea)
- Submit Button: "Send Message"

Social Links:
- Email: kavitha.m@example.com
- LinkedIn: linkedin.com/in/kavitham
- GitHub: github.com/kavitham
```

---

## 3. UI/UX Guidelines

### Responsive Behavior

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Desktop | ≥1024px | Full layout, side-by-side hero, 2-column projects |
| Tablet | 768px–1023px | Stacked hero, 2-column projects, reduced padding |
| Mobile | <768px | Single column, hamburger nav, full-width cards |

### Mobile-First Approach
```css
/* Base styles (mobile) */
.container { padding: 0 16px; }

/* Tablet */
@media (min-width: 768px) {
  .container { padding: 0 32px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; }
}
```

### Accessibility Targets (WCAG 2.1 AA)

| Requirement | Target | Implementation |
|-------------|--------|----------------|
| Color Contrast (Normal Text) | ≥4.5:1 | #1F2937 on #FAFAFA = 12.6:1 ✓ |
| Color Contrast (Large Text) | ≥3:1 | #4F46E5 on #FFFFFF = 5.9:1 ✓ |
| Focus Indicators | Visible | 3px outline, offset 2px |
| Touch Targets | ≥44x44px | Buttons min 44px height |
| Alt Text | All images | Descriptive, concise |
| Heading Hierarchy | Logical | h1 > h2 > h3, no skipping |
| Skip Link | Present | First focusable element |

### Keyboard Navigation
```
Tab Order:
1. Skip to main content link
2. Navigation links (Logo → Home → About → Projects → Contact)
3. Hero CTAs
4. Project cards (Live Demo → GitHub for each)
5. Skills section (if interactive)
6. Contact form inputs
7. Social links
8. Footer links

Focus States:
- Outline: 3px solid #4F46E5
- Outline-offset: 2px
- Background change on buttons
```

### ARIA Implementation
```html
<!-- Navigation -->
<nav aria-label="Main navigation">
<button aria-expanded="false" aria-controls="mobile-menu">

<!-- Sections -->
<section aria-labelledby="about-heading">
<h2 id="about-heading">About Me</h2>

<!-- Project Cards -->
<article aria-labelledby="project-1-title">

<!-- Modal -->
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">

<!-- Form -->
<form aria-labelledby="contact-heading">
<input aria-required="true" aria-describedby="name-error">
```

---

## 4. Executable Frontend Prompt

### 🎯 LLM Implementation Prompt

```
Create a complete, production-ready static portfolio website for Kavitha M, a first-year MERN stack student. Generate clean, semantic HTML5, modern CSS3 (no frameworks), and vanilla JavaScript.

---

## FILE STRUCTURE
Generate these files:
- index.html (main page)
- css/styles.css (all styles)
- js/main.js (interactivity)

---

## REQUIRED SECTIONS (in order)

### 1. NAVIGATION
- Fixed header with subtle backdrop blur
- Logo text: "Kavitha M" (links to #hero)
- Nav links: Home (#hero), About (#about), Projects (#projects), Contact (#contact)
- Mobile: Hamburger menu with slide-in drawer
- Skip-to-content link as first focusable element

### 2. HERO SECTION (#hero)
- Full viewport height (100vh)
- Left: Text content (greeting, name, tagline, description, 2 CTA buttons)
- Right: Circular profile image placeholder (use placeholder.com or colored div)
- Subtle gradient or geometric background
- Buttons: "View My Work" (primary, scrolls to #projects), "Download Resume" (secondary outline)

### 3. ABOUT SECTION (#about)
- Section heading with decorative accent
- 2-paragraph bio with placeholder text about being a student developer
- Subtle background differentiation from hero
- Optional: small tech icon row

### 4. PROJECTS SECTION (#projects)
- Section heading: "My Projects"
- 2 project cards in responsive grid:
  
  Card Structure:
  - Image thumbnail (placeholder)
  - Title
  - Description (2-3 sentences)
  - Tech stack badges (small pills)
  - Two buttons: "Live Demo" (external link icon), "View Code" (GitHub icon)
  
  Project 1: "Task Manager App" - To-do list with local storage
  Project 2: "Weather Dashboard" - API-based weather app
  
- On card click/button: Open modal with larger image and full details
- Cards should have hover elevation effect

### 5. SKILLS SECTION (#skills)
- Grid of skill items with icons or progress indicators
- Skills: HTML5, CSS3, JavaScript, React (learning), Node.js (learning), Git
- Use CSS-only progress bars or icon grid with labels
- Clean, scannable layout

### 6. CONTACT SECTION (#contact)
- Section heading: "Let's Connect"
- Functional contact form (frontend only, logs to console on submit):
  - Name input (required)
  - Email input (required, with validation)
  - Message textarea (required)
  - Submit button with loading state
- Social links row: Email (mailto), LinkedIn, GitHub (use placeholder URLs)
- Form validation with error messages

### 7. FOOTER
- Copyright: "© 2026 Kavitha M"
- "Made with passion" tagline
- Back-to-top button

---

## CSS REQUIREMENTS

### Variables (define in :root)
--color-primary: #4F46E5;
--color-primary-light: #818CF8;
--color-bg: #FAFAFA;
--color-surface: #FFFFFF;
--color-text: #1F2937;
--color-text-secondary: #6B7280;
--color-accent: #F97316;
--font-family: 'Inter', sans-serif;
--shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
--radius: 8px;
--transition: 0.3s ease;

### Responsive Breakpoints
- Mobile-first approach
- Tablet: 768px
- Desktop: 1024px

### Required Styles
- Smooth scrolling (scroll-behavior: smooth)
- CSS Grid for layout
- Flexbox for components
- Card hover effects (transform, shadow)
- Button hover/focus states
- Input focus states with primary color
- Accessible focus outlines (3px solid primary, 2px offset)

---

## JAVASCRIPT REQUIREMENTS

### Smooth Scrolling
- Smooth scroll to sections on nav click
- Close mobile menu after navigation

### Mobile Menu
- Toggle hamburger to X icon
- Slide-in menu animation
- Close on outside click
- Close on Escape key
- Trap focus within menu when open

### Project Modal
- Open modal on "View Details" button click
- Close on X button, outside click, Escape key
- Prevent body scroll when open
- Focus trap within modal
- Return focus to trigger button on close

### Form Handling
- Real-time validation feedback
- Email format validation
- Required field validation
- Console.log form data on valid submit
- Show success message after submission
- Reset form after success

### Back to Top Button
- Show after scrolling 300px
- Smooth scroll to top on click

### Animations
- Intersection Observer for scroll-triggered section animations
- Fade-in and slide-up effect on sections

---

## ACCESSIBILITY REQUIREMENTS

1. Semantic HTML5 elements (header, nav, main, section, article, footer)
2. Proper heading hierarchy (h1 > h2 > h3)
3. ARIA labels on interactive elements
4. Alt text on all images
5. Skip-to-main-content link
6. Focus management for modal and mobile menu
7. Keyboard navigable (Tab, Enter, Escape, Arrow keys where needed)
8. Color contrast ratio ≥4.5:1
9. Reduced motion media query support
10. Form labels properly associated with inputs

---

## VISUAL POLISH

1. Subtle gradient on hero background
2. Hover states on all interactive elements
3. Smooth transitions (0.3s ease)
4. Consistent spacing using 8px grid
5. Card shadows that increase on hover
6. Animated skill bars or progress indicators
7. Loading spinner on form submit
8. Placeholder image styling (gradient background with icon)

---

## CODE QUALITY

1. Well-commented code
2. BEM naming convention for CSS classes
3. Descriptive variable names
4. No inline styles
5. No console errors
6. Valid HTML (W3C compliant)
7. Organized CSS (reset, variables, layout, components, utilities)
8. Clean, modular JavaScript with functions

Generate complete, copy-paste ready code for all three files.
```

---

## 5. Optional Enhancements Roadmap

### Phase 1: Performance & Polish (Week 2)
- [ ] Add Google Fonts preload for Inter font
- [ ] Implement lazy loading for images (`loading="lazy"`)
- [ ] Add favicon and meta tags for SEO
- [ ] Minify CSS/JS for production
- [ ] Add Open Graph tags for social sharing

### Phase 2: Animations & Delight (Week 3)
- [ ] Scroll-triggered animations using Intersection Observer
- [ ] Typed.js effect for hero tagline
- [ ] Parallax background on hero
- [ ] Micro-interactions on buttons (ripple effect)
- [ ] Animated skill bars on scroll into view
- [ ] Page transition effects

### Phase 3: Dark Mode (Week 4)
```css
/* Dark mode CSS variables */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0F172A;
    --color-surface: #1E293B;
    --color-text: #F1F5F9;
    --color-text-secondary: #94A3B8;
  }
}
```
- [ ] Add theme toggle button
- [ ] Store preference in localStorage
- [ ] Smooth transition between themes
- [ ] Adjust shadows and borders for dark mode

### Phase 4: Advanced Features (Month 2)
- [ ] Blog section with markdown rendering
- [ ] Project filtering by technology
- [ ] Testimonials carousel
- [ ] GitHub activity integration
- [ ] Contact form with EmailJS or Formspree
- [ ] Analytics integration
- [ ] PWA manifest and service worker

### Phase 5: Content & Growth (Ongoing)
- [ ] Add more projects as completed
- [ ] Include case studies with process details
- [ ] Add certifications section
- [ ] Create project detail pages
- [ ] Add resume viewer/downloader
- [ ] Multi-language support

---

## Quick Start Checklist

- [ ] Set up project folder structure
- [ ] Create index.html with semantic structure
- [ ] Add CSS reset and custom properties
- [ ] Build mobile-first responsive layout
- [ ] Implement navigation with mobile menu
- [ ] Create hero section with CTAs
- [ ] Add about section content
- [ ] Build project cards with modal
- [ ] Create skills section
- [ ] Implement contact form with validation
- [ ] Add footer with back-to-top
- [ ] Test keyboard navigation
- [ ] Verify color contrast
- [ ] Test on multiple devices
- [ ] Deploy to GitHub Pages or Netlify

---

*This specification is designed to guide the creation of a professional, accessible, and visually appealing portfolio website for a first-year student developer. The prompt in Section 4 can be directly used with any LLM to generate implementation code.*
