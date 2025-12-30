import { useState, useEffect } from 'react'

const CountdownTimer = () => {
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
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border-2 border-red-400 max-w-md mx-auto">
      <div className="text-center">
        <div className="flex items-center justify-center mb-3">
          <span className="text-2xl sm:text-3xl animate-bounce mr-2">🔥</span>
          <h3 className="text-lg sm:text-xl font-bold">LIMITED TIME OFFER!</h3>
          <span className="text-2xl sm:text-3xl animate-bounce ml-2">🔥</span>
        </div>
        
        <p className="text-sm sm:text-base mb-4 opacity-90">
          Special Price Ends In:
        </p>
        
        <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-4">
          <div className="bg-white text-red-600 rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px] shadow-lg">
            <div className="text-2xl sm:text-4xl font-bold">{mins}</div>
            <div className="text-xs sm:text-sm font-medium">MIN</div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold animate-pulse">:</div>
          <div className="bg-white text-red-600 rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px] shadow-lg">
            <div className="text-2xl sm:text-4xl font-bold">{secs.toString().padStart(2, '0')}</div>
            <div className="text-xs sm:text-sm font-medium">SEC</div>
          </div>
        </div>
        
        <div className="text-xs sm:text-sm opacity-90 animate-pulse">
          ⚡ Don't miss out on 90% OFF!
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer