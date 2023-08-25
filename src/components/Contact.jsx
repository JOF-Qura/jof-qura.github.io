import React from 'react'

const Contact = () => {
  return (
    <div 
        name="contact me"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white mt-10px"
    >
        <div
            className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
        >
            <div
                className="pb-8"
            >
                <p
                    className="text-4xl font-bold inline border-b-4 border-gray-500"
                >
                    Contact Me
                </p>
                <p
                    className="py-6"
                >
                    Submit the form below to get in touch with me.
                </p>
            </div>

            <div
                className="flex justify-center items-center"
            >
                <form 
                    action="https://getform.io/f/3d8412e8-cb80-4b8a-9a96-46cf4d4b1790"
                    method='POST'
                    className="flex flex-col w-full md:w-1/2"
                >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your Name"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        required
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email"
                        className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        required
                    />
                    <textarea
                        type="text" 
                        name="message" 
                        rows="10"
                        placeholder="Enter your message"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        required
                    >
                        
                    </textarea>
                   
                    <button
                        className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                    >
                        Let's Talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact