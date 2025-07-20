import{a as d,S as f,i as l}from"./assets/vendor-B6BQzjCG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function h(s){return d.get("https://pixabay.com/api/",{params:{key:"51390030-b864bce351d7615980478c23b",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(t=>t.data).catch(t=>{throw t})}const n={gallery:document.querySelector(".js-gallery"),form:document.querySelector(".js-form"),loader:document.querySelector(".loader")};function g(s){return s.map(({webformatURL:o,largeImageURL:i,tags:t,likes:e,views:r,comments:a,downloads:p})=>`
      <li>
        <a href="${i}">
          <img src="${o}" alt="${t}" loading="lazy" width="360" height="200"/>
        </a>
        <div>
          <p>likes: <span>${e}</span></p>
          <p>views: <span>${r}</span></p>
          <p>comments: <span>${a}</span></p>
          <p>downloads: <span>${p}</span></p>
        </div>
      </li>`).join("")}let c=null;function m(){c?c.refresh():c=new f(".js-gallery a")}function y(){n.gallery.innerHTML=""}function L(){n.loader.classList.remove("is-hidden")}function u(){n.loader.classList.add("is-hidden")}function b(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){l.error({message:"Sorry, there are no images matching your search query. Please try again",position:"topRight"});return}y(),L(),h(o).then(i=>{if(u(),!i.hits.length){l.error({message:"Sorry, there are no images matching your search query. Please try again",position:"topRight"});return}const t=g(i.hits);n.gallery.innerHTML=t,m()}).catch(i=>{u(),l.error({message:"Sorry, there are no images matching your search query. Please try again",position:"topRight"})})}n.form.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
