const blackjack=(()=>{"use strict";let e=[];const t=["C","D","H","S"],a=["A","J","Q","K"];let r=[];const n=document.querySelector("#btnPedirCarta"),o=document.querySelector("#btnDetenerJuego"),s=(document.querySelector("#btnNuevoJuego"),document.querySelectorAll("span")),l=document.querySelectorAll(".divCartas"),d=()=>{e=[];for(let a=2;a<=10;a++)for(let r of t)e.push(a+r);for(let r of a)for(let a of t)e.push(r+a);return _.shuffle(e)},c=()=>{if(0===e.length)throw"Ya no hay cartas en el deck";return e.pop()},i=(e,t)=>(r[t]=r[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),s[t].innerText=r[t],r[t]),u=(e,t)=>{const a=document.createElement("img");a.src=`assets/cartas/${e}.png`,a.classList.add("carta"),l[t].append(a)},b=e=>{let t=0;do{const e=c();t=i(e,r.length-1),u(e,r.length-1)}while(t<e&&e<=21);(()=>{const[e,t]=r;setTimeout(()=>{e>t&&e<=21?alert("Has ganado!"):t>e&&t<=21?alert("Has perdido"):e===t?alert("Has empatado"):e<t&&t>21?alert("Has ganado!"):t<e&&e>21&&alert("Has perdido")},100)})()};return n.addEventListener("click",()=>{const e=c(),t=i(e,0);u(e,0),t>21?(n.disabled=!0,o.disabled=!0,b(t)):21===t&&(n.disabled=!0,o.disabled=!0,b(t))}),o.addEventListener("click",()=>{n.disabled=!0,o.disabled=!0,b(r[0])}),{nuevoJuego:(t=2)=>{e=d(),r=[];for(let e=0;e<t;e++)r.push(0);s.forEach(e=>e.innerText=0),l.forEach(e=>e.innerHTML=""),n.disabled=!1,o.disabled=!1}}})();