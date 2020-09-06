import imageCard from '../templates/imageCard.hbs';
import refs from './refs';

const apiKey = '18194611-94368ab3e9d97b34e4adc8099';

export default function fetchImages(searchQuery, page) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
}