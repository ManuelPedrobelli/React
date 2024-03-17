import React, { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import 'animate.css/animate.min.css';

const Header = () => {
    let Links = [
        { name: 'Home', link: '#' },
        { name: 'Projects', link: '#portfolio' },
        { name: 'About', link: '#about' },
        { name: 'Contact', link: '#contact' },
    ];

    let [open, setOpen] = useState(false);
 
    
    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div id='home' className="shadow-md w-full fixed z-10 top-0 left-0">
            <div className='md:flex items-center justify-between p-2 md:px-10 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <a href="https://github.com/ManuelPedrobelli">
                        <img src='github.png' className='zoom w-12 h-12 text-blue-600' />
                    </a>
                    <a href="https://www.linkedin.com/in/manuel-agustin-pedrobelli-salaberria-897009213/">
                        <img src='linkedin.png' className='zoom  w-12 h-12 text-blue-600' />
                    </a>
                </div>

                <div onClick={toggleMenu} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map(link => (
                            <li className='font-semibold my-7 text-white md:my-0 md:ml-8' key={link.name}>
                                <a href={link.link}>
                                    {link.name}
                                </a>
                            </li>))
                    }

                </ul>
            </div>
        </div>
    );
};

export default Header;