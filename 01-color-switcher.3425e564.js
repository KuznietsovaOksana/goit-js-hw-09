const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){d=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.setAttribute("disabled",!0),r.removeAttribute("disabled")})),r.addEventListener("click",(function(){clearInterval(d),r.setAttribute("disabled",!0),e.removeAttribute("disabled")})),r.setAttribute("disabled",!0);let d=null;
//# sourceMappingURL=01-color-switcher.3425e564.js.map
