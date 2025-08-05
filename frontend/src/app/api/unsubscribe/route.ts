import { NextRequest, NextResponse } from 'next/server';
import { getEmailSubscriptions } from '@/lib/email-storage';
import { sendUnsubscribeConfirmation } from '@/lib/email-service';
import { writeFileSync } from 'fs';
import { join } from 'path';

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
    
    // Get current subscriptions
    const subscriptions = getEmailSubscriptions();
    
    // Check if email exists in subscriptions
    const existingSubscription = subscriptions.find(sub => sub.email.toLowerCase() === email.toLowerCase());
    
    if (!existingSubscription) {
      return NextResponse.json(
        { error: 'Email address not found in our records' },
        { status: 404 }
      );
    }
    
    // Remove the subscription by filtering it out
    const updatedSubscriptions = subscriptions.filter(sub => sub.email.toLowerCase() !== email.toLowerCase());
    
    // Save updated subscriptions (overwrite the file)
    const storageFile = join(process.cwd(), 'email-subscriptions.json');
    
    writeFileSync(storageFile, JSON.stringify(updatedSubscriptions, null, 2));
    
    // Send unsubscribe confirmation email
    try {
      await sendUnsubscribeConfirmation(email);
      console.log('Unsubscribe confirmation sent to:', email);
    } catch (error) {
      console.error('Failed to send unsubscribe confirmation:', error);
      // Continue with unsubscribe even if confirmation email fails
    }
    
    // Log the unsubscribe action
    console.log('=== SAGHEERAH EMAIL UNSUBSCRIBE ===');
    console.log('Email:', email);
    console.log('Date:', new Date().toISOString());
    console.log('User Agent:', request.headers.get('user-agent'));
    console.log('IP:', request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'));
    console.log('=====================================');
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully unsubscribed from Sagheerah emails',
        email: email 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Unsubscribe API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      );
    }
    
    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Check if email is subscribed
    const subscriptions = getEmailSubscriptions();
    const isSubscribed = subscriptions.some(sub => sub.email.toLowerCase() === email.toLowerCase());
    
    return NextResponse.json(
      { 
        subscribed: isSubscribed,
        email: email 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Subscription check API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 