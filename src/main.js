const formEl = document.querySelector('.js-search-form');
const galleryElement = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

const createGalleryCardTemplate = galleryEl => {
  return `<li class="gallery-card">
              <img
                class="gallery-img"
                src="${galleryEl.webformatURL}"
                alt="${galleryEl.tags}"
              />
              <div class="img-info">
                <ul class="img-info-list">
             <li class="img-info-item">
        <span class="img-info-title" >Likes</span>
        <span class="img-info-number">${galleryEl.likes}</span>
                  </li>
                  <li class="img-info-item">
        <span class="img-info-title" >Views</span>
        <span class="img-info-number">${galleryEl.views}</span>
                  </li>
                  <li class="img-info-item">
        <span class="img-info-title" >Comments</span>
        <span class="img-info-number">${galleryEl.comments}</span>
                  </li>
                  <li class="img-info-item">
        <span class="img-info-title" >Downloads</span>
        <span class="img-info-number">${galleryEl.downloads}</span>
                  </li>
                  </ul>
                  </div>
                  </li>`;
};

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
        alert(
          'Sorry, there are no images matching your search query. Please try again!'
        );

        galleryElement.innerHTML = '';

        return;
      }

      const galleryCardsTemplate = data.hits
        .map(el => {
          return createGalleryCardTemplate(el);
        })
        .join('');

      galleryElement.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

formEl.addEventListener('submit', onFormSubmit);
