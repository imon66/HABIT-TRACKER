import React, { useState } from 'react';

const Footer = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const Modal = ({ isOpen, onClose, title, children }: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/50 to-slate-900/80 backdrop-blur-sm transition-all duration-500"
          onClick={onClose}
        ></div>
        
        {/* Modal */}
        <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden transform transition-all duration-500 scale-95 sm:scale-100 animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border-b border-white/20 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-white/20"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content */}
          <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-80px)] sm:max-h-[calc(90vh-120px)] scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <footer className="bg-white/80 backdrop-blur-xl border-t border-white/20 shadow-lg py-8 relative overflow-hidden transition-all duration-300 hover:bg-white/85">
        {/* Subtle glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/5 via-purple-50/3 to-pink-50/5"></div>
        
        <div className="container-max relative z-10">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-6">
            <button
              onClick={() => openModal('privacy')}
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openModal('terms')}
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => openModal('disclaimer')}
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium cursor-pointer"
            >
              Disclaimer
            </button>
            <button
              onClick={() => openModal('about')}
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => openModal('contact')}
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium cursor-pointer"
            >
              Contact Us
            </button>
            <button
              onClick={() => openModal('refund')}
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium cursor-pointer"
            >
              Refund Policy
            </button>
          </div>

          {/* Digital Product Notice - Minimal Glassmorphism */}
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-white/90 via-blue-50/60 to-purple-50/40 backdrop-blur-xl border border-white/30 shadow-lg rounded-xl px-6 py-3 relative overflow-hidden">
              {/* Subtle glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-transparent to-purple-50/10"></div>
              
              <div className="relative z-10 flex items-center justify-center space-x-2">
                <span className="text-gray-600 text-sm">🔒</span>
                <p className="bg-gradient-to-r from-gray-700 via-blue-700 to-purple-700 bg-clip-text text-transparent font-semibold text-sm tracking-wide">
                  Digital Product • No Refunds Policy
                </p>
                <span className="text-gray-600 text-sm">🔒</span>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-400 text-xs leading-relaxed">
              Important Notice: This website operates independently and is not affiliated with, endorsed by, or connected to Facebook™ or Meta Platforms, Inc.
              Facebook™ is a registered trademark of Meta Platforms, Inc. Please note that individual results may vary, and we make no guarantees regarding
              specific outcomes or earnings from using our products or services. Our content is provided for educational purposes based on our experience
              and research. Always consult with qualified professionals for advice specific to your situation.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
        <div className="space-y-8">
          <div>
            <p className="text-gray-600 mb-6">Last updated: December 31, 2025</p>
          </div>
          
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h3>
            <p className="text-gray-700 leading-relaxed">
              Welcome to our platform. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you as to how we look after your personal data when you visit our website
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Data We Collect</h3>
            <p className="text-gray-700 leading-relaxed">
              We may collect, use, store and transfer different kinds of personal data about you which we have
              grouped together follows: Identity Data, Contact Data, Technical Data, and Usage Data.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h3>
            <p className="text-gray-700 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal
              data in the following circumstances: Where we need to perform the contract we are about to enter into or
              have entered into with you; Where it is necessary for our legitimate interests and your interests and
              fundamental rights do not override those interests; Where we need to comply with a legal or regulatory
              obligation.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Data Security</h3>
            <p className="text-gray-700 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being
              accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">5. Contact Us</h3>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us.
            </p>
          </section>
        </div>
      </Modal>

      {/* Terms & Conditions Modal */}
      <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms & Conditions">
        <div className="space-y-8">
          <div>
            <p className="text-gray-600 mb-6">Last updated: December 31, 2025</p>
          </div>
          
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h3>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our website, you agree to be bound by these Terms and Conditions. If you disagree
              with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Intellectual Property Rights</h3>
            <p className="text-gray-700 leading-relaxed">
              Other than the content you own, under these Terms, we and/or our licensors own all the
              intellectual property rights and materials contained in this Website.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Restrictions</h3>
            <p className="text-gray-700 leading-relaxed">
              You are specifically restricted from all of the following: publishing any Website material in any other
              media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing
              and/or showing any Website material.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed">
              In no event shall we, nor any of our officers, directors and employees, be held liable for anything
              arising out of or in any way connected with your use of this Website whether such liability is under
              contract. We, including our officers, directors and employees shall not be held liable for any
              indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>
          </section>
        </div>
      </Modal>

      {/* Disclaimer Modal */}
      <Modal isOpen={activeModal === 'disclaimer'} onClose={closeModal} title="Disclaimer">
        <div className="space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed mb-8">
              The information provided by our team on our website is for general
              informational purposes only. All information on the Site is provided in good faith, however we make no
              representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity,
              reliability, availability or completeness of any information on the Site.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Disclaimer</h3>
            <p className="text-gray-700 leading-relaxed">
              The Site cannot and does not contain professional advice. The information is provided for general
              informational and educational purposes only and is not a substitute for professional advice. Accordingly,
              before taking any actions based upon such information, we encourage you to consult with the
              appropriate professionals.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Earnings Disclaimer</h3>
            <p className="text-gray-700 leading-relaxed">
              We make no guarantees about your ability to get results or earn any money with our ideas, information,
              tools, or strategies. Nothing on this page, any of our websites, or any of our content or curriculum is a
              promise or guarantee of results or future earnings.
            </p>
          </section>
        </div>
      </Modal>

      {/* About Us Modal */}
      <Modal isOpen={activeModal === 'about'} onClose={closeModal} title="About Us">
        <div className="space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed mb-8">
              Welcome to our platform, your number one source for productivity templates. We're dedicated to
              providing you the very best of Excel and Google Sheets templates, with an emphasis on usability,
              aesthetics, and automation.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to help individuals and businesses organize their data and improve their productivity
              through intuitive and powerful spreadsheet tools. We believe that organization is the key to success, and
              our tools are designed to make that process as seamless as possible.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
            <p className="text-gray-700 leading-relaxed">
              We understand the frustration of complex spreadsheets. That's why our team focuses on creating user-friendly,
              automated solutions that do the heavy lifting for you. Our templates are designed to be accessible to
              everyone, regardless of their Excel expertise.
            </p>
          </section>
        </div>
      </Modal>

      {/* Contact Us Modal */}
      <Modal isOpen={activeModal === 'contact'} onClose={closeModal} title="Contact Us">
        <div className="space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed mb-8">
              If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. We are here to help!
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-6">
              You can contact us via email at:
            </p>
            
            <div className="p-6 mb-6">
              <p className="text-lg font-semibold text-gray-900">
                <span className="text-gray-600">Email:</span> <span className="underline">learnnwork@gmail.com</span>
              </p>
            </div>
            
            <p className="text-gray-700">
              We aim to respond to all inquiries within 24 hours.
            </p>
          </section>
        </div>
      </Modal>

      {/* Refund Policy Modal */}
      <Modal isOpen={activeModal === 'refund'} onClose={closeModal} title="Refund Policy">
        <div className="space-y-8">
          <section>
            <p className="text-gray-700 mb-8">
              Thank you for shopping with us.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Products</h3>
            <p className="text-gray-700 leading-relaxed">
              We issue refunds for digital products within 7 days of the original purchase of the product, provided the
              product has not been downloaded. However, due to the nature of digital goods, we generally recommend
              contacting our team for assistance if you experience any issues receiving or downloading our products.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">No Refunds on Downloaded Items</h3>
            <p className="text-gray-700 leading-relaxed">
              Since your purchase is a digital product, it is deemed "used" after download or opening, and all
              purchases made on our platform are non-refundable or exchangeable. Since the products
              made available here are intangible, there is a strict no refund policy.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our Returns and Refunds Policy, please contact us.
            </p>
          </section>
        </div>
      </Modal>
    </>
  )
}

export default Footer