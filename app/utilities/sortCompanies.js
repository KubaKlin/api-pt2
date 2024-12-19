export function sortCompanies(accordionWrapper) {
  window.addEventListener('load', function () {
    let elements = Array.from(accordionWrapper.children);
    let sorted = elements.sort(function (a, b) {
      return +a.dataset.employees - +b.dataset.employees;
    });
    accordionWrapper.innerHTML = '';
    sorted.forEach(function (element) {
      accordionWrapper.append(element);
    });
  });
}
