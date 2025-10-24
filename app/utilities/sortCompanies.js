function sortByEmployeeCountDescending(firstElement, secondElement) {
  return firstElement.employees.length - secondElement.employees.length;
}

export function sortCompanies(companiesDictionary) {
  return companiesDictionary.sort(sortByEmployeeCountDescending);
}
