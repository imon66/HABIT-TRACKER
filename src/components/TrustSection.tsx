import { WEBSITE_CONFIG } from '../config/constants'

const TrustSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      text: "This tracker changed my life! I've built 7 new habits in just 3 weeks. The fitness tracker alone saved me ₹2000/month on gym apps.",
      rating: 5,
      image: "👩‍💻"
    },
    {
      name: "Rajesh Kumar",
      role: "Entrepreneur",
      text: "Finally, something that actually works! My productivity increased 300% and I'm saving ₹15,000 monthly using the money tracker.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Anita Patel",
      role: "Working Mom",
      text: "As a busy mom, this is a lifesaver. All 5 trackers in one place - I track everything from kids' activities to my self-care routine.",
      rating: 5,
      image: "👩‍👧‍👦"
    }
  ];

  return (
    <section className="professional-gradient py-16">
      <div className="container-max">
        {/* Social Proof Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="flex -space-x-2">
              {[1,2,3,4,5,6,7,8].map((i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="ml-4 text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-gray-700 text-lg font-semibold">
            Join {WEBSITE_CONFIG.TOTAL_USERS} people who transformed their lives with our trackers
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Average rating: {WEBSITE_CONFIG.RATING} ⭐ ({WEBSITE_CONFIG.TOTAL_REVIEWS} verified reviews)
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="professional-card p-6 text-center">
              <div className="text-4xl mb-4">{testimonial.image}</div>
              <div className="flex justify-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-3 border border-green-200">
              <span className="text-2xl">📊</span>
            </div>
            <span className="text-sm font-semibold text-gray-700">Google Sheets Ready</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-3 border border-blue-200">
              <span className="text-2xl">📱</span>
            </div>
            <span className="text-sm font-semibold text-gray-700">Mobile Optimized</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-3 border border-purple-200">
              <span className="text-2xl">⚡</span>
            </div>
            <span className="text-sm font-semibold text-gray-700">Instant Download</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-3 border border-green-200">
              <span className="text-2xl">🔒</span>
            </div>
            <span className="text-sm font-semibold text-gray-700">SSL Secured</span>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-red-700 font-bold text-lg mb-2">
              🔥 {WEBSITE_CONFIG.FLASH_SALE_MESSAGE}
            </p>
            <p className="text-red-600 text-sm">
              Don't miss out - over {WEBSITE_CONFIG.RECENT_PURCHASES} people bought this in the last 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection