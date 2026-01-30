export default function Footer() {
    return (
      <footer className="bg-green-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
  
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-3">Century Hybrid Seeds</h3>
            <p className="text-sm opacity-80">
              Providing high quality hybrid vegetable seeds across India.
              Improving farmer yield through trusted genetics.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm">📍 Hyderabad, Telangana</p>
            <p className="text-sm mt-2">📞 +91 98765 43210</p>
            <p className="text-sm mt-2">✉ centuryseeds2@gmail.com</p>
          </div>
  
        </div>
  
        <div className="border-t border-white/20 text-center py-4 text-sm opacity-80">
          © {new Date().getFullYear()} Century Hybrid Seeds. All rights reserved.
        </div>
      </footer>
    );
  }
  