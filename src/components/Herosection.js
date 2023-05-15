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
import { MdWavingHand } from "react-icons/md";

const Herosection = () => {
  return (
    <main className=" w-full min-h-[calc(100vh-86px)] flex flex-col  justify-center items-center">
      <div className="flex flex-col-reverse items-center justify-center md:flex-row">
        <div className="max-w-[20rem] font-montserrat flex flex-col gap-2 text-center md:text-left">
          <div className="flex text-5xl">
            <h1 className="font-semibold">
              Frontend{" "}
              <span className="flex gap-1">
                Developer
                <MdWavingHand className="text-[#FFD869]" />
              </span>
            </h1>
          </div>
          <p className="text-[#555555] font-poppins text-xs">
            Hi, I’m Jhonnel T. Garcia. A passionate Frontent-end Developer from
            Puerto Princesa, Palawan.
          </p>
          <ul className="flex justify-center gap-2 md:justify-start">
            <li className="w-8 h-8 flex justify-center items-center rounded-full transition-colors hover:bg-[#1877F2] hover:text-white">
              <a
                href="https://www.facebook.com/lazyJhonnel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-[#0A66C2] hover:text-white">
              <a
                href="https://www.linkedin.com/in/jhonnel-garcia-bb0175197/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-[#181717] hover:text-white">
              <a
                href="https://github.com/LilJho"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </li>
          </ul>
        </div>
        <img
          src={"./my-image.jpg"}
          alt="A young man"
          className="w-[15rem] h-[15rem] rounded-full object-cover"
        />
      </div>
      <div className="absolute flex flex-col-reverse items-center justify-center gap-4 text-2xl md:flex-row bottom-4">
        <p className="pr-2 font-medium border-t-4 border-black md:border-t-0 md:border-r-4 font-montserrat">
          Tech Stack
        </p>
        <ul className="flex gap-2">
          <li
            className="text-[#E34F26] hover:scale-[1.2] transition-all"
            title="HTML"
          >
            <AiFillHtml5 />
          </li>
          <li
            className="text-[#1572B6] hover:scale-[1.2] transition-all"
            title="CSS"
          >
            <DiCss3 />
          </li>
          <li
            className="text-[#F7DF1E] hover:scale-[1.2] transition-all"
            title="JAVASCRIPT"
          >
            <SiJavascript />
          </li>
          <li
            className="text-[#61DAFB] hover:scale-[1.2] transition-all"
            title="REACTJS"
          >
            <RiReactjsLine />
          </li>
          <li
            className="text-[#000] hover:scale-[1.2] transition-all"
            title="NEXTJS"
          >
            <TbBrandNextjs />
          </li>
          <li
            className="text-[#339933] hover:scale-[1.2] transition-all"
            title="NODEJS"
          >
            <FaNodeJs />
          </li>
          <li
            className="text-[#000] hover:scale-[1.2] transition-all"
            title="EXPRESSJS"
          >
            <SiExpress />
          </li>
          <li
            className="text-[#47A248] hover:scale-[1.2] transition-all"
            title="MONGODB"
          >
            <SiMongodb />
          </li>
          <li
            className="text-[#007ACC] hover:scale-[1.2] transition-all"
            title="TYPESCRIPT"
          >
            <SiTypescript />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Herosection;
