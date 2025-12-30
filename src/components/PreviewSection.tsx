import { useState, useEffect } from 'react'

const PreviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const trackerPreviews = [
    {
      title: "Habit Tracker Dashboard",
      image: "/images/Habit tracker Full .jpg",
      description: "Track daily habits with visual progress charts",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Fitness Tracker",
      image: "/images/Fitness tracker full  .jpg",
      description: "Monitor workouts and fitness goals",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Money Tracker",
      image: "/images/Money tracker full.png",
      description: "Manage expenses and budget planning",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Career Tracker",
      image: "/images/career tracker full.jpg",
      description: "Track professional goals and skills",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Self-Care Tracker",
      image: "/images/self care tracker .jpg",
      description: "Focus on mental health and well-being",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trackerPreviews.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [trackerPreviews.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trackerPreviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trackerPreviews.length) % trackerPreviews.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="gradient-bg section-padding">
      <div className="container-max">
        <div className="text-center mobile-margin">
          <h2 className="mobile-heading font-black text-gray-900 mb-4 sm:mb-6">
            <span className="block">See It In</span>
            <span className="text-gradient">Action</span>
          </h2>
          <p className="mobile-subheading text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Get a preview of your new habit tracking system
          </p>
        </div>

        {/* Sliding Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Container */}
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-white border-4 border-gray-200">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {trackerPreviews.map((tracker, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${tracker.color} p-6 sm:p-8 text-white text-center`}>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{tracker.title}</h3>
                    <p className="text-base sm:text-lg opacity-90">{tracker.description}</p>
                  </div>
                  
                  {/* Screenshot */}
                  <div className="p-4 sm:p-6">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={tracker.image}
                        alt={tracker.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {trackerPreviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Tracker Names Below */}
          <div className="flex justify-center mt-4 flex-wrap gap-2">
            {trackerPreviews.map((tracker, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tracker.title}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Views */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mobile-margin">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Works on All Devices</span>
            </h3>
            <p className="mobile-optimized text-gray-600 max-w-2xl mx-auto">
              Access your trackers anywhere - mobile, tablet, or desktop
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 items-end">
            {/* Android */}
            <div className="text-center">
              <div className="bg-white rounded-2xl mobile-padding shadow-xl card-hover">
                <img
                  src="/images/andoid .png"
                  alt="Android Mobile View"
                  className="w-full max-w-[200px] sm:max-w-xs mx-auto h-auto"
                />
                <div className="mt-4">
                  <h4 className="font-bold text-gray-800 mb-2">📱 Mobile Optimized</h4>
                  <p className="text-sm text-gray-600">Perfect for on-the-go tracking</p>
                </div>
              </div>
            </div>

            {/* Tablet */}
            <div className="text-center">
              <div className="bg-white rounded-2xl mobile-padding shadow-xl card-hover">
                <img
                  src="/images/tab1.png"
                  alt="Tablet View"
                  className="w-full max-w-[250px] sm:max-w-sm mx-auto h-auto"
                />
                <div className="mt-4">
                  <h4 className="font-bold text-gray-800 mb-2">📱 Perfect for Tablets</h4>
                  <p className="text-sm text-gray-600">Larger screen, better experience</p>
                </div>
              </div>
            </div>

            {/* Tablet Travel */}
            <div className="text-center">
              <div className="bg-white rounded-2xl mobile-padding shadow-xl card-hover">
                <img
                  src="/images/tab travel .png"
                  alt="Tablet Travel View"
                  className="w-full max-w-[250px] sm:max-w-sm mx-auto h-auto"
                />
                <div className="mt-4">
                  <h4 className="font-bold text-gray-800 mb-2">✈️ Track Anywhere</h4>
                  <p className="text-sm text-gray-600">Never miss a habit while traveling</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-white rounded-2xl mobile-padding shadow-2xl border-4 border-yellow-400 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              🎯 Ready to Start Your Transformation?
            </h3>
            <p className="mobile-optimized text-gray-700 mb-6">
              Get instant access to all these powerful tracking systems
            </p>
            <button className="btn-primary text-lg sm:text-xl mobile-full sm:w-auto mb-4">
              🚀 Get Instant Access - ₹49 Only
            </button>
            <p className="text-sm text-gray-600">
              ⚡ Instant download • 💯 Money back guarantee • 🔒 Secure payment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreviewSection