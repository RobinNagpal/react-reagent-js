const employeeList = ['Robin Nagpal', 'Guneet Kaur', 'Avraj Nagpal'];

const EmployeeItem = (employee) => ['div', employee];

const EmployeeList = (employees) => {
  employees.map((employee) => [EmployeeItem, employee])
};

const EmployeeSection =
  ['section',
    ['div', {'id': 'employees-div'},
      [EmployeeList, employeeList]]];

export default EmployeeSection;