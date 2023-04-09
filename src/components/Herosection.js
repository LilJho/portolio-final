import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

const Herosection = () => {
  return (
    <main className="border border-black w-full min-h-[calc(100vh-86px)] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="max-w-[20rem] font-montserrat flex flex-col gap-2">
          <h1 className="text-5xl font-semibold">Full-Stack Developer</h1>
          <p className="text-[#555555] font-poppins text-xs">
            Hi, I’m Jhonnel T. Garcia. A passionate Frontent-end Developer from
            Puerto Princesa, Palawan.
          </p>
          <ul className="flex gap-2">
            <li className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-blue-500 hover:text-white">
              <FaFacebookF />
            </li>
            <li className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-blue-500 hover:text-white">
              <FaLinkedinIn />
            </li>
            <li className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-blue-500 hover:text-white">
              <FiGithub />
            </li>
          </ul>
        </div>
        <img
          src={"./my-image.jpg"}
          alt="A young man"
          className="w-[15rem] h-[15rem] rounded-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center gap-4 absolute bottom-4 text-2xl">
        <p className="border-r-4 border-black pr-2">Tech Stack</p>
        <ul className="flex gap-2">
          <li className="text-[#E34F26] hover:scale-[1.2]">
            <AiFillHtml5 />
          </li>
          <li className="text-[#1572B6] hover:scale-[1.2]">
            <DiCss3 />
          </li>
          <li className="text-[#F7DF1E] hover:scale-[1.2]">
            <SiJavascript />
          </li>
          <li className="text-[#61DAFB] hover:scale-[1.2]">
            <RiReactjsLine />
          </li>
          <li className="text-[#000] hover:scale-[1.2]">
            <TbBrandNextjs />
          </li>
          <li className="text-[#339933] hover:scale-[1.2]">
            <FaNodeJs />
          </li>
          <li className="text-[#000] hover:scale-[1.2]">
            <SiExpress />
          </li>
          <li className="text-[#47A248] hover:scale-[1.2]">
            <SiMongodb />
          </li>
          <li className="text-[#007ACC] hover:scale-[1.2]">
            <SiTypescript />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Herosection;
