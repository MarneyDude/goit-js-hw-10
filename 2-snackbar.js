import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-AToOVhrc.js";const r=document.querySelector("form");r.addEventListener("submit",m);function m(o){o.preventDefault();const s=new FormData(r),l=s.get("state"),t=s.get("delay");if(isNaN(t)||t<=0){g();return}return new Promise((e,n)=>{setTimeout(()=>{l==="fulfilled"?e(c(t)):n(a(t))},t)}).then(e=>console.log(e)).catch(e=>{console.log(e)})}const c=o=>{i.show({title:"OK",iconUrl:"https://img.icons8.com/?size=100&id=12402&format=png&color=FFFFFF",titleColor:"white",message:`Fulfilled promise in ${o}ms`,color:"#5ac40c",messageColor:"white",messageSize:"16",timeout:4e3,position:"topRight"})},a=o=>{i.show({title:"REJECTED",iconUrl:"https://img.icons8.com/?size=100&id=6734ErbSl05C&format=png&color=FFFFFF",iconColor:"white",titleColor:"white",message:`promise in ${o}ms`,color:"#d1530f",messageColor:"white",messageSize:"16",timeout:4e3,position:"topRight"})},g=()=>{i.show({title:"ERROR",iconUrl:"https://img.icons8.com/?size=100&id=24552&format=png&color=FFFFFF",titleColor:"white",iconColor:"white",message:"Illegal operation",color:"#f80404",messageColor:"white",messageSize:"16",timeout:4e3,position:"topRight"})};
//# sourceMappingURL=2-snackbar.js.map
