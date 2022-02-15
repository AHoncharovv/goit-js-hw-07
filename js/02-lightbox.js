import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

function createGalleryMarkup(items) {
    const markup = items.map(item => {
        return `
        <li>
            <div class="gallery">
                <a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
                </a>
            </div>    
        </li>    
        `;
    }).join("");
    
    galleryContainer.insertAdjacentHTML("beforeend", markup)
};

createGalleryMarkup(galleryItems);


let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});





