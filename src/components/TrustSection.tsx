import { useState, useEffect } from 'react'
import { WEBSITE_CONFIG } from '../config/constants'

const TrustSection = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false])
  
  // Auto-flip cards every 4 seconds with staggered timing
  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedCards(prev => prev.map(flipped => !flipped))
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    // Card 1 - Testimonial 1
    {
      name: "Arjun Mehta",
      role: "Marketing Manager, Mumbai",
      text: "I was struggling to maintain consistency with my morning routine. The habit tracker changed everything for me.",
      backText: "After 3 months of using this system, I've successfully built 5 new habits including daily exercise, reading, and meditation. My productivity has increased by 40%.",
      rating: 5,
      initial: "A",
      frontColor: "from-blue-100 via-sky-50 to-cyan-100 border-blue-200",
      backColor: "from-green-100 via-emerald-50 to-teal-100 border-green-200",
      avatarColor: "from-blue-500 to-cyan-500"
    },
    // Card 1 - Testimonial 2
    {
      name: "Priya Sharma",
      role: "Software Engineer, Pune",
      text: "Working from home made me lose track of my fitness goals. This fitness tracker brought structure back to my life.",
      backText: "Lost 8kg in 5 months and completed my first marathon! The weekly progress charts kept me motivated even on tough days. Best investment ever!",
      rating: 5,
      initial: "P",
      frontColor: "from-blue-100 via-sky-50 to-cyan-100 border-blue-200",
      backColor: "from-green-100 via-emerald-50 to-teal-100 border-green-200",
      avatarColor: "from-blue-500 to-cyan-500"
    },
    // Card 2 - Testimonial 3
    {
      name: "Sneha Kapoor",
      role: "College Student, Bangalore",
      text: "As a student with limited pocket money, I needed to track every rupee. This money tracker was a game-changer.",
      backText: "I saved ₹12,000 in 4 months by identifying unnecessary expenses. Now I can afford my course books and even have money for weekend outings with friends.",
      rating: 5,
      initial: "S",
      frontColor: "from-purple-100 via-violet-50 to-fuchsia-100 border-purple-200",
      backColor: "from-orange-100 via-amber-50 to-yellow-100 border-orange-200",
      avatarColor: "from-purple-500 to-pink-500"
    },
    // Card 2 - Testimonial 4
    {
      name: "Rahul Gupta",
      role: "Business Owner, Jaipur",
      text: "Managing business expenses was chaotic until I found this money tracker. Simple yet powerful!",
      backText: "Reduced unnecessary business costs by 30% and increased profit margins. The expense categorization feature helped identify money leaks I never noticed before.",
      rating: 5,
      initial: "R",
      frontColor: "from-purple-100 via-violet-50 to-fuchsia-100 border-purple-200",
      backColor: "from-orange-100 via-amber-50 to-yellow-100 border-orange-200",
      avatarColor: "from-purple-500 to-pink-500"
    },
    // Card 3 - Testimonial 5
    {
      name: "Vikram Singh",
      role: "Freelance Designer, Delhi",
      text: "My career was stagnant. I knew I needed to upskill but couldn't track my progress effectively.",
      backText: "The career tracker helped me land 3 high-paying clients in 6 months. I tracked my networking, skill development, and portfolio updates systematically. My income doubled!",
      rating: 5,
      initial: "V",
      frontColor: "from-emerald-100 via-green-50 to-teal-100 border-emerald-200",
      backColor: "from-rose-100 via-pink-50 to-red-100 border-rose-200",
      avatarColor: "from-emerald-500 to-teal-500"
    },
    // Card 3 - Testimonial 6
    {
      name: "Meera Patel",
      role: "HR Manager, Ahmedabad",
      text: "Burnout was affecting my mental health. The self-care tracker helped me prioritize my well-being.",
      backText: "Improved my sleep quality, reduced stress levels, and found work-life balance. The mood tracking feature helped me identify triggers and build better coping strategies.",
      rating: 5,
      initial: "M",
      frontColor: "from-emerald-100 via-green-50 to-teal-100 border-emerald-200",
      backColor: "from-rose-100 via-pink-50 to-red-100 border-rose-200",
      avatarColor: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="pt-0 pb-16 relative z-10">
      <div className="container-max relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            What Our Users Say
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Real feedback from people who transformed their lives with our tracking system
          </p>
        </div>

        {/* Auto-Flip Card Testimonials - 3 Cards with 2 Testimonials Each */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 px-4 md:px-0">
          {[0, 1, 2].map((cardIndex) => {
            const testimonial1 = testimonials[cardIndex * 2];
            const testimonial2 = testimonials[cardIndex * 2 + 1];
            const currentTestimonial = flippedCards[cardIndex] ? testimonial2 : testimonial1;
            
            return (
              <div key={cardIndex} className="flip-card h-48 md:h-72 mx-auto w-full max-w-xs md:max-w-none">
                <div className={`flip-card-inner ${flippedCards[cardIndex] ? 'flipped' : ''}`}>
                  {/* Front Side - First Testimonial */}
                  <div className={`flip-card-front bg-gradient-to-br from-white/90 via-blue-50/60 to-purple-50/40 backdrop-blur-xl border border-white/30 shadow-2xl p-3 md:p-6 text-center flex flex-col justify-between`}>
                    <div>
                      <div className="flex justify-center mb-2 md:mb-3">
                        <div className={`w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg`}>
                          {testimonial1.initial}
                        </div>
                      </div>
                      <div className="flex justify-center mb-2 md:mb-3 text-yellow-500 text-sm md:text-base">
                        {[...Array(testimonial1.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-xs md:text-sm leading-tight mb-2 px-1">
                      "{testimonial1.text.length > 80 ? testimonial1.text.substring(0, 80) + '...' : testimonial1.text}"
                    </p>
                    <div>
                      <p className="font-bold text-gray-900 text-xs md:text-base">{testimonial1.name}</p>
                      <p className="text-xs text-gray-600 font-medium">{testimonial1.role}</p>
                    </div>
                  </div>
                  
                  {/* Back Side - Second Testimonial */}
                  <div className={`flip-card-back bg-gradient-to-br from-blue-600/90 via-purple-700/90 to-pink-600/90 backdrop-blur-xl border border-white/20 shadow-2xl p-3 md:p-6 text-center flex flex-col justify-between`}>
                    <div>
                      <div className="flex justify-center mb-2 md:mb-3">
                        <div className={`w-10 h-10 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg border border-white/30`}>
                          {testimonial2.initial}
                        </div>
                      </div>
                      <h4 className="text-sm md:text-lg font-bold text-white mb-1">{testimonial2.name}</h4>
                      <p className="text-white/80 font-medium mb-2 text-xs">{testimonial2.role}</p>
                      <div className="flex justify-center text-yellow-300 text-sm md:text-base mb-2">
                        {[...Array(testimonial2.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-white/95 drop-shadow-sm text-xs leading-tight italic">
                      "{testimonial2.backText.length > 100 ? testimonial2.backText.substring(0, 100) + '...' : testimonial2.backText}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  )
}

export default TrustSection