import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";const i=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),b=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");n.setAttribute("disabled","");const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){if(Date.now()>e[0].getTime())return h.warning({message:"Please choose a date in the future",position:"center",close:!1,closeOnClick:!0,progressBar:!1,messageSize:30,timeout:!1}),n.setAttribute("disabled","");n.removeAttribute("disabled")}};let c,a=!1;const M=f(i,T);n.addEventListener("click",g);function g(){if(i.setAttribute("disabled",""),n.setAttribute("disabled",""),a)return;a=!0;let e=M.selectedDates[0];console.log(e),c=setInterval(()=>{const t=e-Date.now();t<1e3&&q(),v(D(t))},1e3)}function q(){clearInterval(c)}function o(e){return e.toString().padStart(2,"0")}function v({days:e,hours:t,minutes:r,seconds:s}){b.innerHTML=o(e),y.innerHTML=o(t),p.innerHTML=o(r),S.innerHTML=o(s)}function D(e){const u=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
