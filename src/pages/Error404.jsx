import { Link } from 'react-router-dom';

/**
 * Component for Error404
 * @component
 * @returns {JSX.Element}
 */
const Error404 = () => {
  return (
    <div className="flex flex-col py-[250px] text-white bg-[#586c08] ">
      <h2 className="text-[48px] font-bold text-center">
        <span className="text-[76px]">Oups!</span> <br />
        The page you request does not exist
      </h2>
      <Link to="/" className="text-[32px] font-bold text-center text-[#000] ">
        Go to the home page
      </Link>
    </div>
  );
};

export default Error404;
