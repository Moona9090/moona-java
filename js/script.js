var allitems = document.querySelectorAll(".special-but")
var cart = document.querySelector(".cart-content")
var total = document.querySelector("#but1")
var cash = document.querySelector("#total-content")
var totlabar = document.querySelector(".total-bar")
var count = document.querySelector(".count")
var totalprice = 0
var x = 0

allitems.forEach( function(item){
    item.onclick = function(){
        totalprice += +(item.getAttribute("price"))
        cart.innerHTML += item.textContent +"-"
        x += 1
        count.innerHTML = x

        if(cart.innerHTML !=""){
            total.style.display = "block"
            totlabar.style.transform = "scale(1,1)"
        }
    }
})



total.onclick = function (){
    cash.innerHTML=totalprice+"$"
}