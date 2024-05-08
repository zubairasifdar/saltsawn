import React from 'react';
import Link from 'next/link'

const Hero = () => {
  return (
    <main className='w-full my-28 px-16'>
      <div className='flex flex-col items-center mx-auto'>
        <h1 className='text-slate-800 text-7xl max-w-xl text-center font-bold'>
        The Web Design Agency you need
        </h1>
        <p className='max-w-lg text-center text-gray-600 mt-4'>
          We are a new web agency with a unique blend of skills. It&apos;s just my cousin and me - I handle the web development, while he specializes in UI/UX design.
        </p>
        <div className='flex items-center gap-5 mt-6'>
          <Link href='/quote' className=' border-slate-900 rounded-full border px-8 py-4 hover:bg-slate-900 hover:text-white transition-[0.3s]'>
          Get a Quote
        </Link>
        <Link href='/prices'>Show Prices</Link>
        </div>
        
      </div>
    </main>
  );
};

export default Hero;
