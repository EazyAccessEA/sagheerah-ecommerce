import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key');

export interface EmailSubscription {
  email: string;
  date: string;
  userAgent?: string;
  ip?: string;
}

export async function sendWelcomeEmail(subscriberEmail: string) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key') {
      console.log('Resend API key not configured, skipping email send');
      return { success: false, error: 'Resend API key not configured' };
    }
    
    const { data, error } = await resend.emails.send({
      from: 'Sagheerah <hello@sagheerah.com>',
      to: [subscriberEmail],
      subject: '🎉 Welcome to Sagheerah - You\'re Successfully Added!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Sagheerah</title>
          <style>
            body { 
              font-family: 'Georgia', 'Times New Roman', serif; 
              line-height: 1.8; 
              color: #1a1a1a; 
              background: #fafafa;
              margin: 0;
              padding: 0;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: #ffffff;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .header { 
              text-align: center; 
              padding: 40px 30px 30px;
              background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
              color: #ffffff;
            }
            .header h1 { 
              font-size: 28px; 
              font-weight: 300; 
              letter-spacing: 2px;
              margin: 0;
              text-transform: uppercase;
            }
            .content { 
              padding: 40px 30px; 
              background: #ffffff;
            }
            .confirmation {
              text-align: center;
              margin-bottom: 40px;
              padding: 30px;
              background: #f8f8f8;
              border-left: 4px solid #1a1a1a;
            }
            .confirmation h2 {
              font-size: 24px;
              font-weight: 400;
              margin: 0 0 15px 0;
              color: #1a1a1a;
            }
            .confirmation p {
              font-size: 16px;
              margin: 0;
              color: #4a4a4a;
            }
            .section {
              margin-bottom: 35px;
            }
            .section h3 {
              font-size: 18px;
              font-weight: 600;
              margin: 0 0 15px 0;
              color: #1a1a1a;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .section p, .section li {
              font-size: 16px;
              color: #4a4a4a;
              margin: 0 0 10px 0;
            }
            .section ul {
              margin: 15px 0;
              padding-left: 20px;
            }
            .section li {
              margin-bottom: 8px;
            }
            .timeline {
              background: #f8f8f8;
              padding: 25px;
              border-radius: 4px;
              margin: 20px 0;
            }
            .timeline h3 {
              color: #1a1a1a;
              margin-bottom: 15px;
            }
            .timeline p {
              font-size: 18px;
              font-weight: 500;
              color: #2d2d2d;
              margin: 0;
            }
            .footer { 
              text-align: center; 
              padding: 30px;
              background: #1a1a1a;
              color: #ffffff;
              font-size: 14px;
            }
            .footer p {
              margin: 5px 0;
              color: #cccccc;
            }
            .footer hr {
              border: none;
              border-top: 1px solid #333;
              margin: 20px 0;
            }
            .social-links {
              margin: 20px 0;
            }
            .social-links a {
              color: #ffffff;
              text-decoration: none;
              margin: 0 15px;
              font-size: 14px;
            }
            .social-links a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://sagheerah.com/Sagheerah-Logo-—-Rich-Emerald.svg" alt="Sagheerah" style="height: 60px; margin: 0 auto; display: block;">
              <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.8;">Dignity is Her Design</p>
            </div>
            
            <div class="content">
              <div class="confirmation">
                <h2>Welcome to Sagheerah</h2>
                <p>You have been successfully added to our exclusive waitlist.</p>
              </div>
              
              <div class="section">
                <h3>What Happens Next</h3>
                <ul>
                  <li>Exclusive early access to our launch collection</li>
                  <li>Priority access to limited edition pieces</li>
                  <li>Special pricing for waitlist members</li>
                  <li>Behind-the-scenes updates on our journey</li>
                </ul>
              </div>
              
              <div class="timeline">
                <h3>Launch Timeline</h3>
                <p>Coming Soon • Q4 2025</p>
              </div>
              
              <div class="section">
                <h3>Our Collection</h3>
                <p>Timeless jilbābs, khimārs, and niqābs crafted with reverence and intention. Each piece is designed for the woman who understands that true modesty is a profound form of strength.</p>
              </div>
              
              <div class="section">
                <h3>Our Promise</h3>
                <p>Rooted in reverence, refined by design. We believe that ḥayāʾ (modesty) is not a restriction, but a celebration of dignity and grace. Our pieces honor this legacy while embracing contemporary elegance.</p>
              </div>
              
              <div class="section">
                <h3>Stay Connected</h3>
                <p>Follow our journey as we prepare to launch the future of modest luxury fashion.</p>
              </div>
            </div>
            
            <div class="footer">
              <p>Best regards,</p>
              <p>The Sagheerah Team</p>
              <hr>
              <div class="social-links">
                <a href="mailto:hello@sagheerah.com">Contact Us</a>
                <a href="https://sagheerah.com/unsubscribe">Unsubscribe</a>
              </div>
              <p style="margin-top: 20px; font-size: 12px; opacity: 0.7;">
                Sagheerah • Luxury Modest Fashion House
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    console.log('Welcome email sent successfully to:', subscriberEmail);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return { success: false, error: 'Failed to send welcome email' };
  }
}

export async function sendAdminNotification(subscription: EmailSubscription) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key') {
      console.log('Resend API key not configured, skipping admin notification');
      return { success: false, error: 'Resend API key not configured' };
    }
    
    const { data, error } = await resend.emails.send({
      from: 'Sagheerah <hello@sagheerah.com>',
      to: ['admin@sagheerah.com'], // Replace with your admin email
      subject: '📧 New Sagheerah Waitlist Signup',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Sagheerah Subscription</title>
          <style>
            body { 
              font-family: 'Georgia', 'Times New Roman', serif; 
              line-height: 1.8; 
              color: #1a1a1a; 
              background: #fafafa;
              margin: 0;
              padding: 0;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: #ffffff;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .header { 
              text-align: center; 
              padding: 40px 30px 30px;
              background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
              color: #ffffff;
            }
            .header h1 { 
              font-size: 28px; 
              font-weight: 300; 
              letter-spacing: 2px;
              margin: 0;
              text-transform: uppercase;
            }
            .content { 
              padding: 40px 30px; 
              background: #ffffff;
            }
            .notification {
              text-align: center;
              margin-bottom: 40px;
              padding: 30px;
              background: #f8f8f8;
              border-left: 4px solid #1a1a1a;
            }
            .notification h2 {
              font-size: 24px;
              font-weight: 400;
              margin: 0 0 15px 0;
              color: #1a1a1a;
            }
            .notification p {
              font-size: 16px;
              margin: 0;
              color: #4a4a4a;
            }
            .section {
              margin-bottom: 35px;
            }
            .section h3 {
              font-size: 18px;
              font-weight: 600;
              margin: 0 0 15px 0;
              color: #1a1a1a;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .section p, .section li {
              font-size: 16px;
              color: #4a4a4a;
              margin: 0 0 10px 0;
            }
            .section ul {
              margin: 15px 0;
              padding-left: 20px;
            }
            .section li {
              margin-bottom: 8px;
            }
            .details {
              background: #f8f8f8;
              padding: 25px;
              border-radius: 4px;
              margin: 20px 0;
            }
            .details h3 {
              color: #1a1a1a;
              margin-bottom: 15px;
            }
            .details ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            .details li {
              padding: 8px 0;
              border-bottom: 1px solid #e0e0e0;
            }
            .details li:last-child {
              border-bottom: none;
            }
            .details strong {
              color: #1a1a1a;
              font-weight: 600;
            }
            .footer { 
              text-align: center; 
              padding: 30px;
              background: #1a1a1a;
              color: #ffffff;
              font-size: 14px;
            }
            .footer p {
              margin: 5px 0;
              color: #cccccc;
            }
            .footer hr {
              border: none;
              border-top: 1px solid #333;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://sagheerah.com/Sagheerah-Logo-—-Rich-Emerald.svg" alt="Sagheerah" style="height: 60px; margin: 0 auto; display: block;">
              <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.8;">New Subscription Alert</p>
            </div>
            
            <div class="content">
              <div class="notification">
                <h2>New Waitlist Signup</h2>
                <p>A new subscriber has joined the Sagheerah waitlist.</p>
              </div>
              
              <div class="details">
                <h3>Subscription Details</h3>
                <ul>
                  <li><strong>Email:</strong> ${subscription.email}</li>
                  <li><strong>Date:</strong> ${new Date(subscription.date).toLocaleString()}</li>
                  <li><strong>IP Address:</strong> ${subscription.ip || 'Unknown'}</li>
                  <li><strong>User Agent:</strong> ${subscription.userAgent || 'Unknown'}</li>
                </ul>
              </div>
              
              <div class="section">
                <h3>What Happens Next</h3>
                <ul>
                  <li>Welcome email has been sent automatically</li>
                  <li>Subscriber added to waitlist database</li>
                  <li>Ready for launch campaign preparation</li>
                  <li>Available for future marketing communications</li>
                </ul>
              </div>
              
              <div class="section">
                <h3>System Status</h3>
                <p>All systems are functioning correctly. The subscriber will receive a professional welcome email with our brand messaging and timeline information.</p>
              </div>
            </div>
            
            <div class="footer">
              <p>Best regards,</p>
              <p>Sagheerah System</p>
              <hr>
              <p style="margin-top: 20px; font-size: 12px; opacity: 0.7;">
                Sagheerah • Luxury Modest Fashion House
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend admin notification error:', error);
      return { success: false, error: error.message };
    }

    console.log('Admin notification sent successfully');
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    return { success: false, error: 'Failed to send admin notification' };
  }
}

export async function sendUnsubscribeConfirmation(email: string) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key') {
      console.log('Resend API key not configured, skipping unsubscribe confirmation');
      return { success: false, error: 'Resend API key not configured' };
    }
    
    const { data, error } = await resend.emails.send({
      from: 'Sagheerah <hello@sagheerah.com>',
      to: [email],
      subject: 'You\'ve Been Unsubscribed from Sagheerah',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Unsubscribed from Sagheerah</title>
          <style>
            body { 
              font-family: 'Georgia', 'Times New Roman', serif; 
              line-height: 1.8; 
              color: #1a1a1a; 
              background: #fafafa;
              margin: 0;
              padding: 0;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: #ffffff;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .header { 
              text-align: center; 
              padding: 40px 30px 30px;
              background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
              color: #ffffff;
            }
            .header h1 { 
              font-size: 28px; 
              font-weight: 300; 
              letter-spacing: 2px;
              margin: 0;
              text-transform: uppercase;
            }
            .content { 
              padding: 40px 30px; 
              background: #ffffff;
            }
            .confirmation {
              text-align: center;
              margin-bottom: 40px;
              padding: 30px;
              background: #f8f8f8;
              border-left: 4px solid #1a1a1a;
            }
            .confirmation h2 {
              font-size: 24px;
              font-weight: 400;
              margin: 0 0 15px 0;
              color: #1a1a1a;
            }
            .confirmation p {
              font-size: 16px;
              margin: 0;
              color: #4a4a4a;
            }
            .section {
              margin-bottom: 35px;
            }
            .section h3 {
              font-size: 18px;
              font-weight: 600;
              margin: 0 0 15px 0;
              color: #1a1a1a;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .section p {
              font-size: 16px;
              color: #4a4a4a;
              margin: 0 0 10px 0;
            }
            .footer { 
              text-align: center; 
              padding: 30px;
              background: #1a1a1a;
              color: #ffffff;
              font-size: 14px;
            }
            .footer p {
              margin: 5px 0;
              color: #cccccc;
            }
            .footer hr {
              border: none;
              border-top: 1px solid #333;
              margin: 20px 0;
            }
            .resubscribe {
              margin: 30px 0;
              text-align: center;
            }
            .resubscribe a {
              display: inline-block;
              padding: 12px 24px;
              background: #1a1a1a;
              color: #ffffff;
              text-decoration: none;
              border-radius: 4px;
              font-weight: 500;
              transition: background 0.3s ease;
            }
            .resubscribe a:hover {
              background: #2d2d2d;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://sagheerah.com/Sagheerah-Logo-—-Cosmic-Latte.svg" alt="Sagheerah" style="height: 60px; margin: 0 auto; display: block;">
              <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.8;">Unsubscribe Confirmation</p>
            </div>
            
            <div class="content">
              <div class="confirmation">
                <h2>You've Been Unsubscribed</h2>
                <p>We're sorry to see you go. You have been successfully removed from our email list.</p>
              </div>
              
              <div class="section">
                <h3>What This Means</h3>
                <p>You will no longer receive updates about our launch, exclusive offers, or behind-the-scenes content from Sagheerah.</p>
              </div>
              
              <div class="section">
                <h3>We'll Miss You</h3>
                <p>Thank you for being part of our journey. We hope to see you again when we launch our luxury modest fashion collection.</p>
              </div>
              
              <div class="resubscribe">
                <a href="mailto:hello@sagheerah.com?subject=RESUBSCRIBE">Resubscribe to Sagheerah</a>
              </div>
            </div>
            
            <div class="footer">
              <p>Best regards,</p>
              <p>The Sagheerah Team</p>
              <hr>
              <p style="margin-top: 20px; font-size: 12px; opacity: 0.7;">
                Sagheerah • Luxury Modest Fashion House
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend unsubscribe confirmation error:', error);
      return { success: false, error: error.message };
    }

    console.log('Unsubscribe confirmation sent successfully to:', email);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send unsubscribe confirmation:', error);
    return { success: false, error: 'Failed to send unsubscribe confirmation' };
  }
} 