import React from 'react'
import TodoImg from "../assets/TodoProject.png"
import WanderLlustImg from "../assets/WanderLust.png"

const Projects = () => {
  return (
    <section id="project" className="flex flex-col items-center justify-center text-white mx-48 mt-10 pt-24">
      <h1 className="text-5xl font-bold mb-6">My Projects</h1>
      <h4 className='text-2xl'>Things I've built so far</h4>
      <div className='mt-8 grid grid-cols-2 gap-20'>
        <div className="w-[500px] bg-[#1e1e1e] rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          {/* Project Image */}
          <img
            src={TodoImg}
            alt="ToDo Project"
            className="rounded-xl mb-4 w-full h-72 object-cover"
          />

          {/* Project Title */}
          <h2 className="text-2xl font-bold text-white mb-2">ToDo List - MERN Stack</h2>

          {/* GitHub Link */}
          <a
            href="https://github.com/SadiqRaja1/ToDo_Project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-400 hover:text-blue-300 font-semibold mb-4 underline"
          >
            🔗 View on GitHub
          </a>

          {/* Project Details */}
          <p className="text-gray-300 mb-2">
            A full-stack task manager where users can add, edit, delete, and mark tasks as complete.
          </p>

          <p className="text-gray-400 mb-2">
            <span className="font-semibold text-white">Tech:</span> React, Node.js, Express, MongoDB, Tailwind CSS
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Built RESTful APIs for full CRUD operations</li>
            <li>Used Vite for setup, Axios for API calls, and Render for deployment</li>
            <li>Implemented CORS and .env for secure backend communication</li>
            <li>Successfully deployed and hosted the website on Render</li>
          </ul>
        </div>

        <div className="w-[500px] bg-[#1e1e1e] rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
  {/* Project Image */}
  <img
    src={WanderLlustImg}
    alt="WanderLust Project"
    className="rounded-xl mb-4 w-full h-72 object-cover"
  />

  {/* Project Title */}
  <h2 className="text-2xl font-bold text-white mb-2">WanderLust - Airbnb Clone</h2>

  {/* GitHub Link */}
  <a
    href="https://github.com/SadiqRaja1/delta-Project"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-blue-400 hover:text-blue-300 font-semibold mb-4 underline"
  >
    🔗 View on GitHub
  </a>

  {/* Project Details */}
  <p className="text-gray-300 mb-2">
    A full-stack Airbnb clone where users can explore, post, and review listings for homes and villas.
  </p>

  <p className="text-gray-400 mb-2">
    <span className="font-semibold text-white">Tech:</span> Node.js, Express.js, MongoDB Atlas, EJS, Passport.js, Cloudinary, Mapbox, Mongoose, Multer, Joi
  </p>

  <ul className="list-disc list-inside text-gray-300 space-y-1">
    <li>Dynamic web app with explore, post, and review features for properties</li>
    <li>User authentication with Passport.js and secure session handling</li>
    <li>Cloudinary used for high-quality image upload and management</li>
    <li>Mapbox API integration for live location and interactive maps</li>
    <li>Role-based access: only listing owners can edit or delete their listings</li>
    <li>Review system with validation to prevent tampering</li>
    <li>Responsive frontend built with EJS templates and backend validation</li>
  </ul>
</div>

      </div>
    </section>
  )
}

export default Projects