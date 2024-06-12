// Define a getEmployee function that iterates over the employees list and displays it
// Employees must be displayed after a timeout of 1 second.
const getEmployee = (employees, callback) => {
  setTimeout(() => {
    // Write code here to display the name of the employee and return a callback

    let empName = employees.map((emp)=>{
        return emp.name;
    })
    return callback(undefined, empName)
  }, 1000);
};

// Define a function that creates a new employee after 2 seconds.
// and then makes a call to callback function to display the same.
const createEmployee = (employees, employee, callback) => {
  setTimeout(() => {
    if (employee && employees) {
      employees.push(employee);
      // return employees;
      return callback(undefined,employees);
    }
    // write your code here to push new employee to employees list and return a callback.
  }, 2000);
};

module.exports = { getEmployee, createEmployee };
