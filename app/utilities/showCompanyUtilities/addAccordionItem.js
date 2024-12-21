export function addAccordionItem(accordionWrapper) {
  const accordionItem = document.createElement('div');
  accordionItem.classList.add('accordion-item');
  accordionWrapper.appendChild(accordionItem);
  return accordionItem;
}
