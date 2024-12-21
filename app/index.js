import './styles/styles.scss';
import 'bootstrap';
import {processAndDisplayCompanies} from './utilities/processAndDisplayCompanies';

const accordionWrapper = document.querySelector('.accordion');

Promise.all([
  fetch('http://localhost:3000/users'),
  fetch('http://localhost:3000/companies'),
])
  .then(function ([usersResponse, companiesResponse]) {
    if (!usersResponse.ok) {
      return Promise.reject({ status: usersResponse.status });
    }
    if (!companiesResponse.ok) {
      return Promise.reject({ status: companiesResponse.status });
    }
    return Promise.all([usersResponse.json(), companiesResponse.json()]);
  })
  .then(function ([fetchedUsers, fetchedCompanies]) {
    processAndDisplayCompanies(fetchedUsers, fetchedCompanies, accordionWrapper);
  })
  .catch(function (error) {
    console.log('Status code', error?.status);
  });
