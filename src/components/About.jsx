import React from 'react'

const About = () => {
  return (
    <div
        name = "about"
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
                    About
                </p>
            </div>
            
            {/* Description */}
            <p 
                className="text-xl mt-2"
            >
                A Fresh Graduate, A FullStack Developer, A Photo and Video Editor, and An Aspiring Software / QA Engineer. <br />
                
            </p>

            <br />

            <p
                className="text-xl"
            >
                Motivated person seeking a career in Software/Web Developing or Quality Assurance Testing, to help an organization give a fantastic software/website and deliver high quality software to its client through detailed testing and inspection.
            </p>

            <br />
            <p
                className="text-xl"
            >
                Recent Tech Stack used: Laravel, PHP, Html5, Css3, Javascript, Bootstrap, MySql.
            </p>

        </div>
    </div>
  )
}

export default About