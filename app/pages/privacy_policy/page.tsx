const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        At Mete Store, we respect your privacy and are committed to protecting your personal information. This policy explains what data we collect and how we use it.
      </p>
      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Name, email, shipping and payment details.</li>
        <li>Usage data such as pages visited and interaction times.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">How We Use Your Data</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>To process orders and manage your account.</li>
        <li>To improve our website and services.</li>
        <li>To send marketing emails if you opt-in.</li>
      </ul>
      <p className="text-gray-700">
        We do not sell your personal information to third parties. For questions, contact us at <a href="mailto:support@metestore.com" className="text-purple-600 underline">support@metestore.com</a>.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
