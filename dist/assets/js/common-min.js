function addClass(A){document.documentElement.classList.add(A)}var avif=new Image;function check_webp_feature(A){var e=new Image;e.onload=function(){var t=0<e.width&&0<e.height;A(t)},e.onerror=function(){A(!1)},e.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="}avif.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=",avif.onload=function(){addClass("avif")},avif.onerror=function(){check_webp_feature(function(A){return addClass(A?"webp":"fallback")})},function(A){"function"==typeof define&&define.amd?define(A):A()}(function(){var A,e=["scroll","wheel","touchstart","touchmove","touchenter","touchend","touchleave","mouseout","mouseleave","mouseup","mousedown","mousemove","mouseenter","mousewheel","mouseover"];if(function(){var A=!1;try{var e=Object.defineProperty({},"passive",{get:function(){A=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(A){}return A}()){var t=EventTarget.prototype.addEventListener;A=t,EventTarget.prototype.addEventListener=function(t,n,o){var a,i="object"==typeof o&&null!==o,r=i?o.capture:o;(o=i?function(A){var e=Object.getOwnPropertyDescriptor(A,"passive");return e&&!0!==e.writable&&void 0===e.set?Object.assign({},A):A}(o):{}).passive=void 0!==(a=o.passive)?a:-1!==e.indexOf(t)&&!0,o.capture=void 0!==r&&r,A.call(this,t,n,o)},EventTarget.prototype.addEventListener._original=A}}),$(document).ready(function(){$(".m-carousel").not(".slick-initialized").slick({dots:!0,speed:300,arrows:!1}),$(".m-carousel").on("init",function(){$(this).removeClass("slick-not-init")}),setTimeout(function(){$(".m-carousel").slick({})},2500)});