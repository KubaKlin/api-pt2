export function showCompanies(accordionWrapper, fetchedCompanies) {
  fetchedCompanies.forEach(function (company, index) {
    const accordionBody = document.createElement('div');
    accordionBody.classList.add('accordion-body');
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item');

    const companyHeader = document.createElement('h2');
    companyHeader.classList.add('accordion-header');
    companyHeader.setAttribute('id', 'heading' + index);

    const accordionButton = document.createElement('button');
    accordionButton.classList.add('accordion-button');
    accordionButton.classList.add('collapsed');
    accordionButton.setAttribute('data-bs-toggle', 'collapse');
    accordionButton.setAttribute('data-bs-target', '#collapse' + index);
    accordionButton.innerText = `${company.name} (${company.employees.length} employees)`;

    const accordion = document.createElement('div');
    accordion.classList.add('accordion-collapse');
    accordion.classList.add('collapse');
    accordion.setAttribute('id', 'collapse' + index);
    accordion.setAttribute('aria-labelleddby', 'heading' + index);

    company.employees.forEach(function (employee) {
      const employeeItem = document.createElement('div');
      employeeItem.innerText = `${employee.name} - ${employee.email}`;
      accordionBody.appendChild(employeeItem);
    });

    accordionWrapper.appendChild(accordionItem);
    accordionItem.appendChild(companyHeader);
    accordionItem.appendChild(accordion);
    accordion.appendChild(accordionBody);
    companyHeader.appendChild(accordionButton);
  });
}
