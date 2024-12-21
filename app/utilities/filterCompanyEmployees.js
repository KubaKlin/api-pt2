export function filterCompanyEmployees(fetchedCompanies, fetchedUsers) {
  function filterUsersByCompany(users, companyUri) {
    return users.filter(function (user) {
      return user.uris.company === companyUri;
    });
  }

  const combinedArrays = fetchedCompanies.map(function (company) {
    return {
      ...company,
      employees: filterUsersByCompany(fetchedUsers, company.uri),
    };
  });

  return combinedArrays;
}
