import './styles/styles.scss';
import 'bootstrap';

import { showUser } from './utilities/showUser';
import { sortCompanies } from './utilities/sortCompanies';

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
  .then(function (responseBodies) {
    const fetchedUsers = responseBodies[0];
    const fetchedCompanies = responseBodies[1];

    showUser(accordionWrapper, fetchedCompanies, fetchedUsers);
    sortCompanies(accordionWrapper);
  })
  .catch(function (error) {
    console.log('Status code', error?.status);
  });
