import React from 'react';
import Button from './Button';

import Link from 'next/link'

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
    <div className="border border-slate-200 shadow-sm rounded-xl p-6 flex flex-col justify-between items-start">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.title}</h3>
      <p className="text-gray-700 mb-4">{plan.description}</p>
      <div className="text-2xl font-bold text-gray-800 mb-4">{plan.price}</div>
      <ul className="text-gray-700">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link
        href={`/quote/?title=${encodeURIComponent(plan.title)}&price=${encodeURIComponent(plan.price)}&features=${encodeURIComponent(plan.features.join(', '))}`}
        className='border-slate-400 shadow-md hover:bg-slate-800 hover:text-white transition-[0.3s] border rounded-xl px-4 mt-4 py-3'
      >
        Request Package
      </Link>

    </div>
  );
};

export default PriceCard;
