import{S as c,i as m}from"./assets/vendor-B07T6_gy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const u=s=>`<li class="gallery-card">
              <a class="gallery-link" href="${s.largeImageURL}">
              <img
                class="gallery-img"
                src="${s.webformatURL}"
                alt="${s.tags}"
              />
              </a>
              <div class="img-info">
                <ul class="img-info-list">
                   <li class="img-info-item">
                      <span class="img-info-title" >Likes</span>
                      <span class="img-info-number">${s.likes}</span>
                  </li>
                  <li class="img-info-item">
                      <span class="img-info-title" >Views</span>
                      <span class="img-info-number">${s.views}</span>
                  </li>
                  <li class="img-info-item">
                      <span class="img-info-title" >Comments</span>
                      <span class="img-info-number">${s.comments}</span>
                  </li>
                  <li class="img-info-item">
                      <span class="img-info-title" >Downloads</span>
                       <span class="img-info-number">${s.downloads}</span>
                  </li>
                </ul>
              </div>
          </li>`,f=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");let p=new c(".js-gallery a",{captionsData:"alt",captionDelay:250});const d=s=>{s.preventDefault();const r=s.currentTarget.elements.user_query.value;a.innerHTML="",l.classList.remove("is-hidden"),fetch(`https://pixabay.com/api/?key=44900327-ed76a6d24ccf74b976808d529&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).finally(()=>{l.classList.add("is-hidden")}).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(console.log(t),t.total===0){m.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="";return}const n=t.hits.map(e=>u(e)).join("");a.innerHTML=n,p.refresh()}).catch(t=>{console.log(t)})};f.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
