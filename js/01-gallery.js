// js/01-gallery.js
import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));
galleryEl.addEventListener('click', onGalleryClick);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      loading="lazy"
    />
  </a>
</li>`;
    })
    .join('');
}

function onGalleryClick(event) {
  event.preventDefault();

  // реагуємо лише на кліки по зображенню галереї
  const img = event.target;
  if (!img.matches('.gallery__image')) return;

  const url = img.dataset.source;
  if (!url) return;

  const instance = basicLightbox.create(
    `<img src="${url}" alt="${img.alt}">`,
    {
      onShow: (instance) => {
        // Закриття по Escape
        const onEsc = (e) => {
          if (e.key === 'Escape') instance.close();
        };
        document.addEventListener('keydown', onEsc);
        // збережемо посилання на хендлер, щоб зняти його в onClose
        instance._onEsc = onEsc;
      },
      onClose: (instance) => {
        document.removeEventListener('keydown', instance._onEsc);
      },
    }
  );

  instance.show();
}
