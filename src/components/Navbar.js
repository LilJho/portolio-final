import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import MyModal from "./modal/Modal";
import Contact from "./modal/Contact";
import { RiMenu3Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { MdWavingHand } from "react-icons/md";
import { motion } from "framer-motion";
import InitialLogo from "./svg/InitialLogo";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleDownload = () => {
    const fileUrl = process.env.PUBLIC_URL + "/Resume-Jhonnel-Garcia.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Resume-Jhonnel-Garcia.pdf";
    link.click();
  };

  return (
    <nav className="flex flex-col w-full py-2 overflow-hidden md:items-center md:justify-between md:px-4 md:flex-row">
      <div className="flex items-center justify-between min-w-full px-4 cursor-pointer md:px-0 md:min-w-0">
        <InitialLogo />
        <span
          className="text-2xl leading-none transition-all md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <GrClose /> : <RiMenu3Fill />}
        </span>
      </div>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className={`flex flex-col gap-5 md:justify-center md:items-center md:static md:bg-transparent mt-14 md:mt-0 fixed w-full h-screen md:right-0 md:w-[25rem] md:h-[5rem] md:gap-4 p-8 text-4xl text-right font-semibold transition-all bg-white border-2 border-gray-400 md:border-0 md:min-w-0 md:min-h-0 md:text-xs md:flex-row font-montserrat z-10 ${
          toggle ? "right-0" : "right-[-780px]"
        }`}
      >
        <motion.li
          variants={item}
          className="transition-colors cursor-pointer hover:text-blue-600"
        >
          <Link
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              scroll.scrollTo(
                document.querySelector("#about-section").offsetTop
              );
              setToggle(false);
            }}
          >
            About me
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          className="transition-colors cursor-pointer md:hover:text-blue-600"
        >
          <Link
            activeClass="active"
            to="projects-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              scroll.scrollTo(
                document.querySelector("#projects-section").offsetTop
              );
              setToggle(false);
            }}
          >
            Projects
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          className="transition-colors cursor-pointer md:hover:text-blue-600"
        >
          <button
            onClick={() => {
              setIsOpen(true);
              setToggle(false);
            }}
          >
            Contact
          </button>
        </motion.li>
        <motion.li
          variants={item}
          className="transition-colors cursor-pointer md:hover:text-blue-600"
        >
          <button onClick={handleDownload}>DownloadCV</button>
        </motion.li>
      </motion.ul>
      {isOpen && (
        <MyModal
          title={"Get in touch with me!"}
          icon={<MdWavingHand className="text-[#FFD869]" />}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <Contact setIsOpen={setIsOpen} />
        </MyModal>
      )}
    </nav>
  );
};

export default Navbar;
