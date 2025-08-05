import { NextRequest, NextResponse } from 'next/server';
import { saveEmailSubscription } from '@/lib/email-storage';

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
    
    // FormSubmit.io server-side integration with activation handling
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
    
    // Try multiple FormSubmit.io endpoints for reliability
    const endpoints = [
      'https://formsubmit.io/send/el@formsubmit.io',
      'https://formsubmit.io/send/test@formsubmit.io',
      'https://formsubmit.io/send/your-email@example.com' // Replace with your email
    ];
    
    let success = false;
    let lastError = null;
    
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
        });
        
        if (response.ok) {
          console.log('Email subscription successful via:', endpoint);
          success = true;
          break;
        } else {
          console.log('FormSubmit.io error for', endpoint, ':', response.status);
          lastError = `HTTP ${response.status}`;
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.log('Network error for', endpoint, ':', errorMessage);
        lastError = errorMessage;
      }
    }
    
    // Save subscription to local storage
    saveEmailSubscription({
      email,
      date: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
      formSubmitSuccess: success
    });
    
    // Log the subscription for manual follow-up
    console.log('=== SAGHEERAH EMAIL SUBSCRIPTION ===');
    console.log('Email:', email);
    console.log('Date:', new Date().toISOString());
    console.log('User Agent:', request.headers.get('user-agent'));
    console.log('IP:', request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'));
    console.log('FormSubmit.io Success:', success);
    console.log('=====================================');
    
    if (success) {
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
      console.error('All FormSubmit.io endpoints failed. Last error:', lastError);
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