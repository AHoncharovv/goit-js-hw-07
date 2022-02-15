import { galleryItems } from './gallery-items.js';
// Change code below this line
const makeGalleryItemMarkup = (element) => {
    return `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
            />
            </a>
            </div>`;
};

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

const galleryElements = document.querySelector('.gallery');

galleryElements.insertAdjacentHTML('beforeend', makeGalleryMarkup);

galleryElements.addEventListener('click', onClickFunct);

function onClickFunct(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  modalShow(event.target.dataset.source);

  function modalShow(src) {
    const instance = basicLightbox.create(
        `<div class="modal">
        <img src="${src}"></img>
        </div>`)
    instance.show();
}
};








