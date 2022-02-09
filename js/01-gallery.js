import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

function createGalleryMarkup(items) {
    const markup = items.map(item => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>
        `;
    }).join("");
    
    galleryContainer.insertAdjacentHTML("beforeend", markup)
};
createGalleryMarkup(galleryItems);

galleryContainer.addEventListener("click", event => {
    event.preventDefault();
    const currentElement = event.target;
    const currentValue = event.currentTarget;
    

    if (!currentElement) return;
     
    // заменяет ссылку на картинку при клике
    currentElement.src = currentElement.dataset.source

    console.log(currentElement);
   
});