import logo from "../assets/logo.svg";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import MyModal from "./modal/Modal";
import Contact from "./modal/Contact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className="flex items-center justify-between w-full px-4 py-2">
      <div className="cursor-pointer">
        <img src={logo} alt="Logo of the web app" />
      </div>
      <ul className="flex gap-4 text-xs font-semibold font-montserrat">
        <li className="transition-colors cursor-pointer hover:text-blue-600">
          <Link
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About me
          </Link>
        </li>
        <li className="transition-colors cursor-pointer hover:text-blue-600">
          <Link
            activeClass="active"
            to="projects-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="cursor-pointer">
          <button onClick={() => setIsOpen(true)}>Contact</button>
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
