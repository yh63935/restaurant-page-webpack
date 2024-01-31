(()=>{"use strict";var e={378:(e,t,n)=>{function i(e){o("h1",e,document.querySelector("main"))}function o(e,t,n,i){const o=document.createElement(e);return o.innerText=t,o.classList.add(i),n.append(o),o}function s(){document.querySelector("body");const e=document.createElement("nav"),t=document.createElement("ul");return o("li","Home",t,"home"),o("li","Menu",t,"menu"),o("li","Contact",t,"contact"),e.append(t),e}n(846),n.p;const a=function(){const e=document.querySelector("main");o("h1","Ghibli Delights Cafe",e),o("h2","Where your tastebuds are transported into the heartwarming scenes of Ghibli films",e),o("p",'Come experience the enchanting flavors of Studio Ghibli at Ghibli Delights Café. From the mouth-watering "Ponyo Ramen" to the sweet "Kiki\'s Delivery Service Pancakes," each dish is crafted with precision and love, capturing the essence of the studio\'s enchanting storytelling.',e)},r={Phone:"408-991-3934",Email:"ghiblidelights@gmail.com",Address:"1730 Fox Drive, San Jose, California, 95131"},c=n.p+"assets/breakfast.jpeg",d=n.p+"assets/pancakes.jpg",u=n.p+"assets/ramen.jpg",h=n.p+"assets/onigiri.jpg",l=[{dish:"Ponyo's Ramen",img:{src:u,alt:"Steaming bowl of ramen with ham and green onions"},price:"$17.50",description:"Love being human right now? Enjoy this shoyu ramen with green onions, ham, and topped with a perfectly soft boiled egg."},{dish:"Kiki's Pancakes",img:{src:d,alt:"Fluffy pancakes topped with butter with cherry tomatoes and sausages"},price:"$12.50",description:"Down-on-your-luck? Indulge in these fluffy souffle pancakes paired with tomatoes and sausages and we promise you'll feel better soon!"},{dish:"Sophie's Breakfast Spread",img:{src:c,alt:"Boy gulping down eggs and bacon"},price:"$14.50",description:"Pan fried eggs and bacon with a side of toast, fresh fruit, and sausages. Calcifer was not harmed in the making."},{dish:"Satsuki's Bento",img:{src:n.p+"assets/bento.jpg",alt:"Bento with salted plums and fish"},price:"$15.50",description:"Handmade with care, taste the love with this sushi rice bento. Includes pickled Japanese plum, shishamo, edamame and topped with sakura denbu."},{dish:"Haku's Onigiri",img:{src:h,alt:"Girl Chihiro stuffing her face with onigiri"},price:"$4.50",description:"Restore your strength with this onigiri and remember that you can overcome difficulties. Choices of salmon, tuna, and onigiri."}];!function(){const e=document.createElement("header"),t=s();e.append(t);const n=document.createElement("main"),i=document.querySelector("body");i.append(e),i.append(n),a()}(),document.querySelector("header").addEventListener("click",(e=>{const t=e.target.closest("nav li");t&&(document.querySelector("main").innerHTML="",s(),t.classList.contains("home")?a():t.classList.contains("menu")?function(){i("Menu");const e=o("div","",document.querySelector("main"),"menu-container");l.forEach((t=>{e.append(function(e,t,n,i){const s=document.createElement("div");return s.classList.add("menu-item"),function(e,{src:t,alt:n}){e.src=t,e.alt=n}(o("img","",s),t),o("h2",e,s),o("p",n,s),o("p",i,s),s}(t.dish,t.img,t.price,t.description))}))}():function(){i("Contact Us");const e=o("div","",document.querySelector("main"),"contact-container");Object.entries(r).forEach((([t,n])=>{e.append(function(e,t){const n=document.createElement("div");return n.classList.add("contact-option"),o("h2",e,n),o("p",t,n),n}(t,n))}))}())}))},846:(e,t,n)=>{e.exports=n.p+"style.css"}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n(378),n(846)})();