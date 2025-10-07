import React, { useState } from "react";

const NewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    about: "",
    techStack: [],
    experience: {
      start: "",
      end: "",
      company: "",
      designation: "",
      comment: "",
    },
    project: {
      image: "",
      title: "",
      github: "",
      tech: "",
      details: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📤 Submitted Data:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center my-5 text-gray-200 text-lg mt-14"
    >
      <div className="grid grid-cols-1 gap-6 border border-gray-600 bg-[#1e1e1e] rounded-2xl shadow px-10 py-8 w-4/5">
        <h1 className="text-3xl text-center font-bold mb-4">Enter Your Details</h1>

        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Comment below name */}
        <div>
          <label className="block font-semibold mb-1">Short Comment (below name)</label>
          <input
            type="text"
            name="comment"
            placeholder="e.g., Full Stack Developer"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* About Me */}
        <div>
          <label className="block font-semibold mb-1">About Me</label>
          <textarea
            name="about"
            rows="4"
            placeholder="Write something about yourself..."
            value={formData.about}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Tech Stack */}
        <div>
          <label className="block font-semibold mb-2">Tech Stack (select multiple):</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Angular", "MongoDB", "Bootstrap", "Tailwind"].map(
              (tech) => (
                <label key={tech} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={tech}
                    onChange={handleTechChange}
                    className="w-4 h-4"
                  />
                  <span>{tech}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 mt-4">Experience</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Start (Month-Year)</label>
              <input
                type="month"
                name="start"
                value={formData.experience.start}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    experience: { ...formData.experience, start: e.target.value },
                  })
                }
                className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">End (Month-Year)</label>
              <input
                type="month"
                name="end"
                value={formData.experience.end}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    experience: { ...formData.experience, end: e.target.value },
                  })
                }
                className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1">Company Name</label>
              <input
                type="text"
                value={formData.experience.company}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    experience: { ...formData.experience, company: e.target.value },
                  })
                }
                className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Designation</label>
              <input
                type="text"
                value={formData.experience.designation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    experience: { ...formData.experience, designation: e.target.value },
                  })
                }
                className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1">Experience Comment</label>
            <textarea
              rows="3"
              value={formData.experience.comment}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  experience: { ...formData.experience, comment: e.target.value },
                })
              }
              className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Project Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 mt-4">Project</h2>
          <div>
            <label className="block mb-1">Project Image URL</label>
            <input
              type="text"
              value={formData.project.image}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  project: { ...formData.project, image: e.target.value },
                })
              }
              placeholder="Enter image URL"
              className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1">Project Title</label>
              <input
                type="text"
                value={formData.project.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    project: { ...formData.project, title: e.target.value },
                  })
                }
                className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">GitHub Link</label>
              <input
                type="text"
                value={formData.project.github}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    project: { ...formData.project, github: e.target.value },
                  })
                }
                className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1">Tech Stack</label>
            <input
              type="text"
              placeholder="e.g., MERN, Tailwind, Axios"
              value={formData.project.tech}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  project: { ...formData.project, tech: e.target.value },
                })
              }
              className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <label className="block mb-1">Project Details (point-wise)</label>
            <textarea
              rows="4"
              placeholder="Use line breaks for points"
              value={formData.project.details}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  project: { ...formData.project, details: e.target.value },
                })
              }
              className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-lg transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewForm;
