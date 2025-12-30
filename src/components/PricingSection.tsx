const PricingSection = () => {
  return (
    <div className="pt-16 pb-0 relative z-10">
      <div className="container-max relative z-10">
        <div className="text-center">
          <h2 className="mobile-heading font-bold mb-4 sm:mb-6">
            <span className="block text-white/95 drop-shadow-lg">Ready to Transform</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl block">Your Habits?</span>
          </h2>
          <p className="mobile-subheading mb-6 sm:mb-8 text-white/90 drop-shadow-md max-w-3xl mx-auto">
            Get instant access to the Ultimate Habit Tracker
          </p>

          {/* Clean Professional Pricing Card */}
          <div className="relative max-w-2xl mx-auto">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                MOST POPULAR
              </span>
            </div>

            {/* Main Pricing Card */}
            <div className="bg-gradient-to-br from-white/95 via-blue-50/70 to-purple-50/50 backdrop-blur-2xl border border-white/40 shadow-2xl hover:shadow-[0_25px_50px_rgba(255,_255,_255,_0.2)] rounded-2xl p-4 sm:p-6 md:p-8 relative transition-all duration-300">
              
              <div className="text-center pt-4 sm:pt-6">
                {/* Clean Price Section */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-red-500 line-through opacity-60">₹500</div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">₹49</div>
                  </div>
                  <div className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold mb-3">One-Time Payment Only</div>
                  <div className="bg-gradient-to-r from-rose-100 via-pink-50 to-red-100 border-2 border-rose-200 text-rose-700 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold inline-block">
                    90% OFF - Limited Time
                  </div>
                </div>

                {/* Professional Features List */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">What You Get Instantly</h3>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {/* Left Column - 3 Features */}
                    <div className="space-y-3">
                      {/* Feature 1 */}
                      <div className="bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/30 backdrop-blur-lg border border-white/40 shadow-lg animate-color-shift animate-border-color-shift animate-delay-0 p-2 sm:p-3 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <span className="font-bold text-xs sm:text-sm animate-text-color-shift animate-delay-0">Complete Google Sheets Tracker</span>
                      </div>
                      
                      {/* Feature 2 */}
                      <div className="bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/30 backdrop-blur-lg border border-white/40 shadow-lg animate-color-shift animate-border-color-shift animate-delay-200 p-2 sm:p-3 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <span className="font-bold text-xs sm:text-sm animate-text-color-shift animate-delay-200">5 Tracking Systems</span>
                      </div>
                      
                      {/* Feature 3 */}
                      <div className="bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/30 backdrop-blur-lg border border-white/40 shadow-lg animate-color-shift animate-border-color-shift animate-delay-400 p-2 sm:p-3 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <span className="font-bold text-xs sm:text-sm animate-text-color-shift animate-delay-400">Instant Download + Mobile Compatible</span>
                      </div>
                    </div>
                    
                    {/* Right Column - 3 New Features */}
                    <div className="space-y-3">
                      {/* Feature 4 */}
                      <div className="bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/30 backdrop-blur-lg border border-white/40 shadow-lg animate-color-shift animate-border-color-shift animate-delay-600 p-2 sm:p-3 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <span className="font-bold text-xs sm:text-sm animate-text-color-shift animate-delay-600">Progress Analytics Dashboard</span>
                      </div>
                      
                      {/* Feature 5 */}
                      <div className="bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/30 backdrop-blur-lg border border-white/40 shadow-lg animate-color-shift animate-border-color-shift animate-delay-800 p-2 sm:p-3 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <span className="font-bold text-xs sm:text-sm animate-text-color-shift animate-delay-800">Custom Goal Setting</span>
                      </div>
                      
                      {/* Feature 6 */}
                      <div className="bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/30 backdrop-blur-lg border border-white/40 shadow-lg animate-color-shift animate-border-color-shift animate-delay-1000 p-2 sm:p-3 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <span className="font-bold text-xs sm:text-sm animate-text-color-shift animate-delay-1000">Weekly Reports & Insights</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional CTA Button */}
                <div className="mb-6 sm:mb-8">
                  <button className="w-full bg-gradient-to-br from-blue-600/95 via-purple-700/95 to-pink-600/95 backdrop-blur-2xl border border-white/30 shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:border-white/50">
                    <span className="flex items-center justify-center gap-2">
                      <span className="hidden sm:inline">Get Instant Access - Only</span><span className="sm:hidden">Get Access -</span> ₹49
                    </span>
                  </button>
                </div>

                {/* Clean Security Features */}
                <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                  <div className="bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/30 backdrop-blur-lg border border-white/40 shadow-lg animate-color-shift animate-border-color-shift animate-delay-1200 p-3 rounded-xl hover:shadow-xl transition-all duration-300 text-center">
                    <span className="font-bold animate-text-color-shift animate-delay-1200 text-sm sm:text-base">Secure Payment</span>
                  </div>
                  <div className="bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/30 backdrop-blur-lg border border-white/40 shadow-lg animate-color-shift animate-border-color-shift animate-delay-1400 p-3 rounded-xl hover:shadow-xl transition-all duration-300 text-center">
                    <span className="font-bold animate-text-color-shift animate-delay-1400 text-sm sm:text-base">Instant Download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Social Proof */}
          <div className="mt-8 sm:mt-12">
            <p className="text-lg sm:text-xl text-white/90 drop-shadow-md font-semibold mb-4">
              Join 1000+ users who transformed their lives with our tracker
            </p>
            <div className="flex justify-center items-center">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500 text-lg sm:text-xl">
                  {[1,2,3,4,5].map((i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm sm:text-base text-gray-600 font-medium">(4.9/5 rating)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection