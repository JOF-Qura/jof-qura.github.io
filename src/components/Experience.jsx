import React from 'react'

const experiences = () => {
  return (
    <div
        name = "experiences"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        {/* Centering Content */}
        <div
            className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full"
        >
            {/* About */}
            <div
                className="pb-8"
            >
                <p
                    className="text-4xl font-bold inline border-b-4 border-gray-500"
                >
                    Experiences
                </p>
            </div>
            
            {/* Description */}
            <p
                className="text-xl text-sky-400 font-bold"
            >
                <em>Role: Full Stack Web Developer Intern</em>
            </p>
            <p
                className='text-xl text-red-400 font-bold'
            >
                @ Polytechnic University of the Philippines
            </p>
            <p
                className='text-sky-300 font-bold'
            >
                May 2022 - July 2022
            </p>
            <p
                className='text-xl mt-2 text-gray-400'
            > 
                - One of the full stack developer of a web application for the school (Faculty Monitoring System).
            </p>
        </div>
    </div>
  )
}

export default experiences