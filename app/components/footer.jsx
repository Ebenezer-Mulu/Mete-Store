const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t mt-16">
          {/* Logo and About */}
        {/* <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-2">Mete Store</h1>
          <p className="text-sm">
            Your one-stop shop for stylish and affordable products. Quality
            guaranteed.
          </p>
        </div> */}

        {/* <div>
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
        </div> */}

        {/* <div>
          <h2 className="text-lg font-semibold mb-3">Connect</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:ebenmulu@gmail.com"
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
              <a href="https://t.me/E_Mete" className="hover:underline">
                Telegram
              </a>
            </li>
          </ul>
        </div>*/}
     

      {/* Bottom bar */}
      <div className="border-t border-gray-200 text-center text-sm py-4 bg-gray-50">
        <p>© {new Date().getFullYear()} Mete Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
