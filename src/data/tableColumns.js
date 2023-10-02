// Columns data formated for react-data-table-component in employee table
export const tableColumns = [
    {
        name: "FirstName",
        selector: (row) => row.firstname,
        sortable: true,
        minWidth: "128px"
    },
    {
        name: "LastName",
        selector: (row) => row.lastname,
        sortable: true,
        minWidth: "126px"
    },
    {
        name: "Start Date",
        selector: (row) => row.start,
        sortable: true,
        minWidth: "126px"
    },
    {
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
        minWidth: "145px"
    },
    {
        name: "Birth",
        selector: (row) => row.birthdate,
        sortable: true,
        minWidth: "110px"
    },
    {
        name: "Street",
        selector: (row) => row.street,
        sortable: true,
        minWidth: "179px"
    },
    {
        name: "City",
        selector: (row) => row.city,
        sortable: true,
        minWidth: "120px"
    },
    {
        name: "State",
        selector: (row) => row.state,
        sortable: true,
        minWidth: "90px"
    },
    {
        name: "Zip",
        selector: (row) => row.zip,
        sortable: true,
        minWidth: "80px"
    },
];