import Header from './components/Header'
import StickyHeader from './components/StickyHeader'
import MobileStickyFooter from './components/MobileStickyFooter'
import HeroSection from './components/HeroSection'
import TrustSection from './components/TrustSection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/80 via-indigo-900/70 to-slate-900 relative">
      {/* Enhanced multi-layer glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/15 via-purple-100/10 via-pink-100/8 to-cyan-100/12"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-200/8 via-transparent to-violet-200/6"></div>
      
      {/* Animated floating orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Enhanced Floating Bubbles Throughout Background - 40+ Bubbles - Shuffled Positions */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Randomly Distributed Large Bubbles */}
        <div className="absolute top-[7%] left-[18%] w-6 h-6 bg-white/25 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-[23%] right-[12%] w-8 h-8 bg-purple-300/30 rounded-full blur-md animate-bounce delay-300"></div>
        <div className="absolute top-[41%] left-[6%] w-5 h-5 bg-blue-200/25 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-[58%] right-[35%] w-7 h-7 bg-white/20 rounded-full blur-sm animate-ping delay-1000"></div>
        <div className="absolute top-[14%] left-[73%] w-6 h-6 bg-indigo-300/25 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-[67%] right-[8%] w-8 h-8 bg-purple-200/28 rounded-full blur-md animate-pulse delay-800"></div>
        <div className="absolute top-[36%] left-[82%] w-7 h-7 bg-white/22 rounded-full animate-ping delay-400"></div>
        <div className="absolute top-[79%] right-[45%] w-6 h-6 bg-blue-300/25 rounded-full blur-sm animate-bounce delay-600"></div>
        
        {/* Randomly Distributed Medium Bubbles */}
        <div className="absolute top-[11%] left-[42%] w-4 h-4 bg-purple-200/20 rounded-full blur-sm animate-pulse delay-200"></div>
        <div className="absolute top-[29%] right-[67%] w-3 h-3 bg-white/18 rounded-full animate-bounce delay-800"></div>
        <div className="absolute top-[46%] left-[28%] w-4 h-4 bg-blue-300/22 rounded-full blur-sm animate-ping delay-400"></div>
        <div className="absolute top-[63%] right-[58%] w-3 h-3 bg-purple-300/25 rounded-full animate-pulse delay-600"></div>
        <div className="absolute top-[19%] left-[91%] w-5 h-5 bg-white/20 rounded-full blur-sm animate-bounce delay-900"></div>
        <div className="absolute top-[52%] right-[15%] w-4 h-4 bg-indigo-200/22 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-[74%] left-[53%] w-3 h-3 bg-purple-200/20 rounded-full blur-sm animate-pulse delay-700"></div>
        <div className="absolute top-[33%] right-[78%] w-5 h-5 bg-blue-200/24 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-[85%] left-[22%] w-4 h-4 bg-white/19 rounded-full animate-ping delay-1100"></div>
        <div className="absolute top-[8%] right-[88%] w-3 h-3 bg-purple-300/21 rounded-full blur-sm animate-pulse delay-400"></div>
        
        {/* Randomly Distributed Small Bubbles */}
        <div className="absolute top-[16%] left-[64%] w-2 h-2 bg-indigo-200/20 rounded-full animate-pulse delay-1200"></div>
        <div className="absolute top-[38%] right-[23%] w-2 h-2 bg-purple-300/18 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-[55%] left-[47%] w-2 h-2 bg-white/15 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-[72%] right-[72%] w-2 h-2 bg-blue-200/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-[26%] left-[11%] w-2 h-2 bg-purple-200/18 rounded-full animate-ping delay-1100"></div>
        <div className="absolute top-[49%] right-[89%] w-2 h-2 bg-white/16 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-[81%] left-[76%] w-2 h-2 bg-indigo-300/19 rounded-full animate-pulse delay-600"></div>
        <div className="absolute top-[4%] right-[41%] w-2 h-2 bg-purple-300/17 rounded-full animate-ping delay-900"></div>
        <div className="absolute top-[61%] left-[93%] w-2 h-2 bg-blue-300/18 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-[88%] right-[17%] w-2 h-2 bg-white/14 rounded-full animate-pulse delay-800"></div>
        <div className="absolute top-[21%] left-[37%] w-2 h-2 bg-purple-200/16 rounded-full animate-ping delay-400"></div>
        <div className="absolute top-[44%] right-[61%] w-2 h-2 bg-indigo-200/18 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-[77%] left-[8%] w-2 h-2 bg-blue-200/17 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-[12%] right-[94%] w-2 h-2 bg-white/15 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-[69%] left-[31%] w-2 h-2 bg-purple-300/19 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-[91%] right-[84%] w-2 h-2 bg-indigo-300/16 rounded-full animate-pulse delay-600"></div>
        <div className="absolute top-[34%] left-[59%] w-2 h-2 bg-blue-300/17 rounded-full animate-ping delay-1100"></div>
        <div className="absolute top-[56%] right-[26%] w-2 h-2 bg-white/18 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-[2%] left-[85%] w-2 h-2 bg-purple-200/15 rounded-full animate-pulse delay-800"></div>
        <div className="absolute top-[84%] right-[52%] w-2 h-2 bg-indigo-200/17 rounded-full animate-ping delay-400"></div>
      </div>
      
      {/* All content with shared glassmorphism background */}
      <div className="relative z-10">
        <StickyHeader />
        <Header />
        <div className="pt-20">
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <TrustSection />
          <Footer />
        </div>
        <MobileStickyFooter />
      </div>
    </div>
  )
}

export default App