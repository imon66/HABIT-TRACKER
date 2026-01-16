import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import StickyHeader from './components/StickyHeader'
import MobileStickyFooter from './components/MobileStickyFooter'
import HeroSection from './components/HeroSection'
import TrustSection from './components/TrustSection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'
import CheckoutPage from './components/CheckoutPage'
import SuccessPage from './components/SuccessPage'

const HomePage = () => (
  <>
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
  </>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/80 via-indigo-900/70 to-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/15 via-purple-100/10 via-pink-100/8 to-cyan-100/12"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-200/8 via-transparent to-violet-200/6"></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[7%] left-[18%] w-6 h-6 bg-white/25 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-[23%] right-[12%] w-8 h-8 bg-purple-300/30 rounded-full blur-md animate-bounce delay-300"></div>
          <div className="absolute top-[41%] left-[6%] w-5 h-5 bg-blue-200/25 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-[58%] right-[35%] w-7 h-7 bg-white/20 rounded-full blur-sm animate-ping delay-1000"></div>
          <div className="absolute top-[14%] left-[73%] w-6 h-6 bg-indigo-300/25 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-[67%] right-[8%] w-8 h-8 bg-purple-200/28 rounded-full blur-md animate-pulse delay-800"></div>
        </div>
        
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App