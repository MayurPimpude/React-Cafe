import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import {GiCoffeeBeans} from 'react-icons/gi'

export default function Navbar() {
   
        const [isNavOpen, setIsNavOpen] = useState(false);

        const toggleNav = () => {
            setIsNavOpen(!isNavOpen);
        };

        return (
            <nav className="bg-[#221003]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <GiCoffeeBeans size={40} className='text-white pr-2'/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white head">Coffee Club</span>
                    </a>
                    <button
                        onClick={toggleNav}
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-[#221003] focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded={isNavOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div
                        className={`${isNavOpen ? "block" : "hidden"
                            } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#221003] 0 md:0 ">
                            <li>
                                <Link
                                    to='/'
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#6e3912] md:hover:bg-transparent md:border-0 md:hover:text-[#EAB54C] md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                               <Link
                                    to='/Menu'
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#6e3912] md:hover:bg-transparent md:border-0 md:hover:text-[#EAB54C] md:p-0  md:-blue-500 ray-700 -white"
                                >
                                    About
                                </Link>
                            </li>
                           
                            <li>
                               <Link
                                    to='/Menu'
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#6e3912] md:hover:bg-transparent md:border-0 md:hover:text-[#EAB54C] md:p-0  md:-blue-500 ray-700 -white"
                                >
                                    Menu
                                </Link>
                            </li>
                            <li>
                               <Link
                                    to='/Header'
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#6e3912] md:hover:bg-transparent md:border-0 md:hover:text-[#EAB54C] md:p-0"
                                >
                                    Review
                                </Link>
                            </li>
                            <li>
                               <Link
                                    to='/Cardo'
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#7d4116] md:hover:bg-transparent md:border-0 md:hover:text-[#EAB54C] md:p-0  md:-blue-500 ray-700 -white "
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }