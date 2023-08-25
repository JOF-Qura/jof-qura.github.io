import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    // Array of Links
    const links = 
    [
        {
            id: 1,
            child: 
            (
                <>
                    LinkedIn
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/joshua-ferrer-53626b247',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: 
            (
                <>
                    Facebook
                    <FaFacebook size={30} />
                </>
            ),
            href: 'https://www.facebook.com/ferrerjoshua304'
        },
        {
            id: 3,
            child: 
            (
                <>
                    GitHub
                    <FaGithub size={30} />
                </>
            ),
            href: 'https://www.github.com/jof-qura'
        },
        {
            id: 4,
            child: 
            (
                <>
                    Mail
                    <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:ferrerjoshua304@gmail.com'
        },
        {
            id: 5,
            child: 
            (
                <>
                    Resume & Etc.
                    <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: 'https://drive.google.com/drive/folders/1lPRP81nyQ-L3X91Uf1rCRVOqm3BruW4K?usp=sharing',
            style: 'rounded-br-md'
        },
    ]

  return (
    <div
        className="hidden lg:flex flex-col top-[35%] left-0 fixed"
    >
        {/* Links and Icon */}
        <ul>
            {links.map(({ id, child, href, style }) =>
            (
                <li
                    key={id}
                    className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
                >
                    <a 
                        href={href}
                        target="_blank" 
                        rel="noreferrer"
                        className="flex justify-between item-center w-full text-white"    
                    >
                        {child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks