export function filterCompanyEmployees(fetchedCompanies, fetchedUsers) {
  const companiesDictionary = {};
  fetchedCompanies.forEach(function (company) {
    const companyId = company.id;
    companiesDictionary[companyId] = Object.assign({}, company, { employees: [] });
  });

  fetchedUsers.forEach(function (user) {
    const companyUri = user.uris.company;
    const id = companyUri.split('/').pop();
    if (id[companyUri]) {
      id[companyUri].employees.push(user);
    }
  });
  return Object.values(companiesDictionary);
}
