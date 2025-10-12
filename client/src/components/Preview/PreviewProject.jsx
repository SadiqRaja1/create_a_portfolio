const Projects = ({ projectContent }) => {
    return (
        <section id="project" className="flex flex-col items-center justify-center text-white md:mx-48 mt-10 pt-24">
            <h1 className="text-5xl font-bold mb-6">My Projects</h1>
            <h4 className='text-2xl'>Things I've built so far</h4>
            <div className='mt-8 grid grid-cols-1 xl:grid-cols-2 gap-20'>
                <div className="mx-4 lg:mx-0 bg-[#1e1e1e] rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                    {/* Project Image */}
                    <img
                        src={projectContent?.projectImage1}
                        alt="ToDo Project"
                        className="rounded-xl mb-4 w-full h-72 object-cover"
                    />

                    {/* Project Title */}
                    <h2 className="text-2xl font-bold text-white mb-2">{projectContent?.projectTitle1}</h2>

                    {/* GitHub Link */}
                    <a
                        href={projectContent?.projectGithubLink1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-blue-400 hover:text-blue-300 font-semibold mb-4 underline"
                    >
                        🔗 View on GitHub
                    </a>

                    <p className="text-gray-400 mb-2">
                        <span className="font-semibold text-white">Tech: </span>{projectContent?.projectTech1}
                    </p>

                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {projectContent?.projectDetails1
                            ?.split("\n")
                            .map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                    </ul>
                </div>

                <div className="mx-4 lg:mx-0 bg-[#1e1e1e] rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                    {/* Project Image */}
                    <img
                        src={projectContent?.projectImage2}
                        alt="WanderLust Project"
                        className="rounded-xl mb-4 w-full h-72 object-cover"
                    />

                    {/* Project Title */}
                    <h2 className="text-2xl font-bold text-white mb-2">{projectContent?.projectTitle2}</h2>

                    {/* GitHub Link */}
                    <a
                        href={projectContent?.projectGithubLink2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-blue-400 hover:text-blue-300 font-semibold mb-4 underline"
                    >
                        🔗 View on GitHub
                    </a>

                    <p className="text-gray-400 mb-2">
                        <span className="font-semibold text-white">Tech: </span>{projectContent?.projectTech2}
                    </p>

                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {projectContent?.projectDetails2
                            ?.split("\n")
                            .map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Projects