const ContactUs = () => {
  return (
    <section className="max-w-4xl mt-10  text-center mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        We’d love to hear from you! Reach out with any questions or feedback.
      </p>
      <ul className="text-gray-700 space-y-2">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:ebenmulu@gmail.com"
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
    </section>
  );
};

export default ContactUs;
