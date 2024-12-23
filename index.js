(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const a=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),c=t=>`<li class="gallery-card">
              <img
                class="gallery-img"
                src="${t.webformatURL}"
                alt="${t.tags}"
              />
              <div class="img-info">
                <ul class="img-info-list">
             <li class="img-info-item">
        <span class="img-info-title" >Likes</span>
        <span class="img-info-number">${t.likes}</span>
                  </li>
                  <li class="img-info-item">
        <span class="img-info-title" >Views</span>
        <span class="img-info-number">${t.views}</span>
                  </li>
                  <li class="img-info-item">
        <span class="img-info-title" >Comments</span>
        <span class="img-info-number">${t.comments}</span>
                  </li>
                  <li class="img-info-item">
        <span class="img-info-title" >Downloads</span>
        <span class="img-info-number">${t.downloads}</span>
                  </li>
                  </ul>
                  </div>
                  </li>`,m=t=>{t.preventDefault();const n=t.currentTarget.elements.user_query.value;console.log(n),fetch(`https://pixabay.com/api/?key=44900327-ed76a6d24ccf74b976808d529&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()}).then(i=>{console.log(i);const o=i.hits.map(e=>c(e)).join("");l.innerHTML=o}).catch(i=>{console.log(i)})};a.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
