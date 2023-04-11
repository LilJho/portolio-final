import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { ImNewTab } from "react-icons/im";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

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
      <img
        src={image}
        alt={title}
        className="w-[30rem] h-[15rem] rounded-2xl drop-shadow"
      />
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
            className="flex items-center justify-center gap-1"
          >
            Live Demo
            <ImNewTab />
          </a>
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1"
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
    image: "./projects.png",
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
];

const FarmKonekData = {
  image: "./projects.png",
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
};
const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full mt-6">
      <h4 className="font-semibold font-montserrat">Projects I’ve made</h4>
      <article className="flex flex-col my-12 gap-14">
        <ProjectCard {...FarmKonekData} />
      </article>
    </section>
  );
};

export default Projects;
