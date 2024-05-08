import React from 'react';
import Button from './Button';

interface PriceCardProps {
  plan: {
    title: string;
    description: string;
    price: string;
    features: string[];
  };
}

const PriceCard: React.FC<PriceCardProps> = ({ plan }) => {
  return (
    <div className="border border-slate-400 rounded-xl p-6 flex flex-col justify-between items-start">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.title}</h3>
      <p className="text-gray-700 mb-4">{plan.description}</p>
      <div className="text-2xl font-bold text-gray-800 mb-4">{plan.price}</div>
      <ul className="text-gray-700">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Button text='Request Package' />
    </div>
  );
};

export default PriceCard;
