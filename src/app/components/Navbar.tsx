'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { button } from 'motion/react-client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const Navbar = () => {
    const theme = "dark" //Todo: get theme from context
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathName = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const menuItems = [
        { href: "/", lable: "Home" },
        { href: "/about", lable: "Abouts" },
        { href: "/projects", lable: "Projects" },
        { href: "/blogs", lable: "Blogs" },
        { href: "/contact", lable: "Contact" },
    ]
    return (
        <>
            <nav className='fixed w-full dark:bg-dark/80 backdrop-blur-sm z-50'>
                <div className='container max-w-7xl mx-auto px-4'>
                    {/* {desktop menu} */}
                    <div className='flex items-center justify-between h-16'>
                        <Link href="/" className="text-xl font-bold text-primary">Portfolio&trade;</Link>
                        {/* {desktop menus} */}
                        <div className='hidden md:flex items-center space-x-8'>
                            {
                                menuItems.map((item) => {
                                    const isActive = pathName === item.href;
                                    return (
                                        <Link key={item.href} href={item.href} className={`hover:text-primary 
                                            transition-colors font-medium ${isActive ? ' text-primary' : ''}`}>{item.lable}
                                        </Link>
                                    )

                                })
                                
                            }
                            <button className='p-2 rounded-lg hover:bg-gray-100 text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                                {
                                    theme === "dark" ? (
                                        <SunIcon className='w-5 h-5'/>
                                    ) : (
                                        <MoonIcon className='w-5 h-5'/>
                                    )
                                }
                            </button>
                        </div>
                    </div>

                    {/* {mobile view} */}
                    <button
                    onClick={toggleMobileMenu} 
                    className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                        {
                            isMobileMenuOpen ? (<XMarkIcon className='w-6 h-6'/>) : (<Bars3Icon className='w-6 h-6'/>)
                        }
                    </button>
                </div>


                {/* {mobile menu} */}
                {
                    
                }

            </nav >
        </>
    )
} 

export default Navbar