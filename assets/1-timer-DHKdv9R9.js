import{f as d,i as c}from"./vendor-BdaTPftY.js";let s=null,r=null;const m={get button(){return document.querySelector(".button")},get input(){return document.querySelector("#datetime-picker")},get daysElement(){return document.querySelector("[data-days]")},get hoursElement(){return document.querySelector("[data-hours]")},get minutesElement(){return document.querySelector("[data-minutes]")},get secondsElement(){return document.querySelector("[data-seconds]")}},{button:n,input:i,daysElement:h,hoursElement:g,minutesElement:f,secondsElement:S}=m;n.addEventListener("click",p);n.setAttribute("disabled",!0);function p(){if(!s)return;n.setAttribute("disabled",!0),i.setAttribute("disabled",!0),r&&clearInterval(r);const e=()=>{const t=s-new Date;if(t<=0){clearInterval(r),u({days:0,hours:0,minutes:0,seconds:0}),w(),i.removeAttribute("disabled");return}u(b(t))};e(),r=setInterval(e,1e3)}function u({days:e,hours:o,minutes:t,seconds:a}){h.textContent=String(e).padStart(2,"0"),g.textContent=String(o).padStart(2,"0"),f.textContent=String(t).padStart(2,"0"),S.textContent=String(a).padStart(2,"0")}function l(e){e<=new Date?(y(),n.setAttribute("disabled",!0)):(n.removeAttribute("disabled"),s=e)}d(i,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){l(e[0])},onChange(e){l(e[0])}});function b(e){return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%864e5%36e5/6e4),seconds:Math.floor(e%864e5%36e5%6e4/1e3)}}const y=()=>{c.show({title:"WARNING",titleColor:"white",iconUrl:"https://img.icons8.com/?size=100&id=6734ErbSl05C&format=png&color=FFFFFF",iconColor:"white",message:"Please choose a date in the future",color:"#fca503",messageColor:"white",messageSize:"18",timeout:4e3,position:"topRight"})},w=()=>{c.show({title:"TIME IS UP",titleColor:"white",message:" Please choose a date",color:"#00c234",messageColor:"white",messageSize:"18",timeout:1e6,position:"topRight"})};
//# sourceMappingURL=1-timer-DHKdv9R9.js.map
