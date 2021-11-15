// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const galleryItem = createCard(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryItem);

function createCard(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`
}).join('');
}

new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionsDelay: 250,
});

lightbox = new SimpleLightbox('.gallery a', ({ SourceAttr }));
console.log(galleryItems);
