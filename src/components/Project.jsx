import React from 'react'
import fms from '../assets/portfolio/Faculty Monitoring System.jpg'
import warehousing from '../assets/portfolio/Warehouse Monitoring System.jpg'
import onlineGrocery from '../assets/portfolio/Online Grocery System.jpg'
import helpdesk from '../assets/portfolio/HelpDesk System.jpg'


const Portfolio = () => {

    // Array of Links
    const projects = 
    [
        {
            id: 1,
            imgSrc: fms,
            href: 'https://github.com/jrglomar/fms'
        },
        {
            id: 2,
            imgSrc: warehousing,
            href: 'https://github.com/JOF-Qura/warehousing_system'
        },
        {
            id: 3,
            imgSrc: onlineGrocery,
            href: 'https://github.com/JOF-Qura/Online-Grocery-E_commerce-System'
        },
        {
            id: 4,
            imgSrc: helpdesk,
            href: 'https://github.com/JOF-Qura/HelpDesk-System'
        },
    ]


    return (
        <div 
            name="projects"
            className="bg-gradient-to-b from-black to-gray-800 md:h-screen w-full text-white"
        >
            <div
                className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
            >
                {/* Title and Description */}
                <div 
                    className="pb-8"
                >
                    <p
                        className="text-4xl font-bold inline border-b-4 border-gray-500"
                    >
                        Projects
                    </p>
                    <p
                        className="py-6"
                    >
                        Check out some of my work right here. :D
                    </p>
                </div>

                {/* Structure for the whole card */}
                <div 
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
                >
                    {
                        projects.map(({ id, imgSrc, href}) => 
                        (
                            <div
                                key={id}
                                className="shadow-md shadow-gray-600 rounded-lg"
                            >
                                <img 
                                    src={imgSrc} 
                                    alt="" 
                                    className="rounded-md duration-200 hover:scale-105"
                                />
                                <div
                                    className="flex items-center justify-center"
                                >
                                    <a 
                                        href={href}
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="px-16 py-3 m-4 duration-200 hover:scale-105"   
                                    >
                                        Code Link Here
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio