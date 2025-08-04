# 🏛 SAGHEERAH — SILICON VALLEY S-TIER RETAIL BUILD MANIFESTO (Master Plan)

**This file is the single, authoritative prompt for every task, commit, issue, and decision in the Sagheerah retail site project.**

## 🎯 CORE MISSION & VISION

* **Mission:** Build the most elegant **modest fashion e-commerce site** on the internet, blending Silicon Valley-level engineering with luxury-brand design.
* **Vision:** Deliver a **flawless UX** – fluid, luxurious, and highly functional. Every interaction should exude quality, trust, and style.
* **No Compromises:** Prioritize quality over speed. Simplicity, performance, security, and beauty are **requirements**.

## 🌟 SUCCESS METRICS

* **Lighthouse Scores:** 98+ Performance, 100 Accessibility, 90+ SEO, 90+ Best Practices
* **Speed:** < 1.5s First Contentful Paint (FCP), < 100ms Medusa API response times
* **Uptime & Load:** 99.9% uptime; gracefully handle 10k+ concurrent users
* **Accessibility:** > 95% WCAG AAA compliance across pages
* **Security:** 0 critical vulnerabilities; **no** data breaches
* **Conversion & UX:** < 0.2% error rate in checkout; high engagement

## 🏗 STACK & INFRASTRUCTURE

* **Frontend – Next.js 15 (React 18):** App Router, SSR/SSG, hybrid rendering
* **Backend – Medusa.js (Node.js):** PostgreSQL, stateless design
* **State Management:** React Context + useState for UI, React Query for server state
* **Styling:** Stitches CSS-in-JS with custom design system
* **Images & Media:** Cloudinary with 250KB max image budget
* **Search:** Algolia for instant, typo-tolerant search
* **Payments:** Stripe with Apple Pay, Google Pay, PayPal
* **Internationalization:** next-intl with RTL support
* **Analytics:** Vercel Analytics, Sentry for error monitoring
* **DevOps:** Vercel (frontend), Render (backend), GitHub Actions CI/CD

## 🎨 DESIGN SYSTEM & UX GUIDELINES

### Color Palette
* **Rich Emerald** `#073331` – primary accent
* **Camel** `#AC8C6A` – warm secondary accents
* **Cosmic Latte** `#FFF7E6` – base background
* **Gainsboro** `#D6D8D7` – neutral grey

### Typography
* **Caslon** for headings (elegant serif)
* **Century Gothic** for body text (clean sans-serif)
* Clear type scale with proper fallbacks

### Spacing & Layout
* 8px base grid system
* Consistent spacing multiples
* Generous padding and margin for luxury feel

### Component Specifications
* **Buttons:** Rich Emerald background, white text, sharp corners, 12px 28px padding
* **Product Cards:** Minimalist design, 320px fixed height, soft shadow
* **Forms:** Generous padding, clear borders, accessible focus states

## 📜 ENGINEERING PRINCIPLES

✅ **Clean, Modular Code:** Small, pure functions (< 50 lines), files < 300 lines
✅ **DRY & Reusable:** Abstract common functionality, build atomic components
✅ **Documentation & Clarity:** Every function documented, self-explanatory code
✅ **Robust Error Handling:** Anticipate failures, graceful fallbacks
✅ **Performance Mindset:** Avoid unnecessary re-renders, lazy-loading
✅ **Iterative Development:** Small commits/PRs, no big-bang merges
✅ **Automated Tests & Linting:** 90%+ test coverage, Playwright E2E
✅ **Git Hygiene:** Conventional Commits, clean history

## 🛠 PROJECT WORKFLOW

* **Branching Strategy:** `main` (production), `feature/*` (features)
* **Commit & PR Process:** All changes through PRs, conventional commits
* **Code Review:** At least one reviewer, all comments resolved
* **CI/CD:** GitHub Actions for linting, tests, builds
* **Task Management:** GitHub Issues for tracking

## ⚙️ DEVOPS & DEPLOYMENT

* **Environments:** Development, Staging, Production
* **CI/CD Pipeline:** Auto-deploy on `main` branch
* **Monitoring:** Uptime monitoring, performance alerts
* **Backups:** Daily automated PostgreSQL backups
* **Security:** Cloudflare WAF, HTTPS everywhere

## 🔐 SECURITY & COMPLIANCE

* **Network Security:** HTTPS (TLS 1.3), Cloudflare WAF
* **Authentication:** Medusa built-in auth, strong passwords
* **Data Encryption:** No plaintext sensitive data, GDPR compliance
* **Input Validation:** Schema validation, sanitization
* **Dependency Security:** Regular updates, vulnerability scanning

## 🌍 INTERNATIONALIZATION

* **Language Support:** English first, plan for Arabic, French
* **RTL Layout:** Right-to-left support for Arabic
* **Locale-specific Content:** Currency, units, imagery variations
* **Testing:** Pseudo-localization, fallback handling

## ♿ ACCESSIBILITY REQUIREMENTS

* **WCAG 2.1 AAA** compliance target
* **Color Contrast:** 4.5:1 minimum, 7:1 for important text
* **Keyboard Navigation:** Full keyboard accessibility
* **Screen Reader Support:** Semantic HTML, ARIA roles
* **Reduced Motion:** Respect user preferences

## ⚡ PERFORMANCE & OPTIMIZATION

* **Bundle Size:** ≤ 150 KB gzipped critical path
* **Asset Optimization:** WebP/AVIF images, font optimization
* **Loading Strategy:** SSG for static pages, ISR for products
* **Network Optimization:** ≤ 3 HTTP requests on initial load
* **Runtime Performance:** 60fps animations, GPU acceleration

## 🪜 STEP-BY-STEP IMPLEMENTATION

### STEP 1 — BACKEND FOUNDATION (Medusa)
- Scaffold Medusa project with PostgreSQL
- Configure multi-currency and Stripe integration
- Set up testing infrastructure
- Document setup process

### STEP 2 — FRONTEND FOUNDATION (Next.js)
- Scaffold Next.js 15 app with App Router
- Integrate Medusa SDK
- Set up Stitches theme system
- Define basic routing structure

### STEP 3 — DESIGN SYSTEM INIT
- Implement typography and color theme
- Build atomic components (Button, ProductCard, etc.)
- Set up Storybook for component development
- Create layout components and iconography

### STEP 4 — PAGES & ROUTING SETUP
- Home page with hero section
- Shop page with product grid
- Product detail pages with dynamic routing
- Utility pages (About, Contact, 404)

### STEP 5 — HEADER & FOOTER
- Navigation with mobile hamburger menu
- Currency selector and search bar
- Cart icon with badge
- Minimalist footer design

### STEP 6 — PRODUCT DETAIL PAGE
- High-res image gallery with zoom
- Product info and variant selection
- Add to bag functionality
- Related products and recently viewed

### STEP 7 — CART & CHECKOUT FLOW
- Sliding cart sidebar
- One-page checkout experience
- Stripe integration with Apple/Google Pay
- Order confirmation and thank you page

### STEP 8 — CONTENT & CMS INTEGRATION
- Replace placeholder content with real copy
- Integrate headless CMS for static pages
- Optimize images and multimedia
- Content review and refinement

### STEP 9 — ENHANCEMENTS & MICRO-INTERACTIONS
- Framer Motion polish and animations
- Algolia instant search integration
- Performance tuning and optimization
- Cross-browser and device testing

### STEP 10 — FINAL PERFORMANCE & LAUNCH PREP
- Full Lighthouse audit
- Accessibility verification
- Security testing and compliance check
- Load testing and stakeholder sign-off

## 🚀 LAUNCH CRITERIA

Before launch, verify:
- [ ] Zero P0 bugs
- [ ] ≥ 95% test coverage
- [ ] Performance targets met
- [ ] Accessibility verified
- [ ] Security compliance checked
- [ ] User acceptance tested
- [ ] Load test passed
- [ ] Stakeholder sign-off
- [ ] Backup & monitoring ready

## 🏁 FINAL VISION

> **Sagheerah must feel like Apple launching a modest fashion house in Milan.**
> No compromises. Every interaction, every pixel — **S-tier design, S-tier engineering**.

---

*This document serves as the operating system for AI advisors and development teams. All guidance must be followed in code, design, and process. Build in achievable small stages with methodical precision.* 