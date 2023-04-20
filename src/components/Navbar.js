import logo from "../assets/logo.svg";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import MyModal from "./modal/Modal";
import Contact from "./modal/Contact";
import { RiMenu3Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex flex-col w-full py-2 overflow-hidden md:items-center md:justify-between md:px-4 md:flex-row">
      <div className="flex items-center justify-between min-w-full px-4 cursor-pointer md:px-0 md:min-w-0">
        <img src={logo} alt="Logo of the web app" />
        <span
          className="transition-all md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <GrClose /> : <RiMenu3Fill />}
        </span>
      </div>
      <ul
        className={`flex flex-col gap-5 md:justify-center md:items-center md:static md:bg-transparent mt-14 md:mt-0 fixed w-full h-screen md:right-0 md:w-[16.5rem] md:h-[5rem] md:gap-4 p-8 text-4xl text-right font-semibold transition-all bg-white border border-black md:border-0 md:min-w-0 md:min-h-0 md:text-xs md:flex-row font-montserrat z-10 ${
          toggle ? "right-0" : "right-[-780px]"
        }`}
      >
        <li className="transition-colors cursor-pointer hover:text-blue-600">
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
        </li>
        <li className="transition-colors cursor-pointer md:hover:text-blue-600">
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
        </li>
        <li className="cursor-pointer">
          <button
            onClick={() => {
              setIsOpen(true);
              setToggle(false);
            }}
          >
            Contact
          </button>
        </li>
      </ul>
      {isOpen && (
        <MyModal
          title={"Leave a Message!"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <Contact />
        </MyModal>
      )}
    </nav>
  );
};

export default Navbar;
