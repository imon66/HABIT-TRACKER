import React, { useState } from 'react';
import { WEBSITE_CONFIG } from '../config/constants';

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
            <button
              onClick={() => openModal('delivery')}
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium cursor-pointer"
            >
              Delivery Policy
            </button>
          </div>


          {/* Company Copyright */}
          <div className="text-center mb-4">
            <p className="text-gray-600 text-sm font-medium">
              © 2026 <span className="font-semibold text-gray-800">{WEBSITE_CONFIG.COMPANY_NAME}</span>. All rights reserved.
            </p>
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
              LearnNWork Academy ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, and protect your information when you purchase our digital
              Google Sheets habit tracker templates and use our website.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Data We Collect</h3>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p><strong>Personal Information:</strong> Name, email address, payment information (processed securely by our payment processor)</p>
              <p><strong>Technical Data:</strong> IP address, browser type, device information, cookies</p>
              <p><strong>Usage Data:</strong> Pages visited, time spent on site, download activity</p>
              <p><strong>Payment Data:</strong> Transaction details, purchase history (payment card details are processed by secure third-party processors and not stored by us)</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>• Process your orders and deliver digital products</p>
              <p>• Send order confirmations and download links</p>
              <p>• Provide customer support</p>
              <p>• Improve our website and services</p>
              <p>• Comply with legal obligations</p>
              <p>• Send marketing communications (with your consent)</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Cookies Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              We use essential cookies for website functionality and analytics cookies to understand how you use our site.
              You can control cookies through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">5. Data Retention</h3>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy,
              typically 7 years for transaction records as required by law, or until you request deletion.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">6. Your Rights (GDPR)</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>• Right to access your personal data</p>
              <p>• Right to rectify inaccurate data</p>
              <p>• Right to erase your data</p>
              <p>• Right to restrict processing</p>
              <p>• Right to data portability</p>
              <p>• Right to object to processing</p>
              <p>To exercise these rights, contact us at <strong>help.learnnwork@gmail.com</strong></p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">7. Data Security</h3>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction. Payment processing is handled by
              PCI DSS compliant third-party processors.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">8. Third-Party Services</h3>
            <p className="text-gray-700 leading-relaxed">
              We use Google Sheets for product delivery, payment processors for transactions, and analytics services.
              These services have their own privacy policies and may collect data independently.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">9. Contact Us</h3>
            <p className="text-gray-700 leading-relaxed">
              For privacy-related questions or to exercise your rights, contact us at <strong>help.learnnwork@gmail.com</strong> or
              write to us at our registered business address.
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
              By purchasing our digital habit tracker templates or using our website, you agree to these Terms and Conditions.
              These terms govern your purchase and use of our Google Sheets templates and related services provided by LearnNWork Academy.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Digital Products & Delivery</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>Product Description:</strong> We sell digital Google Sheets habit tracker templates for personal productivity.</p>
              <p><strong>Delivery:</strong> Products are delivered instantly via Google Sheets link after successful payment.</p>
              <p><strong>Access:</strong> You receive lifetime access to download and use the templates for personal use.</p>
              <p><strong>System Requirements:</strong> Google account and internet access required.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Payment Terms</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>Price:</strong> ₹49 (Indian Rupees) one-time payment</p>
              <p><strong>Payment Methods:</strong> Credit/debit cards, UPI, net banking via secure payment processors</p>
              <p><strong>Currency:</strong> All prices in Indian Rupees (INR)</p>
              <p><strong>Taxes:</strong> Prices include applicable taxes</p>
              <p><strong>Payment Processing:</strong> Handled by third-party secure payment processors</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. License & Usage Rights</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>Personal License:</strong> Templates are for personal use only</p>
              <p><strong>Restrictions:</strong> You may not resell, redistribute, or share the templates</p>
              <p><strong>Modifications:</strong> You may customize templates for personal use</p>
              <p><strong>Copyright:</strong> All templates remain property of LearnNWork Academy</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">5. Refund Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              Due to the instant digital nature of our products, all sales are final once the download link is accessed.
              Refunds may be considered within 24 hours of purchase if technical issues prevent access to the product.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">6. Disclaimer & Limitations</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>• Templates are provided "as is" without warranties</p>
              <p>• Results depend on individual usage and commitment</p>
              <p>• We are not liable for any indirect or consequential damages</p>
              <p>• Maximum liability limited to purchase price</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">7. Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These terms are governed by Indian law. Any disputes will be resolved through Indian courts or arbitration as per Indian Arbitration Act.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">8. Contact Information</h3>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms, contact us at <strong>help.learnnwork@gmail.com</strong>
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
              Welcome to <strong>LearnNWork Academy</strong>, your number one source for productivity templates and habit tracking solutions. We're dedicated to
              providing you the very best of Google Sheets templates, with an emphasis on usability,
              aesthetics, and automation.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              At LearnNWork Academy, our mission is to help individuals and businesses organize their data and improve their productivity
              through intuitive and powerful spreadsheet tools. We believe that organization is the key to success, and
              our tools are designed to make that process as seamless as possible.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose LearnNWork Academy?</h3>
            <p className="text-gray-700 leading-relaxed">
              We understand the frustration of complex spreadsheets. That's why our team at LearnNWork Academy focuses on creating user-friendly,
              automated solutions that do the heavy lifting for you. Our templates are designed to be accessible to
              everyone, regardless of their Google Sheets expertise.
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Information</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <div>
                <p><strong>Company Name:</strong> LearnNWork Academy</p>
                <p><strong>Business Type:</strong> Digital Education & Productivity Solutions</p>
              </div>
              
              <div>
                <p><strong>Registered Address:</strong></p>
                <p>823 Sarat Chatterjee Road</p>
                <p>Kolkata, West Bengal 711104</p>
                <p>India</p>
              </div>
              
              <div>
                <p><strong>Contact Information:</strong></p>
                <p><strong>Email:</strong> <span className="underline"><strong>help.learnnwork@gmail.com</strong></span></p>
                <p><strong>Phone:</strong> +91-8637043507</p>
                <p><strong>Business Hours:</strong> Monday to Friday, 9 AM to 6 PM IST</p>
              </div>
              
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Support</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>For Product Support:</strong> <strong>help.learnnwork@gmail.com</strong></p>
              <p><strong>For Technical Issues:</strong> <strong>help.learnnwork@gmail.com</strong></p>
              <p><strong>For Refund Requests:</strong> <strong>help.learnnwork@gmail.com</strong></p>
              <p><strong>Response Time:</strong> Within 24 hours</p>
              <p><strong>Emergency Support:</strong> +91-8637043507 (Business hours only)</p>
            </div>
          </section>
        </div>
      </Modal>

      {/* Refund Policy Modal */}
      <Modal isOpen={activeModal === 'refund'} onClose={closeModal} title="Refund Policy">
        <div className="space-y-8">
          <section>
            <p className="text-gray-700 mb-8">
              This refund policy applies to all digital Google Sheets habit tracker templates sold by LearnNWork Academy.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Product Refund Policy</h3>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p><strong>General Policy:</strong> Due to the instant digital delivery nature of our Google Sheets templates, all sales are final once you access the download link.</p>
              <p><strong>Exception:</strong> Refunds may be considered within 24 hours of purchase only if:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Technical issues prevent you from accessing the product</li>
                <li>The product is significantly different from what was described</li>
                <li>You accidentally made a duplicate purchase</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Refund Process</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>Step 1:</strong> Contact us at <strong>help.learnnwork@gmail.com</strong> within 24 hours</p>
              <p><strong>Step 2:</strong> Provide your order details and reason for refund</p>
              <p><strong>Step 3:</strong> We will review and respond within 48 hours</p>
              <p><strong>Step 4:</strong> If approved, refund will be processed within 5-7 business days</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">No Refund Conditions</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>• After accessing/downloading the Google Sheets templates</p>
              <p>• Change of mind or buyer's remorse</p>
              <p>• Lack of technical skills to use Google Sheets</p>
              <p>• Requests made after 24 hours of purchase</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Support</h3>
            <p className="text-gray-700 leading-relaxed">
              Before requesting a refund, please contact our support team at <strong>help.learnnwork@gmail.com</strong>.
              We're committed to helping you get the most value from your purchase and can provide technical assistance.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-700 leading-relaxed">
              For refund requests or questions: <strong>help.learnnwork@gmail.com</strong><br/>
              Response time: Within 48 hours
            </p>
          </section>
        </div>
      </Modal>

      {/* Delivery Policy Modal */}
      <Modal isOpen={activeModal === 'delivery'} onClose={closeModal} title="Delivery Policy">
        <div className="space-y-8">
          <section>
            <p className="text-gray-700 mb-8">
              This delivery policy explains how we deliver our digital Google Sheets habit tracker templates to customers.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Product Delivery</h3>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p><strong>Product Type:</strong> Digital Google Sheets templates (no physical shipping required)</p>
              <p><strong>Delivery Method:</strong> Instant access via Google Sheets link through download button after payment</p>
              <p><strong>Delivery Time:</strong> Immediate after successful payment confirmation</p>
              <p><strong>Access Duration:</strong> Lifetime access to download and use templates</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Process</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>Step 1:</strong> Complete payment through our secure payment gateway</p>
              <p><strong>Step 2:</strong> Access download button on success page</p>
              <p><strong>Step 3:</strong> Click the button to get Google Sheets link</p>
              <p><strong>Step 4:</strong> Copy the template to your own Google account for personal use</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">System Requirements</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>• Google account (free Gmail account)</p>
              <p>• Internet connection for initial access</p>
              <p>• Web browser or Google Sheets mobile app</p>
              <p>• No special software installation required</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Issues</h3>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p><strong>If you don't receive access within 10 minutes:</strong></p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Check your spam/junk email folder</li>
                <li>Verify the email address used during purchase</li>
                <li>Contact our support team at <strong>help.learnnwork@gmail.com</strong></li>
              </ul>
              <p><strong>We guarantee delivery within 24 hours or full refund.</strong></p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Geographic Availability</h3>
            <p className="text-gray-700 leading-relaxed">
              Our digital products are available worldwide. No geographic restrictions apply as products
              are delivered digitally via Google Sheets platform.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Support</h3>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>Email:</strong> <strong>help.learnnwork@gmail.com</strong></p>
              <p><strong>Response Time:</strong> Within 24 hours</p>
              <p><strong>Support Hours:</strong> Monday to Friday, 9 AM to 6 PM IST</p>
              <p><strong>Technical Help:</strong> Available for Google Sheets access issues</p>
            </div>
          </section>
        </div>
      </Modal>
    </>
  )
}

export default Footer