import { format } from "date-fns";

/**
* Format date retrieved from the datepicker
* @param {Date} date - Date to format
* @returns {string} Formatted date string.
*/
export const formatDate = (date) => {
    const reformattedDate = format(new Date(date), "MM-dd-yyyy");
    return reformattedDate;
};


/**
* Formats the given data object into a format suitable for submission via a form.
* @param {Object} data - Object contain the data of submit form
* @returns {Object} Object contain employee data formatted
*/
export const formatSubmitData = (data) => {
    const formatedData = {
        firstname: data.firstname,
        lastname: data.lastname,
        birthdate: formatDate(data.birthdate),
        street: data.street,
        city: data.city,
        state: data.state.value,
        zip: data.zip,
        start: formatDate(data.start),
        department: data.department.label
    };

    return formatedData;
};

/**
* Search function for employee table
* @param {Array.<Object>} employees - Array of employees
* @param {string} search - Search string
* @returns {Array.<Object>} Array of employees objects match the search
*/
export const searchEmployees = (employees, search) => {

    if (!search) {
        return employees;
    }

    const employeesFiltered = employees.filter((employee) => {
        const employeeValues = [
            employee.firstname.toLowerCase(),
            employee.lastname.toLowerCase(),
            employee.start.toLowerCase(),
            employee.department.toLowerCase(),
            employee.birthdate.toLowerCase(),
            employee.street.toLowerCase(),
            employee.city.toLowerCase(),
            employee.state.toLowerCase(),
            employee.zip.toString(),
        ];

        return employeeValues.some((value) => value.includes(search.toLowerCase()));
    });

    return employeesFiltered;
};