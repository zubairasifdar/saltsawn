import React from 'react';
import PriceCard from './PriceCard';

const plans: { title: string; description: string; price: string; features: string[] }[] = [
  {
    title: 'Standard Plan',
    description: 'Perfect for individuals and small businesses getting started.',
    price: '$15.99',
    features: ['2 Pages Website', 'Basic SEO', 'Responsive Design', 'Contact Form'],
  },
  {
    title: 'Standard Plan',
    description: 'Great for small to medium-sized businesses.',
    price: '$30',
    features: ['5 Pages Website', 'Basic SEO', 'Custom Design', 'Contact Form'],
  },
  {
    title: 'Premium Plan',
    description: 'For businesses requiring comprehensive solutions.',
    price: '$50',
    features: ['Unlimited Pages Website', 'Basic SEO', 'Custom Design + Branding', 'Advanced Contact Form + API Integration'],
  },
];

const Prices: React.FC = () => {
  return (
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Our Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PriceCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Prices;
