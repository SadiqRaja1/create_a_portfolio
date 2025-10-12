import React, { useState } from "react";
import axios from "axios";

const NewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    profileImage: "",
    comment: "",
    about: "",
    techStack: [],
    companyStart1: "",
    companyEnd1: "",
    companyName1: "",
    designation1: "",
    companyComment1: "",
    companyStart2: "",
    companyEnd2: "",
    companyName2: "",
    designation2: "",
    companyComment2: "",
    projectImage1: "",
    projectTitle1: "",
    projectGithubLink1: "",
    projectTech1: "",
    projectDetails1: "",
    projectImage2: "",
    projectTitle2: "",
    projectGithubLink2: "",
    projectTech2: "",
    projectDetails2: "",
    githubProfile: "",
    linkedinProfile: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (parseInt(value) || 0) : value,
    }));
  };

  const handleTechChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      techStack: checked
        ? [...prev.techStack, value]
        : prev.techStack.filter((tech) => tech !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate tech stack
    if (formData.techStack.length === 0) {
      alert("Please select at least one technology from Tech Stack!");
      return;
    }
    
    try {
      console.log("Submitting Data:", formData);
      let mainURL = import.meta.env.VITE_BACKEND_URL;
      const res = await axios.post(`${mainURL}/data/new`, formData);
      console.log("Response:", res.data);
    } catch (error) {
      console.error(`Something went wrong in sending data to backend: ${error}`);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center my-5 text-gray-200 text-lg mt-14"
      style={{backgroundColor: '#181818', minHeight: '100vh'}}
    >
      <div className="grid grid-cols-1 gap-6 border border-gray-600 rounded-2xl shadow px-10 py-8 w-11/12 max-w-4xl" style={{backgroundColor: '#181818'}}>
        <h1 className="text-3xl text-center font-bold mb-4">Enter Your Details</h1>

        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Profile Image */}
        <div>
          <label className="block font-semibold mb-1">Profile Image URL *</label>
          <input
            type="text"
            name="profileImage"
            placeholder="Enter profile image URL"
            value={formData.profileImage}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Comment below name */}
        <div>
          <label className="block font-semibold mb-1">Short Comment (below name) *</label>
          <input
            type="text"
            name="comment"
            placeholder="e.g., Full Stack Developer"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* About Me */}
        <div>
          <label className="block font-semibold mb-1">About Me *</label>
          <textarea
            name="about"
            rows="4"
            placeholder="Write something about yourself..."
            value={formData.about}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Tech Stack */}
        <div>
          <label className="block font-semibold mb-2">Tech Stack (select at least one) *</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Angular", "MongoDB", "Bootstrap", "Tailwind"].map(
              (tech) => (
                <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={tech}
                    onChange={handleTechChange}
                    checked={formData.techStack.includes(tech)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span>{tech}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Experience 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 mt-4">Experience 1 *</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Start (Month-Year) *</label>
              <input
                type="month"
                name="companyStart1"
                value={formData.companyStart1}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1">End (Month-Year) *</label>
              <input
                type="month"
                name="companyEnd1"
                value={formData.companyEnd1}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1">Company Name *</label>
              <input
                type="text"
                name="companyName1"
                placeholder="Company name"
                value={formData.companyName1}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Designation *</label>
              <input
                type="text"
                name="designation1"
                placeholder="Your role"
                value={formData.designation1}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1">Experience Comment *</label>
            <textarea
              rows="3"
              name="companyComment1"
              placeholder="Describe your experience..."
              value={formData.companyComment1}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
        </div>

        {/* Experience 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 mt-4">Experience 2 (Optional)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Start (Month-Year)</label>
              <input
                type="month"
                name="companyStart2"
                value={formData.companyStart2}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">End (Month-Year)</label>
              <input
                type="month"
                name="companyEnd2"
                value={formData.companyEnd2}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1">Company Name</label>
              <input
                type="text"
                name="companyName2"
                placeholder="Company name"
                value={formData.companyName2}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Designation</label>
              <input
                type="text"
                name="designation2"
                placeholder="Your role"
                value={formData.designation2}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1">Experience Comment</label>
            <textarea
              rows="3"
              name="companyComment2"
              placeholder="Describe your experience..."
              value={formData.companyComment2}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Project 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 mt-4">Project 1 *</h2>
          <div>
            <label className="block mb-1">Project Image URL *</label>
            <input
              type="text"
              name="projectImage1"
              placeholder="Enter image URL"
              value={formData.projectImage1}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1">Project Title *</label>
              <input
                type="text"
                name="projectTitle1"
                placeholder="Project name"
                value={formData.projectTitle1}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1">GitHub Link *</label>
              <input
                type="text"
                name="projectGithubLink1"
                placeholder="GitHub repository URL"
                value={formData.projectGithubLink1}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1">Tech Stack *</label>
            <input
              type="text"
              name="projectTech1"
              placeholder="e.g., MERN, Tailwind, Axios"
              value={formData.projectTech1}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-1">Project Details (point-wise) *</label>
            <textarea
              rows="4"
              name="projectDetails1"
              placeholder="Use line breaks for points"
              value={formData.projectDetails1}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
        </div>

        {/* Project 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 mt-4">Project 2 (Optional)</h2>
          <div>
            <label className="block mb-1">Project Image URL</label>
            <input
              type="text"
              name="projectImage2"
              placeholder="Enter image URL"
              value={formData.projectImage2}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1">Project Title</label>
              <input
                type="text"
                name="projectTitle2"
                placeholder="Project name"
                value={formData.projectTitle2}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">GitHub Link</label>
              <input
                type="text"
                name="projectGithubLink2"
                placeholder="GitHub repository URL"
                value={formData.projectGithubLink2}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1">Tech Stack</label>
            <input
              type="text"
              name="projectTech2"
              placeholder="e.g., MERN, Tailwind, Axios"
              value={formData.projectTech2}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <label className="block mb-1">Project Details (point-wise)</label>
            <textarea
              rows="4"
              name="projectDetails2"
              placeholder="Use line breaks for points"
              value={formData.projectDetails2}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 mt-4">Social Profiles *</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">GitHub Profile URL *</label>
              <input
                type="url"
                name="githubProfile"
                placeholder="https://github.com/yourusername"
                value={formData.githubProfile}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1">LinkedIn Profile URL *</label>
              <input
                type="url"
                name="linkedinProfile"
                placeholder="https://linkedin.com/in/yourusername"
                value={formData.linkedinProfile}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-lg transition cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewForm;