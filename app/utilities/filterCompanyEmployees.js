export function filterCompanyEmployees(fetchedCompanies, fetchedUsers) {
  const companiesDictionary = {};
  fetchedCompanies.forEach(function(company, index) {
    companiesDictionary[index] = Object.assign({}, company, { employees: [] });
  });

  const companiesByUri = {};
  Object.keys(companiesDictionary).forEach(function(index) {
    const company = companiesDictionary[index];
    companiesByUri[company.uri] = company;
  });

  fetchedUsers.forEach(function(user) {
    const companyUri = user.uris.company;
    if (companiesByUri[companyUri]) {
      companiesByUri[companyUri].employees.push(user);
    }
  });
  return Object.values(companiesDictionary);
}
