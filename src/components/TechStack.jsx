import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import php from '../assets/php.png'
import python from '../assets/python.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import trello from '../assets/trello.png'
import mysql from '../assets/mysql.png'
import mssql from '../assets/mssql.png'
import adobeXD from '../assets/adobeXD.png'
import codeIgniter from '../assets/codeIgniter.png'
import cProgramming from '../assets/cProgramming.png'
import fastapi from '../assets/fastapi.png'
import java from '../assets/java.png'
import nodejs from '../assets/nodejs.png'
import photoshop from '../assets/photoshop.png'
import postman from '../assets/postman.png'



const TechStack = () => {

    // Array of techstack
    const techstack = 
    [
        {
            id: 1,
            srcImg: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            srcImg: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            srcImg: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            srcImg: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            srcImg: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            srcImg: php,
            title: 'PHP',
            style: 'shadow-violet-300'
        },
        {
            id: 7,
            srcImg: python,
            title: 'Python',
            style: 'shadow-yellow-400'
        },
        {
            id: 8,
            srcImg: postman,
            title: 'Postman',
            style: 'shadow-orange-400'
        },
        {
            id: 9,
            srcImg: trello,
            title: 'Trello',
            style: 'shadow-blue-400'
        },
        {
            id: 10,
            srcImg: adobeXD,
            title: 'Adobe XD',
            style: 'shadow-pink-400'
        },
        {
            id: 11,
            srcImg: photoshop,
            title: 'Adobe Photoshop',
            style: 'shadow-sky-400'
        },
        {
            id: 12,
            srcImg: mysql,
            title: 'MySQL',
            style: 'shadow-orange-400'
        },
        {
            id: 13,
            srcImg: mssql,
            title: 'MS SQL SERVER',
            style: 'shadow-gray-400'
        },
        {
            id: 14,
            srcImg: nodejs,
            title: 'NodeJS',
            style: 'shadow-green-400'
        },
        {
            id: 15,
            srcImg: codeIgniter,
            title: 'CodeIgniter',
            style: 'shadow-orange-400'
        },
        {
            id: 16,
            srcImg: fastapi,
            title: 'FastAPI',
            style: 'shadow-green-400'
        },
        {
            id: 17,
            srcImg: java,
            title: 'Java',
            style: 'shadow-orange-400'
        },
        {
            id: 18,
            srcImg: cProgramming,
            title: 'C Programming',
            style: 'shadow-violet-400'
        },
        {
            id: 19,
            srcImg: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
    ]

    return (
        <div 
            name="techstacks"
            className="w-full max-h-full bg-gradient-to-b from-black to-gray-800"
        >
            <div
                className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white"
            >
                <div>
                    <p
                        className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
                    >
                        TechStacks
                    </p>
                    <p
                        className='py-6'
                    >
                        These the technologies I have worked with. 
                    </p>
                </div>

                <div 
                    className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
                >
                    {techstack.map(({ id, srcImg, title, style }) => 
                    (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img 
                                src={srcImg} 
                                alt="" 
                                className="w-20 mx-auto"
                            />
                            <p
                                className="mt-4"
                            >
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack
