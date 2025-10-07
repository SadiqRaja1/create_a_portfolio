import React from 'react'

const TechStack = () => {
    return (
        <section id="techStack" className="flex flex-col items-center justify-center text-white md:mx-48 mt-10 pt-24">
            <h1 className="text-5xl font-bold mb-14">My Tech Stack </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10'>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" className='h-20 hover:scale-125 cursor-pointer' />


                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className='h-20 hover:scale-125 cursor-pointer' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='h-20 hover:scale-125 cursor-pointer' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className='h-20 hover:scale-125 cursor-pointer' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" className='h-20 hover:scale-125 cursor-pointer' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className='h-20 hover:scale-125 cursor-pointer' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className='h-20 hover:scale-125 cursor-pointer' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className='h-20 hover:scale-125 cursor-pointer' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className='h-20 hover:scale-125 cursor-pointer' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" className='h-20 hover:scale-125 cursor-pointer' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" className='h-20 hover:scale-125 cursor-pointer' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" className='h-20 hover:scale-125 cursor-pointer' />


            </div>

        </section>
    )
}

export default TechStack