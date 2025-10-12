import React from 'react'

const PreviewTechStack = ({ techStackContent }) => {

    const techIcons = {
        HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
        CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
        NodeJS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        VSCode: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        NPM: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
        Bash: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
    };

    return (
        <section id="techStack" className="flex flex-col items-center justify-center text-white md:mx-48 mt-10 pt-24">
            <h1 className="text-5xl font-bold mb-14">My Tech Stack</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10'>
                {techStackContent?.map((tech, index) => (
                    techIcons[tech] && (
                        <img
                            key={index}
                            src={techIcons[tech]}
                            alt={tech}
                            className="h-20 hover:scale-125 cursor-pointer"
                        />
                    )
                ))}
            </div>
        </section>
    )
}

export default PreviewTechStack;
