import { useState, useEffect } from 'react'

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-gradient-to-r from-red-600/98 via-rose-600/98 via-pink-600/98 to-red-700/98 backdrop-blur-3xl border-b border-red-300/40 shadow-2xl relative overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4">
          {/* Lifetime Access Message */}
          <div className="py-3 text-center">
            <div className="flex items-center justify-center text-white">
              <span className="text-sm font-bold">Pay Once, Get Lifetime Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyHeader