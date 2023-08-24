import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => 
{
    const [nav, setNav] = useState(false);

    // Array of Links
    const links = 
    [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'experiences'
        },
        {
            id: 5,
            link: 'techstacks'
        },
        {
            id: 5,
            link: 'contact me'
        },
    ];


    // Navbar [Logo, Nav-Web-Links, Hamburger Menu Icons, Nav-Mobile-Links]
    return (

        
        <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 ">
            {/* Logo */}
            <div>
                <h1 
                    className="text-5xl font-JOFQura ml-2"
                >
                    JOF-Qura
                </h1>
            </div>

            {/* Nav-Web-Links */}
            <ul 
                className="hidden md:flex"
            >
                {links.map(({ id, link }) => 
                (
                    <li 
                        key={id} 
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                    >
                        <Link 
                            to={link} 
                            smooth 
                            duration={500}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Menu Icons */}
            <div 
                onClick={() => setNav(!nav)} 
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" 
            >
                {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
            </div>

            {/* Nav-Mobile-Links */}
            {nav &&
            (
                <ul 
                    className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
                >
                    {links.map(({ id, link }) => 
                    (
                        <li 
                            key={id} 
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link 
                                onClick={() => setNav(!nav)}
                                to={link} 
                                smooth 
                                duration={500}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar