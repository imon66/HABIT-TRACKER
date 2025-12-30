import CountdownTimer from './CountdownTimer'

const PricingSection = () => {
  return (
    <section className="professional-gradient section-padding relative">
      
      <div className="container-max">
        <div className="text-center">
          <h2 className="mobile-heading font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="block">Ready to Transform</span>
            <span className="text-gradient block">Your Habits?</span>
          </h2>
          <p className="mobile-subheading mb-6 sm:mb-8 text-gray-600 max-w-3xl mx-auto">
            Get instant access to the Ultimate Habit Tracker
          </p>

          {/* Countdown Timer */}
          <div className="mobile-margin">
            <CountdownTimer />
          </div>

          {/* Pricing Card */}
          <div className="professional-card text-gray-900 rounded-xl mobile-padding max-w-2xl mx-auto relative">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md">
                🔥 MOST POPULAR
              </span>
            </div>

            <div className="text-center pt-4">
              {/* Price */}
              <div className="mobile-margin">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-500 line-through opacity-60">₹500</div>
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient">₹49</div>
                </div>
                <div className="text-lg sm:text-xl text-gray-700 font-semibold">One-Time Payment Only</div>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold mt-2 inline-block">
                  🎉 90% OFF - Limited Time!
                </div>
              </div>

              {/* What's Included */}
              <div className="mobile-margin text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800">What You Get Instantly:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="font-medium">Complete Google Sheets Tracker</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="font-medium">5 Tracking Systems</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="font-medium">Easy Setup Instructions</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="font-medium">Lifetime Updates</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg sm:col-span-2">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="font-medium">Instant Download + Mobile Compatible</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full btn-primary text-xl sm:text-2xl py-5 sm:py-6 mb-6 relative overflow-hidden">
                <span className="relative z-10">🚀 Get Instant Access - Only ₹49</span>
              </button>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base">
                <div className="flex items-center justify-center bg-gray-50 p-3 rounded-lg">
                  <span className="mr-2">🔒</span>
                  <span className="font-medium">Secure Payment</span>
                </div>
                <div className="flex items-center justify-center bg-gray-50 p-3 rounded-lg">
                  <span className="mr-2">⚡</span>
                  <span className="font-medium">Instant Download</span>
                </div>
                <div className="flex items-center justify-center bg-gray-50 p-3 rounded-lg">
                  <span className="mr-2">💯</span>
                  <span className="font-medium">Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 sm:mt-12">
            <p className="text-lg sm:text-xl opacity-90 mb-4">
              Join 1000+ users who transformed their lives with our tracker
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-yellow-500 text-lg sm:text-xl">⭐⭐⭐⭐⭐</span>
              <span className="text-sm sm:text-base text-gray-600">(4.9/5 rating)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection