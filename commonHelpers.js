import{i as c,S as m}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFpSURBVHgBrZQ9UsMwEIXXQoZhcgCobU6RNKlygPTOKUhPDz00UOBbpE9OgX0FD8xQkBAbrYkyirQrK3Fe5bHX79Nqf6JqPG6AUJzN4DLLIETr/B02eU5+kz7z39UK6uIDfBLpnYqdtc8URLLmiwX8PD1CkO7nLET2NlfSsRRE9jXvgshzmPsg0mcu0lQVufCa2jE2ROhuccyTFK6fX1R2fKvi4TBGJImTCXoiROALqhXrsmhTxCAKojPfqBmoy9L9f+dJzoEWDpCZri6cab5mBkzLC6AgAFGweRCAgoSaowQEqmGeuxSUgXnn/1fE756jAVxBQyHyFHOuu1gADpUtfOfrFhOyXS6dWcA1joq+X9+a+IyrAnWl1recTNrDXcy/Ph8iVbh4OgVxcwtbNeJaTVVBl+wY0xwzl2a6eiWculFtc9S+yH0hlPkBoA+EM3cADmQwaLeqT9gtcjhku42cgwPIaARd8u2mP6EkDQvp61kkAAAAAElFTkSuQmCC",i=document.querySelector("form"),p=document.querySelector(".gallery");i.addEventListener("submit",f);function f(t){t.preventDefault();const n=i.elements.search.value;if(n===""){c.error({messageColor:"#FFF",color:"#EF4040",iconUrl:l,position:"topRight",message:"Please,enter what do you want to find!"});return}i.insertAdjacentHTML("afterend",'<span class="loader"></span>'),p.innerHTML="",g(n),i.reset()}function g(t){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"42112521-3ff4dfc201bab0977369cd2bc",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(s).then(r=>r.json()).then(r=>{const e=r.hits;e.length===0&&h();const o=document.querySelector(".loader");d(e),y(),o.remove()}).catch(r=>{c.error({messageColor:"#FFF",color:"#EF4040",iconUrl:l,position:"topRight",message:`${r}`})})}function h(){c.error({messageColor:"#FFF",color:"#EF4040",iconUrl:l,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function d(t){const n=t.map(({largeImageURL:s,webformatURL:r,tags:e,likes:o,views:a,comments:u,downloads:A})=>`<li class='gallery-item'>
  <a class='gallery-link' href='${s}'>
    <img class='gallery-image' src='${r}' alt='${e}'/>
  </a>
<div class='container-app'>
<p><span>Likes</span> ${o}</p>
<p><span>Views</span> ${a}</p>
<p><span>Comments</span> ${u}</p>
<p><span>Downloads</span> ${A}</p>
</div>
 </li>`).join("");p.innerHTML=n}function y(){let t=new m(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionDelay:250});t.on("show.simpleLightbox"),t.refresh()}
//# sourceMappingURL=commonHelpers.js.map
