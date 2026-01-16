import CheckoutForm from './CheckoutForm';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/80 via-indigo-900/70 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/15 via-purple-100/10 via-pink-100/8 to-cyan-100/12"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-200/8 via-transparent to-violet-200/6"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[7%] left-[18%] w-6 h-6 bg-white/25 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-[23%] right-[12%] w-8 h-8 bg-purple-300/30 rounded-full blur-md animate-bounce delay-300"></div>
        <div className="absolute top-[41%] left-[6%] w-5 h-5 bg-blue-200/25 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-[58%] right-[35%] w-7 h-7 bg-white/20 rounded-full blur-sm animate-ping delay-1000"></div>
        <div className="absolute top-[14%] left-[73%] w-6 h-6 bg-indigo-300/25 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-[67%] right-[8%] w-8 h-8 bg-purple-200/28 rounded-full blur-md animate-pulse delay-800"></div>
        <div className="absolute top-[11%] left-[42%] w-4 h-4 bg-purple-200/20 rounded-full blur-sm animate-pulse delay-200"></div>
        <div className="absolute top-[29%] right-[67%] w-3 h-3 bg-white/18 rounded-full animate-bounce delay-800"></div>
        <div className="absolute top-[46%] left-[28%] w-4 h-4 bg-blue-300/22 rounded-full blur-sm animate-ping delay-400"></div>
        <div className="absolute top-[63%] right-[58%] w-3 h-3 bg-purple-300/25 rounded-full animate-pulse delay-600"></div>
        <div className="absolute top-[16%] left-[64%] w-2 h-2 bg-indigo-200/20 rounded-full animate-pulse delay-1200"></div>
        <div className="absolute top-[38%] right-[23%] w-2 h-2 bg-purple-300/18 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-[55%] left-[47%] w-2 h-2 bg-white/15 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-[72%] right-[72%] w-2 h-2 bg-blue-200/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <a href="/" className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 group">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Back to Home</span>
            </a>
          </div>

          <CheckoutForm />

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-white/10 via-blue-50/5 to-purple-50/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">What You'll Get Instantly</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>5 Complete Habit Trackers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Progress Analytics Dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Mobile Compatible</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Lifetime Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Instant Download</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Custom Goal Setting</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center items-center space-x-6 text-white/60">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Razorpay Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm">Instant Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;