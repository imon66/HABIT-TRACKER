import { useState, useEffect } from 'react'
import { WEBSITE_CONFIG, handleDownload } from '../config/constants'

const PreviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredImage, setHoveredImage] = useState(false)

  const trackerPreviews = [
    {
      title: "Habit Tracker Dashboard",
      image: "/images/Habit tracker Full .jpg",
      description: "Track daily habits with visual progress charts",
      useCase: "Build consistent daily routines that stick. Perfect for morning routines, reading goals, or breaking bad habits. See your streak progress and never miss a day again."
    },
    {
      title: "Fitness Tracker",
      image: "/images/Fitness tracker full  .jpg",
      description: "Monitor workouts and fitness goals",
      useCase: "Transform your body with systematic tracking. Monitor workouts, weight progress, and nutrition. Ideal for gym enthusiasts and home fitness warriors."
    },
    {
      title: "Money Tracker",
      image: "/images/Money tracker full.png",
      description: "Manage expenses and budget planning",
      useCase: "Take control of your finances and build wealth. Track expenses, savings goals, and investments. Perfect for budgeting, debt payoff, and financial freedom."
    },
    {
      title: "Career Tracker",
      image: "/images/career tracker full.jpg",
      description: "Track professional goals and skills",
      useCase: "Accelerate your professional growth. Track skill development, networking, certifications, and career milestones. Essential for ambitious professionals."
    },
    {
      title: "Self-Care Tracker",
      image: "/images/self care tracker .jpg",
      description: "Focus on mental health and well-being",
      useCase: "Prioritize your mental health and well-being. Track meditation, sleep, mood, and self-care activities. Perfect for stress management and life balance."
    }
  ]

  // Auto-slide functionality with hover pause
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % trackerPreviews.length)
      }, 4000) // Change slide every 4 seconds

      return () => clearInterval(timer)
    }
  }, [trackerPreviews.length, isHovered])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trackerPreviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trackerPreviews.length) % trackerPreviews.length)
  }


  return (
    <div className="relative">
      {/* Navigation Arrows - Responsive Positioning */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-gradient-to-br from-white/95 via-blue-50/70 to-purple-50/50 backdrop-blur-2xl border border-white/40 shadow-xl hover:bg-gradient-to-r hover:from-blue-500/90 hover:to-purple-500/90 hover:text-white rounded-full p-2 transition-all duration-300 z-20 opacity-80 hover:opacity-100 hover:scale-110 hover:shadow-[0_10px_25px_rgba(59,_130,_246,_0.5)]"
      >
        <svg className="w-4 h-4 text-gray-700 hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 md:translate-x-12 bg-gradient-to-br from-white/95 via-blue-50/70 to-purple-50/50 backdrop-blur-2xl border border-white/40 shadow-xl hover:bg-gradient-to-r hover:from-blue-500/90 hover:to-purple-500/90 hover:text-white rounded-full p-2 transition-all duration-300 z-20 opacity-80 hover:opacity-100 hover:scale-110 hover:shadow-[0_10px_25px_rgba(59,_130,_246,_0.5)]"
      >
        <svg className="w-4 h-4 text-gray-700 hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        className="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Carousel Container - Dynamic Height with White Glow */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 via-blue-50/70 to-purple-50/50 backdrop-blur-2xl border border-white/40 shadow-2xl transform transition-all duration-300 group-hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(255,_255,_255,_0.15)] relative">
          {/* White glow shadow behind */}
          <div className="absolute -inset-4 bg-white/30 rounded-3xl blur-2xl -z-10"></div>
          <div className="absolute -inset-2 bg-white/20 rounded-3xl blur-xl -z-10"></div>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {trackerPreviews.map((tracker, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {/* Colorful Header with enhanced gradients */}
                <div className={`${
                  index === 0 ? 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600' :
                  index === 1 ? 'bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-600' :
                  index === 2 ? 'bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600' :
                  index === 3 ? 'bg-gradient-to-br from-rose-400 via-pink-500 to-red-600' :
                  'bg-gradient-to-br from-indigo-400 via-blue-500 to-sky-600'
                } p-3 sm:p-4 text-white text-center relative overflow-hidden`}>
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 right-1 w-1 h-1 bg-white/40 rounded-full"></div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-1 relative z-10">{tracker.title}</h3>
                  <p className="text-sm sm:text-base opacity-90 relative z-10">{tracker.description}</p>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Enhanced Screenshot with white background and colored dots */}
                <div className="p-2 sm:p-3 bg-white relative">
                  {/* Decorative dot pattern background */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Large dots */}
                    <div className={`absolute top-4 left-4 w-4 h-4 rounded-full opacity-20 ${
                      index === 0 ? 'bg-emerald-400' :
                      index === 1 ? 'bg-violet-400' :
                      index === 2 ? 'bg-orange-400' :
                      index === 3 ? 'bg-rose-400' :
                      'bg-indigo-400'
                    }`}></div>
                    <div className={`absolute top-8 right-6 w-3 h-3 rounded-full opacity-15 ${
                      index === 0 ? 'bg-teal-500' :
                      index === 1 ? 'bg-purple-500' :
                      index === 2 ? 'bg-amber-500' :
                      index === 3 ? 'bg-pink-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className={`absolute bottom-6 left-8 w-5 h-5 rounded-full opacity-10 ${
                      index === 0 ? 'bg-cyan-600' :
                      index === 1 ? 'bg-fuchsia-600' :
                      index === 2 ? 'bg-yellow-600' :
                      index === 3 ? 'bg-red-600' :
                      'bg-sky-600'
                    }`}></div>
                    <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full opacity-25 ${
                      index === 0 ? 'bg-emerald-300' :
                      index === 1 ? 'bg-violet-300' :
                      index === 2 ? 'bg-orange-300' :
                      index === 3 ? 'bg-rose-300' :
                      'bg-indigo-300'
                    }`}></div>
                    {/* Small scattered dots */}
                    <div className={`absolute top-12 left-12 w-1 h-1 rounded-full opacity-30 ${
                      index === 0 ? 'bg-teal-400' :
                      index === 1 ? 'bg-purple-400' :
                      index === 2 ? 'bg-amber-400' :
                      index === 3 ? 'bg-pink-400' :
                      'bg-blue-400'
                    }`}></div>
                    <div className={`absolute top-16 right-12 w-1 h-1 rounded-full opacity-20 ${
                      index === 0 ? 'bg-cyan-500' :
                      index === 1 ? 'bg-fuchsia-500' :
                      index === 2 ? 'bg-yellow-500' :
                      index === 3 ? 'bg-red-500' :
                      'bg-sky-500'
                    }`}></div>
                  </div>
                  
                  <div
                    className="rounded-xl overflow-hidden relative cursor-pointer z-10"
                    onMouseEnter={() => setHoveredImage(true)}
                    onMouseLeave={() => setHoveredImage(false)}
                  >
                    <img
                      src={tracker.image}
                      alt={tracker.title}
                      className={`w-full h-auto transition-all duration-500 ${
                        hoveredImage
                          ? 'scale-110 brightness-75'
                          : 'scale-100 brightness-100'
                      }`}
                    />
                    
                    {/* Value-focused overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredImage ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute bottom-4 left-4 right-4 text-white transform transition-all duration-300">
                        <div className={`transition-all duration-500 ${
                          hoveredImage ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}>
                          <h4 className="text-lg font-bold mb-2">💡 Why Use This?</h4>
                          <p className="text-sm leading-relaxed">{trackerPreviews[currentSlide].useCase}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Sparkle effect */}
                    <div className={`absolute top-4 right-4 text-2xl transition-all duration-300 ${
                      hoveredImage ? 'opacity-100 animate-pulse' : 'opacity-0'
                    }`}>
                      ✨
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Tips Slider with vibrant colors */}
      <div className="mt-4">
        <div className={`${
          currentSlide === 0 ? 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600' :
          currentSlide === 1 ? 'bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-600' :
          currentSlide === 2 ? 'bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600' :
          currentSlide === 3 ? 'bg-gradient-to-br from-rose-400 via-pink-500 to-red-600' :
          'bg-gradient-to-br from-indigo-400 via-blue-500 to-sky-600'
        } rounded-xl p-4 text-white shadow-lg transition-all duration-500 relative overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute top-2 right-2 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1 w-1 h-1 bg-white/40 rounded-full"></div>
          
          <div className="flex items-center space-x-3 relative z-10">
            {/* Enhanced Icon */}
            <div className="text-3xl filter drop-shadow-lg">
              {currentSlide === 0 && '🎯'} {/* Habit Tracker */}
              {currentSlide === 1 && '💪'} {/* Fitness Tracker */}
              {currentSlide === 2 && '💰'} {/* Money Tracker */}
              {currentSlide === 3 && '🚀'} {/* Career Tracker */}
              {currentSlide === 4 && '🧘'} {/* Self-Care Tracker */}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1 text-white">{trackerPreviews[currentSlide].title}</h4>
              <p className="text-sm opacity-95 leading-relaxed text-white/90">
                💡 <strong>How to use:</strong> {trackerPreviews[currentSlide].useCase}
              </p>
            </div>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(179) // Start with 2:59 (179 seconds)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 120) {
          // When it reaches 2:00 (120 seconds), reset to 2:59 (179 seconds)
          return 179
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return { mins, secs }
  }

  const { mins, secs } = formatTime(timeLeft)

  return (
    <section className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        
        {/* Mobile: Stack vertically, Desktop: Two columns */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-center">
          
          {/* Content Section */}
          <div className="w-full space-y-4 md:space-y-6 text-center lg:text-left order-1 lg:order-1">
            {/* New 2026 Edition Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="bg-gradient-to-r from-white/90 via-blue-50/70 to-purple-50/50 backdrop-blur-2xl border border-white/40 shadow-2xl text-blue-800 px-4 md:px-6 py-2 rounded-full text-sm font-bold tracking-wide">
                New 2026 Edition
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="font-black leading-tight">
                <span className="block text-white/95 drop-shadow-lg text-xl md:text-2xl lg:text-3xl">Transform Your Life in Just</span>
                <span className="block bg-gradient-to-r from-cyan-300 via-violet-400 to-rose-300 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-8xl drop-shadow-2xl animate-pulse">
                  21 Days with Our
                </span>
                <span className="block text-white/95 drop-shadow-lg text-2xl md:text-4xl lg:text-6xl">Ultimate Habit Tracker Bundle</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
              Stop struggling with scattered habits. Get {WEBSITE_CONFIG.TOTAL_TRACKERS} effective tracking systems designed to help you build consistent routines. Ready-to-use Google Sheets templates with built-in productivity features to support your habit-building journey.
            </p>

            {/* CTA Button - Fixed Width with Heartbeat Animation */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={handleDownload}
                className="w-full max-w-md bg-gradient-to-r from-purple-900 via-purple-700 to-white hover:from-purple-800 hover:via-purple-600 hover:to-gray-100 backdrop-blur-3xl border-2 border-white/60 shadow-2xl hover:shadow-[0_35px_80px_rgba(88,_28,_135,_0.8)] text-white font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-5 rounded-3xl transform hover:scale-105 transition-all duration-500 flex items-center justify-center space-x-3 hover:border-purple-300/80 relative overflow-hidden group animate-heartbeat"
              >
                <span>🚀</span>
                <span>Get All 5 Trackers for ₹49</span>
                <span>→</span>
              </button>
            </div>

            {/* Countdown Timer - Enhanced Glassmorphism Style */}
            <div className="bg-gradient-to-br from-white/20 via-blue-50/15 to-purple-50/10 backdrop-blur-3xl border-2 border-white/40 shadow-2xl hover:shadow-[0_25px_50px_rgba(255,_255,_255,_0.2)] rounded-2xl p-4 md:p-6 w-full max-w-md mx-auto lg:mx-0 transition-all duration-500 relative overflow-hidden group">
              {/* Enhanced glassmorphism overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-100/5 to-purple-100/8 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Floating glassmorphism orbs */}
              <div className="absolute top-2 right-3 w-12 h-12 bg-gradient-to-r from-white/20 to-blue-200/15 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-2 left-3 w-8 h-8 bg-gradient-to-r from-purple-200/15 to-white/10 rounded-full blur-lg animate-pulse delay-700"></div>
              <div className="absolute top-1/2 right-1 w-4 h-4 bg-white/15 rounded-full blur-md animate-bounce delay-1000"></div>
              
              <div className="relative z-10 space-y-3">
                <div className="text-gray-800 text-center text-base md:text-lg font-bold tracking-wide drop-shadow-sm">
                  Price Increases in...
                </div>
                <div className="flex items-center justify-center space-x-2 md:space-x-3">
                  <div className="text-center bg-gradient-to-br from-white/30 via-blue-50/20 to-white/15 backdrop-blur-xl rounded-xl p-3 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[60px] group-hover:scale-105">
                    <div className="text-2xl md:text-3xl font-black text-gray-800 drop-shadow-md">00</div>
                    <div className="text-xs text-gray-600 font-bold tracking-wider uppercase mt-1">Days</div>
                  </div>
                  <div className="text-xl md:text-2xl text-gray-600 font-bold">:</div>
                  <div className="text-center bg-gradient-to-br from-white/30 via-blue-50/20 to-white/15 backdrop-blur-xl rounded-xl p-3 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[60px] group-hover:scale-105">
                    <div className="text-2xl md:text-3xl font-black text-gray-800 drop-shadow-md">00</div>
                    <div className="text-xs text-gray-600 font-bold tracking-wider uppercase mt-1">Hours</div>
                  </div>
                  <div className="text-xl md:text-2xl text-gray-600 font-bold">:</div>
                  <div className="text-center bg-gradient-to-br from-white/30 via-blue-50/20 to-white/15 backdrop-blur-xl rounded-xl p-3 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[60px] group-hover:scale-105">
                    <div className="text-2xl md:text-3xl font-black text-gray-800 drop-shadow-md">{mins.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-gray-600 font-bold tracking-wider uppercase mt-1">Min</div>
                  </div>
                  <div className="text-xl md:text-2xl text-gray-600 font-bold">:</div>
                  <div className="text-center bg-gradient-to-br from-white/30 via-blue-50/20 to-white/15 backdrop-blur-xl rounded-xl p-3 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[60px] group-hover:scale-105">
                    <div className="text-2xl md:text-3xl font-black text-gray-800 drop-shadow-md">{secs.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-gray-600 font-bold tracking-wider uppercase mt-1">Sec</div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-black font-bold text-sm md:text-base flex items-center justify-center drop-shadow-sm">
                    <span>Special Launch Price Ending Soon!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Section with Enhanced Glow */}
          <div className="w-full order-1 lg:order-2 relative">
            {/* Additional outer glow for the entire slider area */}
            <div className="absolute -inset-8 bg-gradient-to-r from-white/20 via-white/30 to-white/20 rounded-[3rem] blur-3xl -z-10"></div>
            <div className="absolute -inset-4 bg-white/15 rounded-[2.5rem] blur-2xl -z-10"></div>
            
            <div className="p-4 md:p-8 relative z-10">
              <PreviewSlider />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection