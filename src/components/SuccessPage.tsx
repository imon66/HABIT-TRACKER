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
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      try {
        const order: OrderInfo = JSON.parse(lastOrder);
        setOrderInfo(order);
      } catch (error) {
        console.error('Error parsing order data:', error);
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
      {/* Enhanced multi-layer glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/15 via-purple-100/10 via-pink-100/8 to-cyan-100/12"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-200/8 via-transparent to-violet-200/6"></div>
      
      {/* Animated floating orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/15 to-green-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Success Confetti Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r ${
              i % 4 === 0 ? 'from-green-400 to-blue-400' :
              i % 4 === 1 ? 'from-yellow-400 to-orange-400' :
              i % 4 === 2 ? 'from-pink-400 to-purple-400' :
              'from-blue-400 to-cyan-400'
            } rounded-full animate-bounce`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Success Card */}
          <div className="bg-gradient-to-br from-white/95 via-green-50/70 to-blue-50/50 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl p-8 text-center">
            
            {/* Success Icon */}
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Payment Successful! 🎉
              </h1>
              <p className="text-lg text-gray-700">
                Thank you for your purchase! Your habit tracker bundle is ready.
              </p>
            </div>

            {/* Order Details */}
            {orderInfo && (
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-6 text-left">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Order Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono text-sm bg-white px-2 py-1 rounded">
                      {orderInfo.razorpayPaymentId?.slice(-12) || 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer:</span>
                    <span className="font-medium">{orderInfo.customer.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{orderInfo.customer.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-bold text-green-600 text-lg">₹{orderInfo.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* What's Next */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">What's Next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-medium text-gray-800">Download Your Trackers</p>
                    <p className="text-sm text-gray-600">Click the download button below to access your habit tracker bundle</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-medium text-gray-800">Make a Copy</p>
                    <p className="text-sm text-gray-600">Create your own copy in Google Drive to start customizing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-medium text-gray-800">Start Tracking</p>
                    <p className="text-sm text-gray-600">Begin your 21-day habit transformation journey today!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleDownloadNow}
                className="w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Your Habit Trackers Now</span>
              </button>
              
              <button
                onClick={handleBackToHome}
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-300 border border-gray-300"
              >
                Back to Home
              </button>
            </div>

            {/* Support Information */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">
                Need help? Contact our support team
              </p>
              <a
                href="mailto:help.learnnwork@gmail.com"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                help.learnnwork@gmail.com
              </a>
            </div>

            {/* Confirmation Email Notice */}
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-blue-800 font-medium">
                  Confirmation email sent to {orderInfo?.customer.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;