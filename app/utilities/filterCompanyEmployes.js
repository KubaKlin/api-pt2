export function filterCompanyEmployes(company, fetchedUsers, accordionBody) {
  return fetchedUsers.filter(function (employe) {

    if (employe.uris.company === company.uri) {
      const employeWrapper = document.createElement('div');
      employeWrapper.innerText = `Employee name: ${employe.name} & mail: ${employe.email}`;
      accordionBody.appendChild(employeWrapper);
    }
  });
}
