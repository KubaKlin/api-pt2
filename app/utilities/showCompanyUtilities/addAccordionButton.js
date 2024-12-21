export function addAccordionButton(companyHeader, company, index) {
  const accordionButton = document.createElement('button');
  accordionButton.classList.add('accordion-button');
  accordionButton.classList.add('collapsed');
  accordionButton.setAttribute('data-bs-toggle', 'collapse');
  accordionButton.setAttribute('data-bs-target', '#collapse' + index);
  accordionButton.innerText = `${company.name} (${company.employees.length} employees)`;
  companyHeader.appendChild(accordionButton);
}