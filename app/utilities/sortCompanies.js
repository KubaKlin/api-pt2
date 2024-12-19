export function sortCompanies(accordionWrapper) {
  window.addEventListener('load', function () {
    let elements = Array.from(accordionWrapper.children);
    let sorted = elements.sort(function (firstElement, secondElement) {
      return +firstElement.dataset.employees - +secondElement.dataset.employees;
    });
    accordionWrapper.innerHTML = '';
    sorted.forEach(function (element) {
      accordionWrapper.append(element);
    });
  });
}
