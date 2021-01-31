let lamp = document.querySelector(".light");
let cards = document.querySelector(".cards")
// let content = document.querySelector("#content")
// let content = document.querySelector("#content")
// let content = document.querySelector("#content")
// let content = document.querySelector("#content")
// let content = document.querySelector("#content")
console.log(lamp)
lamp.addEventListener( "click",function () {
    if (content.style.display === "none") {
        content.style.display = "block"
        lamp.style.backgroungImage = "url('../imgs/lampon.png')"
    }
    else {
        content.style.display = "none"
        lamp.style.backgroungImage = "url('../imgs/lampoff.png')"
    }
    
})


ScrollReveal().reveal('body', { delay: 600 });
// ScrollReveal().reveal('.cards', { delay: 400 });
ScrollReveal().reveal('.img', { delay: 800 });
ScrollReveal().reveal('.description', { delay: 1200 });
ScrollReveal().reveal('.appear', { delay: 500 });
