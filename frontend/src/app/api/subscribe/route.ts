import { NextRequest, NextResponse } from 'next/server';
import { saveEmailSubscription } from '@/lib/email-storage';
import { sendWelcomeEmail, sendAdminNotification } from '@/lib/email-service';

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
    
    // Resend email service integration
    let emailSuccess = false;
    let emailError = null;
    
    try {
      // Send welcome email to subscriber
      const welcomeResult = await sendWelcomeEmail(email);
      if (welcomeResult.success) {
        console.log('Welcome email sent successfully to:', email);
        emailSuccess = true;
      } else {
        emailError = welcomeResult.error;
        console.error('Welcome email failed:', emailError);
      }
    } catch (error) {
      emailError = error instanceof Error ? error.message : 'Unknown error';
      console.error('Email service error:', emailError);
    }
    
    // Send admin notification
    try {
      const adminResult = await sendAdminNotification({
        email,
        date: new Date().toISOString(),
        userAgent: request.headers.get('user-agent') || undefined,
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
      });
      
      if (adminResult.success) {
        console.log('Admin notification sent successfully');
      } else {
        console.error('Admin notification failed:', adminResult.error);
      }
    } catch (error) {
      console.error('Admin notification error:', error);
    }
    
    // Save subscription to local storage
    saveEmailSubscription({
      email,
      date: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
      formSubmitSuccess: emailSuccess
    });
    
    // Log the subscription for manual follow-up
    console.log('=== SAGHEERAH EMAIL SUBSCRIPTION ===');
    console.log('Email:', email);
    console.log('Date:', new Date().toISOString());
    console.log('User Agent:', request.headers.get('user-agent'));
    console.log('IP:', request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'));
    console.log('Resend Email Success:', emailSuccess);
    console.log('=====================================');
    
    if (emailSuccess) {
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
      console.error('Resend email failed. Error:', emailError);
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