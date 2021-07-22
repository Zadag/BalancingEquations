(()=>{"use strict";const e=(e,t,n)=>{switch(e=Number(e),n=Number(n),t){case"+":return function(e,t){return e+t}(e,n);case"-":return function(e,t){return e-t}(e,n);case"*":return function(e,t){return e*t}(e,n);case"/":return 0==n?null:function(e,t){return e/t}(e,n);default:return}},t=[{left:[1,"+","?"],right:[1,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:["?","-","5"],right:[2,"*","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]}],n=(()=>{const e=document.querySelector(".equation-wrapper"),t=document.querySelector("#tiles"),n=document.querySelector("#undo"),r=document.querySelector("#submit"),i=document.querySelector("#score"),o=document.querySelector("#time"),u=t=>{const n=t=>{const n=document.createElement("div");n.classList.add("equation-value"),"string"==typeof t&&(t.search(/[\+\-*\/]/)||n.classList.add("operator"),"="==t&&n.classList.add("equals")),n.textContent=t,e.appendChild(n)};for(let e=0;e<t.length;e++)n(t[e])};return{renderTiles:(e,n,r)=>{const i=(e,n,r,i)=>{const o=document.createElement("div");o.classList.add("tile"),o.textContent=e,o.dataset.index=n,t.appendChild(o),o.addEventListener(r,(e=>{i(e)}))};for(let t=0;t<e.length;t++)i(e[t],t,n,r)},renderEquation:u,updateEquation:t=>{e.innerHTML="",u(t)},activateSubmitBtn:e=>{r.addEventListener("click",e)},activateUndoBtn:e=>{n.addEventListener("click",e)},resetGameUI:()=>{e.innerHTML="",t.innerHTML=""},setScore:e=>{i.innerHTML=e},setTime:e=>{const t=Math.floor(e/6e4),n=String(e%6e4).padStart(2,"0");o.innerHTML=`${t}:${n}`}}})();!function r(i,o,u){const c=((t,n)=>{const{left:r,right:i,tiles:o}=t,u=[...r,"=",...i],c=u.reduce(((e,t,n)=>("?"===t&&e.push(n),e)),[]);let a=0;return setInterval((()=>{n-=1e3}),1e3),{tiles:o,equation:u,getTime:()=>n,updateEquation:e=>{if(a>=c.length)return;const t=(e=>{const t=e.target.dataset.index;return o[t]})(e);u[c[a]]=t,a++},undo:()=>{a<=0||(u[c[a-1]]="?",a--)},checkEquation:()=>{const t=u.slice(0,3),n=u.slice(4,7);return e(...t)===e(...n)}}})(i[o],u);n.resetGameUI(),n.setScore(100*o),n.renderEquation(c.equation),n.renderTiles(c.tiles,"click",(e=>{c.updateEquation(e),n.updateEquation(c.equation)})),n.activateUndoBtn((()=>{c.undo(),n.updateEquation(c.equation)})),n.activateSubmitBtn((e=>{c.checkEquation(e)&&o<=t.length?(console.log("WINNER!",c.getTime()),o++,r(i,o,c.getTime())):console.log("Womp womp :(")}))}(t,0,6e4)})();