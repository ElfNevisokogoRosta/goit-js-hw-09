const t={bodyEl:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};t.btnStop.disabled=!0,console.log(t.bodyEl),t.btnStart.addEventListener("click",(function(e){timerId=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.btnStart.disabled=!0,t.btnStart.style.border="none",t.btnStop.style.border="none",t.btnStop.disabled=!1}),1e3)})),t.btnStop.addEventListener("click",(function(e){clearInterval(timerId),t.btnStop.disabled=!0,t.btnStart.disabled=!1}));
//# sourceMappingURL=01-color-switcher.956f79dd.js.map
