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
    const currentElement = event.target;
    event.preventDefault();
    if (currentElement.nodeName !== "IMG") {
        return
    };
     
    // заменяет ссылку на картинку при клике
    currentElement.src = currentElement.dataset.source;

    
    const instance = basicLightbox.create(`
    <img src="${currentElement.src}" width=100% height=100%>
    `)
    galleryContainer.innerHTML = "";
    instance.show()
});

