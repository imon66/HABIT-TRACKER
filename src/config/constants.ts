// Configuration file for all URLs, credentials, and settings
// Update these values from a single location to change across the entire website

export const WEBSITE_CONFIG = {
  // Product URLs
  DOWNLOAD_URL: 'https://docs.google.com/spreadsheets/d/12sdj0O1vhaqq-CgEH1x-_6ZLdP-9J_-TTOqTKTDyb8M/copy',
  
  // Pricing
  PRICE: '₹49',
  REGULAR_PRICE: '₹2,450',
  SAVINGS: '₹2,401',
  DISCOUNT_PERCENTAGE: '98%',
  
  // Social Proof Numbers
  TOTAL_USERS: '2,500+',
  RATING: '4.9/5',
  TOTAL_REVIEWS: '127',
  RECENT_PURCHASES: '200+',
  
  // Business Information
  COMPANY_NAME: 'Habit Tracker Pro',
  SUPPORT_EMAIL: 'support@habittrackerpro.com',
  
  // Marketing Messages
  URGENCY_MESSAGE: 'Only 47 copies left at this price!',
  FLASH_SALE_MESSAGE: '90% OFF ends in 2 hours!',
  GUARANTEE_PERIOD: '30-day',
  
  // Product Details
  TOTAL_TRACKERS: 5,
  TRACKER_NAMES: [
    'Habit Tracker',
    'Fitness Tracker', 
    'Money Tracker',
    'Career Tracker',
    'Self-Care Tracker'
  ],
  
  // SEO & Meta
  WEBSITE_TITLE: 'Ultimate Habit Tracker Bundle - Transform Your Life in 21 Days',
  WEBSITE_DESCRIPTION: 'Get 5 powerful habit tracking systems for just ₹49. Build lasting habits with our proven Google Sheets templates used by 2,500+ people.',
  
  // Social Media (if needed)
  FACEBOOK_URL: '',
  TWITTER_URL: '',
  INSTAGRAM_URL: '',
  
  // Analytics (if needed)
  GOOGLE_ANALYTICS_ID: '',
  FACEBOOK_PIXEL_ID: '',
  
  // Payment Gateway (if needed)
  RAZORPAY_KEY: '',
  STRIPE_KEY: ''
};

// Helper function to handle download action
export const handleDownload = () => {
  // Track download event (if analytics is set up)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'download', {
      event_category: 'engagement',
      event_label: 'habit_tracker_bundle'
    });
  }
  
  // Open download URL in new tab
  window.open(WEBSITE_CONFIG.DOWNLOAD_URL, '_blank');
};

// Helper function to format price
export const formatPrice = (price: string) => {
  return price;
};

// Helper function to get current offer status
export const getOfferStatus = () => {
  return {
    isActive: true,
    discount: WEBSITE_CONFIG.DISCOUNT_PERCENTAGE,
    urgencyMessage: WEBSITE_CONFIG.URGENCY_MESSAGE
  };
};