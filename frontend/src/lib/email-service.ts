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
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 8px; }
            .highlight { background: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
            .button { display: inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="color: #2d5a2d;">🎉 Welcome to Sagheerah</h1>
            </div>
            
            <div class="content">
              <h2>✅ CONFIRMATION</h2>
              <p>You have been successfully added to the Sagheerah waitlist.</p>
              
              <div class="highlight">
                <h3>🎯 WHAT HAPPENS NEXT</h3>
                <ul>
                  <li>You'll receive exclusive early access when we launch</li>
                  <li>Be the first to see our luxury modest fashion collection</li>
                  <li>Get special pricing and limited edition pieces</li>
                </ul>
              </div>
              
              <h3>📅 TIMELINE</h3>
              <p>Launch expected in Q1 2025</p>
              
              <h3>🏷️ COLLECTION</h3>
              <p>Timeless jilbābs, khimārs, and niqābs</p>
              
              <h3>💎 POSITIONING</h3>
              <p>Luxury modest fashion without compromise</p>
              
              <h3>🎨 OUR PROMISE</h3>
              <p>Rooted in reverence, refined by design. We craft timeless pieces that celebrate elegance and dignity.</p>
              
              <h3>📱 STAY CONNECTED</h3>
              <ul>
                <li>Follow us on Instagram: @sagheerah</li>
                <li>Visit our website: sagheerah.com</li>
              </ul>
            </div>
            
            <div class="footer">
              <p>Best regards,<br>The Sagheerah Team</p>
              <hr>
              <p>🔄 UNSUBSCRIBE: Reply to this email with "UNSUBSCRIBE"<br>
              📧 CONTACT: hello@sagheerah.com</p>
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
          <title>New Subscription</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 8px; }
            .highlight { background: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="color: #2d5a2d;">📧 New Sagheerah Subscription</h1>
            </div>
            
            <div class="content">
              <h2>✅ NEW SIGNUP</h2>
              <p>A new subscriber has joined the Sagheerah waitlist.</p>
              
              <div class="highlight">
                <h3>📋 SUBSCRIPTION DETAILS</h3>
                <ul>
                  <li><strong>Email:</strong> ${subscription.email}</li>
                  <li><strong>Date:</strong> ${new Date(subscription.date).toLocaleString()}</li>
                  <li><strong>IP Address:</strong> ${subscription.ip || 'Unknown'}</li>
                  <li><strong>User Agent:</strong> ${subscription.userAgent || 'Unknown'}</li>
                </ul>
              </div>
              
              <h3>📊 STATISTICS</h3>
              <p>This is a new subscription from the coming soon page.</p>
              
              <h3>🎯 NEXT STEPS</h3>
              <ul>
                <li>Welcome email has been sent automatically</li>
                <li>Subscriber added to waitlist database</li>
                <li>Ready for launch campaign</li>
              </ul>
            </div>
            
            <div class="footer">
              <p>Best regards,<br>Sagheerah System</p>
              <hr>
              <p>📧 CONTACT: hello@sagheerah.com</p>
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