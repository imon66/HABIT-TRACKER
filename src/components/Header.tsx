import { useState, useEffect } from 'react'
import { handleDownload } from '../config/constants'

const Header = () => {
  const [timerVisible, setTimerVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide timer when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setTimerVisible(false)
      } else {
        setTimerVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg hover:shadow-xl fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out hover:bg-white/85`}
      style={{
        top: timerVisible ? '42px' : '0px', // Exact height of StickyHeader (py-3 + text height)
        transition: 'top 0.3s ease-in-out'
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Brand name */}
          <div>
            <h1 className="text-lg md:text-xl font-bold">
              <span className="text-gray-800">Ultimate Habit Tracker</span>{' '}
              <span className="text-blue-600">Bundle</span>
            </h1>
          </div>
          
          {/* Right side - Buy Now button */}
          <div>
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full text-sm transition-all duration-200 whitespace-nowrap hover:scale-105 shadow-md hover:shadow-lg"
            >
              Buy Now ₹49
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header