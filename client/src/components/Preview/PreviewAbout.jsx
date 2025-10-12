import React from 'react'

const PreviewAbout = ({aboutContent}) => {
  return (
    <section id="about" className="mx-4 flex flex-col items-center justify-center text-white md:mx-48 pt-14">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>
      <p className='text-xl'>{aboutContent}</p>

      <a href="#contact">
        <button className="text-xl mt-6 px-16 py-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition rounded-2xl text-blue-600 font-bold shadow-lg">
          CONTACT
        </button>
      </a>

    </section>
  )
}

export default PreviewAbout