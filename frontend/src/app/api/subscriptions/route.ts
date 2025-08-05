import { NextRequest, NextResponse } from 'next/server';
import { getEmailSubscriptions, getSubscriptionCount } from '@/lib/email-storage';

export async function GET() {
  try {
    const subscriptions = getEmailSubscriptions();
    const count = getSubscriptionCount();
    
    return NextResponse.json({
      success: true,
      count,
      subscriptions,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscriptions' },
      { status: 500 }
    );
  }
} 