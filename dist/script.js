!function(){"use strict";var t,e=function(t,e){return null==t?void 0:t.classList.add(e)},n=function(t,e){return null==t?void 0:t.classList.remove(e)},c=function(c,o){var i=document.querySelectorAll("#tcbTabbedContent-".concat(o," .tabMenu > li")),a=document.querySelectorAll("#tcbTabbedContent-".concat(o," .wp-block-tcb-tab"));window.clearTimeout(t),i.forEach((function(t){n(t,"active")})),a.forEach((function(t){n(t,"active"),n(t,"activeContent")})),e(c,"active");var r=a[function(t){var e,n;return null===(e=Array.from((null==t||null===(n=t.parentElement)||void 0===n?void 0:n.children)||[]))||void 0===e?void 0:e.indexOf(t)}(c)];e(r,"active"),t=setTimeout((function(){e(r,"activeContent")}),50)};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-tcb-tabs").forEach((function(t){var e=JSON.parse(t.dataset.attributes).cId,n=t.querySelectorAll(".tabMenu li");c(t.querySelector(".tabMenu li"),e),n.forEach((function(t){t.addEventListener("click",(function(){c(t,e)}))})),null==t||t.removeAttribute("data-attributes")}))}))}();
//# sourceMappingURL=script.js.map