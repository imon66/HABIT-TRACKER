import { useState, useEffect } from 'react'
import { WEBSITE_CONFIG, handleDownload } from '../config/constants'

const FeaturesSection = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false])
  
  // Auto-flip cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedCards(prev => prev.map(flipped => !flipped))
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const flipCards = [
    {
      front: {
        icon: "🎯",
        title: "Build Habits That Actually Stick",
        description: "Psychology-backed system with 21-day habit formation triggers that guarantee success"
      },
      back: {
        icon: "⚡",
        title: "Works in 5 Minutes",
        description: "No setup required. Download, open, and start tracking immediately on any device"
      }
    },
    {
      front: {
        icon: "📊",
        title: "See Your Progress Instantly",
        description: "Beautiful visual charts and analytics that motivate you to keep going every single day"
      },
      back: {
        icon: "🔄",
        title: "Customize Everything",
        description: "Adapt every tracker to your unique lifestyle - add habits, change colors, modify goals"
      }
    },
    {
      front: {
        icon: "💰",
        title: "Save ₹50,000+ Per Year",
        description: "Replace expensive apps and coaches - everything you need in one affordable bundle"
      },
      back: {
        icon: "📱",
        title: "Track Anywhere, Anytime",
        description: "Works perfectly on phone, tablet, laptop - sync across all your devices automatically"
      }
    }
  ]


  return (
    <div className="py-16 relative z-10">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white/95 drop-shadow-lg mb-4">
            Why {WEBSITE_CONFIG.TOTAL_USERS} People Choose Our Trackers Over Expensive Apps
          </h2>
          <p className="text-xl text-white/85 drop-shadow-md max-w-3xl mx-auto">
            Stop wasting money on subscriptions that don't work. Get proven results with our one-time purchase system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {flipCards.map((card, index) => (
            <div
              key={index}
              className="flip-card h-48 md:h-64"
            >
              <div className={`flip-card-inner ${flippedCards[index] ? 'flipped' : ''}`}>
                {/* Front Side */}
                <div className="flip-card-front bg-gradient-to-br from-white/95 via-blue-50/70 to-purple-50/50 backdrop-blur-2xl border border-white/40 shadow-2xl hover:shadow-[0_15px_35px_rgba(255,_255,_255,_0.2)] p-3 md:p-6 text-center transition-all duration-300">
                  <div className="text-3xl md:text-5xl mb-2 md:mb-4 filter drop-shadow-lg">{card.front.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">{card.front.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">{card.front.description}</p>
                </div>
                
                {/* Back Side */}
                <div className="flip-card-back bg-gradient-to-br from-blue-600/95 via-purple-700/95 to-pink-600/95 backdrop-blur-2xl border border-white/30 shadow-2xl hover:shadow-[0_15px_35px_rgba(59,_130,_246,_0.4)] p-3 md:p-6 text-center transition-all duration-300">
                  <div className="text-3xl md:text-5xl mb-2 md:mb-4 filter drop-shadow-lg">{card.back.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-md mb-2 md:mb-3">{card.back.title}</h3>
                  <p className="text-sm md:text-base text-white/95 drop-shadow-sm leading-relaxed font-medium">{card.back.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </div>
  )
}

export default FeaturesSection