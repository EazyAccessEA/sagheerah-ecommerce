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
      subject: 'Welcome to Sagheerah - You\'re Successfully Added to Our Waitlist',
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
              <div style="text-align: center; margin-bottom: 20px;">
                <!-- Sagheerah Logo SVG -->
                <svg width="200" height="60" viewBox="0 0 200 60" style="margin: 0 auto 15px; display: block;">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#073331;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#0F2F2E;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <!-- S letter -->
                  <path d="M20 15 C20 10, 25 5, 30 5 C35 5, 40 10, 40 15 C40 20, 35 25, 30 25 C25 25, 20 30, 20 35 C20 40, 25 45, 30 45 C35 45, 40 40, 40 35" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- A letter -->
                  <path d="M50 45 L60 15 L70 45 M55 35 L65 35" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- G letter -->
                  <path d="M80 15 C80 10, 85 5, 90 5 C95 5, 100 10, 100 15 C100 20, 95 25, 90 25 L90 35 C90 40, 85 45, 80 45" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- H letter -->
                  <path d="M110 15 L110 45 M110 30 L120 30 M120 15 L120 45" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- E letter -->
                  <path d="M130 15 L150 15 M130 15 L130 45 M130 30 L145 30 M130 45 L150 45" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- E letter -->
                  <path d="M160 15 L180 15 M160 15 L160 45 M160 30 L175 30 M160 45 L180 45" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- R letter -->
                  <path d="M190 15 L190 45 M190 15 C190 10, 195 5, 200 5 C205 5, 210 10, 210 15 C210 20, 205 25, 200 25 L190 25 L210 45" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                </svg>
                <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.8; font-style: italic;">Dignity is Her Design</p>
              </div>
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
                <p>Follow our journey as we prepare to launch the future of modest luxury fashion. You'll receive exclusive updates, behind-the-scenes content, and early access to our collection.</p>
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
      subject: 'New Sagheerah Waitlist Signup - Admin Notification',
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
              <div style="text-align: center; margin-bottom: 20px;">
                <!-- Sagheerah Logo SVG -->
                <svg width="200" height="60" viewBox="0 0 200 60" style="margin: 0 auto 15px; display: block;">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#073331;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#0F2F2E;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <!-- S letter -->
                  <path d="M20 15 C20 10, 25 5, 30 5 C35 5, 40 10, 40 15 C40 20, 35 25, 30 25 C25 25, 20 30, 20 35 C20 40, 25 45, 30 45 C35 45, 40 40, 40 35" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- A letter -->
                  <path d="M50 45 L60 15 L70 45 M55 35 L65 35" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- G letter -->
                  <path d="M80 15 C80 10, 85 5, 90 5 C95 5, 100 10, 100 15 C100 20, 95 25, 90 25 L90 35 C90 40, 85 45, 80 45" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- H letter -->
                  <path d="M110 15 L110 45 M110 30 L120 30 M120 15 L120 45" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- E letter -->
                  <path d="M130 15 L150 15 M130 15 L130 45 M130 30 L145 30 M130 45 L150 45" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- E letter -->
                  <path d="M160 15 L180 15 M160 15 L160 45 M160 30 L175 30 M160 45 L180 45" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                  <!-- R letter -->
                  <path d="M190 15 L190 45 M190 15 C190 10, 195 5, 200 5 C205 5, 210 10, 210 15 C210 20, 205 25, 200 25 L190 25 L210 45" stroke="url(#logoGradient)" stroke-width="3" fill="none"/>
                </svg>
                <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.8; font-style: italic;">New Subscription Alert</p>
              </div>
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
      subject: 'Unsubscribe Confirmation - Sagheerah',
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
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAzNjkuMDcgODkuMjEiPjxkZWZzPjxzdHlsZT4gICAgICAuY2xzLTEgeyAgICAgICAgZmlsbDogI2Q2ZDhkNzsgICAgICAgIHN0cm9rZTogI2ZmZjsgICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgICAgICB9ICAgIDwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIyLjM3LDU4LjhjLTQuOTMtLjM1LTE0LjIzLTEuODQtMjIuMzctMTAuMjhMLjA1LDMxLjIyYzMuMTYsMjQuNiwxOS4yNywyNi4xMywyMi4xOCwyNi4zOWwxLjc5LC4wOWM3LjU4LC4wNywxNy40MS00LjE2LDE3LjQ4LTEzLjcydi0uOTNDNDAuNjIsMjcuNDgsLjg4LDMzLjM0LDEuMDUsMTMuOTV2LS41NkMxLjQyLDUuOTUsOS4yMSwwLDIxLjUxLC4wOWgxLjMzYzMuNzQsLjEyLDEyLjE4LDIuMDUsMTguNTUsNy41MWwtLjEyLDEzLjY5QzM4LjI3LDUuMywyNy4yNywxLjM5LDIyLjc0LDEuMDRsLTEuNC0uMDljLTguNDQtLjA3LTE0LjI4LDQuNDItMTQuNjIsOS43NHYuNDdjLS4xNCwxNy4yMSwzOS42NiwxMC44OCw0MC41MiwyOS40M3YuNzljLS4wNyw5LjctMTAuNjMsMTcuNi0yMy4xMywxNy41MWwtMS43NC0uMDlaIj48L3BhdGg+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzcuMjEsNTRjLS43LC43Ny0xLjQyLDEuNDYtMS44MSwxLjc5LTIuMTQsMi4wOS01LjA1LDMuNTYtOS4xOCwzLjUzLS43OSwwLTEuNjUtLjA5LTIuNTEtLjE5LTYuMDktLjg0LTEwLjIxLTQuOTMtMTAuMTgtOS41NiwwLS41NiwuMDktMS4wOSwuMTYtMS42NSwxLjYzLTcuMzUsOS4zOS05LjIzLDE1LjAyLTkuOTcsMi4xMi0uMyw2LjgxLS42NSw4LjYzLTMuNiwuNC0uNjMsLjY1LTEuNTYsLjY1LTIuNjUsLjAyLTMuNTEtMi4xMi04LjU2LTcuOTEtOC42aC0uM2MtMi44MSwuMTQtOC4zOSwyLjYtOC40NiwxMS40NHYuNTZsLTUuODYtMi40NmMyLjA5LTcuNzIsOS45NS0xMC4yNSwxNC4zOS0xMC4zN2guNzljNS43MiwuMDUsOS42LDIuNTEsMTAuODMsNS42NSwuMywuNywuNDcsMS40MiwuNDcsMi4xMi0uMDIsMy4yMS0yLjk1LDYuNDYtMTAuNDYsOC42Ny00Ljg2LDEuNTMtMTAuNjcsMy4wNS0xMS41OCw5LjN2MS4wOWMtLjAyLDIuOTEsMS4wMiw4LjQ2LDYuOTgsOC45N2guNzljMy4yMSwuMDIsNS43OS0xLjI4LDguMzItNC4wNywuMDItLjAyLC4wNS0uMDUsLjA1LS4wNywyLjctMi44OCw0LjgxLTYuMjUsNi4yNS05LjkzbC42LTEuNTN2OC4yOGMwLDEuMjYsLjA1LDMuMjgsLjIxLDQuNDYsLjMsMS40OSwxLjQsMi4zNSwyLjcyLDIuMzcsMCwwLTEuNjUsMS44Ni00LjIzLDEuODQtMi4wNywwLTQuMTYtMS4wMi00LjM3LTUuNDJaIj48L3BhdGg+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzEyLjE5LDUzLjk0Yy0uNzIsLjc3LTEuNDIsMS40Ni0xLjgxLDEuNzktMi4xNCwyLjA5LTUuMDUsMy41Ni05LjE4LDMuNTMtLjc5LDAtMS42NS0uMDktMi41MS0uMTktNi4wOS0uODQtMTAuMjEtNC45My0xMC4xOC05LjU2LDAtLjU2LC4wOS0xLjA5LC4xNi0xLjY1LDEuNjMtNy4zNSw5LjM5LTkuMjMsMTUuMDItOS45NywyLjEyLS4zLDYuODEtLjY1LDguNjMtMy42LC40LS42MywuNjMtMS41NiwuNjUtMi42NSwuMDItMy41MS0yLjEyLTguNTYtNy45MS04LjZoLS4zYy0yLjgxLC4xNC04LjM5LDIuNi04LjQ2LDExLjQ0di41NmwtNS44Ni0yLjQ2YzIuMDktNy43Miw5Ljk1LTEwLjI1LDE0LjM5LTEwLjM3aC43OWM1LjcyLC4wNSw5LjYsMi41MSwxMC44Myw1LjY1LC4zLC43LC40NywxLjQyLC40NCwyLjEyLS4wMiwzLjIxLTIuOTUsNi40Ni0xMC40OSw4LjY3LTQuODYsMS41My0xMC42NywzLjA1LTExLjU4LDkuM3YxLjA5Yy0uMDIsMi45OCwwLDguMzcsNi45OCw4Ljk3aC43OWMzLjIxLC4wMiw1Ljc5LTEuMjgsOC4zMi00LjA3LC4wMi0uMDIsLjA1LS4wNSwuMDUtLjA3LDIuNy0yLjg4LDQuODEtNi4yNSw2LjI1LTkuOTNsLjYtMS41M3Y4LjI4YzAsMS4yNiwuMDUsMy4yOCwuMjEsNC40NiwuMywxLjQ5LDEuNCwyLjM1LDIuNzIsMi4zNywwLDAtMS42NSwxLjg2LTQuMjMsMS44NC0yLjAyLDAtNC4xMi0xLjA1LTQuMzItNS40MloiPjwvcGF0aD48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMTQuMDYsMjIuODhjNi41MywxLjY3LDEzLjE2LDcuODYsMTMuMTEsMTUuMTQtLjA3LDguNTMtNy45NSwxNS40NC0xNy41OCwxNS4zNS00LjA3LS4wMi03Ljc0LTEuMy0xMC42My0zLjMtMi4yMSwxLjg2LTMuMTYsMy40Mi0zLjE2LDQuNjdzLjcsMi4xOSwyLjAyLDNjNi40Niw0LjA1LDE3LjY3LDIuNzksMjQuMzcsNS42Nyw1Ljc3LDIuMzksNy45Myw2LjU2LDcuOTEsMTEuMDksMCwxLjU2LS4yNiwzLjE0LS43NCw0Ljc3LTIuMjYsNy4yNS05LjUzLDkuNjMtMTcuMjEsOS45NWgtMS4yNmMtMTAuNzItLjA5LTIwLjE2LTUtMjIuODEtMTUuNjdsNi42LTMuNDZ2LjU2Yy0uMDUsNi4yNSw0LjY1LDE1LjM3LDE3LjA5LDE2LjgxLC45MywuMDksMS43OSwuMTYsMi42NSwuMTksOC40NCwuMDcsMTIuNzItNC43NCwxMy4xNC05LjE0bC4wOS0xLjI2Yy4wNS02LjAyLTUuMDktOS4xOC0xNi4xMS0xMC4zLTE0LjkzLTEuNDQtMTguOTctNS4zMi0xOC45NS05LC4wMi0zLjc0LDQuMjEtNy4zMiw1LjYzLTguNDItMy43Mi0yLjkzLTYuMDUtNy4wOS02LTExLjc5LC4wNS02LjY3LDQuNzktMTIuMjgsMTEuNDQtMTQuNDIsMi42LS44NCw1LjM3LTEuMDUsOC4wOS0uNzJsMi4zLC4ybTYuOTMsMTUuMDljLjA3LTguMDctNC45OC0xNC42Ny0xMS4xNi0xNC43Mi02LjI1LS4wNS0xMS4zOSw2LjQ5LTExLjQ2LDE0LjUzLS4wNyw4LjA0LDQuOTgsMTQuNiwxMS4yMywxNC42NSw2LjE4LC4wNSwxMS4zMi02LjQyLDExLjM5LTE0LjQ2WiI+PC9wYXRoPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwNy4zMywxMy4zOWMwLS45OCwuODEtMS43NywxLjc5LTEuNzRzMS43NywuODEsMS43NCwxLjc3YzAsMS0uODEsMS43OS0xLjc5LDEuNzlzLTEuNzQtLjc5LTEuNzQtMS44MVoiPjwvcGF0aD48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTguMzgsNTkuNHM0LjQ2LTEuMjEsNC41MS01LjE0bC4xMi0xMy4zN2MuMDctOS42My0uOTUtMTcuMTQtOS44OC0xNy41M2gtLjIzYy00LjMtLjAyLTkuMjUsMS44OC0xMi4yNSw2LjYzbC0uMTksMjQuMDljLjA1LDMuOTEsNC40Miw1LjIxLDQuNDIsNS4yMWwtMTQuNDYtLjEyczQuNDYtMS4yMSw0LjUxLTUuMTRsLjQtNDYuNTdjLjAyLTMuOTEtNC40Mi00LjUxLTQuNDItNC41MSwwLDAsNi43NC0uODgsMTAuMDQtMi42NWwtLjMzLDI5LjdjMS43NC00LjE5LDYuOTUtNy43LDEyLjUxLTcuNzJoLjdjMTIuMTQsLjA5LDE0Ljg4LDguNTgsMTQuNzksMTguNjdsLS4xMiwxMy4zN2MtLjAyLDMuOTEsNC4zNSw1LjIxLDQuMzUsNS4yMWwtMTQuNDYtLjEyWiI+PC9wYXRoPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM1NC41Myw1OS41NXM0LjQ2LTEuMjEsNC41MS01LjE0bC4xMi0xMy4zN2MuMDctOS42My0uOTUtMTcuMTQtOS44OC0xNy41M2gtLjIzYy00LjMtLjAyLTkuMjUsMS44OC0xMi4yNSw2LjYzbC0uMTksMjQuMTFjLjA1LDMuOTEsNC40Miw1LjIxLDQuNDIsNS4yMWwtMTQuNDYtLjEyczQuNDYtMS4yMSw0LjUxLTUuMTRsLjQtNDcuMDRjLjAyLTMuOTEtNC40Mi00LjUxLTQuNDItNC41MSwwLDAsNi43Mi0uODgsMTAuMDQtMi42NWwtLjI2LDMwLjE0YzEuNzQtNC4xOSw2Ljk1LTcuNywxMi41MS03LjcyaC43YzEyLjE0LC4wOSwxNC44OCw4LjU4LDE0Ljc5LDE4LjY3bC0uMTIsMTMuMzdjLS4wMiwzLjkxLDQuMzUsNS4yMSw0LjM1LDUuMjFsLTE0LjUzLS4xMloiPjwvcGF0aD48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOTYuMTYsNTkuMzhjLTEwLjI1LS40Ny0xOC40OC04LjQ0LTE4LjM5LTE4LjY5LC4wNy0xMC4xOCw4LjIxLTE4LjMyLDE4LjMtMTguMzloLjQ3YzUuMTYsLjA1LDEzLjA0LDMsMTMuMyw4LjYzdi4wN2MtLjAyLDIuMzUtMi4zNyw0LjIxLTUuODQsNS40NC0yLjk4LDEuMDctNi42NywxLjEyLTkuOTUsMi4xOS01LjQ5LDEuODQtNi4yMyw2LjYtNi4yNSw5LjExLDAsLjg2LC4wNywxLjQ5LC4wNywxLjQ5LS4zNy0xLjQ5LS41My0yLjc0LS41MS0zLjkxLC4wOS0xMS4yOCwxNi4xOC03Ljg2LDE3Ljg4LTE1LjA0bC4wOS0uNjNjLjAyLTIuMzUtMi4wNy02LjIxLTguMzItNi4yNWgtLjU2Yy02LjI1LC40Mi0xMC43Niw1LjQ2LTEyLjA3LDEyLjY3LS4zMywxLjc5LS40OSwyLjU4LS41MSw0LjctLjA3LDkuNjMsNS41MSwxNi41NSwxMi4zLDE3LjM5bDEuMDksLjA5YzQuMzcsLjA1LDguNjMtMi41MSwxMi4wMi01LjYzbC4zLDEuNDJjLTMuMzksMi43OS03LjM5LDUuNDItMTIuNzksNS4zN2wtLjYzLS4wMloiPjwvcGF0aD48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMzQuNTcsNTkuMzhjLTEwLjI1LS40Ny0xOC40OC04LjQ0LTE4LjM5LTE4LjY5LC4wNy0xMC4xOCw4LjIxLTE4LjMyLDE4LjMtMTguMzloLjQ3YzUuMTYsLjA1LDEzLjA0LDMsMTMuMyw4LjYzdi4wN2MtLjAyLDIuMzUtMi4zNyw0LjIxLTUuODQsNS40NC0yLjk4LDEuMDctNi42NywxLjEyLTkuOTUsMi4xOS01LjQ5LDEuODQtNi4yMyw2LjYtNi4yNSw5LjExLDAsLjg2LC4wNywxLjQ5LC4wNywxLjQ5LS4zNy0xLjQ5LS41My0yLjc0LS41MS0zLjkxLC4wOS0xMS4yOCwxNi4xOC03Ljg2LDE3Ljg4LTE1LjA0bC4wOS0uNjNjLjAyLTIuMzUtMi4wNy02LjIxLTguMzItNi4yNWgtLjU2Yy02LjI1LC40Mi0xMC43Niw1LjQ2LTEyLjA3LDEyLjY3LS4zMywxLjc5LS40OSwyLjU4LS41MSw0LjctLjA3LDkuNjMsNS41MSwxNi41NSwxMi4zLDE3LjM5bDEuMDksLjA5YzQuMzcsLjA1LDguNjMtMi41MSwxMi4wMi01LjYzbC4zLDEuNDJjLTMuMzksMi43OS03LjM5LDUuNDItMTIuNzksNS4zN2wtLjYzLS4wMloiPjwvcGF0aD48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNTQuMjYsNTkuMjJzNC40Ni0xLjIxLDQuNTEtNS4xNGwuMTktMjQuNzFjLjAyLTMuOTEtNC40Mi01LjA1LTQuNDItNS4wNSwwLDAsNi43Mi0uMzUsMTAuMTEtMi4xMmwtLjA1LDUuOTVjMS4yNi0xLjYzLDUuMDUtNS45OCwxMS4yMy01LjkzbDEuMDksLjA5YzQuNiwuNTEsNy4yNSwyLjc5LDguMDksNC42bC01LjEyLDQuNjVjLS4xMi02LjA5LTMuMy03LjM5LTUuOTgtNy4zOS0uOTMsMC0xLjg4LC4xNC0yLjUxLC4zLTMuMywuOTEtNi4xNCw0LjAyLTYuODYsNS41MWwtLjE5LDI0LjE4Yy0uMDIsMy45MSw0LjM1LDUuMjEsNC4zNSw1LjIxbC0xNC40Ni0uMTZaIj48L3BhdGg+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjEuODMsNjguNzVjMC0uOTgsLjc5LTEuNzcsMS43Ny0xLjc3czEuNzcsLjc5LDEuNzcsMS43Ny0uNzksMS44MS0xLjc3LDEuODFjLS45OCwwLTEuNzctLjc5LTEuNzctMS44MVoiPjwvcGF0aD48L3N2Zz4=" alt="Sagheerah" style="height: 60px; margin: 0 auto; display: block;">
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
                <p style="margin-top: 10px; font-size: 14px; color: #666;">Simply reply to this email with "RESUBSCRIBE" to rejoin our waitlist.</p>
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