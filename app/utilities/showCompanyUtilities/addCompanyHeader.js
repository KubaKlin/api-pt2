export function addCompanyHeader(accordionItem, index) {
  const companyHeader = document.createElement('h2');
  companyHeader.classList.add('accordion-header');
  companyHeader.setAttribute('id', 'heading' + index);
  accordionItem.appendChild(companyHeader);
  return companyHeader;
}