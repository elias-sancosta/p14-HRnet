import { useState, useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import { useForm, Controller } from 'react-hook-form';
import { formatSubmitData } from '../utils/tools';
import ReactModalComponent from '@ejfsc/react-modal-component';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { states } from '../data/states';
import { departments } from '../data/departments';

/**
 * Component for Employee Form
 * @component
 * @returns {JSX.Element}
 */
const EmployeeForm = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [msgModal, setMsgModal] = useState('');

  // Form handling functions and properties of useForm() hook of react-hook-form
  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors },
    reset,
  } = useForm();

  // Use "EmployeeContext" to access "addEmployee" function through the component
  const { addEmployee } = useContext(EmployeeContext);

  // Toggle for display the modal
  const toggleModal = () => setDisplayModal(!displayModal);

  /**
   * This function call from an EmployeeContext, and use addEmployee function from that context to add the new employee to the table
   * @param {Object} data - New Employee data to add to the table.
   */
  const addNewEmployee = (data) => {
    const newEmployee = formatSubmitData(data);
    const { firstname, lastname } = newEmployee;
    addEmployee(newEmployee);
    toggleModal();
    setMsgModal(
      `The new employee ${firstname} ${lastname} has been added successfully !`
    );
    reset();
    setValue('state', '');
    setValue('department', '');
  };

  return (
    <div>
      <form
        className="grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-15 xl:gap-28"
        onSubmit={handleSubmit(addNewEmployee)}
      >
        <div className="flex flex-col">
          <h3 className="hidden md:block md:text-xl md:font-bold md:text-[#c6d0ac] md:py-4  md:mb-4 md:text-center lg:text-2xl">
            Informations
          </h3>
          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="firstname" className="font-medium text-lg pl-4">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className={`${
                errors.firstname
                  ? 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac] border-4 border-[#A52A2A] solid'
                  : 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac]'
              } `}
              {...register('firstname', {
                required: true,
                pattern: /^[\p{L}]{2,25}$/iu,
              })}
            />
            {errors.firstname && (
              <p className="employee-form__error">
                Firstname entered is incorrect
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="lastname" className="font-medium text-lg pl-4">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className={`${
                errors.lastname
                  ? 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac] border-4 border-[#A52A2A] solid'
                  : 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac]'
              } `}
              {...register('lastname', {
                required: true,
                pattern: /^[\p{L}]{2,25}$/iu,
              })}
            />
            {errors.lastname && (
              <p className="employee-form__error">
                Lastname entered is incorrect
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="birth" className="font-medium text-lg pl-4">
              Date of birth
            </label>
            <Controller
              control={control}
              name="birthdate"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  id="birthdate"
                  className={`${
                    errors.birthdate
                      ? 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac] border-4 border-[#A52A2A] solid'
                      : 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac]'
                  } `}
                  selected={value}
                  onChange={onChange}
                  placeholderText="Choose a date..."
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              )}
              rules={{ required: true }}
            />
            {errors.birthdate && (
              <p className="employee-form__error">Birthdate is required</p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="hidden md:block md:text-xl md:font-bold md:text-[#c6d0ac] md:py-4 md:text-center md:mb-4 lg:text-2xl">
            Address
          </h3>
          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="street" className="font-medium text-lg pl-4">
              Street
            </label>
            <input
              type="text"
              id="street"
              className={`${
                errors.street
                  ? 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac] border-4 border-[#A52A2A] solid'
                  : 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac]'
              } `}
              {...register('street', {
                required: true,
                pattern: /^[\p{L}\s\d]{2,25}$/iu,
              })}
            />
            {errors.street && (
              <p className="employee-form__error">
                Street entered is incorrect
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="city" className="font-medium text-lg pl-4">
              City
            </label>
            <input
              type="text"
              id="city"
              className={`${
                errors.city
                  ? 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac] border-4 border-[#A52A2A] solid'
                  : 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac]'
              } `}
              {...register('city', {
                required: true,
                pattern: /^[\p{L}]{2,25}$/iu,
              })}
            />
            {errors.city && (
              <p className="employee-form__error">City entered is incorrect</p>
            )}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <Controller
              name="state"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <label
                    htmlFor="state"
                    id="state"
                    className="font-medium text-lg pl-4"
                  >
                    State
                  </label>
                  <Select
                    options={states}
                    onChange={onChange}
                    value={value}
                    placeholder="Select a state..."
                    className={`${
                      errors.state
                        ? 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac] border-4 border-[#A52A2A] solid'
                        : 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac]'
                    } `}
                    classNamePrefix="react-select"
                    aria-labelledby="state"
                  />
                </>
              )}
              rules={{ required: true }}
            />
            {errors.state && (
              <p className="employee-form__error">State is required</p>
            )}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="zip" className="font-medium text-lg pl-4">
              Zip Code
            </label>
            <input
              type="number"
              id="zip"
              className={`${
                errors.zip
                  ? 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac] border-4 border-[#A52A2A] solid'
                  : 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac]'
              } `}
              {...register('zip', { required: true })}
            />
            {errors.zip && (
              <p className="employee-form__error">ZIP code is required</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:translate-y-[-95px] lg:translate-y-[0px]">
          <h3 className="hidden md:block md:text-xl md:font-bold md:text-[#c6d0ac] md:py-4 md:text-center md:mb-4 lg:text-2xl">
            Work status
          </h3>
          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="start" className="font-medium text-lg pl-4">
              Start Date
            </label>
            <Controller
              control={control}
              name="start"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  id="start"
                  className={`${
                    errors.start
                      ? 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac] border-4 border-[#A52A2A] solid'
                      : 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac]'
                  } `}
                  selected={value}
                  onChange={onChange}
                  placeholderText="Choose a date..."
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              )}
              rules={{ required: true }}
            />
            {errors.start && (
              <p className="employee-form__error">Start date is required</p>
            )}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <Controller
              name="department"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <label
                    htmlFor="department"
                    id="department"
                    className="font-medium text-lg pl-4"
                  >
                    Department
                  </label>
                  <Select
                    options={departments}
                    onChange={onChange}
                    value={value}
                    placeholder="Select a department..."
                    className={`${
                      errors.state
                        ? 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac] border-4 border-[#A52A2A] solid'
                        : 'py-2 px-4 rounded-[50px] outline-none w-[300px] bg-[#c6d0ac]'
                    } `}
                    classNamePrefix="react-select"
                    aria-labelledby="department"
                  />
                </>
              )}
              rules={{ required: true }}
            />
            {errors.department && (
              <p className="employee-form__error">Department is required</p>
            )}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <button className="mt-12 border bg-[#889b40] rounded-[50px] py-3 text-lg font-semibold hover:bg-[#71862b]">
              Save
            </button>
          </div>
        </div>
      </form>
      {displayModal && (
        <ReactModalComponent
          hideModal={toggleModal}
          title="Success !"
          modalSize="medium"
        >
          <p className="employee-form__modal-txt">{msgModal}</p>
        </ReactModalComponent>
      )}
    </div>
  );
};

export default EmployeeForm;
