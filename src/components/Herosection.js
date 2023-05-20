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
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.2,
      duration: 0.6,
      delay: 4,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const Herosection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading((prev) => (prev ? !prev : prev));
    }, 2200);
  }, []);

  const loadingAni = {
    borderRadius: ["20%", "50%", "20%"],
    backgroundColor: ["grey", "black", "grey"],
    rotate: [0, 600, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <main className=" w-full min-h-[calc(100vh-86px)] flex flex-col  justify-center items-center">
      <motion.div
        initial={
          loading
            ? {
                borderRadius: "20%",
                backgroundColor: "grey",
                rotate: 0,
              }
            : { opacity: 0 }
        }
        animate={
          loading
            ? loadingAni
            : {
                backgroundColor: "white",
                opacity: 1,
                rotate: 0,
                transition: { type: "spring" },
              }
        }
        className={`${
          loading
            ? "w-28 h-28 absolute top: calc(50% - 30px)left: calc(50% - 30px)"
            : "flex flex-col-reverse items-center justify-center md:flex-row"
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            loading
              ? { opacity: 0 }
              : { opacity: 1, transition: { type: "spring", delay: 1.5 } }
          }
          className="flex flex-col-reverse items-center justify-center md:flex-row"
        >
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
              Hi, I’m Jhonnel T. Garcia. A passionate Frontent-end Developer
              from Puerto Princesa, Palawan.
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
            src={"./me-bw.jpg"}
            alt="A young man"
            className="w-[15rem] h-[15rem] rounded-full object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="absolute flex flex-col-reverse items-center justify-center gap-4 text-2xl md:flex-row bottom-4"
      >
        <motion.p
          variants={item}
          className="pr-2 font-medium border-t-4 border-black md:border-t-0 md:border-r-4 font-montserrat"
        >
          Tech Stack
        </motion.p>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex gap-2"
        >
          <motion.li
            variants={item}
            className="text-[#E34F26] hover:scale-[1.2] transition-all"
            title="HTML"
          >
            <AiFillHtml5 />
          </motion.li>
          <motion.li
            variants={item}
            className="text-[#1572B6] hover:scale-[1.2] transition-all"
            title="CSS"
          >
            <DiCss3 />
          </motion.li>
          <motion.li
            variants={item}
            className="text-[#F7DF1E] hover:scale-[1.2] transition-all"
            title="JAVASCRIPT"
          >
            <SiJavascript />
          </motion.li>
          <motion.li
            variants={item}
            className="text-[#61DAFB] hover:scale-[1.2] transition-all"
            title="REACTJS"
          >
            <RiReactjsLine />
          </motion.li>
          <motion.li
            variants={item}
            className="text-[#000] hover:scale-[1.2] transition-all"
            title="NEXTJS"
          >
            <TbBrandNextjs />
          </motion.li>
          <motion.li
            variants={item}
            className="text-[#339933] hover:scale-[1.2] transition-all"
            title="NODEJS"
          >
            <FaNodeJs />
          </motion.li>
          <motion.li
            variants={item}
            className="text-[#000] hover:scale-[1.2] transition-all"
            title="EXPRESSJS"
          >
            <SiExpress />
          </motion.li>
          <motion.li
            variants={item}
            className="text-[#47A248] hover:scale-[1.2] transition-all"
            title="MONGODB"
          >
            <SiMongodb />
          </motion.li>
          <motion.li
            variants={item}
            className="text-[#007ACC] hover:scale-[1.2] transition-all"
            title="TYPESCRIPT"
          >
            <SiTypescript />
          </motion.li>
        </motion.ul>
      </motion.div>
    </main>
  );
};

export default Herosection;
