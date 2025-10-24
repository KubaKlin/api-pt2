export function showCompanyEmployees(company, accordionBody) {
  company.employees.forEach(function (employee) {
    const employeeItem = document.createElement('div');
    employeeItem.innerText = `${employee.name} - ${employee.email}`;
    accordionBody.appendChild(employeeItem);
  });
}
