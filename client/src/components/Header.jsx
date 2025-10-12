import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed bg-[#181818] w-full z-50 top-0 left-0 right-0 flex h-14 items-center justify-between text-white md:px-6 px-4">
        <p className="text-2xl bg-[linear-gradient(287deg,rgba(66,148,246,1)_6%,rgba(32,105,171,1)_50%,rgba(35,255,245,1)_99%)] bg-clip-text text-transparent hover:scale-105 cursor-pointer">
          Portfolio
        </p>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-xl">
          <a href="#home" className="hover:text-blue-300 hover:scale-110">Home</a>
          <a href="#about" className="hover:text-blue-300 hover:scale-110">About</a>
          <a href="#techStack" className="hover:text-blue-300 hover:scale-110">Tech Stack</a>
          <a href="#experience" className="hover:text-blue-300 hover:scale-110">Experience</a>
          <a href="#project" className="hover:text-blue-300 hover:scale-110">Project</a>
          <a href="#contact" className="hover:text-blue-300 hover:scale-110">Contact</a>
        </nav>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-1 bg-white" />
          <span className="w-6 h-1 bg-white" />
          <span className="w-6 h-1 bg-white" />
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#181818] text-white flex flex-col items-center gap-4 py-4 text-lg fixed top-14 left-0 w-full">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#techStack" onClick={() => setIsOpen(false)}>Tech Stack</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#project" onClick={() => setIsOpen(false)}>Project</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Header;
