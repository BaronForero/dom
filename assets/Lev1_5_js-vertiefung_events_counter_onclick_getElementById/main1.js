
const button = document.getElementById("clickMe");


let clicks = 0;

clickMe = () => {
    clicks++
    button.innerHTML = "click me :" + clicks;
}



