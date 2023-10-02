import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 items-center border-t-[2px] border-white bg-[#c6d0ac] py-[20px] px-[5%]">
      <Link to="/">
        <img
          src={logo}
          className=" w-[102px] h-[32px] md:w-[127px] md:h-[40px]"
          alt="Logo"
        />
      </Link>
      <p className="text-[#262d0b]">
        Copyright, Wealth Health {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
