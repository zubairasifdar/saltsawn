import React from 'react';
import Link from 'next/link';

import { IoIosArrowDown } from "react-icons/io";

const navLinks = [
    {
        href: '/',
        name: 'Home'
    },
    {
        href: '/prices',
        name: 'Prices'
    },
    {
        href: '/projects',
        name: 'Projects'
    },
    {
        href: '/contact',
        name: 'Contact'
    }
];

const Navbar = () => {
    return (
        <header className='text-slate-900 flex justify-between items-center py-6 px-16'>
            <h1 className='text-3xl font-black text-slate-800'>saltsawn</h1>
            
            <nav className='flex items-center gap-8'>
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.href}>
                        {link.name}
                    </Link>
                ))}
            </nav>

            <Link href='/quote' className='hover:bg-slate-900 hover:text-white transition-[0.3s] border border-slate-800 px-5 py-3 text-sm rounded-full'>
                Get a Quote
            </Link>
        </header>
    );
};

export default Navbar;
