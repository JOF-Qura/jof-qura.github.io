import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div 
        name="home" 
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
        {/* Centering the content */}
        <div 
            className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
        >
            {/* Content */}
            <div
                className="flex flex-col justify-center h-full mt-20"
            >
                <h2
                    className='text-4xl sm:text-7xl font-bold text-white mr-10'
                >
                    I am a Full Stack Developer
                </h2>
                <p
                    className="text-gray-400 py-4 max-w-md mr-9"
                >
                    Hi 👋, I'm Joshua O. Ferrer, a graduate of Bachelor of Science in Information Technology (Cum Laude) from Polytechnic University of the Philippines. A passionate Fullstack Developer (also interested to be a QA Engineer) from Philippines.
                </p>

                {/* Portfolio Button */}
                <div>
                    <Link
                        to="projects"
                        smooth
                        duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer hover:from-cyan-600 hover:to-blue-500 transition duration-200 ease-in-out"
                    >
                        Portfolio 
                        <span
                            className="group-hover:rotate-90 duration-300"
                        >
                            <MdKeyboardArrowRight 
                                size={25} 
                                className="ml-1"
                            />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img 
                    src={HeroImage} 
                    alt="My Profile" 
                    className="rounded-2xl mx-auto w2/3 md:w-full"
                />
            </div>
        </div>
    </div>
  )
}

export default Home
