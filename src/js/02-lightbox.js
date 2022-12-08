import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

function markUpGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
    }).join('')
}
galleryEl.insertAdjacentHTML("beforeend",  markUpGallery(galleryItems))
console.log(galleryEl)





galleryEl.addEventListener("click", /* _.throttle(onShowGallery, 250) */onShowGallery)

function onShowGallery(e) {
    e.preventDefault()
    const { preview, original, description } = galleryItems
    if (!e.target.classList.contains('gallery__image')) {
        return
    }
/* 
    var lightbox = new SimpleLightbox('.gallery a', { options }); */

const gallery = new SimpleLightbox('.gallery a', {captionsData,captionDelay});
gallery.on('show.simplelightbox', function () {
/*     console.log(e.target.alt)
    gallery.captionsData= `${e.target.alt}`;
    gallery.captionDelay = 250
    */

});
}


