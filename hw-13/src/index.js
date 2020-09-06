import './styles.scss';
import fetchImages from './js/apiService';
import refs from './js/refs';
import imageCard from './templates/imageCard.hbs';

refs.input.addEventListener('submit', formHandler);
refs.load.addEventListener('click', loadMore);

let searchQuery = '';
let page = 1;

function formHandler(event) {
  event.preventDefault();

  clearPage();

  const form = event.currentTarget;
  searchQuery = form.elements.query.value;

  fetchImages(searchQuery, page).then(({ hits }) => {
    if (hits.length !== 0) {
      imageCreation(hits);
      refs.load.classList.remove('disabled');
    } else {
      refs.load.classList.add('disabled');
      console.log('None');
    }
  });
}

function imageCreation(elem) {
  const markup = imageCard(elem);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearPage() {
  refs.gallery.innerHTML = '';
  page = 1;
}

function loadMore() {
  page += 1;
  fetchImages(searchQuery, page).then(({ hits }) => imageCreation(hits));
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}