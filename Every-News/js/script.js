let html = document.querySelector("html");

let buttonLight = document.querySelector(".theme-button-light");
let buttonDark = document.querySelector(".theme-button-dark");

let buttonSansSerif = document.querySelector(".font-button-sans-serif");
let buttonSerif = document.querySelector(".font-button-serif");

let buttonSmall = document.querySelector(".font-size-button-s")
let buttonMedium = document.querySelector(".font-size-button-m")
let buttonLarge = document.querySelector(".font-size-button-l")

buttonLight.onclick = function(){
    html.removeAttribute("data-theme-name")
    buttonLight.classList.add("active")
    buttonDark.classList.remove("active")
}
buttonDark.onclick = function(){
    html.setAttribute("data-theme-name", "dark")
    buttonDark.classList.add("active")
    buttonLight.classList.remove("active")
}

buttonSansSerif.onclick = function(){
    html.removeAttribute("data-theme-font")
    buttonSerif.classList.remove("active")
    buttonSansSerif.classList.add("active")
}
buttonSerif.onclick = function(){
    html.setAttribute("data-theme-font", "serif")
    buttonSansSerif.classList.remove("active")
    buttonSerif.classList.add("active")
}

buttonSmall.onclick = function(){
    html.removeAttribute("data-theme-font-size")
    buttonSmall.classList.add("active")
    buttonMedium.classList.remove("active")
    buttonLarge.classList.remove("active")
}
buttonMedium.onclick = function(){
    html.setAttribute("data-theme-font-size", "medium")
    buttonMedium.classList.add("active")
    buttonSmall.classList.remove("active")
    buttonLarge.classList.remove("active")
}
buttonLarge.onclick = function(){
    html.setAttribute("data-theme-font-size", "large")
    buttonLarge.classList.add("active")
    buttonSmall.classList.remove("active")
    buttonMedium.classList.remove("active")
}
