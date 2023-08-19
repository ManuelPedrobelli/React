import {useState} from 'react' 
import { BeakerIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let Links  = [
        {name: 'Home', link: '/'},
        {name: 'Projects', link: '/'},
        {name: 'About', link: '/'},
        {name: 'Contact', link: '/'},
    ]

    let [open, setOpen] = useState(false);
    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* logo */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <BeakerIcon className='w-7 h-7 text-blue-600' />
                    <span className='font-bold '>
                        Inscribe
                    </span>
                </div>
                
                <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
                
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
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