(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader"),m=i=>`<li class="gallery-card">
              <img
                class="gallery-img"
                src="${i.webformatURL}"
                alt="${i.tags}"
              />
              <div class="img-info">
                <ul class="img-info-list">
             <li class="img-info-item">
        <span class="img-info-title" >Likes</span>
        <span class="img-info-number">${i.likes}</span>
                  </li>
                  <li class="img-info-item">
        <span class="img-info-title" >Views</span>
        <span class="img-info-number">${i.views}</span>
                  </li>
                  <li class="img-info-item">
        <span class="img-info-title" >Comments</span>
        <span class="img-info-number">${i.comments}</span>
                  </li>
                  <li class="img-info-item">
        <span class="img-info-title" >Downloads</span>
        <span class="img-info-number">${i.downloads}</span>
                  </li>
                  </ul>
                  </div>
                  </li>`,u=i=>{i.preventDefault();const r=i.currentTarget.elements.user_query.value;a.innerHTML="",l.classList.remove("is-hidden"),fetch(`https://pixabay.com/api/?key=44900327-ed76a6d24ccf74b976808d529&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).finally(()=>{l.classList.add("is-hidden")}).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(console.log(s),s.total===0){alert("Sorry, there are no images matching your search query. Please try again!"),a.innerHTML="";return}const n=s.hits.map(e=>m(e)).join("");a.innerHTML=n}).catch(s=>{console.log(s)})};c.addEventListener("submit",u);
//# sourceMappingURL=index.js.map
