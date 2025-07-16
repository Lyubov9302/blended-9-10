(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c={headerForm:document.querySelector(".header-form"),tasksList:document.querySelector(".tasks-list")};function u(s){const r=s.map(({taskName:i,taskDescription:o})=>`  
<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>taskName</h3>
      <p>taskDescription</p>
  </li>
  `).join("");c.tasksList.innerHTML=r}const a=[];function l(s){s.preventDefault();const{taskName:r,taskDescription:i}=s.target.elements,o=r.value.trim(),e=i.value.trim();if(o===""||e===""){alert("Всі поял мають бути заповнені");return}const t={taskName:o,taskDescription:e};a.push(t),u(a),s.target.reset()}c.headerForm.addEventListener("submit",l);
//# sourceMappingURL=index.js.map
