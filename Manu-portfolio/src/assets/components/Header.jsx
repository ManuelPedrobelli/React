import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import 'animate.css/animate.min.css';

const Header = () => {
    let Links = [
        { name: 'Home', link: '#' },
        { name: 'Sobre mi', link: '#about' },
        { name: 'Proyectos', link: '#portfolio' },
        { name: 'Contacto', link: '#contact' },
    ];

    let [open, setOpen] = useState(false);
 
    
    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div id='home' className="w-full text-white z-10 top-0 p-2 left-0">
            <div className='md:flex items-center justify-end p-2 md:px-10  '>

                <div onClick={toggleMenu} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map(link => (
                            <li className='font-semibold my-7 md:my-0 md:ml-8' key={link.name}>
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