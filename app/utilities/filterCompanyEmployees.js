export function filterCompanyEmployees(company, fetchedUsers, accordionBody) {
  return fetchedUsers.filter(function (employee) {

    if (employee.uris.company === company.uri) {
      const employeeWrapper = document.createElement('div');
      employeeWrapper.innerText = `name: ${employee.name} & mail: ${employee.email}`;
      accordionBody.appendChild(employeeWrapper);
    }
  });
}
