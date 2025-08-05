import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

interface EmailSubscription {
  email: string;
  date: string;
  userAgent?: string;
  ip?: string;
  formSubmitSuccess: boolean;
}

const STORAGE_FILE = join(process.cwd(), 'email-subscriptions.json');

export function saveEmailSubscription(subscription: EmailSubscription) {
  try {
    let subscriptions: EmailSubscription[] = [];
    
    // Read existing subscriptions
    if (existsSync(STORAGE_FILE)) {
      const data = readFileSync(STORAGE_FILE, 'utf8');
      subscriptions = JSON.parse(data);
    }
    
    // Add new subscription
    subscriptions.push(subscription);
    
    // Save to file
    writeFileSync(STORAGE_FILE, JSON.stringify(subscriptions, null, 2));
    
    console.log('Email subscription saved to file:', subscription.email);
  } catch (error) {
    console.error('Error saving email subscription:', error);
  }
}

export function getEmailSubscriptions(): EmailSubscription[] {
  try {
    if (existsSync(STORAGE_FILE)) {
      const data = readFileSync(STORAGE_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading email subscriptions:', error);
  }
  
  return [];
}

export function getSubscriptionCount(): number {
  return getEmailSubscriptions().length;
} 