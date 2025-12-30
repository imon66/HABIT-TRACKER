import { WEBSITE_CONFIG, handleDownload } from '../config/constants'

const FeaturesSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Build Habits That Actually Stick",
      description: "Psychology-backed system with 21-day habit formation triggers that guarantee success"
    },
    {
      icon: "📊",
      title: "See Your Progress Instantly",
      description: "Beautiful visual charts and analytics that motivate you to keep going every single day"
    },
    {
      icon: "💰",
      title: "Save ₹50,000+ Per Year",
      description: "Replace expensive apps and coaches - everything you need in one affordable bundle"
    },
    {
      icon: "⚡",
      title: "Works in 5 Minutes",
      description: "No setup required. Download, open, and start tracking immediately on any device"
    },
    {
      icon: "🔄",
      title: "Customize Everything",
      description: "Adapt every tracker to your unique lifestyle - add habits, change colors, modify goals"
    },
    {
      icon: "📱",
      title: "Track Anywhere, Anytime",
      description: "Works perfectly on phone, tablet, laptop - sync across all your devices automatically"
    }
  ]

  return (
    <section className="gradient-bg section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why {WEBSITE_CONFIG.TOTAL_USERS} People Choose Our Trackers Over Expensive Apps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop wasting money on subscriptions that don't work. Get proven results with our one-time purchase system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="professional-card p-6 text-center card-hover">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="professional-card p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Why Pay Monthly When You Can Own Forever?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Other Apps */}
              <div className="text-center">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-red-700 mb-4">❌ Other Habit Apps</h4>
                  <ul className="text-left space-y-2 text-red-600">
                    <li>• ₹500-2000/month subscriptions</li>
                    <li>• Limited customization</li>
                    <li>• Data locked in their system</li>
                    <li>• Stop paying = lose everything</li>
                    <li>• Complex setup process</li>
                  </ul>
                  <p className="text-red-700 font-bold mt-4">
                    Cost: ₹6,000-24,000/year
                  </p>
                </div>
              </div>

              {/* Our Solution */}
              <div className="text-center">
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-700 mb-4">✅ Our Tracker Bundle</h4>
                  <ul className="text-left space-y-2 text-green-600">
                    <li>• One-time payment of ₹49</li>
                    <li>• Fully customizable</li>
                    <li>• You own your data forever</li>
                    <li>• Lifetime access + updates</li>
                    <li>• Ready to use in 5 minutes</li>
                  </ul>
                  <p className="text-green-700 font-bold mt-4">
                    Cost: ₹49 (One-time)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
            <p className="text-blue-100 mb-6">
              Join {WEBSITE_CONFIG.TOTAL_USERS} people who chose the smart way to build lasting habits
            </p>
            <button
              onClick={handleDownload}
              className="bg-white text-blue-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg text-lg cursor-pointer"
            >
              Get All {WEBSITE_CONFIG.TOTAL_TRACKERS} Trackers for {WEBSITE_CONFIG.PRICE} →
            </button>
            <p className="text-sm text-blue-100 mt-4">
              {WEBSITE_CONFIG.GUARANTEE_PERIOD} money-back guarantee • Instant download • No monthly fees
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection