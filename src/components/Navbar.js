import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-4 py-2">
      <div className="cursor-pointer">
        <img src={logo} alt="Logo of the web app" />
      </div>
      <ul className="flex gap-4 font-montserrat font-medium">
        <li className="cursor-pointer">About me</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
