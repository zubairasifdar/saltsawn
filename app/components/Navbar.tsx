'use client'
import React, { useState } from 'react';
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className='text-slate-900 flex justify-between items-center py-6 px-16'>
            <Link href='/'>
                <h1 className='text-3xl font-black text-slate-800'>saltsawn</h1>
            </Link>
            
            <nav className='hidden md:flex items-center gap-8'>
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.href}>
                        {link.name}
                    </Link>
                ))}
            </nav>

            <div className="md:hidden relative">
                <button onClick={toggleDropdown} className="focus:outline-none">
                    <IoIosArrowDown className="text-slate-800 text-2xl" />
                </button>
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                        <ul>
                            {navLinks.map((link, index) => (
                                <li key={index} className="py-2 px-4 hover:bg-gray-100">
                                    <Link href={link.href}>
                                       {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <Link href='/quote' className='hidden md:block hover:bg-slate-900 hover:text-white transition-[0.3s] border border-slate-800 px-5 py-3 text-sm rounded-full'>
                Get a Quote
            </Link>
        </header>
    );
};

export default Navbar;
