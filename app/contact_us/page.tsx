const AboutAndContact = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 mt-10">
      {/* About Us Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          About Mete Store
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          "Stylish Accessories for Everyone!"
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mete Store is your trusted e-commerce destination for stylish and
          affordable products. We are passionate about bringing you the latest
          trends with excellent customer service. Our mission is to provide a
          seamless shopping experience and quality products you love.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Discover our latest collection of versatile and fashionable items:
        </p>
        <ul className="text-left mt-6 max-w-2xl mx-auto text-gray-700 space-y-3">
          <li>
            👓 <strong>Eyeglasses</strong>: Sleek designs for both men and
            women.
          </li>
          <li>
            💎 <strong>Women's Jewelry</strong>: Elegant pieces to complement
            any outfit.
          </li>
        </ul>
        <p className="mt-6 text-sm text-purple-600">
          📲 Join our Telegram channel for updates: <strong>@Mete_Store</strong>
        </p>
      </div>

      {/* Contact Us Section */}
      <div className="text-center border-t border-gray-200 pt-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          We’d love to hear from you! Reach out with any questions or feedback.
        </p>
        <ul className="text-gray-700 space-y-2">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:ebenmulu.com"
              className="text-purple-600 underline"
            >
              support@metestore.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +251-941-221-536
          </li>
          <li>
            <strong>Address:</strong> Addis Ababa, Ethiopia
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutAndContact;
