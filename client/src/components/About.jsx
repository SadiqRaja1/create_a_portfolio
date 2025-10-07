import React from 'react'

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center text-white mx-48 pt-14">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>
      <p className='text-xl'>Hello! I'm Sadiq Raja, a passionate Full Stack Developer with a strong foundation in building dynamic and user-friendly web applications using the MERN stack. I hold a B.Sc. in Information Technology and have completed internships where I worked on real-world projects, enhancing both my technical and problem-solving skills.
      <br />
      <br /> I enjoy transforming ideas into fully functional applications and continuously exploring new technologies to stay up-to-date with the latest trends in web development. My goal is to contribute to impactful projects, write clean and maintainable code, and collaborate with teams to deliver seamless user experiences.
      <br />
      <br /> When I’m not coding, I love learning about new tools and improving my problem-solving skills. I’m currently seeking opportunities where I can grow as a developer and contribute to innovative projects.</p>

      <button className="text-xl mt-6 px-16 py-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition rounded-2xl text-blue-600 font-bold shadow-lg">
        CONTACT
      </button>

    </section>
  )
}

export default About