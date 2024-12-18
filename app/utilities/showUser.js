import { filterCompanyEmployees } from './filterCompanyEmployees';

export function showUser(accordionWrapper, fetchedCompanies, fetchedUsers) {
  fetchedCompanies.forEach(function (company, index) {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item');

    const companyHeader = document.createElement('h2');
    companyHeader.classList.add('accotdion-header');
    companyHeader.setAttribute('id', 'heading' + index);

    const accordionButton = document.createElement('button');
    accordionButton.classList.add('accordion-button');
    accordionButton.classList.add('collapsed');
    accordionButton.setAttribute('data-bs-toggle', 'collapse');
    accordionButton.setAttribute('data-bs-target', '#collapse' + index);
    accordionButton.innerText = company.name;

    const accordion = document.createElement('div');
    accordion.classList.add('accordion-collapse');
    accordion.classList.add('collapse');
    accordion.setAttribute('id', 'collapse' + index);
    accordion.setAttribute('aria-labelleddby', 'heading' + index);

    const accordionBody = document.createElement('div');
    accordionBody.classList.add('accordion-body');


    accordionWrapper.appendChild(accordionItem);
    accordionItem.appendChild(companyHeader);
    accordionItem.appendChild(accordion);
    accordion.appendChild(accordionBody);
    companyHeader.appendChild(accordionButton);

    filterCompanyEmployees(company, fetchedUsers, accordionBody);
  });
}
