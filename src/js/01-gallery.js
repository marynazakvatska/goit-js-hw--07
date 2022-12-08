import { galleryItems } from './gallery-items.js';

console.log(galleryItems)


const galleryEl = document.querySelector('.gallery')
console.log(galleryEl);
galleryEl.insertAdjacentHTML('beforeend', markUpGallery(galleryItems))


function markUpGallery(galleryItems) {
  
    return galleryItems.map(({ preview, original, description}) => {
      return  `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
}).join("")
}

galleryEl.addEventListener('click', onPictureclick)

function onPictureclick(e) {
    e.preventDefault()
    if (!e.target.classList.contains('gallery__image')) {
        return
    }
    console.log(e.target.dataset.source)

    const instance = basicLightbox.create(`

    <img src="${e.target.dataset.source}" width="800" height="600">
`)

instance.show()

}

