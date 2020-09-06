import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import refs from './refs.js';
import listTmpl from '../templates/countryLi.hbs';
import cardTmpl from '../templates/countryCard.hbs';

const { alert, notice, info, success, error } = require('@pnotify/core');
defaults.delay = '500';

function fetchCountries(searchQuery) {
  fetch(`
    https://restcountries.eu/rest/v2/name/${refs.input.value}`)
    .then(responce => responce.json())
    .then(data => {
      console.log(data);
      refs.countryLi.innerHTML = '';
      refs.countryContainer.innerHTML = null;

      if (data.length > 10) {
        error({
          text: 'Too many matches found. Please enter specific query!',
        });
        data.length = 10;
        return refs.countryLi.insertAdjacentHTML('beforeend', listTmpl(data));
      } else if (data.length === undefined) {
        return error({
          text: 'No matches, try again!',
        });
      } else if (data.length === 1) {
        return refs.countryContainer.insertAdjacentHTML(
          'beforeend',
          cardTmpl(data),
        );
      } else {
        return refs.countryLi.insertAdjacentHTML('beforeend', listTmpl(data));
      }
    })
    .catch(err => console.log(err));
}
export default fetchCountries;