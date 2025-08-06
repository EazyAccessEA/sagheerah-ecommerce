import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message, website } = body;

    // Honeypot check - if website field is filled, it's likely a bot
    if (website && website.trim() !== '') {
      console.log('Honeypot triggered - potential bot submission');
      return NextResponse.json(
        { success: true, message: 'Thank you for your message. We will get back to you soon!' },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Send email to admin
    if (!resend) {
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }
    
    const adminEmailResult = await resend.emails.send({
      from: 'Sagheerah Contact <hello@sagheerah.com>',
      to: 'hello@sagheerah.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: #ffffff; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px;">NEW CONTACT FORM SUBMISSION</h1>
            <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.8;">Sagheerah Contact Form</p>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 25px;">
              <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 20px;">Contact Details</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 6px;">
                <p style="margin: 5px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 20px;">Message</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This message was sent from the Sagheerah contact form.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (adminEmailResult.error) {
      console.error('Failed to send admin notification:', adminEmailResult.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'Sagheerah <hello@sagheerah.com>',
      to: email,
      subject: 'Thank you for contacting Sagheerah',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you for contacting Sagheerah</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: #ffffff; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px;">THANK YOU</h1>
            <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.8;">We&apos;ve received your message</p>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="margin: 0 0 20px 0; font-size: 16px;">
              Dear ${firstName},
            </p>
            
            <p style="margin: 0 0 20px 0; font-size: 16px;">
              Thank you for reaching out to Sagheerah. We have received your message and will get back to you within 24-48 hours during business days.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0; color: #1a1a1a;">Your Message Details:</h3>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            
            <p style="margin: 20px 0; font-size: 16px;">
              In the meantime, you can:
            </p>
            <ul style="margin: 20px 0; padding-left: 20px;">
              <li>Subscribe to our newsletter for updates</li>
              <li>Follow us on social media for behind-the-scenes content</li>
              <li>Visit our website for more information</li>
            </ul>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                Best regards,<br>
                The Sagheerah Team
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (userEmailResult.error) {
      console.error('Failed to send user confirmation:', userEmailResult.error);
      // Don't fail the request if user email fails, just log it
    }

    // Store contact submission locally (optional)
    const fs = await import('fs');
    const path = await import('path');
    
    try {
      const contactData = {
        firstName,
        lastName,
        email,
        subject,
        message,
        date: new Date().toISOString(),
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
      };
      
      const contactsDir = path.default.join(process.cwd(), 'data', 'contacts');
      if (!fs.default.existsSync(contactsDir)) {
        fs.default.mkdirSync(contactsDir, { recursive: true });
      }
      
      const filename = `contact-${Date.now()}.json`;
      fs.default.writeFileSync(path.default.join(contactsDir, filename), JSON.stringify(contactData, null, 2));
    } catch (error) {
      console.error('Failed to store contact submission locally:', error);
      // Don't fail the request if local storage fails
    }

    return NextResponse.json(
      { success: true, message: 'Thank you for your message. We will get back to you soon!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
} 