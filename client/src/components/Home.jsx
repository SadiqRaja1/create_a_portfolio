import React from 'react'
import Header from './Header'
import profileImage from "../assets/Sadiq.jpeg"
import About from './About'
import TechStack from './TechStack'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'
import Fotter from './Fotter'

const Home = () => {
  return (
    <main className='flex-grow text-white'>
      <section
        id="home"
        className="h-screen grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-20 gap-10"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-light">Hi,</h2>
          <h2 className="text-4xl md:text-5xl font-medium">My name is</h2>
          <h3 className="text-7xl pb-4 md:text-8xl font-bold bg-[linear-gradient(287deg,rgba(66,148,246,1)_6%,rgba(32,105,171,1)_50%,rgba(35,255,245,1)_99%)] bg-clip-text text-transparent">Sadiq Raja</h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-md">
            I am a <span className="text-blue-400 font-semibold">Full Stack Developer</span> passionate about building
            modern web applications.
          </p>
          <button className="text-xl mt-6 px-16 py-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition rounded-2xl text-blue-600 font-bold shadow-lg">
            CONTACT ME
          </button>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-blue-500"
          />
        </div>
      </section>

      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Fotter />
    </main>
  )
}

export default Home