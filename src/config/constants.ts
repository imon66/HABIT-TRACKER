// Configuration file for all URLs, credentials, and settings
// Update these values from a single location to change across the entire website

export const WEBSITE_CONFIG = {
  // Product URLs
  DOWNLOAD_URL: 'https://docs.google.com/spreadsheets/d/12sdj0O1vhaqq-CgEH1x-_6ZLdP-9J_-TTOqTKTDyb8M/copy',
  
  // Social Proof Numbers (used in HeroSection)
  TOTAL_USERS: '1,000+',
  TOTAL_TRACKERS: 5
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
