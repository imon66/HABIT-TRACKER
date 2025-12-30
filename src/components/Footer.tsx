const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ultimate Habit Tracker</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Transform your life with our comprehensive habit tracking system. 
              Built for Google Sheets, designed for success.
            </p>
            <div className="flex space-x-4">
              <span className="bg-primary-600 px-3 py-1 rounded-full text-sm">₹49 Only</span>
              <span className="bg-accent-600 px-3 py-1 rounded-full text-sm">Lifetime Access</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#preview" className="hover:text-white transition-colors">Preview</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/refund" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="mailto:support@habittracker.com" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Ultimate Habit Tracker. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🔒 Secure Payment</span>
              <span>⚡ Instant Download</span>
              <span>💯 Money Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-6 mt-8 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to Start Your Transformation?</h3>
          <p className="mb-4 opacity-90">Get instant access to the Ultimate Habit Tracker</p>
          <button className="bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Buy Now - ₹49
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer