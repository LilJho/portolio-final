import React from "react";
import { SiTailwindcss, SiOpenai, SiExpress, SiMongodb } from "react-icons/si";
import { ImNewTab } from "react-icons/im";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  description,
  techDataUsed,
  webLink,
  gitLink,
}) => {
  return (
    <div className="bg-[#F8F8F8] p-4 flex items-center justify-center rounded-2xl gap-4 drop-shadow-lg">
      <div className="w-auto h-full transition-transform duration-500 ease-in-out">
        <img
          src={image}
          alt={title}
          className="w-[30rem] h-[15rem] rounded-2xl drop-shadow"
        />
      </div>
      <div className="max-w-[20rem] min-h-[15rem] font-montserrat font-semibold flex flex-col justify-between">
        <div>
          <p>{title}</p>
          <span className="text-xs font-poppins text-[#555555] font-normal">
            {description}
          </span>
          <div>
            <div className="flex items-center justify-start gap-2">
              <p>Tech used:</p>
              <ul className="flex gap-2">
                {techDataUsed.map((techData, index) => (
                  <li className={`text-[${techData.color}] hover:scale-[1.2]`}>
                    {techData.icon}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4">
          <a
            href={webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 transition-colors cursor-pointer hover:text-blue-600"
          >
            Live Demo
            <ImNewTab />
          </a>
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 transition-colors cursor-pointer hover:text-blue-600"
          >
            Code
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

const projectsArr = [
  {
    image: "./farmkonek.png",
    title: "FarmKonek-Profiling Portal",
    description:
      "Farm Konek is community-based farm management enterprise that focuses on data driven clustered production and community-based tech driven production, inventory and impact-based leadership development.",
    techDataUsed: [
      {
        icon: <RiReactjsLine />,
        color: "#61DAFB",
      },
      {
        icon: <TbBrandNextjs />,
        color: "#000",
      },
      {
        icon: <SiTailwindcss />,
        color: "#06B6D4",
      },
    ],
    webLink: "https://profilingportal-fk.vercel.app/",
    gitLink: "https://github.com/LilJho/profilingportal-fk",
  },
  {
    image: "./ai-image.png",
    title: "AI Image Generator",
    description:
      "AI Image Generator is a web-based tool that uses advanced artificial intelligence to create personalized images based on user input. Users input prompts or instructions to generate images that reflect their desired style or content.",
    techDataUsed: [
      {
        icon: <RiReactjsLine />,
        color: "#61DAFB",
      },
      {
        icon: <SiOpenai />,
        color: "#000",
      },
      {
        icon: <SiTailwindcss />,
        color: "#06B6D4",
      },
      {
        icon: <FaNodeJs />,
        color: "#339933",
      },
      {
        icon: <SiExpress />,
        color: "#000",
      },
      {
        icon: <SiMongodb />,
        color: "#47A248",
      },
    ],
    webLink: "https://profilingportal-fk.vercel.app/",
    gitLink: "https://github.com/LilJho/profilingportal-fk",
  },
];

const Projects = () => {
  return (
    <section
      id="projects-section"
      className="flex flex-col items-center justify-center w-full mt-6"
    >
      <h4 className="font-semibold font-montserrat">Projects I’ve made</h4>
      <article className="flex flex-col gap-8 my-12">
        {projectsArr.map((project) => (
          <ProjectCard {...project} />
        ))}
      </article>
    </section>
  );
};

export default Projects;
