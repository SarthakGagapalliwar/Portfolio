# Email Contact Form Setup Guide

## 🚀 Quick Start

Your contact form is ready! Choose one of two methods:

### Option 1: Nodemailer + Gmail (Server-Side) - **RECOMMENDED**

**Pros:** More reliable, server-side processing, no API key exposure
**Cons:** Requires Gmail app password setup

#### Setup Steps:

1. **Enable 2-Factor Authentication on Gmail:**

   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security > Enable 2-Step Verification

2. **Generate Gmail App Password:**

   - In Google Account Settings: Security > 2-Step Verification > App passwords
   - Select "Mail" as the app type
   - Copy the 16-character password (format: xxxx-xxxx-xxxx-xxxx)

3. **Update `.env.local` file:**

   ```env
   GMAIL_USER=sarthakgagapalliwar07@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password-here
   ```

4. **Restart your development server:**
   ```bash
   pnpm dev
   ```

✅ **That's it! Your form will now send emails to sarthakgagapalliwar07@gmail.com**

---

### Option 2: EmailJS (Client-Side Alternative)

**Pros:** No server setup, easier for static deployments
**Cons:** API keys visible in client code, rate limiting

#### Setup Steps:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Configure your email service:**

   - Add Gmail service in EmailJS dashboard
   - Create an email template
   - Note your Service ID, Template ID, and User ID

3. **Install EmailJS:**

   ```bash
   pnpm add @emailjs/browser
   ```

4. **Use the EmailJS version:**
   - Replace ContactForm.tsx import with ContactFormEmailJS.tsx
   - Update the IDs in the component

---

## 📧 Email Features

### What happens when someone submits the form:

- ✅ Validation of all required fields
- ✅ Professional HTML email template
- ✅ Sender's contact info included
- ✅ Reply-to functionality for easy responses
- ✅ Success/error feedback to user
- ✅ Form reset after successful submission

### Email Template Includes:

- Sender's name and email address
- Subject line from the form
- Full message content
- Professional formatting
- Easy reply functionality

---

## 🔒 Security & Best Practices

- ✅ Environment variables are in `.gitignore`
- ✅ Never commit `.env.local` to version control
- ✅ App passwords are safer than main Gmail password
- ✅ Form validation prevents spam submissions
- ✅ Rate limiting can be added if needed

---

## 🛠 Troubleshooting

**Email not sending?**

1. Check `.env.local` file exists and has correct values
2. Verify Gmail app password is 16 characters (no spaces)
3. Ensure 2FA is enabled on Gmail
4. Restart your development server after env changes

**Still having issues?**

- Check browser console for errors
- Verify API route is accessible at `/api/send-email`
- Test with a simple curl request to the API

---

## 📝 Customization

**Want to change the receiving email?**

- Update line 25 in `/src/app/api/send-email/route.ts`

**Want to modify the email template?**

- Edit the HTML content in the `mailOptions.html` section

**Want to add more form fields?**

- Add them to the `FormData` interface and form JSX
- Include them in the email template
