/*!
 * quartertwo - v0.0.1
 * 2016-02-24
**/
var mark=document.getElementById("mark"),shop=document.getElementById("shop-now");new Vivus("six-logo",{type:"scenario",duration:300,pathTimingFunction:Vivus.EASE_OUT},function(a){a.el.classList.add("finished"),setTimeout(function(){mark.className+=" finished"},1e3),setTimeout(function(){shop.className+=" finished"},2e3)});