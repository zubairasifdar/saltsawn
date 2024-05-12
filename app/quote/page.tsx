'use client'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const searchParams = useSearchParams()

  const getParams = (name: string) => {
    return searchParams.get(name);
  }

  const title = getParams('title')
  const price = getParams('price')
  const features = getParams('features')
  

  const handleChange = (e: any) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
    const res = await fetch('/api/quote', {
      method: 'POST',
      body: JSON.stringify({
        ...formData,
        package: {
          title: title,
          price: price,
          features: features,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    // Handle the response
    console.log(await res.json());
  };
  

  return (
    <div className="sm:max-w-lg max-w-sm md:max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">Get a Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-md font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="rounded-xl shadow appearance-none border w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-md font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="rounded-xl shadow appearance-none border w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-md font-bold mb-2">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="rounded-xl shadow appearance-none border w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="6" required></textarea>
        </div>
        <div className='mb-2'>
            <h3 className='font-semibold text-xl text-gray-700'>Selected Package:</h3>
            {
                <div>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {price}
                    </p>
                    <p>
                        {features}
                    </p>
                </div>
            }
        </div>
        <div className="flex justify-center">
          <button type="submit" className="border-slate-400 shadow-md hover:bg-slate-800 hover:text-white transition-[0.3s] border rounded-xl px-4 mt-4 py-3">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
