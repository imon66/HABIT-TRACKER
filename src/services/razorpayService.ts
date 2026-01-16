import { RAZORPAY_CONFIG, WEBSITE_CONFIG } from '../config/constants';
import type { CustomerInfo, OrderInfo } from '../config/constants';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const handlePaymentSuccess = async (response: any, customer: CustomerInfo): Promise<void> => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'purchase', {
      event_category: 'ecommerce',
      event_label: 'habit_tracker_bundle',
      value: WEBSITE_CONFIG.PRODUCT_PRICE,
      currency: RAZORPAY_CONFIG.CURRENCY,
      transaction_id: response.razorpay_payment_id
    });
  }
  
  const orderInfo: OrderInfo = {
    orderId: response.razorpay_payment_id,
    amount: WEBSITE_CONFIG.PRODUCT_PRICE,
    currency: RAZORPAY_CONFIG.CURRENCY,
    customer,
    status: 'completed',
    createdAt: new Date(),
    razorpayOrderId: response.razorpay_order_id || response.razorpay_payment_id,
    razorpayPaymentId: response.razorpay_payment_id,
    razorpaySignature: response.razorpay_signature
  };
  
  localStorage.setItem('lastOrder', JSON.stringify(orderInfo));
  window.location.href = '/success';
};

export const handlePaymentFailure = (error: any): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'payment_failed', {
      event_category: 'ecommerce',
      event_label: 'habit_tracker_bundle',
      value: WEBSITE_CONFIG.PRODUCT_PRICE,
      currency: RAZORPAY_CONFIG.CURRENCY
    });
  }
  alert('Payment failed. Please try again or contact support.');
};

export const initiatePayment = async (customer: CustomerInfo): Promise<void> => {
  try {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      throw new Error('Failed to load Razorpay SDK');
    }

    const amount = WEBSITE_CONFIG.PRODUCT_PRICE * 100;

    const options = {
      key: RAZORPAY_CONFIG.KEY_ID,
      amount: amount,
      currency: RAZORPAY_CONFIG.CURRENCY,
      name: RAZORPAY_CONFIG.COMPANY_NAME,
      description: WEBSITE_CONFIG.PRODUCT_DESCRIPTION,
      image: RAZORPAY_CONFIG.COMPANY_LOGO,
      handler: (response: any) => handlePaymentSuccess(response, customer),
      prefill: {
        name: customer.name,
        email: customer.email,
        contact: customer.phone
      },
      notes: {
        product: WEBSITE_CONFIG.PRODUCT_NAME,
        customer_name: customer.name,
        customer_email: customer.email
      },
      theme: {
        color: '#6366f1'
      },
      method: RAZORPAY_CONFIG.PAYMENT_METHODS,
      modal: {
        ondismiss: () => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'payment_cancelled', {
              event_category: 'ecommerce',
              event_label: 'habit_tracker_bundle'
            });
          }
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.on('payment.failed', handlePaymentFailure);
    razorpay.open();

  } catch (error) {
    alert('Failed to initiate payment. Please try again.');
  }
};

export const getOrderDetails = (orderId: string): OrderInfo | null => {
  try {
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      const order: OrderInfo = JSON.parse(lastOrder);
      if (order.orderId === orderId) {
        return order;
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const clearOrderData = (): void => {
  localStorage.removeItem('lastOrder');
};