function sortByEmployeeCountDescending(firstElement, secondElement) {
  return firstElement.employees.length > secondElement.employees.length
    ? -1
    : 1;
}

export function sortCompanies(combinedArray) {
  return combinedArray.sort(sortByEmployeeCountDescending);
}
