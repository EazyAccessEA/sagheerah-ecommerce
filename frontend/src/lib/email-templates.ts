// Email Templates for FormSubmit.io
// ClarityOS™ Compliance: Clear, professional communication

export const emailTemplates = {
  // Notification email (sent to admin)
  notification: {
    subject: '🎯 New Sagheerah Waitlist Signup - Action Required',
    body: `
      NEW WAITLIST SIGNUP RECEIVED
      
      📧 Email: {email}
      📅 Date: {date}
      🕐 Time: {time}
      
      ✅ STATUS: Successfully added to Sagheerah waitlist
      📊 TOTAL SIGNUPS: [Auto-calculated by FormSubmit.io]
      
      NEXT ACTIONS:
      1. Monitor signup trends
      2. Prepare launch sequence
      3. Review subscriber demographics
      
      This subscriber will receive a welcome email automatically.
    `,
  },
  
  // Welcome email (sent to subscriber)
  welcome: {
    subject: '🎉 Welcome to Sagheerah - You\'re Successfully Added to Our Waitlist!',
    body: `
      Dear {email},
      
      ✅ CONFIRMATION: You have been successfully added to the Sagheerah waitlist.
      
      🎯 WHAT HAPPENS NEXT:
      • You'll receive exclusive early access when we launch
      • Be the first to see our luxury modest fashion collection
      • Get special pricing and limited edition pieces
      
      📅 TIMELINE: Launch expected in Q1 2025
      🏷️ COLLECTION: Timeless jilbābs, khimārs, and niqābs
      💎 POSITIONING: Luxury modest fashion without compromise
      
      🎨 OUR PROMISE:
      Rooted in reverence, refined by design. We craft timeless pieces that celebrate elegance and dignity.
      
      📱 STAY CONNECTED:
      • Follow us on Instagram: @sagheerah
      • Visit our website: sagheerah.com
      • Share with friends who appreciate modest luxury
      
      Best regards,
      The Sagheerah Team
      
      ---
      🔄 UNSUBSCRIBE: Reply to this email with "UNSUBSCRIBE"
      📧 CONTACT: hello@sagheerah.com
    `,
  },
  
  // Auto-response template for FormSubmit.io
  autoresponse: {
    subject: '🎉 Welcome to Sagheerah - You\'re Successfully Added!',
    body: `
      ✅ CONFIRMATION: You have been successfully added to the Sagheerah waitlist.
      
      🎯 WHAT HAPPENS NEXT:
      • You'll receive exclusive early access when we launch
      • Be the first to see our luxury modest fashion collection
      • Get special pricing and limited edition pieces
      
      📅 TIMELINE: Launch expected in Q1 2025
      🏷️ COLLECTION: Timeless jilbābs, khimārs, and niqābs
      💎 POSITIONING: Luxury modest fashion without compromise
      
      🎨 OUR PROMISE:
      Rooted in reverence, refined by design. We craft timeless pieces that celebrate elegance and dignity.
      
      📱 STAY CONNECTED:
      • Follow us on Instagram: @sagheerah
      • Visit our website: sagheerah.com
      
      Best regards,
      The Sagheerah Team
      
      ---
      🔄 UNSUBSCRIBE: Reply to this email with "UNSUBSCRIBE"
      📧 CONTACT: hello@sagheerah.com
    `,
  },
};

export default emailTemplates; 