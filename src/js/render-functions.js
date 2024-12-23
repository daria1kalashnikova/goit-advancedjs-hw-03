export const createGalleryCardTemplate = galleryEl => {
  return `<li class="gallery-card">
              <a class="gallery-link" href="${galleryEl.largeImageURL}">
              <img
                class="gallery-img"
                src="${galleryEl.webformatURL}"
                alt="${galleryEl.tags}"
              />
              </a>
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
