export function sortCompanies(accordionWrapper) {
  window.addEventListener('load', function () {
    const elements = Array.from(accordionWrapper.children);
    const sorted = elements.sort(function (firstElement, secondElement) {
      return +firstElement.dataset.employees - +secondElement.dataset.employees;
    });
    accordionWrapper.innerHTML = '';
    sorted.forEach(function (element) {
      accordionWrapper.append(element);
    });
  });
}
