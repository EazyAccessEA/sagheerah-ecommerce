'use client';

import { useState, useEffect } from 'react';

interface EmailSubscription {
  email: string;
  date: string;
  userAgent?: string;
  ip?: string;
  formSubmitSuccess: boolean;
}

interface SubscriptionsData {
  success: boolean;
  count: number;
  subscriptions: EmailSubscription[];
  lastUpdated: string;
}

export default function AdminSubscriptionsPage() {
  const [data, setData] = useState<SubscriptionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/subscriptions');
      const result = await response.json();
      
      if (result.success) {
        setData(result);
      } else {
        setError('Failed to fetch subscriptions');
      }
    } catch {
      setError('Error loading subscriptions');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading subscriptions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={fetchSubscriptions}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Sagheerah Email Subscriptions
            </h1>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">{data?.count || 0}</p>
              <p className="text-sm text-gray-500">Total Subscriptions</p>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              Last updated: {data?.lastUpdated ? new Date(data.lastUpdated).toLocaleString() : 'Unknown'}
            </p>
          </div>

          {data?.subscriptions && data.subscriptions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      IP
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.subscriptions.map((subscription, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {subscription.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(subscription.date).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          subscription.formSubmitSuccess 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {subscription.formSubmitSuccess ? 'Email Sent' : 'Email Failed'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {subscription.ip || 'Unknown'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No subscriptions yet.</p>
            </div>
          )}
          
          <div className="mt-6">
            <button 
              onClick={fetchSubscriptions}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 