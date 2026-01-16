export const WEBSITE_CONFIG = {
  COMPANY_NAME: 'LearnNWork Academy',
  DOWNLOAD_URL: 'https://docs.google.com/spreadsheets/d/12sdj0O1vhaqq-CgEH1x-_6ZLdP-9J_-TTOqTKTDyb8M/copy',
  TOTAL_USERS: '1,000+',
  TOTAL_TRACKERS: 5,
  PRODUCT_PRICE: 49,
  PRODUCT_NAME: 'Ultimate Habit Tracker Bundle',
  PRODUCT_DESCRIPTION: '5 Complete Google Sheets Habit Trackers with Analytics Dashboard'
};

export const RAZORPAY_CONFIG = {
  KEY_ID: 'rzp_test_S4W8DPAx15EAtJ',
  KEY_SECRET: 'PtgafVq4aWeJ2aRJTnms8Mk5',
  CURRENCY: 'INR',
  COMPANY_NAME: WEBSITE_CONFIG.COMPANY_NAME,
  COMPANY_LOGO: '/images/logo.png',
  TEST_MODE: true,
  PAYMENT_METHODS: {
    card: true,
    netbanking: true,
    wallet: true,
    upi: true,
    paylater: false
  }
};

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface OrderInfo {
  orderId: string;
  amount: number;
  currency: string;
  customer: CustomerInfo;
  status: OrderStatus;
  createdAt: Date;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
}

export const handleDownload = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'download', {
      event_category: 'engagement',
      event_label: 'habit_tracker_bundle'
    });
  }
  window.open(WEBSITE_CONFIG.DOWNLOAD_URL, '_blank');
};

export const handleCheckout = (navigate?: (path: string) => void) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'begin_checkout', {
      event_category: 'ecommerce',
      event_label: 'habit_tracker_bundle',
      value: WEBSITE_CONFIG.PRODUCT_PRICE,
      currency: RAZORPAY_CONFIG.CURRENCY
    });
  }
  if (navigate) {
    navigate('/checkout');
  } else {
    window.location.href = '/checkout';
  }
};

export const handleBuyNow = (navigate?: (path: string) => void) => handleCheckout(navigate);

export const generateOrderId = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `ORDER_${timestamp}_${random}`.toUpperCase();
};

export const formatCurrency = (amount: number, currency: string = RAZORPAY_CONFIG.CURRENCY): string => {
  if (currency === 'INR') {
    return `₹${amount}`;
  }
  return `${currency} ${amount}`;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

export const validateCustomerInfo = (customer: CustomerInfo): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!customer.name || customer.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  if (!validateEmail(customer.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!validatePhone(customer.phone)) {
    errors.push('Please enter a valid 10-digit Indian phone number');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
