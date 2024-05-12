import Image from 'next/image';
import React from 'react';

import Link from 'next/link'

const Employees = () => {
  return (
    <section className='flex flex-wrap justify-between items-center container gap-y-4 mx-auto px-4 py-24'>
      <div>
        <h3 className='text-slate-800 font-bold text-4xl'>
        Your Requirements, Your Quote
        </h3>
        <p className='mt-2 text-slate-600'>
          If you want to obtain a specified price dedicated to your project you can get a quote.
        </p>
      </div>
      
      <Link href="/quote" className="border-slate-900 rounded-full border px-8 py-4 hover:bg-slate-900 hover:text-white transition-[0.3s]">
        Get a Quote
      </Link>
    </section>
  );
};

export default Employees;
