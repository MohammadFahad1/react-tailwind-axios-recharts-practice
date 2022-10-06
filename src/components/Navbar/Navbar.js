import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Products', path: '/products' },
        { id: 3, name: 'Shop', path: '/shop' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' },
    ]
    return (
        <nav className='bg-blue-700 text-yellow-50 relative h-8 flex items-center justify-center'>
            <div onClick={() => setOpen(!open)} className='cursor-pointer md:hidden'>
                {
                    open ?
                        <XMarkIcon className="h-6 w-6 text-blue-500" />
                        :
                        <Bars3Icon className="h-6 w-6 text-blue-500" />
                }
            </div>

            <ul className={`flex justify-center items-center gap-6 absolute md:static duration-300 ${open ? 'top-7' : 'top-[-120px]'} bg-blue-700 py-2 w-full`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;