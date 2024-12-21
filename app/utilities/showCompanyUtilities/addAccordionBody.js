export function addAccordionBody(accordion) {
  const accordionBody = document.createElement('div');
  accordionBody.classList.add('accordion-body');
  accordion.appendChild(accordionBody);
  return accordionBody;
}