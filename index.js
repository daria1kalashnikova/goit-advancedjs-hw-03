(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const a=document.querySelector(".js-search-form"),c=t=>`<li class="gallery-card">
              <img
                class="gallery-img"
                src="${t.webformatURL}"
                alt="${t.tags}"
                width="360"
                height="200"
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
                  </li>`,l=t=>{t.preventDefault();const o=t.currentTarget.elements.user_query.value;console.log(o),fetch(`https://pixabay.com/api/?key=44900327-ed76a6d24ccf74b976808d529&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()}).then(i=>{console.log(i);const n=i.hits.map(e=>{c(e)});console.log(n)}).catch(i=>{console.log(i)})};a.addEventListener("submit",l);
//# sourceMappingURL=index.js.map
