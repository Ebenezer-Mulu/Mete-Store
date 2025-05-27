const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-2">Mete Store</h1>
          <p className="text-sm">
            Your one-stop shop for stylish and affordable products. Quality
            guaranteed.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Shop</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/pages/SunGlasses" className="hover:underline">
                SunGlasses
              </a>
            </li>
            <li>
              <a href="/pages/Watches" className="hover:underline">
                Watches
              </a>
            </li>
            <li>
              <a href="/pages/Bags" className="hover:underline">
                Bags
              </a>
            </li>
            <li>
              <a href="/pages/Shoes" className="hover:underline">
                Shoes
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="../pages/about_us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/pages/contact_us" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/pages/privacy_policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/pages/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Connect</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:support@metestore.com"
                className="hover:underline"
              >
                support@metestore.com
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 text-center text-sm py-4 bg-gray-50">
        <p>© {new Date().getFullYear()} Mete Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
