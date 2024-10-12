"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, username, logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        logout();
        setDropdownOpen(false); // Close dropdown on logout
    };

    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0" aria-label="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 100 100">
                        <path d="M100,74.734C100,88.671,88.663,100,74.716,100c-6.099,0-11.843-2.143-16.425-6.064H19.597 c-3.621,0-6.574-2.951-6.574-6.569V13.59c0-3.618,2.953-6.569,6.574-6.569h41.466c1.81,0,3.56,0.758,4.774,2.052l18.205,19.202 l0.02,0.02l0.01,0.02c1.143,1.223,1.77,2.809,1.77,4.477v19.243C94.438,56.229,100,64.931,100,74.734z" opacity=".35"></path><path fill="#f2f2f2" d="M97.977,72.713c0,13.937-11.337,25.266-25.284,25.266c-6.099,0-11.843-2.143-16.425-6.064H17.574 c-3.621,0-6.574-2.951-6.574-6.569V11.569C11,7.951,13.953,5,17.574,5H59.04c1.81,0,3.56,0.758,4.774,2.052l18.205,19.202 l0.02,0.02l0.01,0.02c1.143,1.223,1.77,2.809,1.77,4.477v19.243C92.415,54.208,97.977,62.91,97.977,72.713z"></path><path fill="#d9eeff" d="M17.068,85.851V11.064h40.455L77.75,32.287v53.564H17.068z"></path><path fill="#40396e" d="M58.534,13.085v16.17c0,1.117,0.905,2.021,2.023,2.021h16.182l-1.011-2.681L60.557,12.93 L58.534,13.085z"></path><path fill="#70bfff" d="M64.097,41.383H46.903c-0.837,0-1.517-0.679-1.517-1.516l0,0c0-0.837,0.68-1.516,1.517-1.516 h17.193c0.837,0,1.517,0.679,1.517,1.516l0,0C65.614,40.704,64.934,41.383,64.097,41.383z"></path><path fill="#70bfff" d="M64.097,50.479H30.722c-0.837,0-1.517-0.679-1.517-1.516l0,0c0-0.837,0.68-1.516,1.517-1.516 h33.375c0.837,0,1.517,0.679,1.517,1.516l0,0C65.614,49.8,64.934,50.479,64.097,50.479z"></path><path fill="#70bfff" d="M64.097,68.67H30.722c-0.837,0-1.517-0.679-1.517-1.516l0,0c0-0.837,0.68-1.516,1.517-1.516h33.375 c0.837,0,1.517,0.679,1.517,1.516l0,0C65.614,67.991,64.934,68.67,64.097,68.67z"></path><path fill="#70bfff" d="M53.983,59.574H30.722c-0.837,0-1.517-0.679-1.517-1.516l0,0c0-0.837,0.68-1.516,1.517-1.516 h23.261c0.837,0,1.517,0.679,1.517,1.516l0,0C55.5,58.895,54.82,59.574,53.983,59.574z"></path><path fill="#70bfff" d="M38.812,41.383h-8.091c-0.837,0-1.517-0.679-1.517-1.516l0,0c0-0.837,0.68-1.516,1.517-1.516h8.091 c0.837,0,1.517,0.679,1.517,1.516l0,0C40.33,40.704,39.65,41.383,38.812,41.383z"></path><ellipse cx="72.693" cy="72.713" fill="#96c362" rx="17.193" ry="17.181"></ellipse><path fill="#40396e" d="M78.761,53.43V30.771c0-0.384-0.152-0.758-0.415-1.041L60.142,10.528 c-0.283-0.303-0.688-0.475-1.102-0.475H17.574c-0.839,0-1.517,0.677-1.517,1.516v73.777c0,0.839,0.678,1.516,1.517,1.516h40.687 c3.671,3.739,8.789,6.064,14.432,6.064c11.155,0,20.227-9.065,20.227-20.213C92.92,63.678,86.953,56.007,78.761,53.43z M72.661,89.894c-3.618-0.007-6.954-1.127-9.717-3.032c-1.003-0.687-1.922-1.478-2.747-2.357c-0.393-0.419-0.93-0.675-1.505-0.675 H19.091V13.085h39.291l17.345,18.293v22.82c0,0.907,0.61,1.698,1.487,1.933c0.527,0.141,1.042,0.308,1.547,0.503 c6.503,2.446,11.124,8.721,11.125,16.078C89.887,82.212,82.169,89.911,72.661,89.894z"></path><ellipse cx="72.693" cy="72.713" fill="#d9eeff" rx="13.084" ry="13.075"></ellipse><path fill="#70bfff" d="M72.693,72.713V59.638c-3.613,0-6.884,1.464-9.252,3.829L72.693,72.713z"></path><path fill="#96c362" d="M70.057,58.851l2.636,5.19l2.636-5.19c-0.867-0.1-1.743-0.165-2.636-0.165 C71.8,58.686,70.923,58.751,70.057,58.851z"></path><path fill="#40396e" d="M73.781,73.802c-0.602,0.6-1.576,0.599-2.176-0.002c-0.6-0.601-7.367-9.556-7.367-9.556 s8.946,6.782,9.547,7.383C74.384,72.228,74.382,73.202,73.781,73.802z"></path>
                    </svg>
                    <span className="ml-3 text-xl">Knowvation Learnings</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center md:text-2xl">
                    <Link href="/" className="mr-5 hover:text-white" aria-label="Home">Home</Link>
                    {/* <Link href="/about" className="mr-5 hover:text-white" aria-label="About">About</Link> */}
                    {/* <Link href="/services" className="mr-5 hover:text-white" aria-label="Services">Services</Link> */}
                    {/* <Link href="/contact" className="mr-5 hover:text-white" aria-label="Contact Us">Contact Us</Link> */}
                </nav>
                <div className="relative flex space-x-4 mt-4 md:mt-0">
                    {isAuthenticated ? (
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="text-white flex items-center focus:outline-none"
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen}
                                onBlur={() => setDropdownOpen(false)}
                            >
                                <span className="ml-2">{username}</span>
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                                    <button
                                        onClick={handleLogout}
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 w-full text-left"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link href="/signup" aria-label="Sign Up">
                                <button type="button" className="text-white flex justify-center items-center bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                    Sign Up
                                </button>
                            </Link>
                            <Link href="/login" aria-label="Login">
                                <button type="button" className="text-white flex justify-center items-center bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                    Login
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
