const DeliverablesSection = () => {
  const deliverables = [
    {
      icon: "📊",
      title: "Google Sheet (Editable)",
      description: "Complete habit tracking system ready to use"
    },
    {
      icon: "🔄",
      title: "Lifetime Updates",
      description: "Get new features and improvements forever"
    },
    {
      icon: "⚡",
      title: "Instant Download",
      description: "Access your tracker immediately after purchase"
    }
  ]

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Get
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete package for habit tracking success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-xl border-2 border-gray-100 hover:border-primary-200 transition-colors duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Worth ₹500+ • Get it for just ₹49
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Professional habit tracking system at an unbeatable price
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <span className="bg-white px-4 py-2 rounded-full">✓ No monthly fees</span>
            <span className="bg-white px-4 py-2 rounded-full">✓ Works offline</span>
            <span className="bg-white px-4 py-2 rounded-full">✓ Fully customizable</span>
            <span className="bg-white px-4 py-2 rounded-full">✓ Beginner friendly</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliverablesSection