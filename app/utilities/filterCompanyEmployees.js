export function filterCompanyEmployees(company, fetchedUsers, accordionBody, accordionButton, accordionItem) {
  let employeeCount = 0;
  const employeeCountIndicator = document.createElement('div');
  employeeCountIndicator.classList.add('employee-count');
  accordionButton.appendChild(employeeCountIndicator);

  return fetchedUsers.filter(function (employee) {

    if (employee.uris.company === company.uri) {
      employeeCount++;
      const employeeWrapper = document.createElement('div');
      employeeWrapper.innerText = `name: ${employee.name} & mail: ${employee.email}`;
      accordionBody.appendChild(employeeWrapper);
      employeeCountIndicator.innerText = `employees in the company: ${employeeCount}`;
      accordionItem.setAttribute('data-employees', employeeCount);
    }
  });

}
