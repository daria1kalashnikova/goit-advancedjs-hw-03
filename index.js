import{S as c,i as m}from"./assets/vendor-B07T6_gy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const u=r=>r.reduce((t,e)=>t+`<li class="gallery-card">
                <a class="gallery-link" href="${e.largeImageURL}">
                <img
                  class="gallery-img"
                  src="${e.webformatURL}"
                  alt="${e.tags}"
                />
                </a>
                <div class="img-info">
                  <ul class="img-info-list">
                     <li class="img-info-item">
                        <span class="img-info-title" >Likes</span>
                        <span class="img-info-number">${e.likes}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Views</span>
                        <span class="img-info-number">${e.views}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Comments</span>
                        <span class="img-info-number">${e.comments}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Downloads</span>
                         <span class="img-info-number">${e.downloads}</span>
                    </li>
                  </ul>
                </div>
            </li>`,""),f=r=>fetch(`https://pixabay.com/api/?key=44900327-ed76a6d24ccf74b976808d529&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}),g=document.querySelector(".js-search-form"),o=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");let d=new c(".js-gallery a",{captionsData:"alt",captionDelay:250});const p=r=>{r.preventDefault();const t=r.currentTarget.elements.user_query.value;o.innerHTML="",l.classList.remove("is-hidden"),f(t).finally(()=>{l.classList.add("is-hidden")}).then(e=>{if(console.log(e),e.total===0){m.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.innerHTML="";return}o.innerHTML=u(e.hits),d.refresh()}).catch(e=>{console.log(e)})};g.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
