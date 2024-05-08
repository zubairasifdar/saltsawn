import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-6">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <p className="text-lg text-gray-200 leading-relaxed mb-6 text-center">
            Have a project in mind? Feel free to reach out to us. We'd love to hear from you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold  mb-2">Email</h3>
              <p className="">contact@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold  mb-2">Phone</h3>
              <p className="">+1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
