import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import { searchEmployees } from '../utils/tools';
import Search from './Search';
import { useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { tableColumns } from '../data/tableColumns';

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme(
  'solarized',
  {
    text: {
      primary: '#000',
      secondary: '#000',
    },
    striped: {
      default: '#c6d0ac',
      text: '#000',
    },
    background: {
      default: '#c6d0ac',
    },
    context: {
      background: '#889b40',
      text: '#FFFFFF',
    },
    divider: {
      default: '#fff',
    },
    highlightOnHover: {
      default: '#586c08',
      text: '#fff',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: '#889b40',
      disabled: 'rgba(0,0,0,.12)',
    },
  },
  'dark'
);

/**
 * Component for Employee Table
 * @component
 * @returns {JSX.Element}
 */
const EmployeeTable = () => {
  const [search, setSearch] = useState('');

  // Use "EmployeeContext" to access "employee" data through the component
  const { employees } = useContext(EmployeeContext);

  // Call function searchEmployees() with `employees` and `search` params to filter the `employees` data
  const filteredEployees = searchEmployees(employees, search);

  /**
   * Updates the search status with the value enter by user
   * @param {Object} e - Input change event
   */
  const newSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container mt-5 text-lg">
      <Search onChange={newSearch} />
      <DataTable
        columns={tableColumns}
        data={filteredEployees}
        selectableRows
        fixedHeader
        responsive
        striped
        highlightOnHover
        pagination
        theme="solarized"
      />
    </div>
  );
};

export default EmployeeTable;
