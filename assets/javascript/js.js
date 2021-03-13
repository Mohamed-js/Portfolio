document.getElementById("toggler").addEventListener("click",function () {
    document.getElementById("menu").classList.remove("closed")
    document.getElementById("menu").classList.add("opened")
})

document.getElementById("menu-close").addEventListener("click",function () {
    document.getElementById("menu").classList.remove("opened")
    document.getElementById("menu").classList.add("closed")
})


