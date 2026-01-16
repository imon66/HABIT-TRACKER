import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleBuyNow } from '../config/constants'

const MobileStickyFooter = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState(179) // Start with 2:59 (179 seconds)

  useEffect(() => {
    let lastScrollY = 0
    let scrollCount = 0
    let isFooterShown = false

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Check if at bottom of page (within 100px)
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 100
      
      // Hide footer at bottom and reset everything
      if (isAtBottom) {
        setIsVisible(false)
        scrollCount = 0
        isFooterShown = false
        lastScrollY = currentScrollY
        return
      }
      
      // Hide footer when near top (within 150px) and reset everything
      if (currentScrollY < 150) {
        setIsVisible(false)
        scrollCount = 0
        isFooterShown = false
        lastScrollY = currentScrollY
        return
      }
      
      // Only track significant scroll movements (at least 50px)
      const scrollDiff = Math.abs(currentScrollY - lastScrollY)
      if (scrollDiff < 50) {
        return
      }
      
      // Detect any scroll (up or down)
      if (currentScrollY !== lastScrollY) {
        scrollCount++
        
        // Show footer after 2 scroll movements (up or down)
        if (scrollCount >= 2 && !isFooterShown) {
          setIsVisible(true)
          isFooterShown = true
        }
      }
      
      lastScrollY = currentScrollY
    }

    // Initialize
    lastScrollY = window.scrollY

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Timer logic
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

  // Don't render if not visible
  if (!isVisible) return null

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        right: '0px',
        zIndex: 9999,
        display: 'block'
      }}
      className="bg-gradient-to-r from-slate-900/95 via-gray-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-3xl border-t border-white/30 shadow-2xl text-white p-3 sm:p-4 lg:hidden transition-all duration-500 overflow-hidden"
    >
      {/* Premium animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/8 to-pink-900/10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Floating orbs for depth */}
      <div className="absolute top-2 right-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-2 left-4 w-12 h-12 bg-gradient-to-r from-pink-500/15 to-indigo-500/15 rounded-full blur-xl animate-pulse delay-700"></div>
      
      <div className="relative z-10">
        <div className="flex items-end justify-between gap-2 sm:gap-4">
          {/* Left side - Enhanced Timer */}
          <div className="flex flex-col flex-1 min-w-0">
            <div className="text-white/95 text-xs sm:text-sm mb-1 sm:mb-2 font-semibold tracking-wide drop-shadow-md">Price Increases in...</div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg border border-white/20 min-w-[50px] sm:min-w-[60px] h-[60px] sm:h-[70px] flex flex-col justify-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">{mins.toString().padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium tracking-wider">MIN</div>
              </div>
              <div className="text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg border border-white/20 min-w-[50px] sm:min-w-[60px] h-[60px] sm:h-[70px] flex flex-col justify-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">{secs.toString().padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium tracking-wider">SEC</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Enhanced Buy Now button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleBuyNow(navigate)}
              className="bg-gradient-to-r from-purple-600/95 via-pink-600/95 to-purple-700/95 backdrop-blur-3xl border border-purple-300/40 shadow-2xl hover:shadow-[0_12px_35px_rgba(147,_51,_234,_0.7)] text-white font-bold px-3 sm:px-4 md:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 hover:scale-105 hover:border-purple-200/60 tracking-wide relative overflow-hidden whitespace-nowrap h-[60px] sm:h-[70px]"
            >
              <span className="text-sm sm:text-base">👍</span>
              <span className="text-xs sm:text-sm md:text-base">BUY NOW</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileStickyFooter