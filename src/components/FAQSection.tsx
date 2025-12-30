import { useState } from 'react'
import { WEBSITE_CONFIG, handleDownload } from '../config/constants'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is this beginner friendly?",
      answer: "Absolutely! The tracker is pre-built and ready to use. No prior experience with Google Sheets is required. Everything is set up for you to start tracking immediately.",
      icon: "🔰"
    },
    {
      question: "Does it work on mobile?",
      answer: "Yes! Google Sheets works perfectly on mobile devices. You can track your habits, update your progress, and view analytics from anywhere using the Google Sheets mobile app.",
      icon: "📱"
    },
    {
      question: "Is it editable and customizable?",
      answer: "Completely! You own the Google Sheet and can customize everything - add new habits, change colors, modify categories, or create your own tracking systems. It's fully yours to personalize.",
      icon: "🎨"
    },
    {
      question: "What's your refund policy?",
      answer: `We offer a ${WEBSITE_CONFIG.GUARANTEE_PERIOD} money-back guarantee. If you're not satisfied with the tracker for any reason, simply contact us within ${WEBSITE_CONFIG.GUARANTEE_PERIOD} for a full refund.`,
      icon: "💯"
    },
    {
      question: "How do I access the tracker after purchase?",
      answer: "You'll receive instant access via email with download links to the Google Sheet. Everything is delivered immediately after payment and ready to use.",
      icon: "⚡"
    },
    {
      question: "Do I need to pay monthly fees?",
      answer: `No! This is a one-time payment of ${WEBSITE_CONFIG.PRICE}. You get lifetime access to the tracker and all future updates. No subscriptions, no recurring fees.`,
      icon: "💰"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="professional-gradient section-padding">
      <div className="container-max">
        <div className="text-center mobile-margin">
          <h2 className="mobile-heading font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="block">Frequently Asked</span>
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="mobile-subheading text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Everything you need to know about the Ultimate Habit Tracker
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 sm:mb-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full professional-card mobile-padding text-left card-hover"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">{faq.icon}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                {openFAQ === index && (
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                    <p className="mobile-optimized text-gray-700 leading-relaxed ml-8 sm:ml-12">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="professional-card bg-gradient-to-r from-blue-600 to-blue-700 text-white mobile-padding max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              🤔 Still have questions?
            </h3>
            <p className="mobile-optimized text-blue-100 mb-6">
              Get your tracker now and start building better habits today!
            </p>
            <button
              onClick={handleDownload}
              className="bg-white text-blue-700 font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg text-lg sm:text-xl mobile-full sm:w-auto mb-4 cursor-pointer"
            >
              🚀 Get Ultimate Habit Tracker - {WEBSITE_CONFIG.PRICE}
            </button>
            <p className="text-sm text-blue-100">
              💬 Need help? Contact us anytime - we're here to support your journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection