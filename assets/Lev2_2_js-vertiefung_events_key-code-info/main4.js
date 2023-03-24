const P2 = document.querySelector('main div div:nth-of-type(1) p:nth-of-type(2)')
const P4 = document.querySelector('main div div:nth-of-type(2) p:nth-of-type(2)')
const P6 = document.querySelector('main div div:nth-of-type(3) p:nth-of-type(2)')

document.addEventListener("keydown", function (event) {
    console.log("pressed");
    P2.innerHTML = event.key;
    P4.innerHTML = event.keyCode;
    P6.innerHTML = event.code;

})