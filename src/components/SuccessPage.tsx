import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WEBSITE_CONFIG } from '../config/constants';
import type { OrderInfo } from '../config/constants';
import { clearOrderData } from '../services/razorpayService';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useState<OrderInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      try {
        const order: OrderInfo = JSON.parse(lastOrder);
        setOrderInfo(order);
      } catch (error) {
        // Error parsing order data - silently handle
      }
    }
    setIsLoading(false);
  }, []);

  const handleDownloadNow = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download_after_purchase', {
        event_category: 'ecommerce',
        event_label: 'habit_tracker_bundle',
        transaction_id: orderInfo?.razorpayPaymentId
      });
    }
    window.open(WEBSITE_CONFIG.DOWNLOAD_URL, '_blank');
  };

  const handleBackToHome = () => {
    clearOrderData();
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/80 via-indigo-900/70 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/80 via-indigo-900/70 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/15 via-purple-100/10 via-pink-100/8 to-cyan-100/12"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-200/8 via-transparent to-violet-200/6"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/15 to-green-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Success Card */}
          <div className="bg-white/95 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl p-8 text-center">
            
            {/* Success Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Payment Successful! 🎉
              </h1>
              <p className="text-gray-600">
                Thank you for your purchase! Your habit tracker bundle is ready.
              </p>
            </div>

            {/* Simple Order Details */}
            {orderInfo && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono text-sm bg-white px-2 py-1 rounded">
                      #{orderInfo.razorpayPaymentId?.slice(-8) || 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-bold text-green-600">₹{orderInfo.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={handleDownloadNow}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Your Habit Trackers</span>
              </button>
              
              <button
                onClick={handleBackToHome}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-gray-300"
              >
                Back to Home
              </button>
            </div>

            {/* Simple Support */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">
                Need help? Contact us at
              </p>
              <a
                href="mailto:help.learnnwork@gmail.com"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                help.learnnwork@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;