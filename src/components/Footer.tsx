export default function Footer() {
  return (
    <footer className="bg-volcanic-black text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-energy rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="font-display text-xl">Resonantia Earth</span>
            </div>
            <p className="text-sm opacity-70">
              Building humanity's next chapter in locations where renewable energy is essentially unlimited.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#cities" className="hover:opacity-100">The 7 Cities</a></li>
              <li><a href="#model" className="hover:opacity-100">Energy Model</a></li>
              <li><a href="#investment" className="hover:opacity-100">Investment</a></li>
              <li><a href="#indonesia" className="hover:opacity-100">Indonesia Case Study</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="/downloads/executive-summary.pdf" className="hover:opacity-100">Executive Summary</a></li>
              <li><a href="/downloads/investment-deck.pdf" className="hover:opacity-100">Investment Deck</a></li>
              <li><a href="/downloads/technical-specs.pdf" className="hover:opacity-100">Technical Specifications</a></li>
              <li><a href="/data/analysis" className="hover:opacity-100">Energy Analysis</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>contact@resonantia.earth</li>
              <li>Part of Luminous Dynamics</li>
              <li><a href="https://github.com/luminous-dynamics" className="hover:opacity-100">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm opacity-50">
          <p>&copy; 2024 Resonantia Earth. Building cities where energy is free.</p>
        </div>
      </div>
    </footer>
  )
}