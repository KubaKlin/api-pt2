function sortByEmployeeCountDescending(firstElement, secondElement) {
  if (firstElement.employees.length < secondElement.employees.length) {
    return -1;
  } else {
    return 1;
  }
}

export function sortCompanies(companiesDictionary) {
  return companiesDictionary.sort(sortByEmployeeCountDescending);
}
