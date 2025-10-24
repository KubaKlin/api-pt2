import { showCompanyEmployees } from './showCompanyUtilities/showCompanyEmployees';
import { addAccordionItem } from './showCompanyUtilities/addAccordionItem';
import { addCompanyHeader } from './showCompanyUtilities/addCompanyHeader';
import { addAccordionButton } from './showCompanyUtilities/addAccordionButton';
import { addAccordion } from './showCompanyUtilities/addAccordion';
import { addAccordionBody } from './showCompanyUtilities/addAccordionBody';

export function showCompanies(accordionWrapper, fetchedCompanies) {
  fetchedCompanies.forEach(function (company, index) {
    const accordionItem = addAccordionItem(accordionWrapper);
    const companyHeader = addCompanyHeader(accordionItem, index);
    addAccordionButton(companyHeader, company, index);
    const accordion = addAccordion(accordionItem, index);
    const accordionBody = addAccordionBody(accordion);
    showCompanyEmployees(company, accordionBody);
  });
}
