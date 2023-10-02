import { useState, useEffect } from "react";
import { mockEmployees } from "../data/mockEmployees";

/**
 * Custom hook for manage list of employees
 * @returns {Object} Object contain list of employees and function for add a new employee
 */
export const useEmployee = () => {
    const [ employees, setEmployee ] = useState([]);

    // Initializes employee list with mock data
    useEffect (() => {
        setEmployee(mockEmployees);
    }, []);

    /**
     * Add new employee to the existing list
     * @param {Object} employee - Employee to add to list
     */
    const addEmployee = (employee) => {
        const newListEmployees = [...employees];
        newListEmployees.push(employee);
        setEmployee(newListEmployees);
    };

    return {employees, addEmployee};
};