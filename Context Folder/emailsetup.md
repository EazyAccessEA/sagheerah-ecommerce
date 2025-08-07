# ✅ Coming Soon Email Collection Setup (Free)

This guide explains how to collect emails on your Coming Soon page using **free tools**, without relying on Mailchimp, ConvertKit, or Brevo.

---

## 📦 Components Overview

| Component         | Tool / Service                         | Cost     | Purpose                                   |
|------------------|----------------------------------------|----------|-------------------------------------------|
| Email Collection | [FormSubmit](https://formsubmit.io)     | Free     | Send form submissions to your email       |
| Email Storage    | Google Sheets via Apps Script / Notion Form | Free | Store emails automatically                |
| Optional Backend | Cloudflare Workers or Vercel Functions | Free     | Add validation or advanced features       |

---

## ✅ Option 1: Simplest Setup Using FormSubmit.io

### 🔹 Step 1: Add HTML Form to Your Page

```html
<form action="https://formsubmit.io/send/your@email.com" method="POST">
  <input type="email" name="email" required placeholder="Enter your email">
  <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you">
  <button type="submit">Notify Me</button>
</form>
