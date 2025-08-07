# 🎯 Sagheerah - Luxury Modest Fashion E-commerce

> **Status:** Active Development  
> **Design Doctrine:** PuredgeOS™ Compliance Required  
> **Framework:** Next.js 15.4.5 with TypeScript  
> **Deployment:** Vercel Production

---

## 🎨 **ABOUT SAGHEERAH**

Sagheerah is a luxury modest fashion house for women who walk with dignity and intention. We believe that true modesty, or ḥayāʾ, is not a restriction, but a profound form of strength.

**Brand Promise:** Rooted in reverence, refined by design.

---

## 🚀 **QUICK START**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**
```bash
# Clone the repository
git clone https://github.com/your-username/sagheerah-ecommerce.git
cd sagheerah-ecommerce/frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

---

## 🏗 **PROJECT STRUCTURE**

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── coming-soon/        # Coming soon page
│   │   ├── api/                # API routes
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   └── ui/                 # Reusable UI components
│   │       ├── EmailForm.tsx   # Email collection form
│   │       ├── Logo.tsx        # Brand logo component
│   │       └── AnimatedSection.tsx # Scroll animations
│   └── lib/
│       ├── theme.ts            # Design system tokens
│       ├── email-config.ts     # Email service configuration
│       └── email-templates.ts  # Email templates
├── public/                     # Static assets
│   └── Sagheerah-Logo-*.svg   # Brand logo variants
└── tailwind.config.ts          # Tailwind CSS configuration
```

---

## 🎨 **DESIGN SYSTEM**

### **PuredgeOS™ Compliance**
Every interface, interaction, and experience must pass through the PuredgeOS™ filter. This ensures:

- **Clarity of Purpose:** Every element serves a clear, definable purpose
- **Clarity of Hierarchy:** Information architecture establishes clear relationships
- **Clarity of Action:** Interactive elements communicate function before engagement
- **Clarity of State:** Current system condition is immediately apparent
- **Clarity of Feedback:** Every user action receives appropriate, immediate feedback
- **Clarity of Navigation:** Users always know their location and available paths
- **Clarity of Information:** Data presented in most comprehensible format
- **Clarity of Emotion:** Emotional tone aligns with user expectations
- **Clarity of Motion:** Animation serves functional purposes
- **Clarity of Accessibility:** Every user can access and understand the interface

### **Brand Colors**
```typescript
// Rich Emerald (Primary)
richEmerald: '#073331'

// Camel (Secondary)
camel: '#AC8C6A'

// Cosmic Latte (Background)
cosmicLatte: '#FFF7E6'

// Gainsboro (Neutral)
gainsboro: '#D6D8D7'
```

### **Typography**
- **Headings:** Caslon (serif)
- **Body:** Century Gothic (sans-serif)

---

## 📧 **EMAIL COLLECTION**

### **Current Implementation**
- **Service:** FormSubmit.io (free tier)
- **Features:** Honeypot spam protection
- **Templates:** Welcome and notification emails
- **Fallback:** Custom API route

### **Email Templates**
- **Welcome Email:** Confirmation with next steps
- **Notification Email:** Admin alerts with subscriber data
- **PuredgeOS™ Compliant:** Clear purpose, hierarchy, and action

### **Setup Instructions**
See `EMAIL_SERVICE_SETUP.md` for detailed configuration.

---

## 🚀 **DEPLOYMENT**

### **Vercel (Production)**
```bash
# Deploy to Vercel
vercel --prod

# Environment Variables
NEXT_PUBLIC_EMAIL_ENDPOINT=https://formsubmit.io/send/your-email
NODE_ENV=production
```

### **Live URLs**
- **Production:** https://frontend-pzg0m3ety-abdur-rahman-morris-projects.vercel.app
- **Coming Soon:** https://frontend-pzg0m3ety-abdur-rahman-morris-projects.vercel.app/coming-soon

---

## 🧪 **TESTING**

### **Test Pages**
- **Coming Soon:** `/coming-soon` - Main landing page
- **Design System:** `/test` - Component testing
- **SEO Test:** `/seo-test` - SEO validation

### **Testing Checklist**
- [ ] Email form submission works
- [ ] Honeypot spam protection active
- [ ] Responsive design on all devices
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] Performance optimization (Lighthouse 90+)
- [ ] ClarityOS™ compliance verified

---

## 📚 **DOCUMENTATION**

### **Key Documents**
- `EMAIL_SERVICE_SETUP.md` - Email collection configuration
- `FORMSUBMIT_ACTIVATION_GUIDE.md` - FormSubmit.io setup
- `Context Folder/clarityos.md` - Design doctrine
- `Context Folder/GIT_WORKFLOW.md` - Development workflow

### **Architecture Decisions**
- **Next.js App Router:** Modern React patterns
- **TypeScript:** Type safety and developer experience
- **Tailwind CSS:** Utility-first styling
- **FormSubmit.io:** Free, reliable email service
- **Vercel:** Zero-config deployment

---

## 🔄 **DEVELOPMENT WORKFLOW**

### **Branch Strategy**
```bash
# Create feature branch
git checkout -b feature/description

# Commit with conventional format
git commit -m "feat(scope): description"

# Push and create PR
git push origin feature/description
```

### **Commit Message Format**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### **PR Requirements**
- [ ] Conventional commit message
- [ ] ClarityOS™ compliance verified
- [ ] Tests included and passing
- [ ] Documentation updated
- [ ] Screenshots for UI changes
- [ ] Self-review completed

---

## 🎯 **ROADMAP**

### **Phase 1: Foundation** ✅
- [x] Coming soon page
- [x] Email collection system
- [x] Design system implementation
- [x] ClarityOS™ compliance

### **Phase 2: Core E-commerce**
- [ ] Product catalog
- [ ] Shopping cart
- [ ] Checkout process
- [ ] Payment integration

### **Phase 3: Advanced Features**
- [ ] User accounts
- [ ] Order management
- [ ] Inventory system
- [ ] Analytics dashboard

---

## 🤝 **CONTRIBUTING**

### **Development Rules**
1. **Follow PuredgeOS™ doctrine** for all interfaces
2. **Use conventional commits** for all changes
3. **Create feature branches** for new work
4. **Test thoroughly** before submitting PRs
5. **Update documentation** with changes

### **Code Standards**
- **TypeScript:** Strict mode enabled
- **ESLint:** No errors or warnings
- **Prettier:** Consistent formatting
- **Accessibility:** WCAG 2.1 AA compliance
- **Performance:** Lighthouse 90+ score

---

## 📞 **SUPPORT**

### **Contact Information**
- **Tech Lead:** [Add contact]
- **Design Lead:** [Add contact]
- **Product Owner:** [Add contact]

### **Issue Reporting**
Please use the GitHub issue template and include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- PuredgeOS™ impact assessment

---

## 📄 **LICENSE**

This project is proprietary to Sagheerah. All rights reserved.

---

*Every build, every screen, and every interaction runs on PuredgeOS™.* 