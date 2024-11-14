// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Function to collect employee data from user input
const collectEmployees = function () {
  const employees = [];
  let numberOfEmployees = parseInt(prompt("Enter the number of employees:"));
  
  for (let i = 0; i < numberOfEmployees; i++) {
    let firstName = prompt("Enter the first name of employee:");
    let lastName = prompt("Enter the last name of employee:");
    let salary = parseFloat(prompt("Enter the salary of employee:"));
    
    // Create employee object and push to employees array
    employees.push({ firstName, lastName, salary });
  }
  
  return employees;
};

// Function to display the average salary
const displayAverageSalary = function (employeesArray) {
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = (totalSalary / employeesArray.length).toFixed(2);
  
  alert(`The average salary is $${averageSalary}`);
};

// Function to select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  
  alert(`Random Employee Selected: ${randomEmployee.firstName} ${randomEmployee.lastName}, Salary: $${randomEmployee.salary.toFixed(2)}`);
};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  });

  displayEmployees(employees);
};

// Add event listener to button
addEmployeesBtn.addEventListener('click', trackEmployeeData);