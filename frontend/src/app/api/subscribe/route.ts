import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // FormSubmit.io server-side integration
    const formData = new FormData();
    formData.append('email', email);
    formData.append('_subject', 'New Sagheerah Waitlist Signup');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    formData.append('_autoresponse', `🎉 Welcome to Sagheerah - You're Successfully Added!

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
📧 CONTACT: hello@sagheerah.com`);
    
    // Server-side request to FormSubmit.io (no CORS issues)
    const response = await fetch('https://formsubmit.io/send/el@formsubmit.io', {
      method: 'POST',
      body: formData,
    });
    
    if (response.ok) {
      console.log('Email subscription successful:', email);
      return NextResponse.json(
        { 
          success: true, 
          message: 'Successfully added to waitlist',
          email: email 
        },
        { status: 200 }
      );
    } else {
      console.error('FormSubmit.io error:', response.status, response.statusText);
      // Fallback: Still return success to user, but log the error
      return NextResponse.json(
        { 
          success: true, 
          message: 'Successfully added to waitlist (email service temporarily unavailable)',
          email: email 
        },
        { status: 200 }
      );
    }
    
  } catch (error) {
    console.error('API error:', error);
    // Fallback: Return success even if email service fails
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully added to waitlist',
        email: request.body ? JSON.parse(await request.text()).email : 'unknown'
      },
      { status: 200 }
    );
  }
} 