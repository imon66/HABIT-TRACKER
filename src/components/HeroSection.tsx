import { useState, useEffect } from 'react'
import CountdownTimer from './CountdownTimer'
import { WEBSITE_CONFIG, handleDownload } from '../config/constants'

const TrackerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const trackers = [
    {
      name: 'Habit Tracker',
      image: '/images/Habit tracker Full .jpg',
      description: 'Build lasting habits with daily tracking'
    },
    {
      name: 'Fitness Tracker',
      image: '/images/Fitness tracker full  .jpg',
      description: 'Monitor workouts and health metrics'
    },
    {
      name: 'Money Tracker',
      image: '/images/Money tracker full.png',
      description: 'Track expenses and financial goals'
    },
    {
      name: 'Career Tracker',
      image: '/images/career tracker full.jpg',
      description: 'Monitor professional growth'
    },
    {
      name: 'Self-Care Tracker',
      image: '/images/self care tracker .jpg',
      description: 'Track wellness and mental health'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trackers.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [trackers.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200">
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative">
        {/* Main Image Display */}
        <div className="relative h-96 sm:h-[500px] overflow-hidden">
          {trackers.map((tracker, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide ? 'translate-x-0' :
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <img
                src={tracker.image}
                alt={tracker.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Overlay with tracker info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
              {trackers[currentSlide].name}
            </h3>
            <p className="text-white/90 text-sm sm:text-base">
              {trackers[currentSlide].description}
            </p>
          </div>
        </div>


        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide(currentSlide === 0 ? trackers.length - 1 : currentSlide - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % trackers.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Tracker Thumbnails */}
      <div className="flex justify-center space-x-2 mt-4 overflow-x-auto pb-2">
        {trackers.map((tracker, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentSlide
                ? 'border-blue-500 scale-110'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <img
              src={tracker.image}
              alt={tracker.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="gradient-bg section-padding min-h-screen flex items-center">
      <div className="container-max mobile-center-fix">
        <div className="text-center">
          {/* Countdown Timer */}
          <div className="mobile-margin">
            <CountdownTimer />
          </div>

          {/* Main Headline */}
          <h1 className="mobile-heading font-black text-gray-900 mobile-margin leading-tight">
            <span className="block">Transform Your Life in Just</span>
            <span className="text-gradient block animate-float">21 Days with Our</span>
            <span className="block">Ultimate Habit Tracker Bundle</span>
          </h1>

          {/* Subtext */}
          <p className="mobile-subheading text-gray-700 mobile-margin max-w-4xl mx-auto leading-relaxed">
            <span className="block font-semibold">Stop struggling with scattered habits. Get {WEBSITE_CONFIG.TOTAL_TRACKERS} proven tracking systems that have helped {WEBSITE_CONFIG.TOTAL_USERS} people build life-changing routines.</span>
            <span className="block mt-2 mobile-optimized text-gray-600">Ready-to-use Google Sheets templates with built-in psychology triggers for guaranteed success.</span>
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mobile-margin px-2">
            <span className="bg-red-100 text-red-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse">
              🔥 90% OFF Today Only
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              ✅ No Monthly Fees
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              ⚡ Works Immediately
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              💯 {WEBSITE_CONFIG.GUARANTEE_PERIOD} Guarantee
            </span>
          </div>

          {/* CTA Button */}
          <div className="mobile-margin px-2">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto mb-6">
              <p className="text-red-700 font-bold text-lg mb-3">⚠️ LIMITED TIME: {WEBSITE_CONFIG.URGENCY_MESSAGE}</p>
              <button
                onClick={handleDownload}
                className="btn-primary mobile-full sm:w-auto text-lg sm:text-xl px-6 py-4 sm:px-10 sm:py-5 mb-4 animate-pulse shadow-2xl cursor-pointer"
              >
                🚀 YES! Give Me All {WEBSITE_CONFIG.TOTAL_TRACKERS} Trackers for {WEBSITE_CONFIG.PRICE}
              </button>
              <p className="text-sm text-red-600 font-semibold">
                Regular Price: {WEBSITE_CONFIG.REGULAR_PRICE} | You Save: {WEBSITE_CONFIG.SAVINGS} ({WEBSITE_CONFIG.DISCOUNT_PERCENTAGE} OFF)
              </p>
            </div>
            <p className="mobile-optimized text-gray-600 font-medium">
              <span className="block sm:inline">🔒 256-Bit SSL Secure</span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="block sm:inline">⚡ Instant Download</span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="block sm:inline">💯 {WEBSITE_CONFIG.GUARANTEE_PERIOD} Money Back Guarantee</span>
            </p>
          </div>

          {/* Product Mockup - Slider with All Trackers */}
          <div className="mt-8 sm:mt-12 relative">
            <div className="max-w-5xl mx-auto">
              <TrackerSlider />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-gray-600">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🔒</span>
              <span className="mobile-optimized font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">👥</span>
              <span className="mobile-optimized font-medium">{WEBSITE_CONFIG.TOTAL_USERS} Success Stories</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">⭐</span>
              <span className="mobile-optimized font-medium">{WEBSITE_CONFIG.RATING} Rating ({WEBSITE_CONFIG.TOTAL_REVIEWS} Reviews)</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏆</span>
              <span className="mobile-optimized font-medium">Featured on ProductHunt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection