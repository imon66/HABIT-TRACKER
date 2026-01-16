import { useState } from 'react';
import { validateCustomerInfo, formatCurrency, WEBSITE_CONFIG } from '../config/constants';
import type { CustomerInfo } from '../config/constants';
import { initiatePayment } from '../services/razorpayService';

interface CheckoutFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

const CheckoutForm = ({ onClose, isModal = false }: CheckoutFormProps) => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    if (errors.length > 0) setErrors([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateCustomerInfo(customerInfo);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    if (!agreedToTerms) {
      setErrors(['Please agree to the terms and conditions']);
      return;
    }
    
    setIsProcessing(true);
    setErrors([]);
    
    try {
      await initiatePayment(customerInfo);
    } catch (error) {
      setErrors(['Failed to initiate payment. Please try again.']);
    } finally {
      setIsProcessing(false);
    }
  };

  const containerClasses = isModal
    ? "bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 max-w-md w-full mx-auto"
    : "bg-white/95 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl p-6 max-w-lg mx-auto";

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className="text-center mb-6">
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        
        <div className="mb-4">
          <img
            src="/images/logo.png"
            alt={WEBSITE_CONFIG.COMPANY_NAME}
            className="h-10 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Complete Your Purchase
          </h2>
          <p className="text-gray-600 text-sm">
            {WEBSITE_CONFIG.PRODUCT_NAME}
          </p>
        </div>

        {/* Simple Price Display */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Total Amount:</span>
            <span className="text-xl font-bold text-gray-800">
              {formatCurrency(WEBSITE_CONFIG.PRODUCT_PRICE)}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">One-time payment • Lifetime access</p>
        </div>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-red-700 font-medium text-sm">Please fix the following:</span>
          </div>
          <ul className="list-disc list-inside text-red-600 text-xs space-y-1">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Simple Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={customerInfo.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
            placeholder="Enter your full name"
            required
            disabled={isProcessing}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={customerInfo.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
            placeholder="Enter your email address"
            required
            disabled={isProcessing}
          />
          <p className="text-xs text-gray-500 mt-1">
            Required for order confirmation and support
          </p>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={customerInfo.phone}
            onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, ''))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
            placeholder="Enter 10-digit phone number"
            maxLength={10}
            required
            disabled={isProcessing}
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2 py-3">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            disabled={isProcessing}
          />
          <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
            I agree to the{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              Privacy Policy
            </a>
            . I understand this is a digital product.
          </label>
        </div>

        {/* Simple Payment Button */}
        <button
          type="submit"
          disabled={isProcessing || !agreedToTerms}
          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center space-x-2">
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Processing...</span>
            </div>
          ) : (
            <span className="flex items-center justify-center space-x-2">
              <span>🔒</span>
              <span>Pay {formatCurrency(WEBSITE_CONFIG.PRODUCT_PRICE)} Securely</span>
            </span>
          )}
        </button>
      </form>

      {/* Simple Security Notice */}
      <div className="text-center mt-4 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          🔒 Your payment information is secure and encrypted
        </p>
      </div>
    </div>
  );
};

export default CheckoutForm;