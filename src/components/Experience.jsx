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
                <em>Role: Computer Programmer </em>
            </p>
            <p
                className='text-xl text-red-400 font-bold'
            >
                @ PNP
            </p>
            <p
                className='text-sky-300 font-bold'
            >
                August 2023 - Present
            </p>
            <br></br>
            <p
                className='text-xl mt-2 text-gray-400'
            > 
                - Working individually while maintaining a detail-oriented and creative perspective as part of larger software teams. Creating instructions for computers to execute tasks. Bug detection, eliminating errors, and troubleshooting.
            </p>
            <p
                className="text-xl text-sky-400 font-bold"
            >
                <em>Role: FullStack Web Developer Intern</em>
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
                - One of the FullStack developers of a web application for the school (Faculty Monitoring System). You can visit my journey for the project <a href="https://drive.google.com/file/d/1evdXDJy7cO05Ad1zLNDKmuVO2aa5wrcw/view?usp=sharing">here</a>.
            </p>
        </div>
    </div>
  )
}

export default experiences
