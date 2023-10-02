import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

/**
 * Component for Header
 * @component
 * @returns {JSX.Element}
 */
const Header = () => {
  return (
    <header className="flex flex-col gap-4  w-full items-center flex-wrap justify-center border-b-[2px] border-white text-black bg-[#c6d0ac] py-[20px] px-[5%] md:flex-row md:justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className=" w-[200px] h-[63px] md:w-[253px] md:h-[80px]"
        />
      </Link>
      <nav className="flex items-center gap-4">
        <Link
          to="/create-employee"
          className="flex gap-2 items-center py-1 px-2 border-2 text-[#262d0b] border-[#262d0b] rounded-md font-medium transition duration-300 ease-in-out hover:bg-[#889b40] hover:text-white hover:border-white md:py-2 md:px-4"
        >
          <i className="ri-file-add-line text-xl md:text-2xl"></i>
          <span className="text-sm md:text-base">New Employee</span>
        </Link>
        <Link
          to="/list-employee"
          className="flex gap-2 items-center py-1 px-2 border-2 text-[#262d0b] border-[#262d0b] rounded-md font-medium transition duration-300 ease-in-out hover:bg-[#889b40] hover:text-white hover:border-white md:py-2 md:px-4"
        >
          <i className="ri-file-list-line text-xl md:text-2xl"></i>
          <span className="text-sm md:text-base">List Employees</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
