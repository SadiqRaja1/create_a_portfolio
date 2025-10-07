import React from 'react'

const Header = () => {
  return (
    <>
      <header className='fixed bg-[#181818] w-full z-50 top-0 left-0 right-0 flex h-14 items-center justify-between text-white md:px-6'>
        <p className='text-2xl bg-[linear-gradient(287deg,rgba(66,148,246,1)_6%,rgba(32,105,171,1)_50%,rgba(35,255,245,1)_99%)] bg-clip-text text-transparent hover:scale-105 cursor-pointer'>Sadiq Raja</p>
        <nav className='flex gap-6 p-4 text-xl'>
          <a href="#home" className="hover:text-blue-300 hover:scale-110">Home</a>
          <a href="#about" className="hover:text-blue-300 hover:scale-110">About</a>
          <a href="#techStack" className="hover:text-blue-300 hover:scale-110">Tech Stack</a>
          <a href="#experience" className="hover:text-blue-300 hover:scale-110">Experience</a>
          <a href="#project" className="hover:text-blue-300 hover:scale-110">Project</a>
          <a href="#contact" className="hover:text-blue-300 hover:scale-110">Contact</a>
        </nav>
      </header>
    </>

  )
}

export default Header