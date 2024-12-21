export function addAccordion(accordionItem, index) {
  const accordion = document.createElement('div');
  accordion.classList.add('accordion-collapse');
  accordion.classList.add('collapse');
  accordion.setAttribute('id', 'collapse' + index);
  accordion.setAttribute('aria-labelleddby', 'heading' + index);
  accordionItem.appendChild(accordion);
  return accordion;
}