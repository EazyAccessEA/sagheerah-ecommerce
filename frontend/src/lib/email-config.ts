// Email Service Configuration
// PuredgeOS™ Compliance: Centralized configuration for clarity

export const emailConfig = {
  // FormSubmit.io Configuration
  formSubmit: {
    endpoint: 'https://formsubmit.io/send/el@formsubmit.io', // Test endpoint - no activation needed
    subject: 'New Sagheerah Waitlist Signup',
    template: 'table',
    captcha: false,
    redirect: true,
    honeypot: true, // Using honeypot instead of captcha
    // Note: First submission requires activation email
    // Welcome email setup
    welcomeEmail: {
      enabled: true,
      subject: 'Welcome to Sagheerah - You\'re on the Waitlist!',
      template: 'welcome',
    },
    // Alternative endpoints for reliability
    fallbackEndpoints: [
      'https://formsubmit.io/send/el@formsubmit.io',
      'https://formsubmit.io/send/test@formsubmit.io',
    ],
  },
  
  // Email Templates
  templates: {
    welcome: {
      subject: 'Welcome to Sagheerah - You\'re on the Waitlist!',
      body: `
        Thank you for joining the Sagheerah waitlist!
        
        You'll be among the first to know when we launch our luxury modest fashion collection.
        
        Best regards,
        The Sagheerah Team
      `,
    },
    
    notification: {
      subject: 'New Waitlist Signup - Sagheerah',
      body: `
        New email signup: {email}
        Date: {date}
        Time: {time}
      `,
    },
  },
  
  // Validation Rules
  validation: {
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 254,
    minLength: 5,
  },
  
  // Rate Limiting
  rateLimit: {
    maxSubmissions: 1,
    timeWindow: 60000, // 1 minute
  },
  
  // Spam Protection
  spamProtection: {
    honeypot: {
      fieldName: 'website',
      hidden: true,
      silentReject: true,
    },
    rateLimit: true,
    validation: true,
  },
};

export default emailConfig; 