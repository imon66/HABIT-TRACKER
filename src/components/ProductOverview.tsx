const ProductOverview = () => {
  const trackers = [
    {
      icon: "📊",
      title: "Habit Tracker",
      description: "Track daily habits with visual progress charts and streak counters",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: "💪",
      title: "Fitness Tracker",
      description: "Monitor workouts, weight, and fitness goals with detailed analytics",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: "💰",
      title: "Money Tracker",
      description: "Manage expenses, income, and savings with budget planning tools",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: "🎯",
      title: "Career Tracker",
      description: "Set professional goals, track skills, and monitor career progress",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: "🧠",
      title: "Self-Care Tracker",
      description: "Focus on mental health, meditation, and personal well-being",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50"
    }
  ]

  return (
    <section className="gradient-bg section-padding">
      <div className="container-max">
        <div className="text-center mobile-margin">
          <h2 className="mobile-heading font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="block">What You Get When You</span>
            <span className="text-gradient">Order Today</span>
          </h2>
          <p className="mobile-subheading text-gray-700 max-w-4xl mx-auto leading-relaxed">
            5 life-changing tracking systems that have helped 2,500+ people build better habits and save thousands
          </p>
          
          {/* Value Proposition */}
          <div className="mt-6 sm:mt-8 professional-card bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-4 sm:p-6 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl font-bold text-green-800 mb-2">
              🎉 MASSIVE VALUE: Worth ₹2,450 if bought separately
            </p>
            <p className="text-green-700">
              Today Only: Get ALL 5 Premium Trackers for just ₹49 (98% OFF!)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trackers.map((tracker, index) => (
            <div key={index} className={`professional-card mobile-padding card-hover group ${index === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
              <div className="text-center">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-md group-hover:scale-105 transition-transform duration-200`}>
                  {tracker.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {tracker.title}
                </h3>
                
                <p className="mobile-optimized text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {tracker.description}
                </p>
                
                {/* Feature highlights */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Easy to use</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Mobile compatible</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Fully customizable</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="professional-card bg-gradient-to-r from-blue-600 to-blue-700 text-white mobile-padding max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="mobile-optimized text-blue-100 mb-6">
              Get all 5 trackers + bonuses for the price of one coffee!
            </p>
            <button className="bg-white text-blue-700 font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg text-lg sm:text-xl mobile-full sm:w-auto">
              🚀 Get All 5 Trackers - ₹49 Only
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductOverview