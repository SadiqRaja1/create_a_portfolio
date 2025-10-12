import React, { useEffect, useState } from "react";
import axios from "axios";
import PreviewAbout from "./Preview/PreviewAbout";
import PreviewTechStack from "./Preview/PreviewTechStack";
import PreviewExperience from "./Preview/PreviewExperience";
import PreviewProject from "./Preview/PreviewProject";
import Contact from "./Contact"
import PreviewFotter from "./Preview/PreviewFotter";
import { useParams } from "react-router-dom";

const Preview = () => {

  const { id } = useParams();
  const [data, setData] = useState(null);

  const backendURL = import.meta.env.VITE_BACKEND_URL;
  // const id = "68eb090eea1fd14916c4c887";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendURL}/data/fetch/${id}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(`Something went wrong error:${error}`);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div className="text-white p-10">Loading...</div>;

  return (
    <main className="flex-grow text-white">
      <section
        id="home"
        className="h-screen grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-20 gap-10"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-light">Hi,</h2>
          <h2 className="text-4xl md:text-5xl font-medium">My name is</h2>
          <h3 className="text-7xl pb-4 md:text-8xl font-bold bg-[linear-gradient(287deg,rgba(66,148,246,1)_6%,rgba(32,105,171,1)_50%,rgba(35,255,245,1)_99%)] bg-clip-text text-transparent">
            {data.response?.name}
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-md">
            {data.response?.comment}
          </p>
          <a href="#contact">
            <button className="text-xl mt-6 px-16 py-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition rounded-2xl text-blue-600 font-bold shadow-lg">
              CONTACT ME
            </button>
          </a>
        </div>

        <div className="hidden md:flex justify-center md:justify-end">
          <img
            src={data.response?.profileImage}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-blue-500"
          />
        </div>
      </section>
      
      <PreviewAbout aboutContent={data.response?.about} />
      <PreviewTechStack techStackContent = {data.response?.techStack}/>
      <PreviewExperience experienceContent = {data?.response}/>
      <PreviewProject projectContent = {data?.response} />
      <Contact />
      <PreviewFotter previewContent = {data?.response}/>
    </main>
  );
};

export default Preview;
