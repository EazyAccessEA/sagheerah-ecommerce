# 🔧 CONVERTKIT MCP FUNCTIONS

> **Direct API Functions for ConvertKit Integration**
> These functions can be called directly through our MCP system

## 📧 SUBSCRIBER MANAGEMENT FUNCTIONS

### **Add Subscriber**
```typescript
mcp_convertkit_add_subscriber(email: string, firstName?: string, tags?: string[]): Promise<SubscriberResult>
```
**Purpose:** Add a new subscriber to ConvertKit list
**Parameters:**
- `email` (required): Valid email address
- `firstName` (optional): Subscriber's first name
- `tags` (optional): Array of tags to apply

**Returns:**
```typescript
{
  success: boolean;
  subscriber?: {
    id: string;
    email: string;
    firstName?: string;
    tags: string[];
    createdAt: string;
  };
  error?: string;
}
```

### **Get Subscriber**
```typescript
mcp_convertkit_get_subscriber(email: string): Promise<Subscriber | null>
```
**Purpose:** Retrieve subscriber information
**Parameters:**
- `email` (required): Email address to look up

**Returns:**
```typescript
{
  id: string;
  email: string;
  firstName?: string;
  tags: string[];
  createdAt: string;
  status: 'active' | 'unsubscribed';
} | null
```

### **Update Subscriber**
```typescript
mcp_convertkit_update_subscriber(email: string, data: Partial<SubscriberData>): Promise<SubscriberResult>
```
**Purpose:** Update subscriber information
**Parameters:**
- `email` (required): Email address to update
- `data` (required): Partial subscriber data to update

**Returns:**
```typescript
{
  success: boolean;
  subscriber?: Subscriber;
  error?: string;
}
```

### **Unsubscribe Subscriber**
```typescript
mcp_convertkit_unsubscribe(email: string): Promise<UnsubscribeResult>
```
**Purpose:** Unsubscribe a subscriber from all lists
**Parameters:**
- `email` (required): Email address to unsubscribe

**Returns:**
```typescript
{
  success: boolean;
  message: string;
  error?: string;
}
```

## 📊 ANALYTICS FUNCTIONS

### **Get Subscriber Count**
```typescript
mcp_convertkit_get_subscriber_count(): Promise<SubscriberCount>
```
**Purpose:** Get total number of subscribers
**Returns:**
```typescript
{
  total: number;
  active: number;
  unsubscribed: number;
}
```

### **Get Subscriber Growth**
```typescript
mcp_convertkit_get_subscriber_growth(period: '7d' | '30d' | '90d'): Promise<GrowthData>
```
**Purpose:** Get subscriber growth analytics
**Parameters:**
- `period` (required): Time period for analysis

**Returns:**
```typescript
{
  period: string;
  totalSubscribers: number;
  growthRate: number;
  newSubscribers: number;
  unsubscribed: number;
}
```

### **Get Email Performance**
```typescript
mcp_convertkit_get_email_performance(emailId: string): Promise<EmailPerformance>
```
**Purpose:** Get performance metrics for a specific email
**Parameters:**
- `emailId` (required): ConvertKit email ID

**Returns:**
```typescript
{
  emailId: string;
  subject: string;
  sentCount: number;
  openCount: number;
  openRate: number;
  clickCount: number;
  clickRate: number;
  bounceCount: number;
  bounceRate: number;
}
```

## 🏷️ TAG MANAGEMENT FUNCTIONS

### **Add Tag**
```typescript
mcp_convertkit_add_tag(email: string, tagName: string): Promise<TagResult>
```
**Purpose:** Add a tag to a subscriber
**Parameters:**
- `email` (required): Subscriber email
- `tagName` (required): Tag name to add

**Returns:**
```typescript
{
  success: boolean;
  message: string;
  error?: string;
}
```

### **Remove Tag**
```typescript
mcp_convertkit_remove_tag(email: string, tagName: string): Promise<TagResult>
```
**Purpose:** Remove a tag from a subscriber
**Parameters:**
- `email` (required): Subscriber email
- `tagName` (required): Tag name to remove

**Returns:**
```typescript
{
  success: boolean;
  message: string;
  error?: string;
}
```

### **Get All Tags**
```typescript
mcp_convertkit_get_tags(): Promise<Tag[]>
```
**Purpose:** Get all available tags
**Returns:**
```typescript
Array<{
  id: string;
  name: string;
  subscriberCount: number;
}>
```

## 🔄 SEQUENCE MANAGEMENT FUNCTIONS

### **Add to Sequence**
```typescript
mcp_convertkit_add_to_sequence(email: string, sequenceId: string): Promise<SequenceResult>
```
**Purpose:** Add subscriber to an automation sequence
**Parameters:**
- `email` (required): Subscriber email
- `sequenceId` (required): ConvertKit sequence ID

**Returns:**
```typescript
{
  success: boolean;
  message: string;
  error?: string;
}
```

### **Remove from Sequence**
```typescript
mcp_convertkit_remove_from_sequence(email: string, sequenceId: string): Promise<SequenceResult>
```
**Purpose:** Remove subscriber from an automation sequence
**Parameters:**
- `email` (required): Subscriber email
- `sequenceId` (required): ConvertKit sequence ID

**Returns:**
```typescript
{
  success: boolean;
  message: string;
  error?: string;
}
```

### **Get Sequences**
```typescript
mcp_convertkit_get_sequences(): Promise<Sequence[]>
```
**Purpose:** Get all available sequences
**Returns:**
```typescript
Array<{
  id: string;
  name: string;
  subscriberCount: number;
  status: 'active' | 'inactive';
}>
```

## 📋 LIST MANAGEMENT FUNCTIONS

### **Get Subscribers**
```typescript
mcp_convertkit_get_subscribers(page?: number, limit?: number): Promise<SubscriberList>
```
**Purpose:** Get paginated list of subscribers
**Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 50, max: 100)

**Returns:**
```typescript
{
  subscribers: Subscriber[];
  totalCount: number;
  page: number;
  limit: number;
  totalPages: number;
}
```

### **Get Recent Subscribers**
```typescript
mcp_convertkit_get_recent_subscribers(count: number): Promise<Subscriber[]>
```
**Purpose:** Get most recent subscribers
**Parameters:**
- `count` (required): Number of recent subscribers to retrieve

**Returns:**
```typescript
Array<Subscriber>
```

## 🎯 SPECIALIZED FUNCTIONS

### **Newsletter Signup**
```typescript
mcp_convertkit_newsletter_signup(email: string, firstName?: string): Promise<SignupResult>
```
**Purpose:** Specialized function for newsletter signup
**Parameters:**
- `email` (required): Subscriber email
- `firstName` (optional): Subscriber's first name

**Returns:**
```typescript
{
  success: boolean;
  message: string;
  subscriber?: Subscriber;
  error?: string;
}
```

### **Coming Soon Signup**
```typescript
mcp_convertkit_coming_soon_signup(email: string, firstName?: string): Promise<SignupResult>
```
**Purpose:** Specialized function for coming soon page signup
**Parameters:**
- `email` (required): Subscriber email
- `firstName` (optional): Subscriber's first name

**Returns:**
```typescript
{
  success: boolean;
  message: string;
  subscriber?: Subscriber;
  error?: string;
}
```

### **Get Dashboard Data**
```typescript
mcp_convertkit_get_dashboard_data(): Promise<DashboardData>
```
**Purpose:** Get comprehensive dashboard data
**Returns:**
```typescript
{
  totalSubscribers: number;
  growthRate: number;
  recentSignups: Subscriber[];
  topTags: Tag[];
  emailPerformance: EmailPerformance[];
  conversionRate: number;
  engagementRate: number;
}
```

## 🔐 PRIVACY & COMPLIANCE FUNCTIONS

### **Add Consent Record**
```typescript
mcp_convertkit_add_consent_record(email: string, consentType: string, ipAddress?: string): Promise<ConsentResult>
```
**Purpose:** Log GDPR consent for compliance
**Parameters:**
- `email` (required): Subscriber email
- `consentType` (required): Type of consent (e.g., 'newsletter', 'marketing')
- `ipAddress` (optional): IP address for audit trail

**Returns:**
```typescript
{
  success: boolean;
  consentId: string;
  timestamp: string;
  error?: string;
}
```

### **Process Deletion Request**
```typescript
mcp_convertkit_process_deletion_request(email: string): Promise<DeletionResult>
```
**Purpose:** Process GDPR deletion request
**Parameters:**
- `email` (required): Email to delete

**Returns:**
```typescript
{
  success: boolean;
  message: string;
  deletionId: string;
  timestamp: string;
  error?: string;
}
```

## 📊 USAGE EXAMPLES

### **Basic Newsletter Signup**
```typescript
// Add subscriber to newsletter
const result = await mcp_convertkit_newsletter_signup('user@example.com', 'John');
if (result.success) {
  console.log('Successfully subscribed:', result.subscriber);
} else {
  console.error('Signup failed:', result.error);
}
```

### **Coming Soon Page Integration**
```typescript
// Add subscriber to coming soon list
const result = await mcp_convertkit_coming_soon_signup('user@example.com', 'Jane');
if (result.success) {
  // Add to welcome sequence
  await mcp_convertkit_add_to_sequence('user@example.com', 'welcome-sequence-id');
  // Add tag for tracking
  await mcp_convertkit_add_tag('user@example.com', 'coming-soon-signup');
}
```

### **Analytics Dashboard**
```typescript
// Get comprehensive dashboard data
const dashboard = await mcp_convertkit_get_dashboard_data();
console.log('Total subscribers:', dashboard.totalSubscribers);
console.log('Growth rate:', dashboard.growthRate);
console.log('Recent signups:', dashboard.recentSignups.length);
```

### **GDPR Compliance**
```typescript
// Log consent for newsletter signup
await mcp_convertkit_add_consent_record('user@example.com', 'newsletter', '192.168.1.1');

// Process deletion request
const deletion = await mcp_convertkit_process_deletion_request('user@example.com');
if (deletion.success) {
  console.log('User data deleted successfully');
}
```

---

*These MCP functions provide complete ConvertKit integration for Sagheerah's email marketing needs, with full GDPR compliance and analytics capabilities.* 