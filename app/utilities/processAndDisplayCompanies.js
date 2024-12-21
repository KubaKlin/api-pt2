import { showCompanies } from './showCompanies';
import { sortCompanies } from './sortCompanies';
import {filterCompanyEmployees} from './filterCompanyEmployees';

export function processAndDisplayCompanies(fetchedUsers, fetchedCompanies, accordionWrapper) {
  const filteredCompanies = filterCompanyEmployees(fetchedCompanies, fetchedUsers);
  const sortedCompanies = sortCompanies(filteredCompanies);
  showCompanies(accordionWrapper, sortedCompanies);
}