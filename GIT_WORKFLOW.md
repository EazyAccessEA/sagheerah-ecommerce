# 🔄 SAGHEERAH GIT WORKFLOW & DEVELOPMENT RULES

> **Status:** Active Development Workflow  
> **Enforcement:** Mandatory for all contributors  
> **Review:** Required for all changes

---

## 🎯 **WORKFLOW OVERVIEW**

### **Development Philosophy**
- **Quality First:** Every commit must improve the codebase
- **Clear Communication:** Commit messages tell a story
- **Incremental Progress:** Small, focused changes
- **Continuous Integration:** Automated testing and deployment
- **Documentation:** Code changes include documentation updates

### **Branch Strategy**
```
main (production-ready)
├── develop (integration branch)
├── feature/coming-soon-page
├── feature/product-detail
├── feature/cart-checkout
├── bugfix/header-mobile-menu
└── hotfix/critical-security-patch
```

---

## 📝 **COMMIT MESSAGE RULES**

### **Conventional Commits Format**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### **Type Categories**
- **feat:** New feature for users
- **fix:** Bug fix for users
- **docs:** Documentation changes
- **style:** Code style changes (formatting, missing semicolons, etc.)
- **refactor:** Code refactoring (no functional changes)
- **perf:** Performance improvements
- **test:** Adding or updating tests
- **chore:** Maintenance tasks, dependencies, etc.
- **ci:** CI/CD changes
- **build:** Build system changes
- **revert:** Revert previous commits

### **Scope Examples**
- `feat(header): add mobile menu functionality`
- `fix(product-card): resolve image loading issue`
- `docs(readme): update installation instructions`
- `style(theme): adjust color palette spacing`
- `refactor(api): optimize product fetching logic`

### **Commit Message Examples**

#### ✅ **Good Examples**
```bash
feat(coming-soon): implement email collection with Mailchimp

- Add API route for email subscription
- Integrate Mailchimp API with error handling
- Add form validation and success states
- Update footer with newsletter signup

Closes #123
```

```bash
fix(header): resolve mobile menu accessibility issues

- Add focus trap for keyboard navigation
- Implement escape key to close menu
- Fix ARIA labels for screen readers
- Add backdrop click to close functionality

Fixes #456
```

```bash
docs(strategy): add coming soon page implementation guide

- Complete design specifications
- Add technical implementation steps
- Include deployment strategy
- Document email collection setup

Part of #789
```

#### ❌ **Bad Examples**
```bash
# Too vague
git commit -m "fix stuff"

# No type or scope
git commit -m "updated header"

# Too long without structure
git commit -m "fixed the mobile menu that was broken on iPhone and also added some new features to make it work better with the new design system we implemented last week"
```

### **Commit Message Rules**
1. **First line:** 50 characters or less
2. **Use imperative mood:** "add" not "added"
3. **Don't end with period**
4. **Separate subject from body with blank line**
5. **Use body to explain what and why, not how**
6. **Reference issues:** `Closes #123` or `Fixes #456`

---

## 🌿 **BRANCH NAMING CONVENTIONS**

### **Branch Types**
- **feature/:** New features (e.g., `feature/coming-soon-page`)
- **bugfix/:** Bug fixes (e.g., `bugfix/header-mobile-menu`)
- **hotfix/:** Critical production fixes (e.g., `hotfix/security-patch`)
- **docs/:** Documentation updates (e.g., `docs/api-documentation`)
- **refactor/:** Code refactoring (e.g., `refactor/product-data-structure`)
- **test/:** Test additions/updates (e.g., `test/header-component`)
- **chore/:** Maintenance tasks (e.g., `chore/update-dependencies`)

### **Branch Naming Rules**
- Use lowercase letters
- Use hyphens to separate words
- Be descriptive but concise
- Include ticket number if applicable: `feature/123-coming-soon-page`

---

## 🔄 **PULL REQUEST RULES**

### **PR Title Format**
```
[Type] Brief description of changes

Examples:
- [Feature] Add coming soon page with email collection
- [Fix] Resolve mobile menu accessibility issues
- [Docs] Update API documentation
- [Refactor] Optimize product data structure
```

### **PR Description Template**
```markdown
## 🎯 **Overview**
Brief description of what this PR accomplishes.

## 🔧 **Changes Made**
- [ ] Feature A: Description
- [ ] Feature B: Description
- [ ] Bug fix: Description

## 🧪 **Testing**
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Mobile responsiveness verified
- [ ] Accessibility tested

## 📸 **Screenshots**
[Add screenshots for UI changes]

## 🔗 **Related Issues**
Closes #123
Part of #456

## 📋 **Checklist**
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
- [ ] Performance impact assessed
```

### **PR Review Requirements**
1. **At least 2 approvals** required for merge
2. **All CI checks must pass**
3. **No merge conflicts**
4. **Up-to-date with main branch**
5. **Screenshots for UI changes**
6. **Testing documentation**

---

## 🐛 **ISSUE TRACKING RULES**

### **Issue Types**
- **🐛 Bug:** Something isn't working
- **✨ Feature:** New functionality request
- **📚 Documentation:** Documentation improvements
- **🔧 Enhancement:** Improvement to existing feature
- **🚀 Epic:** Large feature with multiple sub-tasks
- **🏗 Infrastructure:** DevOps, CI/CD, deployment
- **🧪 Test:** Testing improvements
- **🎨 Design:** UI/UX improvements

### **Issue Title Format**
```
[Type] Brief description of issue

Examples:
- [Bug] Mobile menu doesn't close on backdrop click
- [Feature] Add product image zoom functionality
- [Enhancement] Improve email collection form UX
- [Epic] Implement complete checkout flow
```

### **Issue Description Template**
```markdown
## 🎯 **Description**
Clear description of the issue or feature request.

## 🔍 **Steps to Reproduce** (for bugs)
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## ✅ **Expected Behavior**
What should happen.

## ❌ **Actual Behavior** (for bugs)
What actually happens.

## 📸 **Screenshots**
[Add screenshots if applicable]

## 💻 **Environment**
- OS: [e.g., macOS, Windows]
- Browser: [e.g., Chrome, Safari]
- Version: [e.g., 22]

## 🎨 **Design Requirements** (for features)
- Color scheme: [specify]
- Layout: [describe]
- Interactions: [explain]

## 📋 **Acceptance Criteria**
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## 🔗 **Related Issues**
Links to related issues or PRs
```

---

## 🚀 **DEPLOYMENT WORKFLOW**

### **Environment Strategy**
- **main:** Production (auto-deploy to Vercel)
- **develop:** Staging (auto-deploy to staging)
- **feature branches:** Preview deployments

### **Deployment Rules**
1. **main branch:** Only merge after PR approval and CI pass
2. **Hotfixes:** Create hotfix branch from main
3. **Feature flags:** Use for gradual rollouts
4. **Rollback plan:** Always have rollback strategy

### **Pre-Deployment Checklist**
- [ ] All tests pass
- [ ] Code review completed
- [ ] Performance impact assessed
- [ ] Security review (if applicable)
- [ ] Documentation updated
- [ ] Environment variables configured

---

## 🧪 **TESTING REQUIREMENTS**

### **Test Coverage Rules**
- **Minimum 80%** code coverage for new features
- **100% coverage** for critical paths (checkout, payments)
- **E2E tests** for user journeys
- **Accessibility tests** for UI components

### **Testing Checklist**
- [ ] Unit tests written and passing
- [ ] Integration tests updated
- [ ] E2E tests for critical flows
- [ ] Accessibility tests (axe-core)
- [ ] Performance tests (Lighthouse)
- [ ] Cross-browser testing

---

## 📊 **CODE QUALITY RULES**

### **Linting & Formatting**
- **ESLint:** No errors or warnings
- **Prettier:** Consistent code formatting
- **TypeScript:** Strict mode enabled
- **Pre-commit hooks:** Automatic formatting

### **Performance Standards**
- **Lighthouse Score:** 90+ (Performance, Accessibility, SEO)
- **Bundle Size:** < 150KB gzipped
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s

### **Security Requirements**
- **No secrets** in code
- **Input validation** on all forms
- **XSS protection** implemented
- **CSRF protection** for forms
- **Dependency scanning** enabled

---

## 📚 **DOCUMENTATION RULES**

### **Required Documentation**
- **README.md:** Project overview and setup
- **API Documentation:** All endpoints documented
- **Component Documentation:** Storybook for UI components
- **Architecture Decisions:** ADR (Architecture Decision Records)
- **Deployment Guide:** Step-by-step deployment instructions

### **Documentation Updates**
- [ ] Update README for new features
- [ ] Add API documentation for new endpoints
- [ ] Update component stories for UI changes
- [ ] Document breaking changes
- [ ] Update deployment instructions

---

## 🔄 **DAILY DEVELOPMENT WORKFLOW**

### **Morning Routine**
1. **Pull latest changes:** `git pull origin main`
2. **Check CI status:** Verify all builds are green
3. **Review open PRs:** Check for review requests
4. **Update progress:** Update PROGRESS_CHECKLIST.md

### **Development Process**
1. **Create feature branch:** `git checkout -b feature/description`
2. **Make changes:** Follow coding standards
3. **Test thoroughly:** Run all tests locally
4. **Commit frequently:** Small, focused commits
5. **Push and create PR:** Use PR template

### **End of Day**
1. **Update documentation:** Any changes made
2. **Push progress:** Commit and push changes
3. **Review tomorrow's tasks:** Plan next steps
4. **Update checklist:** Mark completed items

---

## 🚨 **EMERGENCY PROCEDURES**

### **Hotfix Process**
1. **Create hotfix branch:** `git checkout -b hotfix/critical-issue`
2. **Fix the issue:** Minimal, focused changes
3. **Test thoroughly:** Ensure fix works
4. **Create PR:** Use hotfix template
5. **Expedited review:** Get quick approval
6. **Deploy immediately:** Merge to main

### **Rollback Process**
1. **Identify the issue:** Determine what broke
2. **Create rollback PR:** Revert problematic commit
3. **Test rollback:** Verify fix
4. **Deploy rollback:** Merge immediately
5. **Investigate root cause:** Prevent recurrence

---

## 📈 **PROGRESS TRACKING**

### **Weekly Reviews**
- **Monday:** Review previous week's progress
- **Wednesday:** Mid-week status check
- **Friday:** Plan next week's priorities

### **Monthly Reviews**
- **Progress against MASTER_PLAN.md**
- **Update PROGRESS_CHECKLIST.md**
- **Review and update strategy documents**
- **Plan next month's objectives**

### **Quarterly Reviews**
- **Major milestone assessments**
- **Strategy adjustments**
- **Team performance review**
- **Technology stack evaluation**

---

## 🎯 **ENFORCEMENT & COMPLIANCE**

### **Automated Checks**
- **Pre-commit hooks:** Formatting and linting
- **CI/CD pipeline:** Tests and quality gates
- **Dependency scanning:** Security vulnerabilities
- **Performance monitoring:** Lighthouse CI

### **Manual Reviews**
- **Code review:** All changes require review
- **Design review:** UI changes need approval
- **Security review:** Sensitive changes
- **Architecture review:** Major changes

### **Compliance Requirements**
- **Accessibility:** WCAG 2.1 AA compliance
- **Performance:** Meet performance budgets
- **Security:** No critical vulnerabilities
- **Documentation:** All changes documented

---

## 🚀 **QUICK REFERENCE**

### **Common Commands**
```bash
# Create feature branch
git checkout -b feature/description

# Commit with conventional format
git commit -m "feat(scope): description"

# Push and create PR
git push origin feature/description

# Update from main
git checkout main && git pull && git checkout feature/description && git rebase main
```

### **PR Checklist**
- [ ] Title follows convention
- [ ] Description complete
- [ ] Tests included
- [ ] Documentation updated
- [ ] Screenshots added (if UI)
- [ ] Self-review completed

### **Issue Checklist**
- [ ] Clear description
- [ ] Steps to reproduce (bugs)
- [ ] Expected vs actual behavior
- [ ] Environment details
- [ ] Acceptance criteria
- [ ] Related issues linked

---

## 📞 **SUPPORT & ESCALATION**

### **When to Escalate**
- **Security issues:** Immediate escalation
- **Production outages:** Emergency procedures
- **Breaking changes:** Architecture review required
- **Performance regressions:** Performance review needed

### **Contact Information**
- **Tech Lead:** [Add contact]
- **Design Lead:** [Add contact]
- **Product Owner:** [Add contact]
- **DevOps:** [Add contact]

---

*This workflow ensures consistent, high-quality development practices and maintains project momentum. All team members must follow these rules for successful project delivery.* 