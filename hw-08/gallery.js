import galleryItems from './gallery-items.js';

const galleryElements = [];

const galleryUl = document.querySelector('.gallery');
const galleryImg = document.querySelector('.gallery');
const modalImg = document.querySelector('.lightbox__image');
const modalBox = document.querySelector('.js-lightbox');
const modalBtn = document.querySelector('.lightbox__button');
const modalSpace = document.querySelector('.lightbox__content');

const createLi = function(obj) {
  const list = document.createElement('li');
  list.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.setAttribute('src', `${obj.preview}`);
  image.setAttribute('data-source', `${obj.original}`);
  image.setAttribute('alt', `${obj.description}`);

  link.appendChild(image);

  list.appendChild(link);

  galleryElements.push(list);
};

galleryItems.forEach(item => createLi(item));

galleryUl.append(...galleryElements);

const openModal = function(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  modalBox.classList.add('is-open');
  modalImg.setAttribute('src', `${e.target.getAttribute('data-source')}`);
  modalImg.setAttribute('alt', `${e.target.getAttribute('alt')}`);
};

const closedModal = function(e) {
  if (e.target.nodeName === 'IMG') {
    return;
  }
  modalBox.classList.remove('is-open');
  modalImg.removeAttribute('src', ` `);
  modalImg.removeAttribute('alt', ` `);
};

const closedModalByEsc = function(e) {
  if (e.key !== 'Escape') {
    return;
  }
  closedModal(e);
};

const switchImg = function(e) {
  const modalChild = document.querySelector(`[data-source="${modalImg.src}"]`);
  if (
    e.key === 'ArrowRight' &&
    modalChild.parentNode.parentNode.nextSibling !== null
  ) {
    modalImg.setAttribute(
      'src',
      `${modalChild.parentNode.parentNode.nextSibling.childNodes[0].childNodes[0].dataset.source}`,
    );
  } else if (
    e.key === 'ArrowLeft' &&
    modalChild.parentNode.parentNode.previousSibling !== null
  ) {
    modalImg.setAttribute(
      'src',
      `${modalChild.parentNode.parentNode.previousSibling.childNodes[0].childNodes[0].dataset.source}`,
    );
  } else if (!modalBox.classList.contains('is-open')) {
    return;
  }
};

galleryImg.addEventListener('click', openModal);
modalBtn.addEventListener('click', closedModal);
modalSpace.addEventListener('click', closedModal);
window.addEventListener('keydown', closedModalByEsc);
window.addEventListener('keydown', switchImg);