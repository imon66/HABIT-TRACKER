import HeroSection from './components/HeroSection'
import TrustSection from './components/TrustSection'
import ProductOverview from './components/ProductOverview'
import FeaturesSection from './components/FeaturesSection'
import PreviewSection from './components/PreviewSection'
import DeliverablesSection from './components/DeliverablesSection'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TrustSection />
      <PreviewSection />
      <FeaturesSection />
      <ProductOverview />
      <DeliverablesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App