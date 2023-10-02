import EmployeeTable from '../components/EmployeeTable';

/**
 * Component for page /list-employee
 * @component
 * @returns {JSX.Element}
 */
const ListEmployee = () => {
  return (
    <div className="bg-[#586c08] mx-auto w-full flex flex-col items-center justify-center py-[120px]">
      <h2 className="text-3xl mb-8 font-bold text-white lg:text-5xl">
        Current Employees
      </h2>
      <EmployeeTable />
    </div>
  );
};

export default ListEmployee;
