import './styles.css';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries';

var _ = require('lodash');

refs.input.addEventListener('input', _.debounce(fetchCountries, 500));