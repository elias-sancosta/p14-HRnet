import EmployeeForm from '../components/EmployeeForm';

/**
 * Component for page /create-employee
 * @component
 * @returns {JSX.Element}
 */
const CreateEmployee = () => {
  return (
    <div className="bg-[#586c08] mx-auto w-full flex flex-col items-center justify-center py-[100px] overflow-x-hidden ">
      <h2 className="text-center text-3xl text-white font-bold mb-12 lg:text-5xl">
        Create Employee
      </h2>
      <div className="border-t-[1px] border-white opacity-30 mb-6 w-[550px]"></div>
      <div>
        <EmployeeForm />
      </div>
    </div>
  );
};

export default CreateEmployee;
