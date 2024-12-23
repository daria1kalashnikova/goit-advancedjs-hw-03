import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { createGalleryCardTemplate } from './js/render-functions';

const formEl = document.querySelector('.js-search-form');
const galleryElement = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
let bigImage = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const onFormSubmit = event => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.user_query.value;
  galleryElement.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetch(
    `https://pixabay.com/api/?key=44900327-ed76a6d24ccf74b976808d529&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (data.total === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        galleryElement.innerHTML = '';

        return;
      }

      const galleryCardsTemplate = data.hits
        .map(el => {
          return createGalleryCardTemplate(el);
        })
        .join('');

      galleryElement.innerHTML = galleryCardsTemplate;
      bigImage.refresh();
    })
    .catch(err => {
      console.log(err);
    });
};

formEl.addEventListener('submit', onFormSubmit);
