import { filterCompanyEmployees } from './filterCompanyEmployees';
import {createStructure} from './createStructure';

export function showUser(accordionWrapper, fetchedCompanies, fetchedUsers) {
  fetchedCompanies.forEach(function (company, index) {
    const accordionBody = document.createElement('div');
    accordionBody.classList.add('accordion-body');
    createStructure(company, index, accordionBody, accordionWrapper);
    filterCompanyEmployees(company, fetchedUsers, accordionBody);
  });
}
