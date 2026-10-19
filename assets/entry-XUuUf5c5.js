const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mobile-notice-BQ3vvqhg.css","assets/main-CgrJeX2g.js","assets/i18n-CpPmGDmG.js","assets/main-C81xToNC.css"])))=>i.map(i=>d[i]);
import{_ as n,l as c,h as u,g as s,s as d}from"./i18n-CpPmGDmG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const m=navigator.userAgentData?.mobile===!0||/Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;if(m){let o=function(){document.querySelector("#app").innerHTML=u`
    <main class="mobile-notice">${c()}
      <a class="mobile-brand" href="./" aria-label="art of contexton">art of<br>contexton<span>·</span></a>
      <img class="mobile-art" src="${"/"}images/museum-entrance-v1.jpg" alt="" width="1536" height="1024"><div class="mobile-message">
        <p class="mobile-eyebrow">예술이 머무는 공간</p>
        <h1>모바일 서비스는<br>준비 중입니다.</h1>
        <p>지금은 PC에서<br>art of contexton을 만나보세요.</p>
      </div>
      <footer>© 2026 worflogy</footer>
    </main>`,document.querySelectorAll("[data-language]").forEach(r=>r.onclick=()=>{r.dataset.language!==s()&&(d(r.dataset.language),o(),document.querySelector('[data-language="'+s()+'"]')?.focus())})};await n(()=>Promise.resolve({}),__vite__mapDeps([0])),o(),document.querySelector("#modal").remove(),document.querySelector("#toast").remove()}else await n(()=>import("./main-CgrJeX2g.js"),__vite__mapDeps([1,2,3]));
