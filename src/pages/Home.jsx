import { Link } from 'react-router-dom';

/**
 * Component for Homepage
 * @component
 * @returns {JSX.Element}
 */
const Home = () => {
  return (
    <div className="flex flex-col py-[257px] text-white bg-[#586c08] md:py-[241px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[36px] font-bold md:text-[64px] ">
          Welcome to HRnet
        </h2>
        <p className="text-[20px] md:text-[32px]">
          Create or view your employees
        </p>
        <div className="flex gap-3 md:gap-6 mt-[40px]">
          <Link
            to="/create-employee"
            className="flex gap-1 items-center py-2 px-2 border-2 bg-[#889b40] text-[#262d0b] border-[#586c08] rounded-[50px] font-medium transition duration-300 ease-in-out shadow-lg  hover:text-zinc-300 hover:border-zinc-300 md:py-3 md:px-6 md:gap-2"
          >
            <i className="ri-file-add-line text-lg md:text-2xl"></i>
            <span className="text-sm md:text-xl">New Employee</span>
          </Link>
          <Link
            to="/list-employee"
            className="flex gap-1 items-center px-2 py-2 border-2 bg-[#889b40] text-[#262d0b] border-[#586c08] rounded-[50px] font-medium transition duration-300 ease-in-out shadow-lg  hover:text-zinc-300 hover:border-zinc-300 md:py-3 md:px-6 md:gap-2"
          >
            <i className="ri-file-list-line text-lg md:text-2xl"></i>
            <span className="text-sm md:text-xl">List Employees</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
